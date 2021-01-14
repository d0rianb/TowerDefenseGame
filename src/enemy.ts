import { Path, Point } from './path'
import { Renderer } from './render'

export class Enemy {
    path: Path
    x: number
    y: number
    nodeIndex: number
    radius: number
    speed: number
    health: number

    constructor(path, health: number) {
        this.path = path
        this.nodeIndex = 0
        this.x = path.entry.x
        this.y = path.entry.y
        this.radius = 10
        this.speed = .01
        this.health = health
    }

    move(): void {
        const eps = 2
        const deltaX: number = this.path.points[this.nodeIndex + 1].x - this.path.points[this.nodeIndex].x
        const deltaY: number = this.path.points[this.nodeIndex + 1].y - this.path.points[this.nodeIndex].y
        const slope: number = Math.sqrt(deltaX ** 2 + deltaY ** 2)
        const angle: number = Math.atan2(deltaY, deltaX)
        this.x += this.speed * slope * Math.cos(angle)
        this.y += this.speed * slope * Math.sin(angle)
        if (Math.abs(this.x - this.path.points[this.nodeIndex + 1].x) < eps &&
            Math.abs(this.y - this.path.points[this.nodeIndex + 1].y) < eps &&
            this.nodeIndex + 1 < this.path.points.length - 1) {
            this.nodeIndex++
        }
    }

    update(): void {
        this.move()
    }

    render(ctx: CanvasRenderingContext2D): void {
        Renderer.circle(ctx, this.x, this.y, this.radius)
    }
}
