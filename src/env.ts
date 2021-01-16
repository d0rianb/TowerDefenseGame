import { Grid, Cell, CellType } from './grid'
import { Path, Point } from './path'
import { Renderer } from './render'
import { Turret, Shot } from './turret'
import { Enemy } from './enemy'
import * as color from '../ressources/color.json'

export class Env {
    grid: Grid
    canvas: HTMLCanvasElement
    width: number
    height: number
    cellWidth: number
    cellHeight: number
    turrets: Array<Turret>
    enemies: Array<Enemy>
    shots: Array<Shot>
    health: number
    path: Path

    constructor(grid: Grid, canvas: HTMLCanvasElement) {
        this.grid = grid
        this.canvas = canvas
        this.width = this.canvas.width
        this.height = this.canvas.height
        this.turrets = []
        this.enemies = []
        this.shots = []
        this.health = 1000 // hp
        this.cellWidth = this.width / this.grid.cols
        this.cellHeight = this.cellWidth
        this.path = undefined
    }

    setPath(path: Path): void {
        if (!this.path) {
            this.path = path
        } else {
            path.points.forEach(point => this.path.addPoint(point))
        }
    }

    spawnEnemy(): void {
        this.enemies.push(new Enemy(this, 100))
    }

    defineCellsType(): void {
        if (!this.path || this.path.points.length < 2) return
        let nodeIndex: number = 0
        const eps: number = 2
        let x = this.path.points[0].x
        let y = this.path.points[0].y
        for (let i = 0; i < 2000; i++) {
            const deltaX: number = this.path.points[nodeIndex + 1].x - this.path.points[nodeIndex].x
            const deltaY: number = this.path.points[nodeIndex + 1].y - this.path.points[nodeIndex].y
            const slope: number = Math.sqrt(deltaX ** 2 + deltaY ** 2)
            const angle: number = Math.atan2(deltaY, deltaX)
            x += slope * Math.cos(angle) * 0.04
            y += slope * Math.sin(angle) * 0.04
            const cell: Cell = this.getCell(x, y)
            if (cell) {
                cell.type = CellType.Road
            }
            if (Math.abs(x - this.path.points[nodeIndex + 1].x) < eps &&
                Math.abs(y - this.path.points[nodeIndex + 1].y) < eps) {
                if (nodeIndex + 1 < this.path.points.length - 1) { nodeIndex++ }
                else { break }
            }
        }
    }

    getCell(x: number, y: number): Cell {
        return (this.grid.cells as any).find(cell => {
            return x >= cell.x * this.cellWidth &&
                x < (cell.x + 1) * this.cellWidth * cell.width &&
                y >= cell.y * this.cellHeight &&
                y < (cell.y + 1) * this.cellHeight * cell.height
        })
    }

    detectCell(e: MouseEvent): Cell {
        const x = e.offsetX
        const y = e.offsetY
        return this.getCell(x, y)
    }

    handleMouseMove(e: MouseEvent): void {
        this.grid.cells.forEach(cell => cell.highlight = false)
        const cell: Cell = this.detectCell(e)
        if (cell) {
            cell.highlight = true
            this.grid.focusCell = cell
        }
    }
    handleKeyDown(e: KeyboardEvent): void {
        switch (e.code) {
            case 'Space':
                this.spawnEnemy()
                e.preventDefault()
        }
    }

    handleMouseClick(e: MouseEvent): void {
        const cell: Cell = this.detectCell(e)
        if (e.shiftKey && this.path) {
            this.path.addPoint(new Point(e.clientX, e.clientY))
            this.defineCellsType()
            return
        }
        if (cell && (cell.type === CellType.Empty || cell.type === CellType.Ground)) {
            cell.type = CellType.Turret
            this.turrets.push(new Turret(cell, this))
        }
    }

    update() {
        this.enemies.forEach(enemy => enemy.update())
        this.turrets.forEach(turret => turret.update())
        this.shots.forEach(shot => shot.update())
        this.enemies = this.enemies.filter(enemy => enemy.alive)
        this.render()
        window.requestAnimationFrame(() => this.update())
    }

    render() {
        const ctx: CanvasRenderingContext2D = this.canvas.getContext('2d')
        ctx.clearRect(0, 0, this.width, this.height)
        let fillColor: string = color.bg
        this.grid.cells.forEach(cell => {
            if (cell.type === CellType.Turret) {
                fillColor = color.turret
            } else if (cell.type === CellType.Road) {
                fillColor = color.road
            } else if (cell.type === CellType.Ground) {
                fillColor = color.ground
            } else {
                fillColor = color.bg
            }
            Renderer.rect(ctx, cell.x * this.cellWidth, cell.y * this.cellHeight, this.cellWidth * cell.width - .15, this.cellHeight * cell.height - .15, {
                transparency: 1,
                fillStyle: fillColor,
                strokeStyle: color.secondary,
                lineWidth: .5
            })
        })
        if (this.path) { this.path.render(ctx) }
        this.enemies.forEach(enemy => enemy.render(ctx))
        this.shots.forEach(shot => shot.render(ctx))
        this.turrets.forEach(turret => turret.render(ctx))

        const highlightCell: Cell = this.grid.cells.find(cell => cell.highlight)
        if (highlightCell) {
            Renderer.rect(ctx, highlightCell.x * this.cellWidth, highlightCell.y * this.cellHeight, this.cellWidth * highlightCell.width - .15, this.cellHeight * highlightCell.height - .15, {
                transparency: .25,
                strokeStyle: color.highlightTransparent,
                fillStyle: color.highlightTransparent,
                lineWidth: 0
            })
        }
    }
}
