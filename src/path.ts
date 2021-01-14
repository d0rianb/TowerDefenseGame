import { Renderer } from './render'

class Path {
    entry: Point
    points: Array<Point>
    end: Point

    constructor(points: Array<Point>) {
        this.entry = points[0] || null
        this.end = points[points.length - 1]
        this.points = points.sort((point1, point2) => this.entry.dist(point1) - this.entry.dist(point2))
    }

    addPoint(point: Point): void {
        if (!this.entry) this.entry = point
        this.points.push(point)
        this.recalculate()
    }

    recalculate(): void {
        this.end = this.points[this.points.length - 1]
    }

    render(ctx: CanvasRenderingContext2D): void {
        Renderer.poly(ctx, this.points, { lineWidth: 1 })
    }
}

class Point {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    dist(point: Point): number {
        return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2)
    }
}


export { Path, Point }
