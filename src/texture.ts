import { Texture, Vector2 } from 'unrail-engine'

import { default as TURRET_BASE } from '../ressources/assets/turret-base-2.png'
import { default as TURRET_HEAD } from '../ressources/assets/turret-head-2.png'
import { default as ENEMY } from '../ressources/assets/enemy.png'

const TURRET_BASE_TEXTURE = new Texture(TURRET_BASE)
const TURRET_HEAD_TEXTURE = new Texture(TURRET_HEAD, { scale: new Vector2(1.2, 1.2), offset: new Vector2(0, -1 / 9) })
const ENEMY_TEXTURE = new Texture(ENEMY)

export { Texture }
export { TURRET_BASE_TEXTURE, TURRET_HEAD_TEXTURE, ENEMY_TEXTURE }
