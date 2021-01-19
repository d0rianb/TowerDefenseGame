import { Path, Point } from './path'
import { Renderer } from './render'
import { Env } from './env'

export class Enemy {
    env: Env
    path: Path
    pos: Point
    nodeIndex: number
    radius: number
    speed: number
    percent: number
    angle: number
    health: number
    alive: boolean


    constructor(env: Env, health: number) {
        this.env = env
        this.path = this.env.path
        this.nodeIndex = 0
        this.pos = new Point(this.path.entry.x, this.path.entry.y)
        this.radius = 10
        this.speed = 5
        this.health = health
        this.alive = true
        this.percent = 0
        this.angle = 0
    }

    move(): void {
        const pos = this.nextPos()
        this.pos.x = pos.x
        this.pos.y = pos.y
        this.percent += this.path.length * this.speed * 1e-5

        let posBefore = this.path.pointAt(this.percent - 1)
        let posAfter = this.path.pointAt(this.percent + 1)
        this.angle = Math.atan2(posAfter.y - posBefore.y, posAfter.x - posBefore.x) * 180 / Math.PI
    }

    nextPos(iteration: number = 1) {
        let nextPercent = this.path.length * this.speed * 1e-5 * iteration
        return this.path.pointAt(this.percent + nextPercent)
    }

    checkHit(): boolean {
        this.env.shots.forEach(shot => {
            if (this.pos.dist(shot.pos) < this.radius) {
                this.health -= shot.damage
                this.env.shots = this.env.shots.filter(envShot => envShot !== shot)
                if (this.health <= 0) {
                    this.alive = false
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
