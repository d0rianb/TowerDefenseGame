/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ressources/assets/turret-base-2.png":
/*!*********************************************!*\
  !*** ./ressources/assets/turret-base-2.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/309d0fa96220d6b09e808778cd8d6eed.png");

/***/ }),

/***/ "./ressources/assets/turret-head-2.png":
/*!*********************************************!*\
  !*** ./ressources/assets/turret-head-2.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/ed72305da3b51eb899041642593e40f1.png");

/***/ }),

/***/ "./ressources/color.json":
/*!*******************************!*\
  !*** ./ressources/color.json ***!
  \*******************************/
/*! exports provided: primary, secondary, highlight, highlightTransparent, bg, turret, enemy, road, ground, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"primary\":\"#E0E0E0\",\"secondary\":\"#5e5e5e\",\"highlight\":\"#255E9D\",\"highlightTransparent\":\"rgb(245, 245, 244)\",\"bg\":\"#DDDDDD\",\"turret\":\"#B0B0B0\",\"enemy\":\"#b5143f\",\"road\":\"#DEB887\",\"ground\":\"#719263\"}");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __webpack_require__(/*! ./env */ "./src/env.ts");
const grid_1 = __webpack_require__(/*! ./grid */ "./src/grid.ts");
const path_1 = __webpack_require__(/*! ./path */ "./src/path.ts");
function createCanvas(w, h) {
    const ratio = window.devicePixelRatio;
    const canvas = document.createElement('canvas');
    canvas.width = w * ratio;
    canvas.height = h * ratio;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
    canvas.oncontextmenu = e => e.preventDefault();
    return canvas;
}
const canvas = createCanvas(window.innerWidth, window.innerHeight);
const ctx = canvas.getContext('2d');
document.querySelector('main').appendChild(canvas);
const grid = new grid_1.Grid(50, 50);
const env = new env_1.Env(grid, canvas);
const entryPoint = new path_1.Point(0, 0);
const path = new path_1.Path([entryPoint]);
env.setPath(path);
window.addEventListener('keydown', e => env.handleKeyDown(e));
window.addEventListener('mousemove', e => env.handleMouseMove(e));
window.addEventListener('click', e => env.handleMouseClick(e));
env.update();


/***/ }),

/***/ "./src/enemy.ts":
/*!**********************!*\
  !*** ./src/enemy.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__(/*! ./path */ "./src/path.ts");
const render_1 = __webpack_require__(/*! ./render */ "./src/render.ts");
class Enemy {
    constructor(env, health) {
        this.env = env;
        this.path = this.env.path;
        this.nodeIndex = 0;
        this.pos = new path_1.Point(this.path.entry.x, this.path.entry.y);
        this.radius = 10;
        this.speed = .01;
        this.health = health;
    }
    move() {
        const eps = 2;
        const deltaX = this.path.points[this.nodeIndex + 1].x - this.path.points[this.nodeIndex].x;
        const deltaY = this.path.points[this.nodeIndex + 1].y - this.path.points[this.nodeIndex].y;
        const slope = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const angle = Math.atan2(deltaY, deltaX);
        this.pos.x += this.speed * slope * Math.cos(angle);
        this.pos.y += this.speed * slope * Math.sin(angle);
        if (Math.abs(this.pos.x - this.path.points[this.nodeIndex + 1].x) < eps &&
            Math.abs(this.pos.y - this.path.points[this.nodeIndex + 1].y) < eps &&
            this.nodeIndex + 1 < this.path.points.length - 1) {
            this.nodeIndex++;
        }
    }
    checkHit() {
        this.env.shots.forEach(shot => {
            if (this.pos.dist(shot.pos) < this.radius) {
                this.health -= shot.damage;
                this.env.shots = this.env.shots.filter(envShot => envShot !== shot);
                if (this.health <= 0) {
                    this.env.enemies = this.env.enemies.filter(enemy => enemy !== this);
                }
                return true;
            }
        });
        return false;
    }
    update() {
        this.move();
        this.checkHit();
    }
    render(ctx) {
        render_1.Renderer.circle(ctx, this.pos.x, this.pos.y, this.radius, { strokeStyle: 'red', lineWidth: 2 });
    }
}
exports.Enemy = Enemy;


/***/ }),

/***/ "./src/env.ts":
/*!********************!*\
  !*** ./src/env.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const grid_1 = __webpack_require__(/*! ./grid */ "./src/grid.ts");
const path_1 = __webpack_require__(/*! ./path */ "./src/path.ts");
const render_1 = __webpack_require__(/*! ./render */ "./src/render.ts");
const turret_1 = __webpack_require__(/*! ./turret */ "./src/turret.ts");
const enemy_1 = __webpack_require__(/*! ./enemy */ "./src/enemy.ts");
const color = __importStar(__webpack_require__(/*! ../ressources/color.json */ "./ressources/color.json"));
class Env {
    constructor(grid, canvas) {
        this.grid = grid;
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.turrets = [];
        this.enemies = [];
        this.shots = [];
        this.health = 1000; // hp
        this.cellWidth = this.width / this.grid.cols;
        this.cellHeight = this.cellWidth;
        this.path = undefined;
    }
    setPath(path) {
        if (!this.path) {
            this.path = path;
        }
        else {
            path.points.forEach(point => this.path.addPoint(point));
        }
    }
    spawnEnemy() {
        this.enemies.push(new enemy_1.Enemy(this, 100));
    }
    defineCellsType() {
        if (!this.path || this.path.points.length < 2)
            return;
        let nodeIndex = 0;
        const eps = 2;
        let x = this.path.points[0].x;
        let y = this.path.points[0].y;
        for (let i = 0; i < 2000; i++) {
            const deltaX = this.path.points[nodeIndex + 1].x - this.path.points[nodeIndex].x;
            const deltaY = this.path.points[nodeIndex + 1].y - this.path.points[nodeIndex].y;
            const slope = Math.sqrt(deltaX ** 2 + deltaY ** 2);
            const angle = Math.atan2(deltaY, deltaX);
            x += slope * Math.cos(angle) * 0.04;
            y += slope * Math.sin(angle) * 0.04;
            const cell = this.getCell(x, y);
            if (cell) {
                cell.type = grid_1.CellType.Road;
            }
            if (Math.abs(x - this.path.points[nodeIndex + 1].x) < eps &&
                Math.abs(y - this.path.points[nodeIndex + 1].y) < eps) {
                if (nodeIndex + 1 < this.path.points.length - 1) {
                    nodeIndex++;
                }
                else {
                    break;
                }
            }
        }
    }
    getCell(x, y) {
        return this.grid.cells.find(cell => {
            return x >= cell.x * this.cellWidth &&
                x < (cell.x + 1) * this.cellWidth * cell.width &&
                y >= cell.y * this.cellHeight &&
                y < (cell.y + 1) * this.cellHeight * cell.height;
        });
    }
    detectCell(e) {
        const x = e.offsetX;
        const y = e.offsetY;
        return this.getCell(x, y);
    }
    handleMouseMove(e) {
        this.grid.cells.forEach(cell => cell.highlight = false);
        const cell = this.detectCell(e);
        if (cell) {
            cell.highlight = true;
            this.grid.focusCell = cell;
        }
    }
    handleKeyDown(e) {
        switch (e.code) {
            case 'Space':
                this.spawnEnemy();
                e.preventDefault();
        }
    }
    handleMouseClick(e) {
        const cell = this.detectCell(e);
        if (e.shiftKey && this.path) {
            this.path.addPoint(new path_1.Point(e.clientX, e.clientY));
            this.defineCellsType();
            return;
        }
        if (cell && (cell.type === grid_1.CellType.Empty || cell.type === grid_1.CellType.Ground)) {
            cell.type = grid_1.CellType.Turret;
            this.turrets.push(new turret_1.Turret(cell, this));
        }
    }
    update() {
        this.enemies.forEach(enemy => enemy.update());
        this.turrets.forEach(turret => turret.update());
        this.shots.forEach(shot => shot.update());
        this.render();
        window.requestAnimationFrame(() => this.update());
    }
    render() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.width, this.height);
        let fillColor = color.bg;
        this.grid.cells.forEach(cell => {
            if (cell.type === grid_1.CellType.Turret) {
                fillColor = color.turret;
            }
            else if (cell.type === grid_1.CellType.Road) {
                fillColor = color.road;
            }
            else if (cell.type === grid_1.CellType.Ground) {
                fillColor = color.ground;
            }
            else {
                fillColor = color.bg;
            }
            render_1.Renderer.rect(ctx, cell.x * this.cellWidth, cell.y * this.cellHeight, this.cellWidth * cell.width - .15, this.cellHeight * cell.height - .15, {
                transparency: 1,
                fillStyle: fillColor,
                strokeStyle: color.secondary,
                lineWidth: .5
            });
        });
        if (this.path) {
            this.path.render(ctx);
        }
        this.enemies.forEach(enemy => enemy.render(ctx));
        this.shots.forEach(shot => shot.render(ctx));
        this.turrets.forEach(turret => turret.render(ctx));
        const highlightCell = this.grid.cells.find(cell => cell.highlight);
        if (highlightCell) {
            render_1.Renderer.rect(ctx, highlightCell.x * this.cellWidth, highlightCell.y * this.cellHeight, this.cellWidth * highlightCell.width - .15, this.cellHeight * highlightCell.height - .15, {
                transparency: .25,
                strokeStyle: color.highlightTransparent,
                fillStyle: color.highlightTransparent,
                lineWidth: 0
            });
        }
    }
}
exports.Env = Env;


/***/ }),

/***/ "./src/grid.ts":
/*!*********************!*\
  !*** ./src/grid.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Move to npm package (at least github)
Object.defineProperty(exports, "__esModule", { value: true });
var CellType;
(function (CellType) {
    CellType[CellType["Turret"] = 0] = "Turret";
    CellType[CellType["Road"] = 1] = "Road";
    CellType[CellType["Ground"] = 2] = "Ground";
    CellType[CellType["Empty"] = 3] = "Empty";
})(CellType || (CellType = {}));
exports.CellType = CellType;
class Grid {
    constructor(cols, rows) {
        this.rows = rows;
        this.cols = cols;
        this.cells = [];
        this.focusCell = null;
        this.createCells();
        this.defineNeighboors();
    }
    createCells() {
        for (let col = 0; col < this.cols; col++) {
            for (let row = 0; row < this.rows; row++) {
                this.cells.push(new Cell(col, row));
            }
        }
    }
    updateCell(newCell) {
        if (!this.cells.includes(newCell))
            return;
        if (newCell.width !== 1 || newCell.height !== 1) {
            if (newCell.width > 1) {
                let range = newCell.width - 1;
                let removeCell = this.cells.filter(cell => cell.y === newCell.y && cell.x > newCell.x && cell.x <= newCell.x + range);
                this.cells = this.cells.filter(cell => !removeCell.includes(cell));
            }
            if (newCell.height > 1) {
                let range = newCell.height - 1;
                let removeCell = this.cells.filter(cell => cell.x === newCell.x && cell.y > newCell.y && cell.y <= newCell.y + range);
                this.cells = this.cells.filter(cell => !removeCell.includes(cell));
            }
        }
        this.defineNeighboors();
        this.cells[this.cells.indexOf(newCell)] = newCell;
    }
    defineNeighboors() {
        this.cells.forEach(cell => {
            cell.neighboor.top = cell.y >= 1 ? this.cells.filter(othercell => othercell.x <= cell.x && othercell.x + othercell.width > cell.x && othercell.y === cell.y - cell.height)[0] : null;
            cell.neighboor.bottom = cell.y <= this.rows - 1 ? this.cells.filter(othercell => othercell.x <= cell.x && othercell.x + othercell.width > cell.x && othercell.y === cell.y + cell.height)[0] : null;
            cell.neighboor.left = cell.x >= 1 ? this.cells.filter(othercell => othercell.y <= cell.y && othercell.y + othercell.height > cell.y && othercell.x === cell.x - cell.width)[0] : null;
            cell.neighboor.right = cell.x <= this.cols - 1 ? this.cells.filter(othercell => othercell.y <= cell.y && othercell.y + othercell.height > cell.y && othercell.x === cell.x + cell.width)[0] : null;
        });
    }
    handleKeyboardEvent(e) {
        if (!this.focusCell)
            return;
        switch (e.code) {
            case 'ArrowUp':
            case 'KeyW':
                this.focusCell.neighboor['top'] ? this.focusCell = this.focusCell.neighboor['top'] : null;
                break;
            case 'ArrowDown':
            case 'KeyS':
            case 'Enter':
                this.focusCell.neighboor['bottom'] ? this.focusCell = this.focusCell.neighboor['bottom'] : null;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                this.focusCell.neighboor['left'] ? this.focusCell = this.focusCell.neighboor['left'] : null;
                break;
            case 'ArrowRight':
            case 'KeyD':
                this.focusCell.neighboor['right'] ? this.focusCell = this.focusCell.neighboor['right'] : null;
                break;
        }
    }
}
exports.Grid = Grid;
class Cell {
    constructor(x, y, width = 1, height = 1) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.highlight = false;
        this.type = CellType.Ground;
        this.neighboor = {};
    }
    toggleHighlight() {
        this.highlight = !this.highlight;
    }
}
exports.Cell = Cell;


/***/ }),

/***/ "./src/path.ts":
/*!*********************!*\
  !*** ./src/path.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = __webpack_require__(/*! ./render */ "./src/render.ts");
class Path {
    constructor(points) {
        this.entry = points[0] || null;
        this.end = points[points.length - 1];
        this.points = points.sort((point1, point2) => this.entry.dist(point1) - this.entry.dist(point2));
    }
    addPoint(point) {
        if (!this.entry)
            this.entry = point;
        this.points.push(point);
        this.recalculate();
    }
    recalculate() {
        this.end = this.points[this.points.length - 1];
    }
    render(ctx) {
        render_1.Renderer.poly(ctx, this.points, { lineWidth: 1 });
    }
}
exports.Path = Path;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    dist(point) {
        return Math.sqrt((this.x - point.x) ** 2 + (this.y - point.y) ** 2);
    }
}
exports.Point = Point;
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.Vector2 = Vector2;


/***/ }),

/***/ "./src/render.ts":
/*!***********************!*\
  !*** ./src/render.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const defaultStyleObject = {
    strokeStyle: 'black',
    lineWidth: 4,
    lineJoin: 'round',
    fillStyle: 'black',
    transparency: 1
};
class Renderer {
    static style(ctx, obj) {
        const styleObject = Object.assign(Object.assign({}, defaultStyleObject), obj);
        ctx.lineWidth = styleObject.lineWidth;
        ctx.strokeStyle = styleObject.strokeStyle;
        ctx.lineJoin = styleObject.lineJoin;
        ctx.fillStyle = styleObject.fillStyle;
        ctx.globalAlpha = styleObject.transparency;
    }
    static line(ctx, point1, point2, obj) {
        Renderer.style(ctx, obj);
        ctx.beginPath();
        ctx.moveTo(point1.x, point1.y);
        ctx.lineTo(point2.x, point2.y);
        ctx.stroke();
    }
    static rect(ctx, x, y, width, height, obj) {
        Renderer.style(ctx, obj);
        ctx.fillRect(x, y, width, height);
        ctx.strokeRect(x, y, width, height);
    }
    static poly(ctx, points, obj) {
        Renderer.style(ctx, obj);
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();
    }
    static circle(ctx, x, y, radius, obj) {
        Renderer.style(ctx, obj);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    static point(ctx, x, y, obj) {
        Renderer.circle(ctx, x, y, 5, obj);
    }
    static rectSprite(ctx, x, y, width, height, texture) {
        ctx.save();
        ctx.translate(x + width / 2, y + height / 2);
        ctx.scale(texture.scale.x, texture.scale.y);
        ctx.rotate(texture.rotation);
        ctx.drawImage(texture.image, width * texture.offset.x - width / 2, height * texture.offset.y - height / 2, width, height);
        ctx.restore();
    }
}
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/texture.ts":
/*!************************!*\
  !*** ./src/texture.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__(/*! ./path */ "./src/path.ts");
const turret_base_2_png_1 = __importDefault(__webpack_require__(/*! ../ressources/assets/turret-base-2.png */ "./ressources/assets/turret-base-2.png"));
const turret_head_2_png_1 = __importDefault(__webpack_require__(/*! ../ressources/assets/turret-head-2.png */ "./ressources/assets/turret-head-2.png"));
const V_NULL = new path_1.Vector2(0, 0);
const V_UNIT = new path_1.Vector2(1, 1);
class Texture {
    constructor(source, options) {
        this.image = new Image();
        this.image.src = source;
        this.size = new path_1.Vector2(this.image.width, this.image.height);
        this.options = options || {};
        this.rotation = this.options.rotation || 0;
        this.offset = this.options.offset || V_NULL; // relative to the size
        this.scale = this.options.scale || V_UNIT;
    }
}
exports.Texture = Texture;
class Sprite extends Texture {
    constructor(source, options) {
        super(source, options);
    }
}
exports.Sprite = Sprite;
const TURRET_BASE_TEXTURE = new Texture(turret_base_2_png_1.default);
exports.TURRET_BASE_TEXTURE = TURRET_BASE_TEXTURE;
const TURRET_HEAD_TEXTURE = new Texture(turret_head_2_png_1.default, { scale: new path_1.Vector2(1.2, 1.2), offset: new path_1.Vector2(0, -1 / 9), rotation: 2 * Math.PI });
exports.TURRET_HEAD_TEXTURE = TURRET_HEAD_TEXTURE;


/***/ }),

/***/ "./src/turret.ts":
/*!***********************!*\
  !*** ./src/turret.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__(/*! ./path */ "./src/path.ts");
const render_1 = __webpack_require__(/*! ./render */ "./src/render.ts");
const texture_1 = __webpack_require__(/*! ./texture */ "./src/texture.ts");
class Turret {
    constructor(cell, env) {
        this.cell = cell;
        this.env = env;
        this.origin = new path_1.Point(this.cell.x * this.env.cellWidth, this.cell.y * this.env.cellWidth);
        this.pos = new path_1.Point((this.cell.x + 0.5) * this.env.cellWidth, (this.cell.y + 0.5) * this.env.cellWidth);
        this.health = 100;
        this.radius = 100;
        this.target = undefined;
        this.canShoot = true;
        this.dir = -Math.PI / 2;
        this.fireRate = 100; // each ms
    }
    shoot() {
        // TODO: predict position
        this.env.shots.push(new Shot(Object.assign({}, this.pos), this.dir));
        this.canShoot = false;
        window.setTimeout(() => {
            this.canShoot = true;
        }, this.fireRate);
    }
    update() {
        const targets = this.env.enemies
            .sort((enemy1, enemy2) => this.pos.dist(enemy1.pos) - this.pos.dist(enemy2.pos))
            .filter(enemy => this.pos.dist(enemy.pos) < this.radius);
        if (targets.length) {
            this.target = targets[0];
        }
        else {
            this.target = undefined;
        }
        if (this.target) {
            this.dir = Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x);
            if (this.canShoot) {
                this.shoot();
            }
        }
    }
    render(ctx) {
        texture_1.TURRET_HEAD_TEXTURE.rotation = this.dir + Math.PI / 2;
        render_1.Renderer.rectSprite(ctx, this.origin.x, this.origin.y, this.env.cellWidth, this.env.cellWidth, texture_1.TURRET_BASE_TEXTURE);
        render_1.Renderer.rectSprite(ctx, this.origin.x, this.origin.y, this.env.cellWidth, this.env.cellWidth, texture_1.TURRET_HEAD_TEXTURE);
        // Renderer.circle(ctx, this.pos.x, this.pos.y, 10, { lineWidth: 2, strokeStyle: 'black' })
        // Renderer.circle(ctx, this.pos.x, this.pos.y, this.radius, { lineWidth: 1, transparency: .25, strokeStyle: 'white' })
    }
}
exports.Turret = Turret;
class Shot {
    constructor(pos, dir) {
        this.pos = pos;
        this.dir = dir;
        this.damage = 10;
        this.length = 10;
        this.speed = 10;
    }
    update() {
        this.pos.x += this.speed * Math.cos(this.dir);
        this.pos.y += this.speed * Math.sin(this.dir);
    }
    render(ctx) {
        render_1.Renderer.line(ctx, this.pos, new path_1.Point(this.pos.x + this.length * Math.cos(this.dir), this.pos.y + this.length * Math.sin(this.dir)), { lineWidth: 2, strokeStyle: 'black' });
    }
}
exports.Shot = Shot;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzc291cmNlcy9hc3NldHMvdHVycmV0LWJhc2UtMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcmVzc291cmNlcy9hc3NldHMvdHVycmV0LWhlYWQtMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90ZXh0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy90dXJyZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtB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UUFDQSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbEcsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbEcsTUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDMUQsTUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7WUFDbkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FB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LENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDcEwsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNuTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNyTCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxD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SyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDakwsQ0FBQztDQUNKO0FBRWdCLG9CQUFJIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvMzA5ZDBmYTk2MjIwZDZiMDllODA4Nzc4Y2Q4ZDZlZWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2VkNzIzMDVkYTNiNTFlYjg5OTA0MTY0MjU5M2U0MGYxLnBuZ1wiOyIsImltcG9ydCB7IEVudiB9IGZyb20gJy4vZW52J1xuaW1wb3J0IHsgR3JpZCwgQ2VsbCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFBhdGgsIFBvaW50IH0gZnJvbSAnLi9wYXRoJ1xuXG5mdW5jdGlvbiBjcmVhdGVDYW52YXModzogbnVtYmVyLCBoOiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgY29uc3QgcmF0aW86IG51bWJlciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgY2FudmFzLndpZHRoID0gdyAqIHJhdGlvXG4gICAgY2FudmFzLmhlaWdodCA9IGggKiByYXRpb1xuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHcgKyAncHgnXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGggKyAncHgnXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuc2V0VHJhbnNmb3JtKHJhdGlvLCAwLCAwLCByYXRpbywgMCwgMClcbiAgICBjYW52YXMub25jb250ZXh0bWVudSA9IGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGNhbnZhc1xufVxuXG5jb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gY3JlYXRlQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5jb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZChjYW52YXMpXG5cbmNvbnN0IGdyaWQ6IEdyaWQgPSBuZXcgR3JpZCg1MCwgNTApXG5jb25zdCBlbnY6IEVudiA9IG5ldyBFbnYoZ3JpZCwgY2FudmFzKVxuXG5jb25zdCBlbnRyeVBvaW50OiBQb2ludCA9IG5ldyBQb2ludCgwLCAwKVxuY29uc3QgcGF0aDogUGF0aCA9IG5ldyBQYXRoKFtlbnRyeVBvaW50XSlcblxuZW52LnNldFBhdGgocGF0aClcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IGVudi5oYW5kbGVLZXlEb3duKGUpKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gZW52LmhhbmRsZU1vdXNlTW92ZShlKSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gZW52LmhhbmRsZU1vdXNlQ2xpY2soZSkpXG5cblxuZW52LnVwZGF0ZSgpXG4iLCJpbXBvcnQgeyBQYXRoLCBQb2ludCB9IGZyb20gJy4vcGF0aCdcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuL2VudidcblxuZXhwb3J0IGNsYXNzIEVuZW15IHtcbiAgICBlbnY6IEVudlxuICAgIHBhdGg6IFBhdGhcbiAgICBwb3M6IFBvaW50XG4gICAgbm9kZUluZGV4OiBudW1iZXJcbiAgICByYWRpdXM6IG51bWJlclxuICAgIHNwZWVkOiBudW1iZXJcbiAgICBoZWFsdGg6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoZW52OiBFbnYsIGhlYWx0aDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZW52ID0gZW52XG4gICAgICAgIHRoaXMucGF0aCA9IHRoaXMuZW52LnBhdGhcbiAgICAgICAgdGhpcy5ub2RlSW5kZXggPSAwXG4gICAgICAgIHRoaXMucG9zID0gbmV3IFBvaW50KHRoaXMucGF0aC5lbnRyeS54LCB0aGlzLnBhdGguZW50cnkueSlcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAxMFxuICAgICAgICB0aGlzLnNwZWVkID0gLjAxXG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoXG4gICAgfVxuXG4gICAgbW92ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZXBzID0gMlxuICAgICAgICBjb25zdCBkZWx0YVg6IG51bWJlciA9IHRoaXMucGF0aC5wb2ludHNbdGhpcy5ub2RlSW5kZXggKyAxXS54IC0gdGhpcy5wYXRoLnBvaW50c1t0aGlzLm5vZGVJbmRleF0ueFxuICAgICAgICBjb25zdCBkZWx0YVk6IG51bWJlciA9IHRoaXMucGF0aC5wb2ludHNbdGhpcy5ub2RlSW5kZXggKyAxXS55IC0gdGhpcy5wYXRoLnBvaW50c1t0aGlzLm5vZGVJbmRleF0ueVxuICAgICAgICBjb25zdCBzbG9wZTogbnVtYmVyID0gTWF0aC5zcXJ0KGRlbHRhWCAqKiAyICsgZGVsdGFZICoqIDIpXG4gICAgICAgIGNvbnN0IGFuZ2xlOiBudW1iZXIgPSBNYXRoLmF0YW4yKGRlbHRhWSwgZGVsdGFYKVxuICAgICAgICB0aGlzLnBvcy54ICs9IHRoaXMuc3BlZWQgKiBzbG9wZSAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgICB0aGlzLnBvcy55ICs9IHRoaXMuc3BlZWQgKiBzbG9wZSAqIE1hdGguc2luKGFuZ2xlKVxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5wb3MueCAtIHRoaXMucGF0aC5wb2ludHNbdGhpcy5ub2RlSW5kZXggKyAxXS54KSA8IGVwcyAmJlxuICAgICAgICAgICAgTWF0aC5hYnModGhpcy5wb3MueSAtIHRoaXMucGF0aC5wb2ludHNbdGhpcy5ub2RlSW5kZXggKyAxXS55KSA8IGVwcyAmJlxuICAgICAgICAgICAgdGhpcy5ub2RlSW5kZXggKyAxIDwgdGhpcy5wYXRoLnBvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVJbmRleCsrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0hpdCgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5lbnYuc2hvdHMuZm9yRWFjaChzaG90ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcy5kaXN0KHNob3QucG9zKSA8IHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gc2hvdC5kYW1hZ2VcbiAgICAgICAgICAgICAgICB0aGlzLmVudi5zaG90cyA9IHRoaXMuZW52LnNob3RzLmZpbHRlcihlbnZTaG90ID0+IGVudlNob3QgIT09IHNob3QpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnYuZW5lbWllcyA9IHRoaXMuZW52LmVuZW1pZXMuZmlsdGVyKGVuZW15ID0+IGVuZW15ICE9PSB0aGlzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW92ZSgpXG4gICAgICAgIHRoaXMuY2hlY2tIaXQoKVxuICAgIH1cblxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgICAgICBSZW5kZXJlci5jaXJjbGUoY3R4LCB0aGlzLnBvcy54LCB0aGlzLnBvcy55LCB0aGlzLnJhZGl1cywgeyBzdHJva2VTdHlsZTogJ3JlZCcsIGxpbmVXaWR0aDogMiB9KVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEdyaWQsIENlbGwsIENlbGxUeXBlIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgUGF0aCwgUG9pbnQgfSBmcm9tICcuL3BhdGgnXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyJ1xuaW1wb3J0IHsgVHVycmV0LCBTaG90IH0gZnJvbSAnLi90dXJyZXQnXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vZW5lbXknXG5pbXBvcnQgKiBhcyBjb2xvciBmcm9tICcuLi9yZXNzb3VyY2VzL2NvbG9yLmpzb24nXG5cbmV4cG9ydCBjbGFzcyBFbnYge1xuICAgIGdyaWQ6IEdyaWRcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgd2lkdGg6IG51bWJlclxuICAgIGhlaWdodDogbnVtYmVyXG4gICAgY2VsbFdpZHRoOiBudW1iZXJcbiAgICBjZWxsSGVpZ2h0OiBudW1iZXJcbiAgICB0dXJyZXRzOiBBcnJheTxUdXJyZXQ+XG4gICAgZW5lbWllczogQXJyYXk8RW5lbXk+XG4gICAgc2hvdHM6IEFycmF5PFNob3Q+XG4gICAgaGVhbHRoOiBudW1iZXJcbiAgICBwYXRoOiBQYXRoXG5cbiAgICBjb25zdHJ1Y3RvcihncmlkOiBHcmlkLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWRcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0XG4gICAgICAgIHRoaXMudHVycmV0cyA9IFtdXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdXG4gICAgICAgIHRoaXMuc2hvdHMgPSBbXVxuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDAgLy8gaHBcbiAgICAgICAgdGhpcy5jZWxsV2lkdGggPSB0aGlzLndpZHRoIC8gdGhpcy5ncmlkLmNvbHNcbiAgICAgICAgdGhpcy5jZWxsSGVpZ2h0ID0gdGhpcy5jZWxsV2lkdGhcbiAgICAgICAgdGhpcy5wYXRoID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgc2V0UGF0aChwYXRoOiBQYXRoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5wYXRoKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGggPSBwYXRoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRoLnBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHRoaXMucGF0aC5hZGRQb2ludChwb2ludCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGF3bkVuZW15KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRW5lbXkodGhpcywgMTAwKSlcbiAgICB9XG5cbiAgICBkZWZpbmVDZWxsc1R5cGUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5wYXRoIHx8IHRoaXMucGF0aC5wb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuXG4gICAgICAgIGxldCBub2RlSW5kZXg6IG51bWJlciA9IDBcbiAgICAgICAgY29uc3QgZXBzOiBudW1iZXIgPSAyXG4gICAgICAgIGxldCB4ID0gdGhpcy5wYXRoLnBvaW50c1swXS54XG4gICAgICAgIGxldCB5ID0gdGhpcy5wYXRoLnBvaW50c1swXS55XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjAwMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVg6IG51bWJlciA9IHRoaXMucGF0aC5wb2ludHNbbm9kZUluZGV4ICsgMV0ueCAtIHRoaXMucGF0aC5wb2ludHNbbm9kZUluZGV4XS54XG4gICAgICAgICAgICBjb25zdCBkZWx0YVk6IG51bWJlciA9IHRoaXMucGF0aC5wb2ludHNbbm9kZUluZGV4ICsgMV0ueSAtIHRoaXMucGF0aC5wb2ludHNbbm9kZUluZGV4XS55XG4gICAgICAgICAgICBjb25zdCBzbG9wZTogbnVtYmVyID0gTWF0aC5zcXJ0KGRlbHRhWCAqKiAyICsgZGVsdGFZICoqIDIpXG4gICAgICAgICAgICBjb25zdCBhbmdsZTogbnVtYmVyID0gTWF0aC5hdGFuMihkZWx0YVksIGRlbHRhWClcbiAgICAgICAgICAgIHggKz0gc2xvcGUgKiBNYXRoLmNvcyhhbmdsZSkgKiAwLjA0XG4gICAgICAgICAgICB5ICs9IHNsb3BlICogTWF0aC5zaW4oYW5nbGUpICogMC4wNFxuICAgICAgICAgICAgY29uc3QgY2VsbDogQ2VsbCA9IHRoaXMuZ2V0Q2VsbCh4LCB5KVxuICAgICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnR5cGUgPSBDZWxsVHlwZS5Sb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoeCAtIHRoaXMucGF0aC5wb2ludHNbbm9kZUluZGV4ICsgMV0ueCkgPCBlcHMgJiZcbiAgICAgICAgICAgICAgICBNYXRoLmFicyh5IC0gdGhpcy5wYXRoLnBvaW50c1tub2RlSW5kZXggKyAxXS55KSA8IGVwcykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlSW5kZXggKyAxIDwgdGhpcy5wYXRoLnBvaW50cy5sZW5ndGggLSAxKSB7IG5vZGVJbmRleCsrIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgYnJlYWsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q2VsbCh4OiBudW1iZXIsIHk6IG51bWJlcik6IENlbGwge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ3JpZC5jZWxscyBhcyBhbnkpLmZpbmQoY2VsbCA9PiB7XG4gICAgICAgICAgICByZXR1cm4geCA+PSBjZWxsLnggKiB0aGlzLmNlbGxXaWR0aCAmJlxuICAgICAgICAgICAgICAgIHggPCAoY2VsbC54ICsgMSkgKiB0aGlzLmNlbGxXaWR0aCAqIGNlbGwud2lkdGggJiZcbiAgICAgICAgICAgICAgICB5ID49IGNlbGwueSAqIHRoaXMuY2VsbEhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHkgPCAoY2VsbC55ICsgMSkgKiB0aGlzLmNlbGxIZWlnaHQgKiBjZWxsLmhlaWdodFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRldGVjdENlbGwoZTogTW91c2VFdmVudCk6IENlbGwge1xuICAgICAgICBjb25zdCB4ID0gZS5vZmZzZXRYXG4gICAgICAgIGNvbnN0IHkgPSBlLm9mZnNldFlcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbCh4LCB5KVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JpZC5jZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5oaWdobGlnaHQgPSBmYWxzZSlcbiAgICAgICAgY29uc3QgY2VsbDogQ2VsbCA9IHRoaXMuZGV0ZWN0Q2VsbChlKVxuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgY2VsbC5oaWdobGlnaHQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmdyaWQuZm9jdXNDZWxsID0gY2VsbFxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUtleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25FbmVteSgpXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZUNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2VsbDogQ2VsbCA9IHRoaXMuZGV0ZWN0Q2VsbChlKVxuICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiB0aGlzLnBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aC5hZGRQb2ludChuZXcgUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpKVxuICAgICAgICAgICAgdGhpcy5kZWZpbmVDZWxsc1R5cGUoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGwgJiYgKGNlbGwudHlwZSA9PT0gQ2VsbFR5cGUuRW1wdHkgfHwgY2VsbC50eXBlID09PSBDZWxsVHlwZS5Hcm91bmQpKSB7XG4gICAgICAgICAgICBjZWxsLnR5cGUgPSBDZWxsVHlwZS5UdXJyZXRcbiAgICAgICAgICAgIHRoaXMudHVycmV0cy5wdXNoKG5ldyBUdXJyZXQoY2VsbCwgdGhpcykpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLnR1cnJldHMuZm9yRWFjaCh0dXJyZXQgPT4gdHVycmV0LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGUoKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICBsZXQgZmlsbENvbG9yOiBzdHJpbmcgPSBjb2xvci5iZ1xuICAgICAgICB0aGlzLmdyaWQuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLlR1cnJldCkge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbG9yLnR1cnJldFxuICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLlJvYWQpIHtcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSBjb2xvci5yb2FkXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwudHlwZSA9PT0gQ2VsbFR5cGUuR3JvdW5kKSB7XG4gICAgICAgICAgICAgICAgZmlsbENvbG9yID0gY29sb3IuZ3JvdW5kXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbG9yLmJnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZW5kZXJlci5yZWN0KGN0eCwgY2VsbC54ICogdGhpcy5jZWxsV2lkdGgsIGNlbGwueSAqIHRoaXMuY2VsbEhlaWdodCwgdGhpcy5jZWxsV2lkdGggKiBjZWxsLndpZHRoIC0gLjE1LCB0aGlzLmNlbGxIZWlnaHQgKiBjZWxsLmhlaWdodCAtIC4xNSwge1xuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW5jeTogMSxcbiAgICAgICAgICAgICAgICBmaWxsU3R5bGU6IGZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogY29sb3Iuc2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAuNVxyXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5wYXRoKSB7IHRoaXMucGF0aC5yZW5kZXIoY3R4KSB9XG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnJlbmRlcihjdHgpKVxuICAgICAgICB0aGlzLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LnJlbmRlcihjdHgpKVxuICAgICAgICB0aGlzLnR1cnJldHMuZm9yRWFjaCh0dXJyZXQgPT4gdHVycmV0LnJlbmRlcihjdHgpKVxuXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodENlbGw6IENlbGwgPSB0aGlzLmdyaWQuY2VsbHMuZmluZChjZWxsID0+IGNlbGwuaGlnaGxpZ2h0KVxuICAgICAgICBpZiAoaGlnaGxpZ2h0Q2VsbCkge1xuICAgICAgICAgICAgUmVuZGVyZXIucmVjdChjdHgsIGhpZ2hsaWdodENlbGwueCAqIHRoaXMuY2VsbFdpZHRoLCBoaWdobGlnaHRDZWxsLnkgKiB0aGlzLmNlbGxIZWlnaHQsIHRoaXMuY2VsbFdpZHRoICogaGlnaGxpZ2h0Q2VsbC53aWR0aCAtIC4xNSwgdGhpcy5jZWxsSGVpZ2h0ICogaGlnaGxpZ2h0Q2VsbC5oZWlnaHQgLSAuMTUsIHtcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IC4yNSxcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogY29sb3IuaGlnaGxpZ2h0VHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgZmlsbFN0eWxlOiBjb2xvci5oaWdobGlnaHRUcmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBNb3ZlIHRvIG5wbSBwYWNrYWdlIChhdCBsZWFzdCBnaXRodWIpXG5cbmludGVyZmFjZSBOZWloYm9vck9iamVjdCB7XG4gICAgdG9wPzogQ2VsbFxuICAgIHJpZ2h0PzogQ2VsbFxuICAgIGJvdHRvbT86IENlbGxcbiAgICBsZWZ0PzogQ2VsbFxufVxuXG5lbnVtIENlbGxUeXBlIHtcbiAgICBUdXJyZXQsXG4gICAgUm9hZCxcbiAgICBHcm91bmQsXG4gICAgRW1wdHlcbn1cblxuY2xhc3MgR3JpZCB7XG4gICAgcm93czogbnVtYmVyXG4gICAgY29sczogbnVtYmVyXG4gICAgY2VsbHM6IEFycmF5PENlbGw+XG4gICAgZm9jdXNDZWxsOiBDZWxsXG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xzOiBudW1iZXIsIHJvd3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzXG4gICAgICAgIHRoaXMuY29scyA9IGNvbHNcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgIHRoaXMuZm9jdXNDZWxsID0gbnVsbFxuICAgICAgICB0aGlzLmNyZWF0ZUNlbGxzKClcbiAgICAgICAgdGhpcy5kZWZpbmVOZWlnaGJvb3JzKClcbiAgICB9XG5cbiAgICBjcmVhdGVDZWxscygpIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5jb2xzOyBjb2wrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5yb3dzOyByb3crKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChuZXcgQ2VsbChjb2wsIHJvdykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDZWxsKG5ld0NlbGw6IENlbGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNlbGxzLmluY2x1ZGVzKG5ld0NlbGwpKSByZXR1cm5cbiAgICAgICAgaWYgKG5ld0NlbGwud2lkdGggIT09IDEgfHwgbmV3Q2VsbC5oZWlnaHQgIT09IDEpIHtcbiAgICAgICAgICAgIGlmIChuZXdDZWxsLndpZHRoID4gMSkge1xuICAgICAgICAgICAgICAgIGxldCByYW5nZTogbnVtYmVyID0gbmV3Q2VsbC53aWR0aCAtIDFcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQ2VsbDogQXJyYXk8Q2VsbD4gPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IGNlbGwueSA9PT0gbmV3Q2VsbC55ICYmIGNlbGwueCA+IG5ld0NlbGwueCAmJiBjZWxsLnggPD0gbmV3Q2VsbC54ICsgcmFuZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGNlbGwgPT4gIXJlbW92ZUNlbGwuaW5jbHVkZXMoY2VsbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3Q2VsbC5oZWlnaHQgPiAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlOiBudW1iZXIgPSBuZXdDZWxsLmhlaWdodCAtIDFcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQ2VsbDogQXJyYXk8Q2VsbD4gPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IGNlbGwueCA9PT0gbmV3Q2VsbC54ICYmIGNlbGwueSA+IG5ld0NlbGwueSAmJiBjZWxsLnkgPD0gbmV3Q2VsbC55ICsgcmFuZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGNlbGwgPT4gIXJlbW92ZUNlbGwuaW5jbHVkZXMoY2VsbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWZpbmVOZWlnaGJvb3JzKClcbiAgICAgICAgdGhpcy5jZWxsc1t0aGlzLmNlbGxzLmluZGV4T2YobmV3Q2VsbCldID0gbmV3Q2VsbFxuICAgIH1cblxuICAgIGRlZmluZU5laWdoYm9vcnMoKSB7XG4gICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwubmVpZ2hib29yLnRvcCA9IGNlbGwueSA+PSAxID8gdGhpcy5jZWxscy5maWx0ZXIob3RoZXJjZWxsID0+IG90aGVyY2VsbC54IDw9IGNlbGwueCAmJiBvdGhlcmNlbGwueCArIG90aGVyY2VsbC53aWR0aCA+IGNlbGwueCAmJiBvdGhlcmNlbGwueSA9PT0gY2VsbC55IC0gY2VsbC5oZWlnaHQpWzBdIDogbnVsbFxuICAgICAgICAgICAgY2VsbC5uZWlnaGJvb3IuYm90dG9tID0gY2VsbC55IDw9IHRoaXMucm93cyAtIDEgPyB0aGlzLmNlbGxzLmZpbHRlcihvdGhlcmNlbGwgPT4gb3RoZXJjZWxsLnggPD0gY2VsbC54ICYmIG90aGVyY2VsbC54ICsgb3RoZXJjZWxsLndpZHRoID4gY2VsbC54ICYmIG90aGVyY2VsbC55ID09PSBjZWxsLnkgKyBjZWxsLmhlaWdodClbMF0gOiBudWxsXG4gICAgICAgICAgICBjZWxsLm5laWdoYm9vci5sZWZ0ID0gY2VsbC54ID49IDEgPyB0aGlzLmNlbGxzLmZpbHRlcihvdGhlcmNlbGwgPT4gb3RoZXJjZWxsLnkgPD0gY2VsbC55ICYmIG90aGVyY2VsbC55ICsgb3RoZXJjZWxsLmhlaWdodCA+IGNlbGwueSAmJiBvdGhlcmNlbGwueCA9PT0gY2VsbC54IC0gY2VsbC53aWR0aClbMF0gOiBudWxsXG4gICAgICAgICAgICBjZWxsLm5laWdoYm9vci5yaWdodCA9IGNlbGwueCA8PSB0aGlzLmNvbHMgLSAxID8gdGhpcy5jZWxscy5maWx0ZXIob3RoZXJjZWxsID0+IG90aGVyY2VsbC55IDw9IGNlbGwueSAmJiBvdGhlcmNlbGwueSArIG90aGVyY2VsbC5oZWlnaHQgPiBjZWxsLnkgJiYgb3RoZXJjZWxsLnggPT09IGNlbGwueCArIGNlbGwud2lkdGgpWzBdIDogbnVsbFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUtleWJvYXJkRXZlbnQoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9jdXNDZWxsKSByZXR1cm5cbiAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgY2FzZSAnS2V5Vyc6XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWyd0b3AnXSA/IHRoaXMuZm9jdXNDZWxsID0gdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWyd0b3AnXSA6IG51bGxcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIGNhc2UgJ0tleVMnOlxuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNDZWxsLm5laWdoYm9vclsnYm90dG9tJ10gPyB0aGlzLmZvY3VzQ2VsbCA9IHRoaXMuZm9jdXNDZWxsLm5laWdoYm9vclsnYm90dG9tJ10gOiBudWxsXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICBjYXNlICdLZXlBJzpcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzQ2VsbC5uZWlnaGJvb3JbJ2xlZnQnXSA/IHRoaXMuZm9jdXNDZWxsID0gdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWydsZWZ0J10gOiBudWxsXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgY2FzZSAnS2V5RCc6XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWydyaWdodCddID8gdGhpcy5mb2N1c0NlbGwgPSB0aGlzLmZvY3VzQ2VsbC5uZWlnaGJvb3JbJ3JpZ2h0J10gOiBudWxsXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ2VsbCB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgd2lkdGg6IG51bWJlclxuICAgIGhlaWdodDogbnVtYmVyXG4gICAgaGlnaGxpZ2h0OiBib29sZWFuXG4gICAgdHlwZTogQ2VsbFR5cGVcbiAgICBuZWlnaGJvb3I6IE5laWhib29yT2JqZWN0XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGggPSAxLCBoZWlnaHQgPSAxKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSBmYWxzZVxuICAgICAgICB0aGlzLnR5cGUgPSBDZWxsVHlwZS5Hcm91bmRcbiAgICAgICAgdGhpcy5uZWlnaGJvb3IgPSB7fVxuICAgIH1cblxuICAgIHRvZ2dsZUhpZ2hsaWdodCgpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSAhdGhpcy5oaWdobGlnaHRcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdyaWQsIENlbGwsIENlbGxUeXBlIH1cbiIsImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXInXG5cbmNsYXNzIFBhdGgge1xuICAgIGVudHJ5OiBQb2ludFxuICAgIHBvaW50czogQXJyYXk8UG9pbnQ+XG4gICAgZW5kOiBQb2ludFxuXG4gICAgY29uc3RydWN0b3IocG9pbnRzOiBBcnJheTxQb2ludD4pIHtcbiAgICAgICAgdGhpcy5lbnRyeSA9IHBvaW50c1swXSB8fCBudWxsXG4gICAgICAgIHRoaXMuZW5kID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVxuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cy5zb3J0KChwb2ludDEsIHBvaW50MikgPT4gdGhpcy5lbnRyeS5kaXN0KHBvaW50MSkgLSB0aGlzLmVudHJ5LmRpc3QocG9pbnQyKSlcbiAgICB9XG5cbiAgICBhZGRQb2ludChwb2ludDogUG9pbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmVudHJ5KSB0aGlzLmVudHJ5ID0gcG9pbnRcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwb2ludClcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZSgpXG4gICAgfVxuXG4gICAgcmVjYWxjdWxhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW5kID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV1cbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIucG9seShjdHgsIHRoaXMucG9pbnRzLCB7IGxpbmVXaWR0aDogMSB9KVxuICAgIH1cbn1cblxuY2xhc3MgUG9pbnQge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxuXG4gICAgZGlzdChwb2ludDogUG9pbnQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnggLSBwb2ludC54KSAqKiAyICsgKHRoaXMueSAtIHBvaW50LnkpICoqIDIpXG4gICAgfVxufVxuXG5jbGFzcyBWZWN0b3IyIHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUGF0aCwgUG9pbnQsIFZlY3RvcjIgfVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BhdGgnXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnLi90ZXh0dXJlJ1xuXG5pbnRlcmZhY2UgU3R5bGVPYmplY3Qge1xuICAgIHN0cm9rZVN0eWxlPzogc3RyaW5nLFxuICAgIGxpbmVXaWR0aD86IG51bWJlcixcbiAgICBsaW5lSm9pbj86IENhbnZhc0xpbmVKb2luLFxuICAgIGZpbGxTdHlsZT86IHN0cmluZyxcbiAgICB0cmFuc3BhcmVuY3k/OiBudW1iZXJcbn1cblxuY29uc3QgZGVmYXVsdFN0eWxlT2JqZWN0OiBTdHlsZU9iamVjdCA9IHtcbiAgICBzdHJva2VTdHlsZTogJ2JsYWNrJyxcbiAgICBsaW5lV2lkdGg6IDQsXG4gICAgbGluZUpvaW46ICdyb3VuZCcsXG4gICAgZmlsbFN0eWxlOiAnYmxhY2snLFxuICAgIHRyYW5zcGFyZW5jeTogMVxufVxuXG5jbGFzcyBSZW5kZXJlciB7XG5cbiAgICBzdGF0aWMgc3R5bGUoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG9iaj86IFN0eWxlT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0eWxlT2JqZWN0ID0geyAuLi5kZWZhdWx0U3R5bGVPYmplY3QsIC4uLm9iaiB9XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBzdHlsZU9iamVjdC5saW5lV2lkdGhcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc3R5bGVPYmplY3Quc3Ryb2tlU3R5bGVcbiAgICAgICAgY3R4LmxpbmVKb2luID0gc3R5bGVPYmplY3QubGluZUpvaW5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHN0eWxlT2JqZWN0LmZpbGxTdHlsZVxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSBzdHlsZU9iamVjdC50cmFuc3BhcmVuY3lcbiAgICB9XG5cbiAgICBzdGF0aWMgbGluZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCwgb2JqPzogU3R5bGVPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIuc3R5bGUoY3R4LCBvYmopXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHBvaW50MS54LCBwb2ludDEueSlcbiAgICAgICAgY3R4LmxpbmVUbyhwb2ludDIueCwgcG9pbnQyLnkpXG4gICAgICAgIGN0eC5zdHJva2UoKVxuICAgIH1cblxuICAgIHN0YXRpYyByZWN0KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG9iaj86IFN0eWxlT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIFJlbmRlcmVyLnN0eWxlKGN0eCwgb2JqKVxuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9seShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcG9pbnRzOiBBcnJheTxQb2ludD4sIG9iaj86IFN0eWxlT2JqZWN0KSB7XG4gICAgICAgIFJlbmRlcmVyLnN0eWxlKGN0eCwgb2JqKVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnkpXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjdHgubGluZVRvKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSlcbiAgICAgICAgfVxuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBzdGF0aWMgY2lyY2xlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIG9iaj86IFN0eWxlT2JqZWN0KSB7XG4gICAgICAgIFJlbmRlcmVyLnN0eWxlKGN0eCwgb2JqKVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9pbnQoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBvYmo/OiBTdHlsZU9iamVjdCk6IHZvaWQge1xuICAgICAgICBSZW5kZXJlci5jaXJjbGUoY3R4LCB4LCB5LCA1LCBvYmopXG4gICAgfVxuXG4gICAgc3RhdGljIHJlY3RTcHJpdGUoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdGV4dHVyZTogVGV4dHVyZSk6IHZvaWQge1xuICAgICAgICBjdHguc2F2ZSgpXG4gICAgICAgIGN0eC50cmFuc2xhdGUoeCArIHdpZHRoIC8gMiwgeSArIGhlaWdodCAvIDIpXG4gICAgICAgIGN0eC5zY2FsZSh0ZXh0dXJlLnNjYWxlLngsIHRleHR1cmUuc2NhbGUueSlcbiAgICAgICAgY3R4LnJvdGF0ZSh0ZXh0dXJlLnJvdGF0aW9uKVxuICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGV4dHVyZS5pbWFnZSxcbiAgICAgICAgICAgIHdpZHRoICogdGV4dHVyZS5vZmZzZXQueCAtIHdpZHRoIC8gMixcbiAgICAgICAgICAgIGhlaWdodCAqIHRleHR1cmUub2Zmc2V0LnkgLSBoZWlnaHQgLyAyLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgKVxuICAgICAgICBjdHgucmVzdG9yZSgpXG4gICAgfVxufVxuXG5leHBvcnQgeyBSZW5kZXJlciB9XG4iLCJpbXBvcnQgeyBQb2ludCwgVmVjdG9yMiB9IGZyb20gJy4vcGF0aCdcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBUVVJSRVRfQkFTRSB9IGZyb20gJy4uL3Jlc3NvdXJjZXMvYXNzZXRzL3R1cnJldC1iYXNlLTIucG5nJ1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBUVVJSRVRfSEVBRCB9IGZyb20gJy4uL3Jlc3NvdXJjZXMvYXNzZXRzL3R1cnJldC1oZWFkLTIucG5nJ1xuXG5cbmludGVyZmFjZSBUZXh0dXJlT3B0aW9ucyB7XG4gICAgcm90YXRpb24/OiBudW1iZXIsIC8vIHJhZGlhbnNcbiAgICBvZmZzZXQ/OiBWZWN0b3IyLFxuICAgIHNjYWxlPzogVmVjdG9yMlxufVxuXG5jb25zdCBWX05VTEwgPSBuZXcgVmVjdG9yMigwLCAwKVxuY29uc3QgVl9VTklUID0gbmV3IFZlY3RvcjIoMSwgMSlcblxuY2xhc3MgVGV4dHVyZSB7XG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcbiAgICByb3RhdGlvbjogbnVtYmVyXG4gICAgb2Zmc2V0OiBWZWN0b3IyXG4gICAgc2l6ZTogVmVjdG9yMlxuICAgIHNjYWxlOiBWZWN0b3IyXG4gICAgb3B0aW9uczogVGV4dHVyZU9wdGlvbnNcblxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nLCBvcHRpb25zPzogVGV4dHVyZU9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gc291cmNlXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ldyBWZWN0b3IyKHRoaXMuaW1hZ2Uud2lkdGgsIHRoaXMuaW1hZ2UuaGVpZ2h0KVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLm9wdGlvbnMucm90YXRpb24gfHwgMFxuICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMub3B0aW9ucy5vZmZzZXQgfHwgVl9OVUxMIC8vIHJlbGF0aXZlIHRvIHRoZSBzaXplXG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLm9wdGlvbnMuc2NhbGUgfHwgVl9VTklUXG4gICAgfVxufVxuXG5jbGFzcyBTcHJpdGUgZXh0ZW5kcyBUZXh0dXJlIHtcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZywgb3B0aW9ucz86IFRleHR1cmVPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucylcbiAgICB9XG59XG5cbmNvbnN0IFRVUlJFVF9CQVNFX1RFWFRVUkUgPSBuZXcgVGV4dHVyZShUVVJSRVRfQkFTRSlcbmNvbnN0IFRVUlJFVF9IRUFEX1RFWFRVUkUgPSBuZXcgVGV4dHVyZShUVVJSRVRfSEVBRCwgeyBzY2FsZTogbmV3IFZlY3RvcjIoMS4yLCAxLjIpLCBvZmZzZXQ6IG5ldyBWZWN0b3IyKDAsIC0xIC8gOSksIHJvdGF0aW9uOiAyICogTWF0aC5QSSB9KVxuXG5leHBvcnQgeyBTcHJpdGUsIFRleHR1cmUgfVxuZXhwb3J0IHsgVFVSUkVUX0JBU0VfVEVYVFVSRSwgVFVSUkVUX0hFQURfVEVYVFVSRSB9XG4iLCJpbXBvcnQgeyBDZWxsLCBDZWxsVHlwZSB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wYXRoJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi9lbnYnXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vZW5lbXknXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyJ1xuXG5pbXBvcnQgeyBUVVJSRVRfQkFTRV9URVhUVVJFLCBUVVJSRVRfSEVBRF9URVhUVVJFIH0gZnJvbSAnLi90ZXh0dXJlJ1xuXG5jbGFzcyBUdXJyZXQge1xuICAgIGNlbGw6IENlbGxcbiAgICBlbnY6IEVudlxuICAgIG9yaWdpbjogUG9pbnRcbiAgICBwb3M6IFBvaW50XG4gICAgaGVhbHRoOiBudW1iZXJcbiAgICByYWRpdXM6IG51bWJlclxuICAgIHRhcmdldDogRW5lbXlcbiAgICBjYW5TaG9vdDogYm9vbGVhblxuICAgIGRpcjogbnVtYmVyXG4gICAgZmlyZVJhdGU6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoY2VsbDogQ2VsbCwgZW52OiBFbnYpIHtcbiAgICAgICAgdGhpcy5jZWxsID0gY2VsbFxuICAgICAgICB0aGlzLmVudiA9IGVudlxuICAgICAgICB0aGlzLm9yaWdpbiA9IG5ldyBQb2ludCh0aGlzLmNlbGwueCAqIHRoaXMuZW52LmNlbGxXaWR0aCwgdGhpcy5jZWxsLnkgKiB0aGlzLmVudi5jZWxsV2lkdGgpXG4gICAgICAgIHRoaXMucG9zID0gbmV3IFBvaW50KCh0aGlzLmNlbGwueCArIDAuNSkgKiB0aGlzLmVudi5jZWxsV2lkdGgsICh0aGlzLmNlbGwueSArIDAuNSkgKiB0aGlzLmVudi5jZWxsV2lkdGgpXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwXG4gICAgICAgIHRoaXMucmFkaXVzID0gMTAwXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkXG4gICAgICAgIHRoaXMuY2FuU2hvb3QgPSB0cnVlXG4gICAgICAgIHRoaXMuZGlyID0gLU1hdGguUEkgLyAyXG4gICAgICAgIHRoaXMuZmlyZVJhdGUgPSAxMDAgLy8gZWFjaCBtc1xuICAgIH1cblxuICAgIHNob290KCk6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiBwcmVkaWN0IHBvc2l0aW9uXG4gICAgICAgIHRoaXMuZW52LnNob3RzLnB1c2gobmV3IFNob3QoPFBvaW50PnsgLi4udGhpcy5wb3MgfSwgdGhpcy5kaXIpKVxuICAgICAgICB0aGlzLmNhblNob290ID0gZmFsc2VcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYW5TaG9vdCA9IHRydWVcbiAgICAgICAgfSwgdGhpcy5maXJlUmF0ZSlcbiAgICB9XG5cbiAgICB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRhcmdldHM6IEFycmF5PEVuZW15PiA9IHRoaXMuZW52LmVuZW1pZXNcbiAgICAgICAgICAgIC5zb3J0KChlbmVteTEsIGVuZW15MikgPT4gdGhpcy5wb3MuZGlzdChlbmVteTEucG9zKSAtIHRoaXMucG9zLmRpc3QoZW5lbXkyLnBvcykpXG4gICAgICAgICAgICAuZmlsdGVyKGVuZW15ID0+IHRoaXMucG9zLmRpc3QoZW5lbXkucG9zKSA8IHRoaXMucmFkaXVzKVxuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGgpIHsgdGhpcy50YXJnZXQgPSB0YXJnZXRzWzBdIH1cbiAgICAgICAgZWxzZSB7IHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkIH1cblxuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gTWF0aC5hdGFuMih0aGlzLnRhcmdldC5wb3MueSAtIHRoaXMucG9zLnksIHRoaXMudGFyZ2V0LnBvcy54IC0gdGhpcy5wb3MueClcbiAgICAgICAgICAgIGlmICh0aGlzLmNhblNob290KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG9vdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgVFVSUkVUX0hFQURfVEVYVFVSRS5yb3RhdGlvbiA9IHRoaXMuZGlyICsgTWF0aC5QSSAvIDJcbiAgICAgICAgUmVuZGVyZXIucmVjdFNwcml0ZShjdHgsIHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnksIHRoaXMuZW52LmNlbGxXaWR0aCwgdGhpcy5lbnYuY2VsbFdpZHRoLCBUVVJSRVRfQkFTRV9URVhUVVJFKVxuICAgICAgICBSZW5kZXJlci5yZWN0U3ByaXRlKGN0eCwgdGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSwgdGhpcy5lbnYuY2VsbFdpZHRoLCB0aGlzLmVudi5jZWxsV2lkdGgsIFRVUlJFVF9IRUFEX1RFWFRVUkUpXG4gICAgICAgIC8vIFJlbmRlcmVyLmNpcmNsZShjdHgsIHRoaXMucG9zLngsIHRoaXMucG9zLnksIDEwLCB7IGxpbmVXaWR0aDogMiwgc3Ryb2tlU3R5bGU6ICdibGFjaycgfSlcbiAgICAgICAgLy8gUmVuZGVyZXIuY2lyY2xlKGN0eCwgdGhpcy5wb3MueCwgdGhpcy5wb3MueSwgdGhpcy5yYWRpdXMsIHsgbGluZVdpZHRoOiAxLCB0cmFuc3BhcmVuY3k6IC4yNSwgc3Ryb2tlU3R5bGU6ICd3aGl0ZScgfSlcbiAgICB9XG59XG5cbmNsYXNzIFNob3Qge1xuICAgIHBvczogUG9pbnRcbiAgICBkaXI6IG51bWJlclxuICAgIGRhbWFnZTogbnVtYmVyXG4gICAgbGVuZ3RoOiBudW1iZXJcbiAgICBzcGVlZDogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3Rvcihwb3M6IFBvaW50LCBkaXI6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBvcyA9IHBvc1xuICAgICAgICB0aGlzLmRpciA9IGRpclxuICAgICAgICB0aGlzLmRhbWFnZSA9IDEwXG4gICAgICAgIHRoaXMubGVuZ3RoID0gMTBcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEwXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnBvcy54ICs9IHRoaXMuc3BlZWQgKiBNYXRoLmNvcyh0aGlzLmRpcilcbiAgICAgICAgdGhpcy5wb3MueSArPSB0aGlzLnNwZWVkICogTWF0aC5zaW4odGhpcy5kaXIpXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIFJlbmRlcmVyLmxpbmUoY3R4LCB0aGlzLnBvcywgbmV3IFBvaW50KHRoaXMucG9zLnggKyB0aGlzLmxlbmd0aCAqIE1hdGguY29zKHRoaXMuZGlyKSwgdGhpcy5wb3MueSArIHRoaXMubGVuZ3RoICogTWF0aC5zaW4odGhpcy5kaXIpKSwgeyBsaW5lV2lkdGg6IDIsIHN0cm9rZVN0eWxlOiAnYmxhY2snIH0pXG4gICAgfVxufVxuXG5leHBvcnQgeyBUdXJyZXQsIFNob3QgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==