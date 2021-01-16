import { Point, Vector2 } from './path'

import { default as TURRET_BASE } from '../ressources/assets/turret-base-2.png'
import { default as TURRET_HEAD } from '../ressources/assets/turret-head-2.png'


interface TextureOptions {
    rotation?: number, // radians
    offset?: Vector2,
    scale?: Vector2
}

const V_NULL = new Vector2(0, 0)
const V_UNIT = new Vector2(1, 1)

class Texture {
    image: HTMLImageElement
    rotation: number
    offset: Vector2
    size: Vector2
    scale: Vector2
    options: TextureOptions

    constructor(source: string, options?: TextureOptions) {
        this.image = new Image()
        this.image.src = source
        this.size = new Vector2(this.image.width, this.image.height)
        this.options = options || {}
        this.rotation = this.options.rotation || 0
        this.offset = this.options.offset || V_NULL // relative to the size
        this.scale = this.options.scale || V_UNIT
    }
}

class Sprite extends Texture {
    constructor(source: string, options?: TextureOptions) {
        super(source, options)
    }
}

const TURRET_BASE_TEXTURE = new Texture(TURRET_BASE)
const TURRET_HEAD_TEXTURE = new Texture(TURRET_HEAD, { scale: new Vector2(1.2, 1.2), offset: new Vector2(0, -1 / 9) })

export { Sprite, Texture }
export { TURRET_BASE_TEXTURE, TURRET_HEAD_TEXTURE }
