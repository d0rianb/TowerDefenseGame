import { saveAs } from 'file-saver';
import { OffscreenRenderer, Renderer, Point, Vector2, GameEnvironement, getWindowDimensions, getCanvasDimensions } from 'unrail-engine'

import { Grid, Cell, CellType } from './grid'
import { Path } from './path'
import { Turret, Shot } from './turret'
import { Enemy, EnemyGenerator } from './enemy'
import { Interface } from './interface'

import * as color from '../ressources/color.json'

export class Env extends GameEnvironement {
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
        super(getWindowDimensions().width, getWindowDimensions().height)
        this.grid = grid
        this.canvas = canvas
        this.width = getCanvasDimensions(this.canvas).width
        this.height = getCanvasDimensions(this.canvas).height
        this.turrets = []
        this.enemies = []
        this.enemyGenerator = new EnemyGenerator(this)
        this.shots = []
        this.health = 1000 // hp
        this.cellWidth = Math.max(this.width / this.grid.rows, this.height / this.grid.cols)
        this.cellHeight = this.cellWidth
        this.path = undefined
        this.money = 200
        this.timestamp = performance.now()
        this.paused = false
    }

    start(): void {
        this.enemyGenerator.start()
        Interface.pauseFunction = () => this.togglePause()
    }

    loadMap(filename: string): void {
        fetch(`ressources/map/${filename.replace(/\.map/, '')}.map`)
            .then(data => data.json())
            .then(map => {
                const scaleFactor: Vector2 = new Vector2(
                    this.width / map.screen.width,
                    this.height / map.screen.width,
                )
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
        this.enemyGenerator.spawnOnce()
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
            const turret: Turret = this.turrets.find(turret => turret.cell === this.grid.focusCell)
            if (turret) {
                Renderer.setContext(controlPannelCanvasCtx)
                Renderer.beginFrame()
                turret.render(true)
                Renderer.endFrame()
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
        if (this.paused) return
        this.timestamp = performance.now()
        this.enemies.forEach(enemy => enemy.update())
        this.turrets.forEach(turret => turret.update())
        this.shots.forEach(shot => shot.update())
        this.enemies = this.enemies.filter(enemy => enemy.alive)
        this.manageShots()
        this.updateInterface()
        this.render()
    }

    render() {
        OffscreenRenderer.beginFrame()
        const roadCells: Array<Cell> = this.grid.cells.filter(cell => cell.type === CellType.Road)
        OffscreenRenderer.clear(color.ground)
        roadCells.forEach(cell => OffscreenRenderer.rect(cell.x * this.cellWidth, cell.y * this.cellHeight, this.cellWidth * cell.width, this.cellHeight * cell.height, { fillStyle: color.road, strokeStyle: color.road, lineWidth: .5 }))

        for (let i = 0; i < Math.max(this.grid.rows, this.grid.cols); i++) {
            OffscreenRenderer.line(i * this.cellWidth, 0, i * this.cellWidth, this.canvas.height, { lineWidth: .5, strokeStyle: color.secondary, })
            OffscreenRenderer.line(0, i * this.cellWidth, this.canvas.width, i * this.cellWidth, { lineWidth: .5, strokeStyle: color.secondary, })
        }

        // if (this.path) { this.path.render() }
        this.turrets.forEach(turret => turret.render())
        this.enemies.forEach(enemy => enemy.render())
        this.shots.forEach(shot => shot.render())

        const highlightCell: Cell = this.grid.cells.find(cell => cell.highlight)
        if (highlightCell) {
            OffscreenRenderer.rect(highlightCell.x * this.cellWidth, highlightCell.y * this.cellHeight, this.cellWidth, this.cellHeight, {
                globalAlpha: .25,
                strokeStyle: color.highlightTransparent,
                fillStyle: color.highlightTransparent,
                lineWidth: 0
            })
        }
        const focusCell: Cell = this.grid.focusCell
        if (focusCell) {
            OffscreenRenderer.rect(focusCell.x * this.cellWidth, focusCell.y * this.cellWidth, this.cellWidth, this.cellWidth, {
                globalAlpha: 1,
                strokeStyle: color.highlight,
                fillStyle: 'transparent',
                lineWidth: 2.5
            })
        }
        OffscreenRenderer.endFrame()
    }
}
