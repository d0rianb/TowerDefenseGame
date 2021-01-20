import { saveAs } from 'file-saver';

import { Grid, Cell, CellType } from './grid'
import { Path, Point, Vector2 } from './path'
import { Renderer } from './render'
import { Turret, Shot } from './turret'
import { Enemy } from './enemy'
import { Interface } from './interface'
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
        this.cellWidth = Math.min(this.width / this.grid.rows, this.height / this.grid.cols)
        this.cellHeight = this.cellWidth
        this.path = undefined
    }

    loadMap(filename: string): void {
        fetch(`ressources/map/${filename.replace(/\.map/, '')}.map`)
            .then(data => data.json())
            .then(map => {
                const scaleFactor: Vector2 = {
                    x: this.canvas.width / map.screen.width,
                    y: this.canvas.height / map.screen.width,
                }
                const path: Path = Path.fromJSON(map.path, scaleFactor)
                this.setPath(path)
                this.path.toSVGPath()
            })
            .catch(err => console.error(err))
    }

    saveMap(filename: string): void {
        const name: string = filename.replace('.map', '')
        const mapObject: object = {
            'map-name': name,
            screen: { width: this.canvas.width, height: this.canvas.height },
            path: { points: this.path.points.map(point => [point.x, point.y]) }
        }
        const file = new Blob([JSON.stringify(mapObject)], { type: 'application/json' })
        saveAs(file, `${name}.map`)
    }

    setPath(path: Path): void {
        this.path = path
        this.path.recalculate()
        this.defineCellsType()
    }

    spawnEnemy(): void {
        this.enemies.push(new Enemy(this, 100))
    }

    defineCellsType(): void {
        this.grid.cells.forEach(cell => cell.type = CellType.Ground)
        if (this.path.points.length) {
            let percent: number = 0
            const deltaPercent: number = this.cellWidth / 2 / this.path.length * 100
            while (percent <= 100) {
                const { x, y } = this.path.pointAt(percent)
                const cell: Cell = this.getCell(x, y)
                if (cell) {
                    cell.type = CellType.Road
                }
                percent += deltaPercent
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
        const x = e.clientX
        const y = e.clientY
        return this.getCell(x, y)
    }

    handleMouseMove(e: MouseEvent): void {
        this.grid.cells.forEach(cell => cell.highlight = false)
        const cell: Cell = this.detectCell(e)
        if (cell) {
            cell.highlight = true
            if (cell.type == CellType.Turret) {
                const turret: Turret = this.turrets.find(turret => turret.cell === cell)
                this.displayStats(e, turret)
            } else {
                this.hideStats()
            }
        }
    }

    handleKeyDown(e: KeyboardEvent): void {
        switch (e.code) {
            case 'Space':
                this.spawnEnemy()
                e.preventDefault()
                break
            case 'Enter':
                this.saveMap('test2.map')
                e.preventDefault()
                break
            case 'Backspace':
                this.setPath(new Path([]))
                e.preventDefault()
                break
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
        if (cell && cell.type == CellType.Turret) {
            this.grid.focusCell = cell
        } else {
            this.grid.focusCell = null
        }
    }

    displayStats(e: MouseEvent, turret: Turret): void {
        const { x, y } = e
        const statsPannel: HTMLElement = document.querySelector('.floating-stats')
        statsPannel.style.left = `${x + 10}px`
        statsPannel.style.top = `${y + 10}px`
        Interface.turretHoverStats = turret.getStats()
    }

    hideStats(): void {
        Interface.turretHoverStats = undefined
    }

    updateControlPannel(): void {
        const controlPannel: HTMLElement = document.querySelector('.control-pannel')
        const controlPannelCanvas: HTMLCanvasElement = document.querySelector('#turret-viewer')
        const controlPannelStats: HTMLElement = document.querySelector('.control-pannel .turret-stats')

        if (this.grid.focusCell) {
            const controlPannelCanvasCtx: CanvasRenderingContext2D = controlPannelCanvas.getContext('2d')
            controlPannelCanvasCtx.clearRect(0, 0, 120, 120)
            const turret: Turret = this.turrets.find(turret => turret.cell === this.grid.focusCell)
            turret.render(controlPannelCanvasCtx, true)
            Interface.turretStats = turret.getStats()
        } else {
            Interface.turretStats = null
        }
    }

    update() {
        this.enemies.forEach(enemy => enemy.update())
        this.turrets.forEach(turret => turret.update())
        this.shots.forEach(shot => shot.update())
        this.enemies = this.enemies.filter(enemy => enemy.alive)
        this.updateControlPannel()
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
            Renderer.rect(ctx, highlightCell.x * this.cellWidth, highlightCell.y * this.cellHeight, this.cellWidth - .15, this.cellHeight - .15, {
                transparency: .25,
                strokeStyle: color.highlightTransparent,
                fillStyle: color.highlightTransparent,
                lineWidth: 0
            })
        }
        const focusCell: Cell = this.grid.focusCell
        if (focusCell) {
            Renderer.rect(ctx, focusCell.x * this.cellWidth, focusCell.y * this.cellWidth, this.cellWidth, this.cellWidth, {
                transparency: 1,
                strokeStyle: color.highlight,
                fillStyle: 'transparent',
                lineWidth: 2.5
            })
        }
    }
}
