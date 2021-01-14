import { Env } from './env'
import { Grid, Cell } from './grid'
import { Path, Point } from './path'

function createCanvas(w: number, h: number): HTMLCanvasElement {
    const ratio: number = window.devicePixelRatio
    const canvas: HTMLCanvasElement = document.createElement('canvas')
    canvas.width = w * ratio
    canvas.height = h * ratio
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'
    canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0)
    canvas.oncontextmenu = e => e.preventDefault()
    return canvas
}

const canvas: HTMLCanvasElement = createCanvas(window.innerWidth, window.innerHeight)
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')

document.querySelector('main').appendChild(canvas)

const grid: Grid = new Grid(50, 50)
const env: Env = new Env(grid, canvas)

const entryPoint: Point = new Point(0, 0)
const path: Path = new Path([entryPoint])

env.setPath(path)

window.addEventListener('keydown', e => env.handleKeyDown(e))
window.addEventListener('mousemove', e => env.handleMouseMove(e))
window.addEventListener('click', e => env.handleMouseClick(e))


env.update()
