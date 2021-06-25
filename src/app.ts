import { Env } from './env'
import { Grid, Cell } from './grid'
import { Path } from './path'

import { OffscreenRenderer as Renderer, Point, Game } from 'unrail-engine'

const canvas: HTMLCanvasElement = Renderer.create()

const grid: Grid = new Grid(40, 40)
const env: Env = new Env(grid, canvas)

const entryPoint: Point = new Point(0, 0)
const path: Path = new Path([entryPoint])
// env.setPath(path)

const game = new Game('Tower Defense', env)
env.loadMap('test3.map')
env.start()
game.setMainLoop(() => env.update())
game.start();

(window as any).env = env // Hack

window.addEventListener('keydown', e => env.handleKeyDown(e))
window.addEventListener('mousemove', e => env.handleMouseMove(e))
window.addEventListener('click', e => env.handleMouseClick(e))


env.update()
