import { saveAs } from 'file-saver';
import Stats from 'stats.js'

import { Grid, Cell, CellType } from './grid'
import { Path, Point, Vector2 } from './path'
import { Renderer } from './render'
import { Turret, Shot } from './turret'
import { Enemy, EnemyGenerator } from './enemy'
import { Interface } from './interface'
import * as color from '../ressources/color.json'

const stats = new Stats()
stats.showPanel(0)
document.querySelector('.fps').appendChild(stats.dom)

export class Env {
    grid: Grid
    canvas: HTMLCanvasElement
    width: number
    height: number
    cellWidth: number
    cellHeight: number
    turrets: Array<Turret>
    enemies: Array<Enemy>
    enemyGenerator: EnemyGenerator
    shots: Array<Shot>
    health: number
    path: Path
    money: number
    timestamp: number
    paused: boolean

    constructor(grid: Grid, canvas: HTMLCanvasElement) {
        this.grid = grid
        this.canvas = canvas
        this.width = this.canvas.width / window.devicePixelRatio
        this.height = this.canvas.height / window.devicePixelRatio
        this.turrets = []
        this.enemies = []
        this.enemyGenerator = new EnemyGenerator(this)
        this.shots = []
        this.health = 1000 // hp
        this.cellWidth = Math.min(this.canvas.width / this.grid.rows, this.canvas.height / this.grid.cols)
        this.cellHeight = this.cellWidth
        this.path = undefined
        this.money = 200
        this.timestamp = performance.now()
        this.paused = false
    }

    start(): void {
        // this.enemyGenerator.start()
        Interface.pauseFunction = () => this.togglePause()
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
        this.enemyGenerator.spawn()
    }

    hasReachEnd(enemy: Enemy): void {
        this.enemies = this.enemies.filter(e => e != enemy)
    }

    onKill(enemy: Enemy): void {
        this.money += enemy.money
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
        if (e.target !== this.canvas) return
        this.grid.cells.forEach(cell => cell.highlight = false)
        const cell: Cell = this.detectCell(e)
        if (cell) {
            cell.highlight = true
            if (cell.type == CellType.Turret) {
                const turret: Turret = this.turrets.find(turret => turret.cell === cell)
                this.displayHoverStats(e, turret)
            } else {
                this.hideHoverStats()
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
        if (e.target !== this.canvas) return
        const cell: Cell = this.detectCell(e)
        if (e.shiftKey && this.path) {
            this.path.addPoint(new Point(e.clientX, e.clientY))
            this.defineCellsType()
            return
        }
        if (cell && (cell.type === CellType.Empty || cell.type === CellType.Ground)) {
            const turret = new Turret(this.turrets.length, cell, this)
            if (turret.build()) {
                cell.type = CellType.Turret
            }
        }
        if (cell && cell.type == CellType.Turret) {
            this.grid.focusCell = cell
        } else {
            this.grid.focusCell = null
        }
    }

    displayHoverStats(e: MouseEvent, turret: Turret): void {
        const { x, y } = e
        const statsPannel: HTMLElement = document.querySelector('.floating-stats')
        if (statsPannel) {
            statsPannel.style.left = `${x + 10}px`
            statsPannel.style.top = `${y + 10}px`
            Interface.turretHoverObject = turret.serialize()
        }
    }

    manageShots(): void {
        this.shots = this.shots.filter(shot => {
            return shot.pos.x >= -shot.length && shot.pos.x <= this.width + shot.length
                && shot.pos.y >= -shot.length && shot.pos.y <= this.height + shot.length
        })
    }

    hideHoverStats(): void {
        Interface.turretHoverObject = undefined
    }

    updateInterface(): void {
        const controlPannelCanvas: HTMLCanvasElement = document.querySelector('#turret-viewer')

        Interface.money = this.money

        if (this.grid.focusCell && controlPannelCanvas) {
            const controlPannelCanvasCtx: CanvasRenderingContext2D = controlPannelCanvas.getContext('2d')
            controlPannelCanvasCtx.clearRect(0, 0, 120, 120)
            const turret: Turret = this.turrets.find(turret => turret.cell === this.grid.focusCell)
            if (turret) {
                turret.render(controlPannelCanvasCtx, true)
                Interface.turretObject = turret.serialize()
            }
        } else {
            Interface.turretObject = null
        }
    }

    togglePause(): void {
        this.paused = !this.paused
    }

    update() {
        if (this.paused) return window.requestAnimationFrame(() => this.update())
        stats.begin()
        this.timestamp = performance.now()
        this.enemies.forEach(enemy => enemy.update())
        this.turrets.forEach(turret => turret.update())
        this.shots.forEach(shot => shot.update())
        this.enemies = this.enemies.filter(enemy => enemy.alive)
        this.manageShots()
        this.updateInterface()
        this.render()
        stats.end()
        window.requestAnimationFrame(() => this.update())
    }

    render() {
        const ctx: CanvasRenderingContext2D = this.canvas.getContext('2d')
        const roadCells: Array<Cell> = this.grid.cells.filter(cell => cell.type === CellType.Road)

        Renderer.clear(ctx, color.ground)
        Renderer.style(ctx, { fillStyle: color.road, strokeStyle: color.secondary, lineWidth: .5 })
        roadCells.forEach((cell, i) => Renderer.rect(ctx, cell.x * this.cellWidth, cell.y * this.cellHeight, this.cellWidth * cell.width - .15, this.cellHeight * cell.height - .15, {}, true))

        for (let i = 0; i < Math.max(this.grid.rows, this.grid.cols); i++) {
            Renderer.line(ctx, new Point(i * this.cellWidth, 0), new Point(i * this.cellWidth, this.canvas.height), { lineWidth: .5, strokeStyle: color.secondary, })
            Renderer.line(ctx, new Point(0, i * this.cellWidth), new Point(this.canvas.width, i * this.cellWidth), { lineWidth: .5, strokeStyle: color.secondary, })
        }

        // if (this.path) { this.path.render(ctx) }
        this.enemies.forEach(enemy => enemy.render(ctx))
        this.shots.forEach(shot => shot.render(ctx))
        this.turrets.forEach(turret => turret.render(ctx))

        const highlightCell: Cell = this.grid.cells.find(cell => cell.highlight)
        if (highlightCell) {
            Renderer.rect(ctx, highlightCell.x * this.cellWidth, highlightCell.y * this.cellHeight, this.cellWidth - .15, this.cellHeight - .15, {
                globalAlpha: .25,
                strokeStyle: color.highlightTransparent,
                fillStyle: color.highlightTransparent,
                lineWidth: 0
            })
        }
        const focusCell: Cell = this.grid.focusCell
        if (focusCell) {
            Renderer.rect(ctx, focusCell.x * this.cellWidth, focusCell.y * this.cellWidth, this.cellWidth, this.cellWidth, {
                globalAlpha: 1,
                strokeStyle: color.highlight,
                fillStyle: 'transparent',
                lineWidth: 2.5
            })
        }
    }
}
