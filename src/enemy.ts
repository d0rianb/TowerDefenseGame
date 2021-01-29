import { Path, Point } from './path'
import { Renderer } from './render'
import { Interface } from './interface'
import { Env } from './env'

import { ENEMY_TEXTURE } from './texture'
import { default as enemiesType } from '../ressources/enemyType.json'

interface EnemyType {
    id: number
    name: string
    radius: number
    health: number
    speed: number
    money: number
}

interface MovementObject {
    speed: number
    duration: number
    startTime: number
}

class Enemy {
    env: Env
    path: Path
    pos: Point
    nodeIndex: number
    radius: number
    speed: number
    percent: number
    angle: number
    health: number
    money: number
    alive: boolean

    constructor(env: Env, enemyObj: EnemyType) {
        this.env = env
        this.path = this.env.path
        this.nodeIndex = 0
        this.pos = new Point(this.path.entry.x, this.path.entry.y)
        this.radius = enemyObj.radius
        this.speed = enemyObj.speed // m/s
        this.health = enemyObj.health
        this.money = enemyObj.money
        this.alive = true
        this.percent = 0
        this.angle = 0
    }

    move(): void {
        const nextPos = this.nextPos()
        if (this.percent  > 99.9) {
            return this.env.hasReachEnd(this)
        }
        this.pos.x = nextPos.x
        this.pos.y = nextPos.y
        this.percent += this.speed/this.path.length

        // Angle calculation
        const posBefore = this.path.pointAt(this.percent - 1)
        const posAfter = this.path.pointAt(this.percent + 1)
        this.angle = -Math.PI/2 + Math.atan2(posAfter.y - posBefore.y, posAfter.x - posBefore.x)
    }

    nextPos(iteration: number = 1) {
        const nextPercent: number = this.percent + (this.speed/this.path.length) * (iteration - 1)
        return this.path.pointAt(nextPercent)
    }

    checkHit(): boolean {
        this.env.shots.forEach(shot => {
            if (this.pos.dist(shot.pos) < this.radius) {
                this.health -= shot.damage
                shot.turret.damageDone += shot.damage
                this.env.shots = this.env.shots.filter(envShot => envShot !== shot)
                if (this.health <= 0) {
                    this.alive = false
                    shot.turret.kills += 1
                    this.env.onKill(this)
                }
                return true
            }
        })
        return false
    }

    update(): void {
        this.move()
        this.checkHit()
    }

    render(ctx: CanvasRenderingContext2D): void {
        ENEMY_TEXTURE.rotation = this.angle + Math.PI / 2
        Renderer.circleSprite(ctx, this.pos.x, this.pos.y, this.radius, ENEMY_TEXTURE)
        // Renderer.circle(ctx, this.pos.x, this.pos.y, this.radius, { strokeStyle: 'red', lineWidth: 2 })
    }
}

class EnemyGenerator {
    env: Env
    spawnRate: number //s
    amount: number
    interval: number
    count: number
    wave: number

    constructor(env: Env, spawnRate: number = 2000, amount: number = 1) {
        this.env = env
        this.spawnRate = spawnRate
        this.amount = amount
        this.interval = undefined
        this.count = 0
        this.wave = 0
    }

    start(): void {
        this.stop()
        this.spawn()
        this.interval = window.setInterval(() => this.spawn(), this.spawnRate)
    }

    stop(): void {
        if (this.interval) {
            window.clearInterval(this.interval)
            this.interval = undefined
        }
    }

    spawn(): void {
        if (!this.env.path || this.env.paused) return
        const enemyType: EnemyType = enemiesType.enemies[this.wave % (enemiesType.enemies.length - 1)]
        enemyType.health += this.count * 2
        this.env.enemies.push(new Enemy(this.env, enemyType))
        this.count++
        if (this.count % 10 === 0) {
            this.wave++
            Interface.wave = this.wave
            this.spawnRate = Math.max(this.spawnRate - 250, 100)
            this.stop()
            window.setTimeout(() => this.start(), 3000)
        }
    }

}

export { Enemy, EnemyGenerator }
