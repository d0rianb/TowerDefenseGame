import { Cell, CellType } from './grid'
import { Point } from './path'
import { Env } from './env'
import { Enemy } from './enemy'
import { Renderer } from './render'

import { TURRET_BASE_TEXTURE, TURRET_HEAD_TEXTURE } from './texture'

class Turret {
    cell: Cell
    env: Env
    origin: Point
    pos: Point
    health: number
    radius: number
    target: Enemy
    damage: number
    canShoot: boolean
    dir: number
    fireRate: number

    constructor(cell: Cell, env: Env) {
        this.cell = cell
        this.env = env
        this.origin = new Point(this.cell.x * this.env.cellWidth, this.cell.y * this.env.cellWidth)
        this.pos = new Point((this.cell.x + 0.5) * this.env.cellWidth, (this.cell.y + 0.5) * this.env.cellWidth)
        this.health = 100
        this.radius = 100
        this.damage = 10
        this.target = undefined
        this.canShoot = true
        this.dir = -Math.PI / 2
        this.fireRate = 100 // each ms
    }

    shoot(): void {
        // TODO: predict position
        this.env.shots.push(new Shot(<Point>{ ...this.pos }, this.dir, this.damage))
        this.canShoot = false
        window.setTimeout(() => {
            this.canShoot = true
        }, this.fireRate)
    }

    update(): void {
        if (!this.target || this.pos.dist(this.target.pos) > this.radius || !this.target.alive) {
            const targets: Array<Enemy> = this.env.enemies
                .sort((enemy1, enemy2) => this.pos.dist(enemy1.pos) - this.pos.dist(enemy2.pos))
                .filter(enemy => this.pos.dist(enemy.pos) < this.radius)
            if (targets.length) { this.target = targets[0] }
            else { this.target = undefined }
        }

        if (this.target) {
            const predictTargetPos = this.target.nextPos(3)
            this.dir = Math.atan2(predictTargetPos.y - this.pos.y, predictTargetPos.x - this.pos.x)
            if (this.canShoot) {
                this.shoot()
            }
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        TURRET_HEAD_TEXTURE.rotation = this.dir + Math.PI / 2
        Renderer.rectSprite(ctx, this.origin.x, this.origin.y, this.env.cellWidth, this.env.cellWidth, TURRET_BASE_TEXTURE)
        Renderer.rectSprite(ctx, this.origin.x, this.origin.y, this.env.cellWidth, this.env.cellWidth, TURRET_HEAD_TEXTURE)
        // Renderer.circle(ctx, this.pos.x, this.pos.y, 10, { lineWidth: 2, strokeStyle: 'black' })
        Renderer.circle(ctx, this.pos.x, this.pos.y, this.radius, { lineWidth: 1, transparency: .25, strokeStyle: 'white' })
    }
}

class Shot {
    pos: Point
    dir: number
    damage: number
    length: number
    speed: number

    constructor(pos: Point, dir: number, damage: number = 10) {
        this.pos = pos
        this.dir = dir
        this.damage = damage
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
