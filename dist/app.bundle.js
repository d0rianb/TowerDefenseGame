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
        Renderer.style(ctx, {});
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
        render_1.Renderer.circle(ctx, this.pos.x, this.pos.y, this.radius, { lineWidth: 1, transparency: .25, strokeStyle: 'white' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzc291cmNlcy9hc3NldHMvdHVycmV0LWJhc2UtMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcmVzc291cmNlcy9hc3NldHMvdHVycmV0LWhlYWQtMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90ZXh0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy90dXJyZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtB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UUFDQSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbEcsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbEcsTUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDMUQsTUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7WUFDbkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FB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LENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDcEwsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNuTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNyTCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxD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RyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakQsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUE2QjtRQUNoQyxpQkFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLFlBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ2pMLENBQUM7Q0FDSjtBQUVnQixvQkFBSSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0LzMwOWQwZmE5NjIyMGQ2YjA5ZTgwODc3OGNkOGQ2ZWVkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9lZDcyMzA1ZGEzYjUxZWI4OTkwNDE2NDI1OTNlNDBmMS5wbmdcIjsiLCJpbXBvcnQgeyBFbnYgfSBmcm9tICcuL2VudidcbmltcG9ydCB7IEdyaWQsIENlbGwgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBQYXRoLCBQb2ludCB9IGZyb20gJy4vcGF0aCdcblxuZnVuY3Rpb24gY3JlYXRlQ2FudmFzKHc6IG51bWJlciwgaDogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIGNvbnN0IHJhdGlvOiBudW1iZXIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIGNhbnZhcy53aWR0aCA9IHcgKiByYXRpb1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoICogcmF0aW9cbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3ICsgJ3B4J1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4J1xuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnNldFRyYW5zZm9ybShyYXRpbywgMCwgMCwgcmF0aW8sIDAsIDApXG4gICAgY2FudmFzLm9uY29udGV4dG1lbnUgPSBlID0+IGUucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVybiBjYW52YXNcbn1cblxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGNyZWF0ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXG5jb25zdCBncmlkOiBHcmlkID0gbmV3IEdyaWQoNTAsIDUwKVxuY29uc3QgZW52OiBFbnYgPSBuZXcgRW52KGdyaWQsIGNhbnZhcylcblxuY29uc3QgZW50cnlQb2ludDogUG9pbnQgPSBuZXcgUG9pbnQoMCwgMClcbmNvbnN0IHBhdGg6IFBhdGggPSBuZXcgUGF0aChbZW50cnlQb2ludF0pXG5cbmVudi5zZXRQYXRoKHBhdGgpXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBlbnYuaGFuZGxlS2V5RG93bihlKSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IGVudi5oYW5kbGVNb3VzZU1vdmUoZSkpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGVudi5oYW5kbGVNb3VzZUNsaWNrKGUpKVxuXG5cbmVudi51cGRhdGUoKVxuIiwiaW1wb3J0IHsgUGF0aCwgUG9pbnQgfSBmcm9tICcuL3BhdGgnXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi9lbnYnXG5cbmV4cG9ydCBjbGFzcyBFbmVteSB7XG4gICAgZW52OiBFbnZcbiAgICBwYXRoOiBQYXRoXG4gICAgcG9zOiBQb2ludFxuICAgIG5vZGVJbmRleDogbnVtYmVyXG4gICAgcmFkaXVzOiBudW1iZXJcbiAgICBzcGVlZDogbnVtYmVyXG4gICAgaGVhbHRoOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKGVudjogRW52LCBoZWFsdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmVudiA9IGVudlxuICAgICAgICB0aGlzLnBhdGggPSB0aGlzLmVudi5wYXRoXG4gICAgICAgIHRoaXMubm9kZUluZGV4ID0gMFxuICAgICAgICB0aGlzLnBvcyA9IG5ldyBQb2ludCh0aGlzLnBhdGguZW50cnkueCwgdGhpcy5wYXRoLmVudHJ5LnkpXG4gICAgICAgIHRoaXMucmFkaXVzID0gMTBcbiAgICAgICAgdGhpcy5zcGVlZCA9IC4wMVxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aFxuICAgIH1cblxuICAgIG1vdmUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGVwcyA9IDJcbiAgICAgICAgY29uc3QgZGVsdGFYOiBudW1iZXIgPSB0aGlzLnBhdGgucG9pbnRzW3RoaXMubm9kZUluZGV4ICsgMV0ueCAtIHRoaXMucGF0aC5wb2ludHNbdGhpcy5ub2RlSW5kZXhdLnhcbiAgICAgICAgY29uc3QgZGVsdGFZOiBudW1iZXIgPSB0aGlzLnBhdGgucG9pbnRzW3RoaXMubm9kZUluZGV4ICsgMV0ueSAtIHRoaXMucGF0aC5wb2ludHNbdGhpcy5ub2RlSW5kZXhdLnlcbiAgICAgICAgY29uc3Qgc2xvcGU6IG51bWJlciA9IE1hdGguc3FydChkZWx0YVggKiogMiArIGRlbHRhWSAqKiAyKVxuICAgICAgICBjb25zdCBhbmdsZTogbnVtYmVyID0gTWF0aC5hdGFuMihkZWx0YVksIGRlbHRhWClcbiAgICAgICAgdGhpcy5wb3MueCArPSB0aGlzLnNwZWVkICogc2xvcGUgKiBNYXRoLmNvcyhhbmdsZSlcbiAgICAgICAgdGhpcy5wb3MueSArPSB0aGlzLnNwZWVkICogc2xvcGUgKiBNYXRoLnNpbihhbmdsZSlcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMucG9zLnggLSB0aGlzLnBhdGgucG9pbnRzW3RoaXMubm9kZUluZGV4ICsgMV0ueCkgPCBlcHMgJiZcbiAgICAgICAgICAgIE1hdGguYWJzKHRoaXMucG9zLnkgLSB0aGlzLnBhdGgucG9pbnRzW3RoaXMubm9kZUluZGV4ICsgMV0ueSkgPCBlcHMgJiZcbiAgICAgICAgICAgIHRoaXMubm9kZUluZGV4ICsgMSA8IHRoaXMucGF0aC5wb2ludHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlSW5kZXgrK1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tIaXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuZW52LnNob3RzLmZvckVhY2goc2hvdCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3MuZGlzdChzaG90LnBvcykgPCB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IHNob3QuZGFtYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5lbnYuc2hvdHMgPSB0aGlzLmVudi5zaG90cy5maWx0ZXIoZW52U2hvdCA9PiBlbnZTaG90ICE9PSBzaG90KVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW52LmVuZW1pZXMgPSB0aGlzLmVudi5lbmVtaWVzLmZpbHRlcihlbmVteSA9PiBlbmVteSAhPT0gdGhpcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vdmUoKVxuICAgICAgICB0aGlzLmNoZWNrSGl0KClcbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIuY2lyY2xlKGN0eCwgdGhpcy5wb3MueCwgdGhpcy5wb3MueSwgdGhpcy5yYWRpdXMsIHsgc3Ryb2tlU3R5bGU6ICdyZWQnLCBsaW5lV2lkdGg6IDIgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBHcmlkLCBDZWxsLCBDZWxsVHlwZSB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFBhdGgsIFBvaW50IH0gZnJvbSAnLi9wYXRoJ1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcidcbmltcG9ydCB7IFR1cnJldCwgU2hvdCB9IGZyb20gJy4vdHVycmV0J1xuaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuL2VuZW15J1xuaW1wb3J0ICogYXMgY29sb3IgZnJvbSAnLi4vcmVzc291cmNlcy9jb2xvci5qc29uJ1xuXG5leHBvcnQgY2xhc3MgRW52IHtcbiAgICBncmlkOiBHcmlkXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHdpZHRoOiBudW1iZXJcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIGNlbGxXaWR0aDogbnVtYmVyXG4gICAgY2VsbEhlaWdodDogbnVtYmVyXG4gICAgdHVycmV0czogQXJyYXk8VHVycmV0PlxuICAgIGVuZW1pZXM6IEFycmF5PEVuZW15PlxuICAgIHNob3RzOiBBcnJheTxTaG90PlxuICAgIGhlYWx0aDogbnVtYmVyXG4gICAgcGF0aDogUGF0aFxuXG4gICAgY29uc3RydWN0b3IoZ3JpZDogR3JpZCwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodFxuICAgICAgICB0aGlzLnR1cnJldHMgPSBbXVxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXVxuICAgICAgICB0aGlzLnNob3RzID0gW11cbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDAwIC8vIGhwXG4gICAgICAgIHRoaXMuY2VsbFdpZHRoID0gdGhpcy53aWR0aCAvIHRoaXMuZ3JpZC5jb2xzXG4gICAgICAgIHRoaXMuY2VsbEhlaWdodCA9IHRoaXMuY2VsbFdpZHRoXG4gICAgICAgIHRoaXMucGF0aCA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHNldFBhdGgocGF0aDogUGF0aCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMucGF0aCkge1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gcGF0aFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0aC5wb2ludHMuZm9yRWFjaChwb2ludCA9PiB0aGlzLnBhdGguYWRkUG9pbnQocG9pbnQpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3Bhd25FbmVteSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEVuZW15KHRoaXMsIDEwMCkpXG4gICAgfVxuXG4gICAgZGVmaW5lQ2VsbHNUeXBlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMucGF0aCB8fCB0aGlzLnBhdGgucG9pbnRzLmxlbmd0aCA8IDIpIHJldHVyblxuICAgICAgICBsZXQgbm9kZUluZGV4OiBudW1iZXIgPSAwXG4gICAgICAgIGNvbnN0IGVwczogbnVtYmVyID0gMlxuICAgICAgICBsZXQgeCA9IHRoaXMucGF0aC5wb2ludHNbMF0ueFxuICAgICAgICBsZXQgeSA9IHRoaXMucGF0aC5wb2ludHNbMF0ueVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwMDA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYOiBudW1iZXIgPSB0aGlzLnBhdGgucG9pbnRzW25vZGVJbmRleCArIDFdLnggLSB0aGlzLnBhdGgucG9pbnRzW25vZGVJbmRleF0ueFxuICAgICAgICAgICAgY29uc3QgZGVsdGFZOiBudW1iZXIgPSB0aGlzLnBhdGgucG9pbnRzW25vZGVJbmRleCArIDFdLnkgLSB0aGlzLnBhdGgucG9pbnRzW25vZGVJbmRleF0ueVxuICAgICAgICAgICAgY29uc3Qgc2xvcGU6IG51bWJlciA9IE1hdGguc3FydChkZWx0YVggKiogMiArIGRlbHRhWSAqKiAyKVxuICAgICAgICAgICAgY29uc3QgYW5nbGU6IG51bWJlciA9IE1hdGguYXRhbjIoZGVsdGFZLCBkZWx0YVgpXG4gICAgICAgICAgICB4ICs9IHNsb3BlICogTWF0aC5jb3MoYW5nbGUpICogMC4wNFxuICAgICAgICAgICAgeSArPSBzbG9wZSAqIE1hdGguc2luKGFuZ2xlKSAqIDAuMDRcbiAgICAgICAgICAgIGNvbnN0IGNlbGw6IENlbGwgPSB0aGlzLmdldENlbGwoeCwgeSlcbiAgICAgICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICAgICAgY2VsbC50eXBlID0gQ2VsbFR5cGUuUm9hZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHggLSB0aGlzLnBhdGgucG9pbnRzW25vZGVJbmRleCArIDFdLngpIDwgZXBzICYmXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoeSAtIHRoaXMucGF0aC5wb2ludHNbbm9kZUluZGV4ICsgMV0ueSkgPCBlcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZUluZGV4ICsgMSA8IHRoaXMucGF0aC5wb2ludHMubGVuZ3RoIC0gMSkgeyBub2RlSW5kZXgrKyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IGJyZWFrIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENlbGwoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBDZWxsIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdyaWQuY2VsbHMgYXMgYW55KS5maW5kKGNlbGwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHggPj0gY2VsbC54ICogdGhpcy5jZWxsV2lkdGggJiZcbiAgICAgICAgICAgICAgICB4IDwgKGNlbGwueCArIDEpICogdGhpcy5jZWxsV2lkdGggKiBjZWxsLndpZHRoICYmXG4gICAgICAgICAgICAgICAgeSA+PSBjZWxsLnkgKiB0aGlzLmNlbGxIZWlnaHQgJiZcbiAgICAgICAgICAgICAgICB5IDwgKGNlbGwueSArIDEpICogdGhpcy5jZWxsSGVpZ2h0ICogY2VsbC5oZWlnaHRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkZXRlY3RDZWxsKGU6IE1vdXNlRXZlbnQpOiBDZWxsIHtcbiAgICAgICAgY29uc3QgeCA9IGUub2Zmc2V0WFxuICAgICAgICBjb25zdCB5ID0gZS5vZmZzZXRZXG4gICAgICAgIHJldHVybiB0aGlzLmdldENlbGwoeCwgeSlcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmUoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdyaWQuY2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuaGlnaGxpZ2h0ID0gZmFsc2UpXG4gICAgICAgIGNvbnN0IGNlbGw6IENlbGwgPSB0aGlzLmRldGVjdENlbGwoZSlcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgIGNlbGwuaGlnaGxpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5ncmlkLmZvY3VzQ2VsbCA9IGNlbGxcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduRW5lbXkoKVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNlbGw6IENlbGwgPSB0aGlzLmRldGVjdENlbGwoZSlcbiAgICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgdGhpcy5wYXRoKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGguYWRkUG9pbnQobmV3IFBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKSlcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lQ2VsbHNUeXBlKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsICYmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLkVtcHR5IHx8IGNlbGwudHlwZSA9PT0gQ2VsbFR5cGUuR3JvdW5kKSkge1xuICAgICAgICAgICAgY2VsbC50eXBlID0gQ2VsbFR5cGUuVHVycmV0XG4gICAgICAgICAgICB0aGlzLnR1cnJldHMucHVzaChuZXcgVHVycmV0KGNlbGwsIHRoaXMpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiBlbmVteS51cGRhdGUoKSlcbiAgICAgICAgdGhpcy50dXJyZXRzLmZvckVhY2godHVycmV0ID0+IHR1cnJldC51cGRhdGUoKSlcbiAgICAgICAgdGhpcy5zaG90cy5mb3JFYWNoKHNob3QgPT4gc2hvdC51cGRhdGUoKSlcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudXBkYXRlKCkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgbGV0IGZpbGxDb2xvcjogc3RyaW5nID0gY29sb3IuYmdcbiAgICAgICAgdGhpcy5ncmlkLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAoY2VsbC50eXBlID09PSBDZWxsVHlwZS5UdXJyZXQpIHtcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSBjb2xvci50dXJyZXRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC50eXBlID09PSBDZWxsVHlwZS5Sb2FkKSB7XG4gICAgICAgICAgICAgICAgZmlsbENvbG9yID0gY29sb3Iucm9hZFxuICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLkdyb3VuZCkge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbG9yLmdyb3VuZFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSBjb2xvci5iZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUmVuZGVyZXIucmVjdChjdHgsIGNlbGwueCAqIHRoaXMuY2VsbFdpZHRoLCBjZWxsLnkgKiB0aGlzLmNlbGxIZWlnaHQsIHRoaXMuY2VsbFdpZHRoICogY2VsbC53aWR0aCAtIC4xNSwgdGhpcy5jZWxsSGVpZ2h0ICogY2VsbC5oZWlnaHQgLSAuMTUsIHtcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IDEsXG4gICAgICAgICAgICAgICAgZmlsbFN0eWxlOiBmaWxsQ29sb3IsXG4gICAgICAgICAgICAgICAgc3Ryb2tlU3R5bGU6IGNvbG9yLnNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogLjVcclxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMucGF0aCkgeyB0aGlzLnBhdGgucmVuZGVyKGN0eCkgfVxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiBlbmVteS5yZW5kZXIoY3R4KSlcbiAgICAgICAgdGhpcy5zaG90cy5mb3JFYWNoKHNob3QgPT4gc2hvdC5yZW5kZXIoY3R4KSlcbiAgICAgICAgdGhpcy50dXJyZXRzLmZvckVhY2godHVycmV0ID0+IHR1cnJldC5yZW5kZXIoY3R4KSlcblxuICAgICAgICBjb25zdCBoaWdobGlnaHRDZWxsOiBDZWxsID0gdGhpcy5ncmlkLmNlbGxzLmZpbmQoY2VsbCA9PiBjZWxsLmhpZ2hsaWdodClcbiAgICAgICAgaWYgKGhpZ2hsaWdodENlbGwpIHtcbiAgICAgICAgICAgIFJlbmRlcmVyLnJlY3QoY3R4LCBoaWdobGlnaHRDZWxsLnggKiB0aGlzLmNlbGxXaWR0aCwgaGlnaGxpZ2h0Q2VsbC55ICogdGhpcy5jZWxsSGVpZ2h0LCB0aGlzLmNlbGxXaWR0aCAqIGhpZ2hsaWdodENlbGwud2lkdGggLSAuMTUsIHRoaXMuY2VsbEhlaWdodCAqIGhpZ2hsaWdodENlbGwuaGVpZ2h0IC0gLjE1LCB7XG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbmN5OiAuMjUsXG4gICAgICAgICAgICAgICAgc3Ryb2tlU3R5bGU6IGNvbG9yLmhpZ2hsaWdodFRyYW5zcGFyZW50LFxuICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogY29sb3IuaGlnaGxpZ2h0VHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gTW92ZSB0byBucG0gcGFja2FnZSAoYXQgbGVhc3QgZ2l0aHViKVxuXG5pbnRlcmZhY2UgTmVpaGJvb3JPYmplY3Qge1xuICAgIHRvcD86IENlbGxcbiAgICByaWdodD86IENlbGxcbiAgICBib3R0b20/OiBDZWxsXG4gICAgbGVmdD86IENlbGxcbn1cblxuZW51bSBDZWxsVHlwZSB7XG4gICAgVHVycmV0LFxuICAgIFJvYWQsXG4gICAgR3JvdW5kLFxuICAgIEVtcHR5XG59XG5cbmNsYXNzIEdyaWQge1xuICAgIHJvd3M6IG51bWJlclxuICAgIGNvbHM6IG51bWJlclxuICAgIGNlbGxzOiBBcnJheTxDZWxsPlxuICAgIGZvY3VzQ2VsbDogQ2VsbFxuXG4gICAgY29uc3RydWN0b3IoY29sczogbnVtYmVyLCByb3dzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5yb3dzID0gcm93c1xuICAgICAgICB0aGlzLmNvbHMgPSBjb2xzXG4gICAgICAgIHRoaXMuY2VsbHMgPSBbXVxuICAgICAgICB0aGlzLmZvY3VzQ2VsbCA9IG51bGxcbiAgICAgICAgdGhpcy5jcmVhdGVDZWxscygpXG4gICAgICAgIHRoaXMuZGVmaW5lTmVpZ2hib29ycygpXG4gICAgfVxuXG4gICAgY3JlYXRlQ2VsbHMoKSB7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuY29sczsgY29sKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMucm93czsgcm93KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzLnB1c2gobmV3IENlbGwoY29sLCByb3cpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQ2VsbChuZXdDZWxsOiBDZWxsKSB7XG4gICAgICAgIGlmICghdGhpcy5jZWxscy5pbmNsdWRlcyhuZXdDZWxsKSkgcmV0dXJuXG4gICAgICAgIGlmIChuZXdDZWxsLndpZHRoICE9PSAxIHx8IG5ld0NlbGwuaGVpZ2h0ICE9PSAxKSB7XG4gICAgICAgICAgICBpZiAobmV3Q2VsbC53aWR0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZ2U6IG51bWJlciA9IG5ld0NlbGwud2lkdGggLSAxXG4gICAgICAgICAgICAgICAgbGV0IHJlbW92ZUNlbGw6IEFycmF5PENlbGw+ID0gdGhpcy5jZWxscy5maWx0ZXIoY2VsbCA9PiBjZWxsLnkgPT09IG5ld0NlbGwueSAmJiBjZWxsLnggPiBuZXdDZWxsLnggJiYgY2VsbC54IDw9IG5ld0NlbGwueCArIHJhbmdlKVxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMgPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+ICFyZW1vdmVDZWxsLmluY2x1ZGVzKGNlbGwpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld0NlbGwuaGVpZ2h0ID4gMSkge1xuICAgICAgICAgICAgICAgIGxldCByYW5nZTogbnVtYmVyID0gbmV3Q2VsbC5oZWlnaHQgLSAxXG4gICAgICAgICAgICAgICAgbGV0IHJlbW92ZUNlbGw6IEFycmF5PENlbGw+ID0gdGhpcy5jZWxscy5maWx0ZXIoY2VsbCA9PiBjZWxsLnggPT09IG5ld0NlbGwueCAmJiBjZWxsLnkgPiBuZXdDZWxsLnkgJiYgY2VsbC55IDw9IG5ld0NlbGwueSArIHJhbmdlKVxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMgPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+ICFyZW1vdmVDZWxsLmluY2x1ZGVzKGNlbGwpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVmaW5lTmVpZ2hib29ycygpXG4gICAgICAgIHRoaXMuY2VsbHNbdGhpcy5jZWxscy5pbmRleE9mKG5ld0NlbGwpXSA9IG5ld0NlbGxcbiAgICB9XG5cbiAgICBkZWZpbmVOZWlnaGJvb3JzKCkge1xuICAgICAgICB0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBjZWxsLm5laWdoYm9vci50b3AgPSBjZWxsLnkgPj0gMSA/IHRoaXMuY2VsbHMuZmlsdGVyKG90aGVyY2VsbCA9PiBvdGhlcmNlbGwueCA8PSBjZWxsLnggJiYgb3RoZXJjZWxsLnggKyBvdGhlcmNlbGwud2lkdGggPiBjZWxsLnggJiYgb3RoZXJjZWxsLnkgPT09IGNlbGwueSAtIGNlbGwuaGVpZ2h0KVswXSA6IG51bGxcbiAgICAgICAgICAgIGNlbGwubmVpZ2hib29yLmJvdHRvbSA9IGNlbGwueSA8PSB0aGlzLnJvd3MgLSAxID8gdGhpcy5jZWxscy5maWx0ZXIob3RoZXJjZWxsID0+IG90aGVyY2VsbC54IDw9IGNlbGwueCAmJiBvdGhlcmNlbGwueCArIG90aGVyY2VsbC53aWR0aCA+IGNlbGwueCAmJiBvdGhlcmNlbGwueSA9PT0gY2VsbC55ICsgY2VsbC5oZWlnaHQpWzBdIDogbnVsbFxuICAgICAgICAgICAgY2VsbC5uZWlnaGJvb3IubGVmdCA9IGNlbGwueCA+PSAxID8gdGhpcy5jZWxscy5maWx0ZXIob3RoZXJjZWxsID0+IG90aGVyY2VsbC55IDw9IGNlbGwueSAmJiBvdGhlcmNlbGwueSArIG90aGVyY2VsbC5oZWlnaHQgPiBjZWxsLnkgJiYgb3RoZXJjZWxsLnggPT09IGNlbGwueCAtIGNlbGwud2lkdGgpWzBdIDogbnVsbFxuICAgICAgICAgICAgY2VsbC5uZWlnaGJvb3IucmlnaHQgPSBjZWxsLnggPD0gdGhpcy5jb2xzIC0gMSA/IHRoaXMuY2VsbHMuZmlsdGVyKG90aGVyY2VsbCA9PiBvdGhlcmNlbGwueSA8PSBjZWxsLnkgJiYgb3RoZXJjZWxsLnkgKyBvdGhlcmNlbGwuaGVpZ2h0ID4gY2VsbC55ICYmIG90aGVyY2VsbC54ID09PSBjZWxsLnggKyBjZWxsLndpZHRoKVswXSA6IG51bGxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVLZXlib2FyZEV2ZW50KGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvY3VzQ2VsbCkgcmV0dXJuXG4gICAgICAgIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgIGNhc2UgJ0tleVcnOlxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNDZWxsLm5laWdoYm9vclsndG9wJ10gPyB0aGlzLmZvY3VzQ2VsbCA9IHRoaXMuZm9jdXNDZWxsLm5laWdoYm9vclsndG9wJ10gOiBudWxsXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICBjYXNlICdLZXlTJzpcbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzQ2VsbC5uZWlnaGJvb3JbJ2JvdHRvbSddID8gdGhpcy5mb2N1c0NlbGwgPSB0aGlzLmZvY3VzQ2VsbC5uZWlnaGJvb3JbJ2JvdHRvbSddIDogbnVsbFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgY2FzZSAnS2V5QSc6XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWydsZWZ0J10gPyB0aGlzLmZvY3VzQ2VsbCA9IHRoaXMuZm9jdXNDZWxsLm5laWdoYm9vclsnbGVmdCddIDogbnVsbFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgIGNhc2UgJ0tleUQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNDZWxsLm5laWdoYm9vclsncmlnaHQnXSA/IHRoaXMuZm9jdXNDZWxsID0gdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWydyaWdodCddIDogbnVsbFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIENlbGwge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIHdpZHRoOiBudW1iZXJcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIGhpZ2hsaWdodDogYm9vbGVhblxuICAgIHR5cGU6IENlbGxUeXBlXG4gICAgbmVpZ2hib29yOiBOZWloYm9vck9iamVjdFxuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoID0gMSwgaGVpZ2h0ID0gMSkge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ID0gZmFsc2VcbiAgICAgICAgdGhpcy50eXBlID0gQ2VsbFR5cGUuR3JvdW5kXG4gICAgICAgIHRoaXMubmVpZ2hib29yID0ge31cbiAgICB9XG5cbiAgICB0b2dnbGVIaWdobGlnaHQoKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ID0gIXRoaXMuaGlnaGxpZ2h0XG4gICAgfVxufVxuXG5leHBvcnQgeyBHcmlkLCBDZWxsLCBDZWxsVHlwZSB9XG4iLCJpbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyJ1xuXG5jbGFzcyBQYXRoIHtcbiAgICBlbnRyeTogUG9pbnRcbiAgICBwb2ludHM6IEFycmF5PFBvaW50PlxuICAgIGVuZDogUG9pbnRcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50czogQXJyYXk8UG9pbnQ+KSB7XG4gICAgICAgIHRoaXMuZW50cnkgPSBwb2ludHNbMF0gfHwgbnVsbFxuICAgICAgICB0aGlzLmVuZCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1cbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHMuc29ydCgocG9pbnQxLCBwb2ludDIpID0+IHRoaXMuZW50cnkuZGlzdChwb2ludDEpIC0gdGhpcy5lbnRyeS5kaXN0KHBvaW50MikpXG4gICAgfVxuXG4gICAgYWRkUG9pbnQocG9pbnQ6IFBvaW50KTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5lbnRyeSkgdGhpcy5lbnRyeSA9IHBvaW50XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpXG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGUoKVxuICAgIH1cblxuICAgIHJlY2FsY3VsYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVuZCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIFJlbmRlcmVyLnBvbHkoY3R4LCB0aGlzLnBvaW50cywgeyBsaW5lV2lkdGg6IDEgfSlcbiAgICB9XG59XG5cbmNsYXNzIFBvaW50IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgIH1cblxuICAgIGRpc3QocG9pbnQ6IFBvaW50KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gcG9pbnQueCkgKiogMiArICh0aGlzLnkgLSBwb2ludC55KSAqKiAyKVxuICAgIH1cbn1cblxuY2xhc3MgVmVjdG9yMiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICB9XG59XG5cbmV4cG9ydCB7IFBhdGgsIFBvaW50LCBWZWN0b3IyIH1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wYXRoJ1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSdcblxuaW50ZXJmYWNlIFN0eWxlT2JqZWN0IHtcbiAgICBzdHJva2VTdHlsZT86IHN0cmluZyxcbiAgICBsaW5lV2lkdGg/OiBudW1iZXIsXG4gICAgbGluZUpvaW4/OiBDYW52YXNMaW5lSm9pbixcbiAgICBmaWxsU3R5bGU/OiBzdHJpbmcsXG4gICAgdHJhbnNwYXJlbmN5PzogbnVtYmVyXG59XG5cbmNvbnN0IGRlZmF1bHRTdHlsZU9iamVjdDogU3R5bGVPYmplY3QgPSB7XG4gICAgc3Ryb2tlU3R5bGU6ICdibGFjaycsXG4gICAgbGluZVdpZHRoOiA0LFxuICAgIGxpbmVKb2luOiAncm91bmQnLFxuICAgIGZpbGxTdHlsZTogJ2JsYWNrJyxcbiAgICB0cmFuc3BhcmVuY3k6IDFcbn1cblxuY2xhc3MgUmVuZGVyZXIge1xuXG4gICAgc3RhdGljIHN0eWxlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBvYmo/OiBTdHlsZU9iamVjdCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdHlsZU9iamVjdCA9IHsgLi4uZGVmYXVsdFN0eWxlT2JqZWN0LCAuLi5vYmogfVxuICAgICAgICBjdHgubGluZVdpZHRoID0gc3R5bGVPYmplY3QubGluZVdpZHRoXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0eWxlT2JqZWN0LnN0cm9rZVN0eWxlXG4gICAgICAgIGN0eC5saW5lSm9pbiA9IHN0eWxlT2JqZWN0LmxpbmVKb2luXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBzdHlsZU9iamVjdC5maWxsU3R5bGVcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gc3R5bGVPYmplY3QudHJhbnNwYXJlbmN5XG4gICAgfVxuXG4gICAgc3RhdGljIGxpbmUoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQsIG9iaj86IFN0eWxlT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIFJlbmRlcmVyLnN0eWxlKGN0eCwgb2JqKVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyhwb2ludDEueCwgcG9pbnQxLnkpXG4gICAgICAgIGN0eC5saW5lVG8ocG9pbnQyLngsIHBvaW50Mi55KVxuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVjdChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBvYmo/OiBTdHlsZU9iamVjdCk6IHZvaWQge1xuICAgICAgICBSZW5kZXJlci5zdHlsZShjdHgsIG9iailcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgfVxuXG4gICAgc3RhdGljIHBvbHkoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvaW50czogQXJyYXk8UG9pbnQ+LCBvYmo/OiBTdHlsZU9iamVjdCkge1xuICAgICAgICBSZW5kZXJlci5zdHlsZShjdHgsIG9iailcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnkpXG4gICAgICAgIH1cbiAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgc3RhdGljIGNpcmNsZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBvYmo/OiBTdHlsZU9iamVjdCkge1xuICAgICAgICBSZW5kZXJlci5zdHlsZShjdHgsIG9iailcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgc3RhdGljIHBvaW50KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgb2JqPzogU3R5bGVPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIuY2lyY2xlKGN0eCwgeCwgeSwgNSwgb2JqKVxuICAgIH1cblxuICAgIHN0YXRpYyByZWN0U3ByaXRlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRleHR1cmU6IFRleHR1cmUpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIuc3R5bGUoY3R4LCB7fSlcbiAgICAgICAgY3R4LnNhdmUoKVxuICAgICAgICBjdHgudHJhbnNsYXRlKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQgLyAyKVxuICAgICAgICBjdHguc2NhbGUodGV4dHVyZS5zY2FsZS54LCB0ZXh0dXJlLnNjYWxlLnkpXG4gICAgICAgIGN0eC5yb3RhdGUodGV4dHVyZS5yb3RhdGlvbilcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRleHR1cmUuaW1hZ2UsXG4gICAgICAgICAgICB3aWR0aCAqIHRleHR1cmUub2Zmc2V0LnggLSB3aWR0aCAvIDIsXG4gICAgICAgICAgICBoZWlnaHQgKiB0ZXh0dXJlLm9mZnNldC55IC0gaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgY3R4LnJlc3RvcmUoKVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUmVuZGVyZXIgfVxuIiwiaW1wb3J0IHsgUG9pbnQsIFZlY3RvcjIgfSBmcm9tICcuL3BhdGgnXG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgVFVSUkVUX0JBU0UgfSBmcm9tICcuLi9yZXNzb3VyY2VzL2Fzc2V0cy90dXJyZXQtYmFzZS0yLnBuZydcbmltcG9ydCB7IGRlZmF1bHQgYXMgVFVSUkVUX0hFQUQgfSBmcm9tICcuLi9yZXNzb3VyY2VzL2Fzc2V0cy90dXJyZXQtaGVhZC0yLnBuZydcblxuXG5pbnRlcmZhY2UgVGV4dHVyZU9wdGlvbnMge1xuICAgIHJvdGF0aW9uPzogbnVtYmVyLCAvLyByYWRpYW5zXG4gICAgb2Zmc2V0PzogVmVjdG9yMixcbiAgICBzY2FsZT86IFZlY3RvcjJcbn1cblxuY29uc3QgVl9OVUxMID0gbmV3IFZlY3RvcjIoMCwgMClcbmNvbnN0IFZfVU5JVCA9IG5ldyBWZWN0b3IyKDEsIDEpXG5cbmNsYXNzIFRleHR1cmUge1xuICAgIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50XG4gICAgcm90YXRpb246IG51bWJlclxuICAgIG9mZnNldDogVmVjdG9yMlxuICAgIHNpemU6IFZlY3RvcjJcbiAgICBzY2FsZTogVmVjdG9yMlxuICAgIG9wdGlvbnM6IFRleHR1cmVPcHRpb25zXG5cbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZywgb3B0aW9ucz86IFRleHR1cmVPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHNvdXJjZVxuICAgICAgICB0aGlzLnNpemUgPSBuZXcgVmVjdG9yMih0aGlzLmltYWdlLndpZHRoLCB0aGlzLmltYWdlLmhlaWdodClcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5vcHRpb25zLnJvdGF0aW9uIHx8IDBcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLm9wdGlvbnMub2Zmc2V0IHx8IFZfTlVMTCAvLyByZWxhdGl2ZSB0byB0aGUgc2l6ZVxuICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5vcHRpb25zLnNjYWxlIHx8IFZfVU5JVFxuICAgIH1cbn1cblxuY2xhc3MgU3ByaXRlIGV4dGVuZHMgVGV4dHVyZSB7XG4gICAgY29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcsIG9wdGlvbnM/OiBUZXh0dXJlT3B0aW9ucykge1xuICAgICAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpXG4gICAgfVxufVxuXG5jb25zdCBUVVJSRVRfQkFTRV9URVhUVVJFID0gbmV3IFRleHR1cmUoVFVSUkVUX0JBU0UpXG5jb25zdCBUVVJSRVRfSEVBRF9URVhUVVJFID0gbmV3IFRleHR1cmUoVFVSUkVUX0hFQUQsIHsgc2NhbGU6IG5ldyBWZWN0b3IyKDEuMiwgMS4yKSwgb2Zmc2V0OiBuZXcgVmVjdG9yMigwLCAtMSAvIDkpLCByb3RhdGlvbjogMiAqIE1hdGguUEkgfSlcblxuZXhwb3J0IHsgU3ByaXRlLCBUZXh0dXJlIH1cbmV4cG9ydCB7IFRVUlJFVF9CQVNFX1RFWFRVUkUsIFRVUlJFVF9IRUFEX1RFWFRVUkUgfVxuIiwiaW1wb3J0IHsgQ2VsbCwgQ2VsbFR5cGUgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcGF0aCdcbmltcG9ydCB7IEVudiB9IGZyb20gJy4vZW52J1xuaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuL2VuZW15J1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcidcblxuaW1wb3J0IHsgVFVSUkVUX0JBU0VfVEVYVFVSRSwgVFVSUkVUX0hFQURfVEVYVFVSRSB9IGZyb20gJy4vdGV4dHVyZSdcblxuY2xhc3MgVHVycmV0IHtcbiAgICBjZWxsOiBDZWxsXG4gICAgZW52OiBFbnZcbiAgICBvcmlnaW46IFBvaW50XG4gICAgcG9zOiBQb2ludFxuICAgIGhlYWx0aDogbnVtYmVyXG4gICAgcmFkaXVzOiBudW1iZXJcbiAgICB0YXJnZXQ6IEVuZW15XG4gICAgY2FuU2hvb3Q6IGJvb2xlYW5cbiAgICBkaXI6IG51bWJlclxuICAgIGZpcmVSYXRlOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKGNlbGw6IENlbGwsIGVudjogRW52KSB7XG4gICAgICAgIHRoaXMuY2VsbCA9IGNlbGxcbiAgICAgICAgdGhpcy5lbnYgPSBlbnZcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBuZXcgUG9pbnQodGhpcy5jZWxsLnggKiB0aGlzLmVudi5jZWxsV2lkdGgsIHRoaXMuY2VsbC55ICogdGhpcy5lbnYuY2VsbFdpZHRoKVxuICAgICAgICB0aGlzLnBvcyA9IG5ldyBQb2ludCgodGhpcy5jZWxsLnggKyAwLjUpICogdGhpcy5lbnYuY2VsbFdpZHRoLCAodGhpcy5jZWxsLnkgKyAwLjUpICogdGhpcy5lbnYuY2VsbFdpZHRoKVxuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMFxuICAgICAgICB0aGlzLnJhZGl1cyA9IDEwMFxuICAgICAgICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZFxuICAgICAgICB0aGlzLmNhblNob290ID0gdHJ1ZVxuICAgICAgICB0aGlzLmRpciA9IC1NYXRoLlBJIC8gMlxuICAgICAgICB0aGlzLmZpcmVSYXRlID0gMTAwIC8vIGVhY2ggbXNcbiAgICB9XG5cbiAgICBzaG9vdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETzogcHJlZGljdCBwb3NpdGlvblxuICAgICAgICB0aGlzLmVudi5zaG90cy5wdXNoKG5ldyBTaG90KDxQb2ludD57IC4uLnRoaXMucG9zIH0sIHRoaXMuZGlyKSlcbiAgICAgICAgdGhpcy5jYW5TaG9vdCA9IGZhbHNlXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FuU2hvb3QgPSB0cnVlXG4gICAgICAgIH0sIHRoaXMuZmlyZVJhdGUpXG4gICAgfVxuXG4gICAgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0YXJnZXRzOiBBcnJheTxFbmVteT4gPSB0aGlzLmVudi5lbmVtaWVzXG4gICAgICAgICAgICAuc29ydCgoZW5lbXkxLCBlbmVteTIpID0+IHRoaXMucG9zLmRpc3QoZW5lbXkxLnBvcykgLSB0aGlzLnBvcy5kaXN0KGVuZW15Mi5wb3MpKVxuICAgICAgICAgICAgLmZpbHRlcihlbmVteSA9PiB0aGlzLnBvcy5kaXN0KGVuZW15LnBvcykgPCB0aGlzLnJhZGl1cylcbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoKSB7IHRoaXMudGFyZ2V0ID0gdGFyZ2V0c1swXSB9XG4gICAgICAgIGVsc2UgeyB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZCB9XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmRpciA9IE1hdGguYXRhbjIodGhpcy50YXJnZXQucG9zLnkgLSB0aGlzLnBvcy55LCB0aGlzLnRhcmdldC5wb3MueCAtIHRoaXMucG9zLngpXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5TaG9vdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvb3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIFRVUlJFVF9IRUFEX1RFWFRVUkUucm90YXRpb24gPSB0aGlzLmRpciArIE1hdGguUEkgLyAyXG4gICAgICAgIFJlbmRlcmVyLnJlY3RTcHJpdGUoY3R4LCB0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55LCB0aGlzLmVudi5jZWxsV2lkdGgsIHRoaXMuZW52LmNlbGxXaWR0aCwgVFVSUkVUX0JBU0VfVEVYVFVSRSlcbiAgICAgICAgUmVuZGVyZXIucmVjdFNwcml0ZShjdHgsIHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnksIHRoaXMuZW52LmNlbGxXaWR0aCwgdGhpcy5lbnYuY2VsbFdpZHRoLCBUVVJSRVRfSEVBRF9URVhUVVJFKVxuICAgICAgICAvLyBSZW5kZXJlci5jaXJjbGUoY3R4LCB0aGlzLnBvcy54LCB0aGlzLnBvcy55LCAxMCwgeyBsaW5lV2lkdGg6IDIsIHN0cm9rZVN0eWxlOiAnYmxhY2snIH0pXG4gICAgICAgIFJlbmRlcmVyLmNpcmNsZShjdHgsIHRoaXMucG9zLngsIHRoaXMucG9zLnksIHRoaXMucmFkaXVzLCB7IGxpbmVXaWR0aDogMSwgdHJhbnNwYXJlbmN5OiAuMjUsIHN0cm9rZVN0eWxlOiAnd2hpdGUnIH0pXG4gICAgfVxufVxuXG5jbGFzcyBTaG90IHtcbiAgICBwb3M6IFBvaW50XG4gICAgZGlyOiBudW1iZXJcbiAgICBkYW1hZ2U6IG51bWJlclxuICAgIGxlbmd0aDogbnVtYmVyXG4gICAgc3BlZWQ6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IocG9zOiBQb2ludCwgZGlyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBwb3NcbiAgICAgICAgdGhpcy5kaXIgPSBkaXJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAxMFxuICAgICAgICB0aGlzLmxlbmd0aCA9IDEwXG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMFxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wb3MueCArPSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy5kaXIpXG4gICAgICAgIHRoaXMucG9zLnkgKz0gdGhpcy5zcGVlZCAqIE1hdGguc2luKHRoaXMuZGlyKVxuICAgIH1cblxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBSZW5kZXJlci5saW5lKGN0eCwgdGhpcy5wb3MsIG5ldyBQb2ludCh0aGlzLnBvcy54ICsgdGhpcy5sZW5ndGggKiBNYXRoLmNvcyh0aGlzLmRpciksIHRoaXMucG9zLnkgKyB0aGlzLmxlbmd0aCAqIE1hdGguc2luKHRoaXMuZGlyKSksIHsgbGluZVdpZHRoOiAyLCBzdHJva2VTdHlsZTogJ2JsYWNrJyB9KVxuICAgIH1cbn1cblxuZXhwb3J0IHsgVHVycmV0LCBTaG90IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=