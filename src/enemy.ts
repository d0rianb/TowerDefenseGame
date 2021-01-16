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
    health: number
    alive: boolean

    constructor(env: Env, health: number) {
        this.env = env
        this.path = this.env.path
        this.nodeIndex = 0
        this.pos = new Point(this.path.entry.x, this.path.entry.y)
        this.radius = 10
        this.speed = .01
        this.health = health
        this.alive = true
    }

    move(): void {
        const eps = 2
        const deltaX: number = this.path.points[this.nodeIndex + 1].x - this.path.points[this.nodeIndex].x
        const deltaY: number = this.path.points[this.nodeIndex + 1].y - this.path.points[this.nodeIndex].y
        const slope: number = Math.sqrt(deltaX ** 2 + deltaY ** 2)
        const angle: number = Math.atan2(deltaY, deltaX)
        this.pos.x += this.speed * slope * Math.cos(angle)
        this.pos.y += this.speed * slope * Math.sin(angle)
        if (Math.abs(this.pos.x - this.path.points[this.nodeIndex + 1].x) < eps &&
            Math.abs(this.pos.y - this.path.points[this.nodeIndex + 1].y) < eps &&
            this.nodeIndex + 1 < this.path.points.length - 1) {
            this.nodeIndex++
        }
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
