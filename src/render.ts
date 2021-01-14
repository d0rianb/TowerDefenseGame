import { Point } from './path'

interface StyleObject {
    strokeStyle?: string,
    lineWidth?: number,
    lineJoin?: CanvasLineJoin,
    fillStyle?: string,
    transparency?: number
}

const defaultStyleObject: StyleObject = {
    strokeStyle: 'black',
    lineWidth: 4,
    lineJoin: 'round',
    fillStyle: 'black',
    transparency: 1
}

class Renderer {

    static style(ctx: CanvasRenderingContext2D, obj?: StyleObject): void {
        ctx.lineWidth = obj ? obj.lineWidth : defaultStyleObject.lineWidth
        ctx.strokeStyle = obj ? obj.strokeStyle : defaultStyleObject.strokeStyle
        ctx.lineJoin = obj ? obj.lineJoin : defaultStyleObject.lineJoin
        ctx.fillStyle = obj ? obj.fillStyle : defaultStyleObject.fillStyle
        ctx.globalAlpha = obj ? obj.transparency : defaultStyleObject.transparency
    }

    static line(ctx: CanvasRenderingContext2D, point1: Point, point2: Point, obj?: StyleObject): void {
        Renderer.style(ctx, obj)
        ctx.beginPath()
        ctx.moveTo(point1.x, point1.y)
        ctx.lineTo(point2.x, point2.y)
        ctx.stroke()
    }

    static rect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, obj?: StyleObject): void {
        Renderer.style(ctx, obj)
        ctx.fillRect(x, y, width, height)
        ctx.strokeRect(x, y, width, height)
    }

    static poly(ctx: CanvasRenderingContext2D, points: Array<Point>, obj?: StyleObject) {
        Renderer.style(ctx, obj)
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y)
        }
        ctx.stroke()
    }

    static circle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, obj?: StyleObject) {
        Renderer.style(ctx, obj)
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, 2 * Math.PI)
        ctx.stroke()
    }

    static point(ctx: CanvasRenderingContext2D, x: number, y: number, obj?: StyleObject) {
        Renderer.circle(ctx, x, y, 5, obj)
    }
}

export { Renderer }
