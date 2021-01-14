import { Cell, CellType } from './grid'
import { Renderer } from './render'

export class Turret {
    cell: Cell
    x: number
    y: number
    health: number
    radius: 50
    cost: number

    constructor(cell: Cell, cellWidth: number) {
        this.cell = cell
        this.x = (this.cell.x + 0.5) * cellWidth
        this.y = (this.cell.y + 0.5) * cellWidth
        this.health = 100
    }

    update(): void { }

    render(ctx: CanvasRenderingContext2D): void {
        Renderer.circle(ctx, this.x, this.y, 10, { lineWidth: 2 })
    }
}
