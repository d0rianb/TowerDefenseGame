import { Env } from './env'
import { Grid, Cell } from './grid'
import { Path, Point } from './path'

function createCanvas(w: number, h: number): HTMLCanvasElement {
    const ratio: number = window.devicePixelRatio || 1
    const canvas: HTMLCanvasElement = document.createElement('canvas')
    canvas.width = w * ratio
    canvas.height = h * ratio
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'
    canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0)
    canvas.oncontextmenu = e => e.preventDefault() // No right click
    return canvas
}

const loadingScreen: HTMLElement = document.querySelector('.loading-screen')
const progressBar: HTMLProgressElement = document.querySelector('.loading-screen progress')


const canvas: HTMLCanvasElement = createCanvas(window.innerWidth, window.innerHeight)
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')
progressBar.value += 10

document.querySelector('main').appendChild(canvas)
progressBar.value += 10

const grid: Grid = new Grid(50, 50)
const env: Env = new Env(grid, canvas)
progressBar.value += 10

const entryPoint: Point = new Point(0, 0)
const path: Path = new Path([entryPoint])
// env.setPath(path)


// Load Map
env.loadMap('test3.map')
progressBar.value += 10
loadingScreen.style.display = 'none'



window.addEventListener('keydown', e => env.handleKeyDown(e))
window.addEventListener('mousemove', e => env.handleMouseMove(e))
window.addEventListener('click', e => env.handleMouseClick(e))


env.update()
