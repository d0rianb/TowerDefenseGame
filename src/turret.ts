import { Cell, CellType } from './grid'
import { Point } from './path'
import { Env } from './env'
import { Enemy } from './enemy'
import { Renderer } from './render'

class Turret {
    cell: Cell
    env: Env
    pos: Point
    health: number
    radius: number
    target: Enemy
    canShoot: boolean
    fireRate: number

    constructor(cell: Cell, env: Env) {
        this.cell = cell
        this.env = env
        this.pos = new Point((this.cell.x + 0.5) * this.env.cellWidth, (this.cell.y + 0.5) * this.env.cellWidth)
        this.health = 100
        this.radius = 100
        this.target = undefined
        this.canShoot = true
        this.fireRate = 100 // each ms
    }

    update(): void {
        const targets: Array<Enemy> = this.env.enemies
            .sort((enemy1, enemy2) => this.pos.dist(enemy1.pos) - this.pos.dist(enemy2.pos))
            .filter(enemy => this.pos.dist(enemy.pos) < this.radius)
        if (targets.length) { this.target = targets[0] }
        else { this.target = undefined }
        if (this.target && this.canShoot) {
            // TODO: predict position
            this.env.shots.push(new Shot(<Point>{ ...this.pos }, Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x)))
            this.canShoot = false
            window.setTimeout(() => {
                this.canShoot = true
            }, this.fireRate)
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        Renderer.circle(ctx, this.pos.x, this.pos.y, 10, { lineWidth: 2, strokeStyle: 'black' })
        Renderer.circle(ctx, this.pos.x, this.pos.y, this.radius, { lineWidth: 1, transparency: .25, strokeStyle: 'white' })
    }
}

class Shot {
    pos: Point
    dir: number
    damage: number
    length: number
    speed: number

    constructor(pos: Point, dir: number) {
        this.pos = pos
        this.dir = dir
        this.damage = 10
        this.length = 10
        this.speed = 10
    }

    update() {
        this.pos.x += this.speed * Math.cos(this.dir)
        this.pos.y += this.speed * Math.sin(this.dir)
    }

    render(ctx: CanvasRenderingContext2D) {
        Renderer.line(ctx, this.pos, new Point(this.pos.x + this.length * Math.cos(this.dir), this.pos.y + this.length * Math.sin(this.dir)), { lineWidth: 2, strokeStyle: 'black' })
    }
}

export { Turret, Shot }
