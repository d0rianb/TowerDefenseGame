import { Path, Point } from './path'
import { Renderer } from './render'
import { Env } from './env'

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
    movement: MovementObject
    percent: number
    angle: number
    health: number
    money: number
    alive: boolean

    constructor(env: Env, health: number) {
        this.env = env
        this.path = this.env.path
        this.nodeIndex = 0
        this.pos = new Point(this.path.entry.x, this.path.entry.y)
        this.radius = 10
        this.movement = {
            speed: 120, // m/s
            duration: null,
            startTime: Date.now()
        }
        this.health = health
        this.alive = true
        this.money = 25
        this.percent = 0
        this.angle = 0
    }

    move(): void {
        if (!this.movement.duration) { this.movement.duration = this.path.length / this.movement.speed }
        const nextPos = this.nextPos()
        if (this.pos.x === nextPos.x && this.pos.y === nextPos.y) {
            return this.env.hasReachEnd(this)
        }
        this.pos.x = nextPos.x
        this.pos.y = nextPos.y
        this.percent += (Date.now() - this.movement.startTime) / this.movement.duration / 10

        // Angle calculation
        const posBefore = this.path.pointAt(this.percent - 1)
        const posAfter = this.path.pointAt(this.percent + 1)
        this.angle = Math.atan2(posAfter.y - posBefore.y, posAfter.x - posBefore.x) * 180 / Math.PI
    }

    nextPos(iteration: number = 1) {
        let nextPercent: number = (Date.now() + (iteration - 1) * 60 - this.movement.startTime) / this.movement.duration / 10
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
        Renderer.circle(ctx, this.pos.x, this.pos.y, this.radius, { strokeStyle: 'red', lineWidth: 2 })
    }
}

class EnemyGenerator {
    env: Env
    spawnRate: number //s
    amount: number
    interval: number
    count: number

    constructor(env: Env, spawnRate: number = 1000, amount: number = 1) {
        this.env = env
        this.spawnRate = spawnRate
        this.amount = amount
        this.interval = undefined
        this.count = 0
    }

    start(): void {
        this.stop()
        this.interval = window.setInterval(() => this.spawn(), this.spawnRate)
    }

    stop(): void {
        if (this.interval) {
            window.clearInterval(this.interval)
            this.interval = undefined
        }
    }

    spawn(): void {
        if (!this.env.path) return
        this.env.enemies.push(new Enemy(this.env, 100 + 5 * this.count))
        this.count++
        if (this.count % 6 == 0) {
            this.spawnRate = Math.max(this.spawnRate - 50, 100)
            console.log('increase Spawn rate to ', this.spawnRate)
            this.start()
        }
    }

}

export { Enemy, EnemyGenerator }
