import { Cell, CellType } from './grid'
import { Point } from './path'
import { Env } from './env'
import { Enemy } from './enemy'
import { Renderer } from './render'
import { Interface } from './interface'

import { TURRET_BASE_TEXTURE, TURRET_HEAD_TEXTURE } from './texture'

interface SerializeObject {
    id: number
    health: number
    level: number
    radius: number
    damage: number
    fireRate: number
    cost: number
    kills: number
    damageDone: number
    upgradeCost: number
    upgrade: Function
    delete: Function
}

class Turret {
    id: number
    cell: Cell
    env: Env
    level: number
    origin: Point
    pos: Point
    health: number
    radius: number
    target: Enemy
    damage: number
    canShoot: boolean
    dir: number
    fireRate: number
    upgradeCost: number
    cost: number
    kills: number
    damageDone: number

    constructor(id: number, cell: Cell, env: Env) {
        this.id = id
        this.cell = cell
        this.env = env
        this.level = 1
        this.origin = new Point(this.cell.x * this.env.cellWidth, this.cell.y * this.env.cellWidth)
        this.pos = new Point((this.cell.x + 0.5) * this.env.cellWidth, (this.cell.y + 0.5) * this.env.cellWidth)
        this.health = 100
        this.radius = 100
        this.damage = 10
        this.target = undefined
        this.canShoot = true
        this.dir = -Math.PI / 2
        this.fireRate = 5 // each s
        this.upgradeCost = 25
        this.cost = 125
        this.kills = 0
        this.damageDone = 0
    }

    build(): boolean {
        if (this.env.money >= this.cost) {
            this.env.turrets.push(this)
            this.env.money -= this.cost
            return true
        }
        Interface.blinkCostRed()
        return false
    }

    upgrade(): boolean {
        if (this.env.money < this.upgradeCost) {
            Interface.blinkCostRed()
            return false
        }
        this.env.money -= this.upgradeCost
        this.level++
        this.upgradeCost += 25
        this.fireRate += .5
        this.damage += 1.5
        this.radius += 5
        this.health += 25
        return true
    }

    delete(): void {
        this.env.turrets = this.env.turrets.filter(turret => turret !== this)
        this.env.money += ~~(this.cost / 2)
    }

    shoot(): void {
        this.env.shots.push(new Shot(this, <Point>{ ...this.pos }, this.dir, this.damage))
        this.canShoot = false
        window.setTimeout(() => {
            this.canShoot = true
        }, 1000 / this.fireRate)
    }

    serialize(): SerializeObject {
        return {
            id: this.id,
            level: this.level,
            health: this.health,
            radius: this.radius,
            damage: this.damage,
            fireRate: this.fireRate,
            cost: this.cost,
            kills: this.kills,
            damageDone: this.damageDone,
            upgradeCost: this.upgradeCost,
            upgrade: () => this.upgrade(),
            delete: () => this.delete()
        }
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

    render(ctx: CanvasRenderingContext2D, preview: boolean = false): void {
        TURRET_HEAD_TEXTURE.rotation = this.dir + Math.PI / 2
        if (preview) {
            Renderer.rectSprite(ctx, 20, 20, 80, 80, TURRET_BASE_TEXTURE)
            Renderer.rectSprite(ctx, 20, 20, 80, 80, TURRET_HEAD_TEXTURE)
        } else {
            Renderer.rectSprite(ctx, this.origin.x, this.origin.y, this.env.cellWidth, this.env.cellWidth, TURRET_BASE_TEXTURE)
            Renderer.rectSprite(ctx, this.origin.x, this.origin.y, this.env.cellWidth, this.env.cellWidth, TURRET_HEAD_TEXTURE)
            Renderer.circle(ctx, this.pos.x, this.pos.y, this.radius, { lineWidth: 1, transparency: .25, strokeStyle: 'white' })
        }
    }
}

class Shot {
    turret: Turret
    pos: Point
    dir: number
    damage: number
    length: number
    speed: number

    constructor(turret: Turret, pos: Point, dir: number, damage: number = 10) {
        this.turret = turret
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
        Renderer.line(ctx, this.pos, new Point(this.pos.x + this.length * Math.cos(this.dir), this.pos.y + this.length * Math.sin(this.dir)), { lineWidth: 2.5, strokeStyle: 'rgb(230, 118, 14)' })
    }
}

export { Turret, Shot }
