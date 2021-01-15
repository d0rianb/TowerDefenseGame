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
        this.turrets.forEach(turret => turret.render(ctx));
        this.shots.forEach(shot => shot.render(ctx));
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
}
exports.Renderer = Renderer;


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
class Turret {
    constructor(cell, env) {
        this.cell = cell;
        this.env = env;
        this.pos = new path_1.Point((this.cell.x + 0.5) * this.env.cellWidth, (this.cell.y + 0.5) * this.env.cellWidth);
        this.health = 100;
        this.radius = 100;
        this.target = undefined;
        this.canShoot = true;
        this.fireRate = 100; // each ms
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
        if (this.target && this.canShoot) {
            // TODO: predict position
            this.env.shots.push(new Shot(Object.assign({}, this.pos), Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x)));
            this.canShoot = false;
            window.setTimeout(() => {
                this.canShoot = true;
            }, this.fireRate);
        }
    }
    render(ctx) {
        render_1.Renderer.circle(ctx, this.pos.x, this.pos.y, 10, { lineWidth: 2, strokeStyle: 'black' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy90dXJyZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsK0RBQTJCO0FBQzNCLGtFQUFtQztBQUNuQyxrRUFBb0M7QUFFcEMsU0FBUyxZQUFZLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDdEMsTUFBTSxLQUFLLEdBQVcsTUFBTSxDQUFDLGdCQUFnQjtJQUM3QyxNQUFNLE1B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TSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLE1BQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQzFELE1BQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNsRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ25FLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ25FLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFNBQVMsRUFBRTtTQUNuQjtJQUNMLENBQUM7SUFFRCxRQUFR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LFNBQVMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbk0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDckwsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUN0TSxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsbUJBQW1CLENBQUMsQ0FBZ0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTTtRQUMzQixRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDWixLQUFLLFNBQVMsQ0FBQztZ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QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqRCxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQTZCO1FBQ2hDLGlCQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksWUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDakwsQ0FBQztDQUNKO0FBRWdCLG9CQUFJIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgeyBFbnYgfSBmcm9tICcuL2VudidcbmltcG9ydCB7IEdyaWQsIENlbGwgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBQYXRoLCBQb2ludCB9IGZyb20gJy4vcGF0aCdcblxuZnVuY3Rpb24gY3JlYXRlQ2FudmFzKHc6IG51bWJlciwgaDogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIGNvbnN0IHJhdGlvOiBudW1iZXIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIGNhbnZhcy53aWR0aCA9IHcgKiByYXRpb1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoICogcmF0aW9cbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3ICsgJ3B4J1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4J1xuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnNldFRyYW5zZm9ybShyYXRpbywgMCwgMCwgcmF0aW8sIDAsIDApXG4gICAgY2FudmFzLm9uY29udGV4dG1lbnUgPSBlID0+IGUucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVybiBjYW52YXNcbn1cblxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGNyZWF0ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXG5jb25zdCBncmlkOiBHcmlkID0gbmV3IEdyaWQoNTAsIDUwKVxuY29uc3QgZW52OiBFbnYgPSBuZXcgRW52KGdyaWQsIGNhbnZhcylcblxuY29uc3QgZW50cnlQb2ludDogUG9pbnQgPSBuZXcgUG9pbnQoMCwgMClcbmNvbnN0IHBhdGg6IFBhdGggPSBuZXcgUGF0aChbZW50cnlQb2ludF0pXG5cbmVudi5zZXRQYXRoKHBhdGgpXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBlbnYuaGFuZGxlS2V5RG93bihlKSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IGVudi5oYW5kbGVNb3VzZU1vdmUoZSkpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGVudi5oYW5kbGVNb3VzZUNsaWNrKGUpKVxuXG5cbmVudi51cGRhdGUoKVxuIiwiaW1wb3J0IHsgUGF0aCwgUG9pbnQgfSBmcm9tICcuL3BhdGgnXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi9lbnYnXG5cbmV4cG9ydCBjbGFzcyBFbmVteSB7XG4gICAgZW52OiBFbnZcbiAgICBwYXRoOiBQYXRoXG4gICAgcG9zOiBQb2ludFxuICAgIG5vZGVJbmRleDogbnVtYmVyXG4gICAgcmFkaXVzOiBudW1iZXJcbiAgICBzcGVlZDogbnVtYmVyXG4gICAgaGVhbHRoOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKGVudjogRW52LCBoZWFsdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmVudiA9IGVudlxuICAgICAgICB0aGlzLnBhdGggPSB0aGlzLmVudi5wYXRoXG4gICAgICAgIHRoaXMubm9kZUluZGV4ID0gMFxuICAgICAgICB0aGlzLnBvcyA9IG5ldyBQb2ludCh0aGlzLnBhdGguZW50cnkueCwgdGhpcy5wYXRoLmVudHJ5LnkpXG4gICAgICAgIHRoaXMucmFkaXVzID0gMTBcbiAgICAgICAgdGhpcy5zcGVlZCA9IC4wMVxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aFxuICAgIH1cblxuICAgIG1vdmUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGVwcyA9IDJcbiAgICAgICAgY29uc3QgZGVsdGFYOiBudW1iZXIgPSB0aGlzLnBhdGgucG9pbnRzW3RoaXMubm9kZUluZGV4ICsgMV0ueCAtIHRoaXMucGF0aC5wb2ludHNbdGhpcy5ub2RlSW5kZXhdLnhcbiAgICAgICAgY29uc3QgZGVsdGFZOiBudW1iZXIgPSB0aGlzLnBhdGgucG9pbnRzW3RoaXMubm9kZUluZGV4ICsgMV0ueSAtIHRoaXMucGF0aC5wb2ludHNbdGhpcy5ub2RlSW5kZXhdLnlcbiAgICAgICAgY29uc3Qgc2xvcGU6IG51bWJlciA9IE1hdGguc3FydChkZWx0YVggKiogMiArIGRlbHRhWSAqKiAyKVxuICAgICAgICBjb25zdCBhbmdsZTogbnVtYmVyID0gTWF0aC5hdGFuMihkZWx0YVksIGRlbHRhWClcbiAgICAgICAgdGhpcy5wb3MueCArPSB0aGlzLnNwZWVkICogc2xvcGUgKiBNYXRoLmNvcyhhbmdsZSlcbiAgICAgICAgdGhpcy5wb3MueSArPSB0aGlzLnNwZWVkICogc2xvcGUgKiBNYXRoLnNpbihhbmdsZSlcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMucG9zLnggLSB0aGlzLnBhdGgucG9pbnRzW3RoaXMubm9kZUluZGV4ICsgMV0ueCkgPCBlcHMgJiZcbiAgICAgICAgICAgIE1hdGguYWJzKHRoaXMucG9zLnkgLSB0aGlzLnBhdGgucG9pbnRzW3RoaXMubm9kZUluZGV4ICsgMV0ueSkgPCBlcHMgJiZcbiAgICAgICAgICAgIHRoaXMubm9kZUluZGV4ICsgMSA8IHRoaXMucGF0aC5wb2ludHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlSW5kZXgrK1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tIaXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuZW52LnNob3RzLmZvckVhY2goc2hvdCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3MuZGlzdChzaG90LnBvcykgPCB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IHNob3QuZGFtYWdlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnYuZW5lbWllcyA9IHRoaXMuZW52LmVuZW1pZXMuZmlsdGVyKGVuZW15ID0+IGVuZW15ICE9PSB0aGlzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW92ZSgpXG4gICAgICAgIHRoaXMuY2hlY2tIaXQoKVxuICAgIH1cblxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgICAgICBSZW5kZXJlci5jaXJjbGUoY3R4LCB0aGlzLnBvcy54LCB0aGlzLnBvcy55LCB0aGlzLnJhZGl1cywgeyBzdHJva2VTdHlsZTogJ3JlZCcsIGxpbmVXaWR0aDogMiB9KVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEdyaWQsIENlbGwsIENlbGxUeXBlIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgUGF0aCwgUG9pbnQgfSBmcm9tICcuL3BhdGgnXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyJ1xuaW1wb3J0IHsgVHVycmV0LCBTaG90IH0gZnJvbSAnLi90dXJyZXQnXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vZW5lbXknXG5pbXBvcnQgKiBhcyBjb2xvciBmcm9tICcuLi9yZXNzb3VyY2VzL2NvbG9yLmpzb24nXG5cbmV4cG9ydCBjbGFzcyBFbnYge1xuICAgIGdyaWQ6IEdyaWRcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgd2lkdGg6IG51bWJlclxuICAgIGhlaWdodDogbnVtYmVyXG4gICAgY2VsbFdpZHRoOiBudW1iZXJcbiAgICBjZWxsSGVpZ2h0OiBudW1iZXJcbiAgICB0dXJyZXRzOiBBcnJheTxUdXJyZXQ+XG4gICAgZW5lbWllczogQXJyYXk8RW5lbXk+XG4gICAgc2hvdHM6IEFycmF5PFNob3Q+XG4gICAgaGVhbHRoOiBudW1iZXJcbiAgICBwYXRoOiBQYXRoXG5cbiAgICBjb25zdHJ1Y3RvcihncmlkOiBHcmlkLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWRcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0XG4gICAgICAgIHRoaXMudHVycmV0cyA9IFtdXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdXG4gICAgICAgIHRoaXMuc2hvdHMgPSBbXVxuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDAgLy8gaHBcbiAgICAgICAgdGhpcy5jZWxsV2lkdGggPSB0aGlzLndpZHRoIC8gdGhpcy5ncmlkLmNvbHNcbiAgICAgICAgdGhpcy5jZWxsSGVpZ2h0ID0gdGhpcy5jZWxsV2lkdGhcbiAgICAgICAgdGhpcy5wYXRoID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgc2V0UGF0aChwYXRoOiBQYXRoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5wYXRoKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGggPSBwYXRoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRoLnBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHRoaXMucGF0aC5hZGRQb2ludChwb2ludCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGF3bkVuZW15KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRW5lbXkodGhpcywgMTAwKSlcbiAgICB9XG5cbiAgICBkZWZpbmVDZWxsc1R5cGUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5wYXRoIHx8IHRoaXMucGF0aC5wb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuXG4gICAgICAgIGxldCBub2RlSW5kZXg6IG51bWJlciA9IDBcbiAgICAgICAgY29uc3QgZXBzOiBudW1iZXIgPSAyXG4gICAgICAgIGxldCB4ID0gdGhpcy5wYXRoLnBvaW50c1swXS54XG4gICAgICAgIGxldCB5ID0gdGhpcy5wYXRoLnBvaW50c1swXS55XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjAwMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVg6IG51bWJlciA9IHRoaXMucGF0aC5wb2ludHNbbm9kZUluZGV4ICsgMV0ueCAtIHRoaXMucGF0aC5wb2ludHNbbm9kZUluZGV4XS54XG4gICAgICAgICAgICBjb25zdCBkZWx0YVk6IG51bWJlciA9IHRoaXMucGF0aC5wb2ludHNbbm9kZUluZGV4ICsgMV0ueSAtIHRoaXMucGF0aC5wb2ludHNbbm9kZUluZGV4XS55XG4gICAgICAgICAgICBjb25zdCBzbG9wZTogbnVtYmVyID0gTWF0aC5zcXJ0KGRlbHRhWCAqKiAyICsgZGVsdGFZICoqIDIpXG4gICAgICAgICAgICBjb25zdCBhbmdsZTogbnVtYmVyID0gTWF0aC5hdGFuMihkZWx0YVksIGRlbHRhWClcbiAgICAgICAgICAgIHggKz0gc2xvcGUgKiBNYXRoLmNvcyhhbmdsZSkgKiAwLjA0XG4gICAgICAgICAgICB5ICs9IHNsb3BlICogTWF0aC5zaW4oYW5nbGUpICogMC4wNFxuICAgICAgICAgICAgY29uc3QgY2VsbDogQ2VsbCA9IHRoaXMuZ2V0Q2VsbCh4LCB5KVxuICAgICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnR5cGUgPSBDZWxsVHlwZS5Sb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoeCAtIHRoaXMucGF0aC5wb2ludHNbbm9kZUluZGV4ICsgMV0ueCkgPCBlcHMgJiZcbiAgICAgICAgICAgICAgICBNYXRoLmFicyh5IC0gdGhpcy5wYXRoLnBvaW50c1tub2RlSW5kZXggKyAxXS55KSA8IGVwcykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlSW5kZXggKyAxIDwgdGhpcy5wYXRoLnBvaW50cy5sZW5ndGggLSAxKSB7IG5vZGVJbmRleCsrIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgYnJlYWsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q2VsbCh4OiBudW1iZXIsIHk6IG51bWJlcik6IENlbGwge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ3JpZC5jZWxscyBhcyBhbnkpLmZpbmQoY2VsbCA9PiB7XG4gICAgICAgICAgICByZXR1cm4geCA+PSBjZWxsLnggKiB0aGlzLmNlbGxXaWR0aCAmJlxuICAgICAgICAgICAgICAgIHggPCAoY2VsbC54ICsgMSkgKiB0aGlzLmNlbGxXaWR0aCAqIGNlbGwud2lkdGggJiZcbiAgICAgICAgICAgICAgICB5ID49IGNlbGwueSAqIHRoaXMuY2VsbEhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHkgPCAoY2VsbC55ICsgMSkgKiB0aGlzLmNlbGxIZWlnaHQgKiBjZWxsLmhlaWdodFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRldGVjdENlbGwoZTogTW91c2VFdmVudCk6IENlbGwge1xuICAgICAgICBjb25zdCB4ID0gZS5vZmZzZXRYXG4gICAgICAgIGNvbnN0IHkgPSBlLm9mZnNldFlcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbCh4LCB5KVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JpZC5jZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5oaWdobGlnaHQgPSBmYWxzZSlcbiAgICAgICAgY29uc3QgY2VsbDogQ2VsbCA9IHRoaXMuZGV0ZWN0Q2VsbChlKVxuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgY2VsbC5oaWdobGlnaHQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmdyaWQuZm9jdXNDZWxsID0gY2VsbFxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUtleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgICAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25FbmVteSgpXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZUNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2VsbDogQ2VsbCA9IHRoaXMuZGV0ZWN0Q2VsbChlKVxuICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiB0aGlzLnBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aC5hZGRQb2ludChuZXcgUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpKVxuICAgICAgICAgICAgdGhpcy5kZWZpbmVDZWxsc1R5cGUoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGwgJiYgKGNlbGwudHlwZSA9PT0gQ2VsbFR5cGUuRW1wdHkgfHwgY2VsbC50eXBlID09PSBDZWxsVHlwZS5Hcm91bmQpKSB7XG4gICAgICAgICAgICBjZWxsLnR5cGUgPSBDZWxsVHlwZS5UdXJyZXRcbiAgICAgICAgICAgIHRoaXMudHVycmV0cy5wdXNoKG5ldyBUdXJyZXQoY2VsbCwgdGhpcykpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLnR1cnJldHMuZm9yRWFjaCh0dXJyZXQgPT4gdHVycmV0LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGUoKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICBsZXQgZmlsbENvbG9yOiBzdHJpbmcgPSBjb2xvci5iZ1xuICAgICAgICB0aGlzLmdyaWQuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLlR1cnJldCkge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbG9yLnR1cnJldFxuICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLlJvYWQpIHtcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSBjb2xvci5yb2FkXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwudHlwZSA9PT0gQ2VsbFR5cGUuR3JvdW5kKSB7XG4gICAgICAgICAgICAgICAgZmlsbENvbG9yID0gY29sb3IuZ3JvdW5kXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbG9yLmJnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZW5kZXJlci5yZWN0KGN0eCwgY2VsbC54ICogdGhpcy5jZWxsV2lkdGgsIGNlbGwueSAqIHRoaXMuY2VsbEhlaWdodCwgdGhpcy5jZWxsV2lkdGggKiBjZWxsLndpZHRoIC0gLjE1LCB0aGlzLmNlbGxIZWlnaHQgKiBjZWxsLmhlaWdodCAtIC4xNSwge1xuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW5jeTogMSxcbiAgICAgICAgICAgICAgICBmaWxsU3R5bGU6IGZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogY29sb3Iuc2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAuNVxyXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5wYXRoKSB7IHRoaXMucGF0aC5yZW5kZXIoY3R4KSB9XG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnJlbmRlcihjdHgpKVxuICAgICAgICB0aGlzLnR1cnJldHMuZm9yRWFjaCh0dXJyZXQgPT4gdHVycmV0LnJlbmRlcihjdHgpKVxuICAgICAgICB0aGlzLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LnJlbmRlcihjdHgpKVxuXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodENlbGw6IENlbGwgPSB0aGlzLmdyaWQuY2VsbHMuZmluZChjZWxsID0+IGNlbGwuaGlnaGxpZ2h0KVxuICAgICAgICBpZiAoaGlnaGxpZ2h0Q2VsbCkge1xuICAgICAgICAgICAgUmVuZGVyZXIucmVjdChjdHgsIGhpZ2hsaWdodENlbGwueCAqIHRoaXMuY2VsbFdpZHRoLCBoaWdobGlnaHRDZWxsLnkgKiB0aGlzLmNlbGxIZWlnaHQsIHRoaXMuY2VsbFdpZHRoICogaGlnaGxpZ2h0Q2VsbC53aWR0aCAtIC4xNSwgdGhpcy5jZWxsSGVpZ2h0ICogaGlnaGxpZ2h0Q2VsbC5oZWlnaHQgLSAuMTUsIHtcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IC4yNSxcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogY29sb3IuaGlnaGxpZ2h0VHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgZmlsbFN0eWxlOiBjb2xvci5oaWdobGlnaHRUcmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBNb3ZlIHRvIG5wbSBwYWNrYWdlIChhdCBsZWFzdCBnaXRodWIpXG5cbmludGVyZmFjZSBOZWloYm9vck9iamVjdCB7XG4gICAgdG9wPzogQ2VsbFxuICAgIHJpZ2h0PzogQ2VsbFxuICAgIGJvdHRvbT86IENlbGxcbiAgICBsZWZ0PzogQ2VsbFxufVxuXG5lbnVtIENlbGxUeXBlIHtcbiAgICBUdXJyZXQsXG4gICAgUm9hZCxcbiAgICBHcm91bmQsXG4gICAgRW1wdHlcbn1cblxuY2xhc3MgR3JpZCB7XG4gICAgcm93czogbnVtYmVyXG4gICAgY29sczogbnVtYmVyXG4gICAgY2VsbHM6IEFycmF5PENlbGw+XG4gICAgZm9jdXNDZWxsOiBDZWxsXG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xzOiBudW1iZXIsIHJvd3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzXG4gICAgICAgIHRoaXMuY29scyA9IGNvbHNcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgIHRoaXMuZm9jdXNDZWxsID0gbnVsbFxuICAgICAgICB0aGlzLmNyZWF0ZUNlbGxzKClcbiAgICAgICAgdGhpcy5kZWZpbmVOZWlnaGJvb3JzKClcbiAgICB9XG5cbiAgICBjcmVhdGVDZWxscygpIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5jb2xzOyBjb2wrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5yb3dzOyByb3crKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChuZXcgQ2VsbChjb2wsIHJvdykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDZWxsKG5ld0NlbGw6IENlbGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNlbGxzLmluY2x1ZGVzKG5ld0NlbGwpKSByZXR1cm5cbiAgICAgICAgaWYgKG5ld0NlbGwud2lkdGggIT09IDEgfHwgbmV3Q2VsbC5oZWlnaHQgIT09IDEpIHtcbiAgICAgICAgICAgIGlmIChuZXdDZWxsLndpZHRoID4gMSkge1xuICAgICAgICAgICAgICAgIGxldCByYW5nZTogbnVtYmVyID0gbmV3Q2VsbC53aWR0aCAtIDFcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQ2VsbDogQXJyYXk8Q2VsbD4gPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IGNlbGwueSA9PT0gbmV3Q2VsbC55ICYmIGNlbGwueCA+IG5ld0NlbGwueCAmJiBjZWxsLnggPD0gbmV3Q2VsbC54ICsgcmFuZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGNlbGwgPT4gIXJlbW92ZUNlbGwuaW5jbHVkZXMoY2VsbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3Q2VsbC5oZWlnaHQgPiAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlOiBudW1iZXIgPSBuZXdDZWxsLmhlaWdodCAtIDFcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQ2VsbDogQXJyYXk8Q2VsbD4gPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IGNlbGwueCA9PT0gbmV3Q2VsbC54ICYmIGNlbGwueSA+IG5ld0NlbGwueSAmJiBjZWxsLnkgPD0gbmV3Q2VsbC55ICsgcmFuZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGNlbGwgPT4gIXJlbW92ZUNlbGwuaW5jbHVkZXMoY2VsbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWZpbmVOZWlnaGJvb3JzKClcbiAgICAgICAgdGhpcy5jZWxsc1t0aGlzLmNlbGxzLmluZGV4T2YobmV3Q2VsbCldID0gbmV3Q2VsbFxuICAgIH1cblxuICAgIGRlZmluZU5laWdoYm9vcnMoKSB7XG4gICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwubmVpZ2hib29yLnRvcCA9IGNlbGwueSA+PSAxID8gdGhpcy5jZWxscy5maWx0ZXIob3RoZXJjZWxsID0+IG90aGVyY2VsbC54IDw9IGNlbGwueCAmJiBvdGhlcmNlbGwueCArIG90aGVyY2VsbC53aWR0aCA+IGNlbGwueCAmJiBvdGhlcmNlbGwueSA9PT0gY2VsbC55IC0gY2VsbC5oZWlnaHQpWzBdIDogbnVsbFxuICAgICAgICAgICAgY2VsbC5uZWlnaGJvb3IuYm90dG9tID0gY2VsbC55IDw9IHRoaXMucm93cyAtIDEgPyB0aGlzLmNlbGxzLmZpbHRlcihvdGhlcmNlbGwgPT4gb3RoZXJjZWxsLnggPD0gY2VsbC54ICYmIG90aGVyY2VsbC54ICsgb3RoZXJjZWxsLndpZHRoID4gY2VsbC54ICYmIG90aGVyY2VsbC55ID09PSBjZWxsLnkgKyBjZWxsLmhlaWdodClbMF0gOiBudWxsXG4gICAgICAgICAgICBjZWxsLm5laWdoYm9vci5sZWZ0ID0gY2VsbC54ID49IDEgPyB0aGlzLmNlbGxzLmZpbHRlcihvdGhlcmNlbGwgPT4gb3RoZXJjZWxsLnkgPD0gY2VsbC55ICYmIG90aGVyY2VsbC55ICsgb3RoZXJjZWxsLmhlaWdodCA+IGNlbGwueSAmJiBvdGhlcmNlbGwueCA9PT0gY2VsbC54IC0gY2VsbC53aWR0aClbMF0gOiBudWxsXG4gICAgICAgICAgICBjZWxsLm5laWdoYm9vci5yaWdodCA9IGNlbGwueCA8PSB0aGlzLmNvbHMgLSAxID8gdGhpcy5jZWxscy5maWx0ZXIob3RoZXJjZWxsID0+IG90aGVyY2VsbC55IDw9IGNlbGwueSAmJiBvdGhlcmNlbGwueSArIG90aGVyY2VsbC5oZWlnaHQgPiBjZWxsLnkgJiYgb3RoZXJjZWxsLnggPT09IGNlbGwueCArIGNlbGwud2lkdGgpWzBdIDogbnVsbFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUtleWJvYXJkRXZlbnQoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9jdXNDZWxsKSByZXR1cm5cbiAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgY2FzZSAnS2V5Vyc6XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWyd0b3AnXSA/IHRoaXMuZm9jdXNDZWxsID0gdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWyd0b3AnXSA6IG51bGxcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIGNhc2UgJ0tleVMnOlxuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNDZWxsLm5laWdoYm9vclsnYm90dG9tJ10gPyB0aGlzLmZvY3VzQ2VsbCA9IHRoaXMuZm9jdXNDZWxsLm5laWdoYm9vclsnYm90dG9tJ10gOiBudWxsXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICBjYXNlICdLZXlBJzpcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzQ2VsbC5uZWlnaGJvb3JbJ2xlZnQnXSA/IHRoaXMuZm9jdXNDZWxsID0gdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWydsZWZ0J10gOiBudWxsXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgY2FzZSAnS2V5RCc6XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWydyaWdodCddID8gdGhpcy5mb2N1c0NlbGwgPSB0aGlzLmZvY3VzQ2VsbC5uZWlnaGJvb3JbJ3JpZ2h0J10gOiBudWxsXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ2VsbCB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgd2lkdGg6IG51bWJlclxuICAgIGhlaWdodDogbnVtYmVyXG4gICAgaGlnaGxpZ2h0OiBib29sZWFuXG4gICAgdHlwZTogQ2VsbFR5cGVcbiAgICBuZWlnaGJvb3I6IE5laWhib29yT2JqZWN0XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGggPSAxLCBoZWlnaHQgPSAxKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSBmYWxzZVxuICAgICAgICB0aGlzLnR5cGUgPSBDZWxsVHlwZS5Hcm91bmRcbiAgICAgICAgdGhpcy5uZWlnaGJvb3IgPSB7fVxuICAgIH1cblxuICAgIHRvZ2dsZUhpZ2hsaWdodCgpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSAhdGhpcy5oaWdobGlnaHRcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdyaWQsIENlbGwsIENlbGxUeXBlIH1cbiIsImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXInXG5cbmNsYXNzIFBhdGgge1xuICAgIGVudHJ5OiBQb2ludFxuICAgIHBvaW50czogQXJyYXk8UG9pbnQ+XG4gICAgZW5kOiBQb2ludFxuXG4gICAgY29uc3RydWN0b3IocG9pbnRzOiBBcnJheTxQb2ludD4pIHtcbiAgICAgICAgdGhpcy5lbnRyeSA9IHBvaW50c1swXSB8fCBudWxsXG4gICAgICAgIHRoaXMuZW5kID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVxuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cy5zb3J0KChwb2ludDEsIHBvaW50MikgPT4gdGhpcy5lbnRyeS5kaXN0KHBvaW50MSkgLSB0aGlzLmVudHJ5LmRpc3QocG9pbnQyKSlcbiAgICB9XG5cbiAgICBhZGRQb2ludChwb2ludDogUG9pbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmVudHJ5KSB0aGlzLmVudHJ5ID0gcG9pbnRcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwb2ludClcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZSgpXG4gICAgfVxuXG4gICAgcmVjYWxjdWxhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW5kID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV1cbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIucG9seShjdHgsIHRoaXMucG9pbnRzLCB7IGxpbmVXaWR0aDogMSB9KVxuICAgIH1cbn1cblxuY2xhc3MgUG9pbnQge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxuXG4gICAgZGlzdChwb2ludDogUG9pbnQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnggLSBwb2ludC54KSAqKiAyICsgKHRoaXMueSAtIHBvaW50LnkpICoqIDIpXG4gICAgfVxufVxuXG5cbmV4cG9ydCB7IFBhdGgsIFBvaW50IH1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wYXRoJ1xuXG5pbnRlcmZhY2UgU3R5bGVPYmplY3Qge1xuICAgIHN0cm9rZVN0eWxlPzogc3RyaW5nLFxuICAgIGxpbmVXaWR0aD86IG51bWJlcixcbiAgICBsaW5lSm9pbj86IENhbnZhc0xpbmVKb2luLFxuICAgIGZpbGxTdHlsZT86IHN0cmluZyxcbiAgICB0cmFuc3BhcmVuY3k/OiBudW1iZXJcbn1cblxuY29uc3QgZGVmYXVsdFN0eWxlT2JqZWN0OiBTdHlsZU9iamVjdCA9IHtcbiAgICBzdHJva2VTdHlsZTogJ2JsYWNrJyxcbiAgICBsaW5lV2lkdGg6IDQsXG4gICAgbGluZUpvaW46ICdyb3VuZCcsXG4gICAgZmlsbFN0eWxlOiAnYmxhY2snLFxuICAgIHRyYW5zcGFyZW5jeTogMVxufVxuXG5jbGFzcyBSZW5kZXJlciB7XG5cbiAgICBzdGF0aWMgc3R5bGUoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG9iaj86IFN0eWxlT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0eWxlT2JqZWN0ID0geyAuLi5kZWZhdWx0U3R5bGVPYmplY3QsIC4uLm9iaiB9XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBzdHlsZU9iamVjdC5saW5lV2lkdGhcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc3R5bGVPYmplY3Quc3Ryb2tlU3R5bGVcbiAgICAgICAgY3R4LmxpbmVKb2luID0gc3R5bGVPYmplY3QubGluZUpvaW5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHN0eWxlT2JqZWN0LmZpbGxTdHlsZVxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSBzdHlsZU9iamVjdC50cmFuc3BhcmVuY3lcbiAgICB9XG5cbiAgICBzdGF0aWMgbGluZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCwgb2JqPzogU3R5bGVPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIuc3R5bGUoY3R4LCBvYmopXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHBvaW50MS54LCBwb2ludDEueSlcbiAgICAgICAgY3R4LmxpbmVUbyhwb2ludDIueCwgcG9pbnQyLnkpXG4gICAgICAgIGN0eC5zdHJva2UoKVxuICAgIH1cblxuICAgIHN0YXRpYyByZWN0KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG9iaj86IFN0eWxlT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIFJlbmRlcmVyLnN0eWxlKGN0eCwgb2JqKVxuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9seShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcG9pbnRzOiBBcnJheTxQb2ludD4sIG9iaj86IFN0eWxlT2JqZWN0KSB7XG4gICAgICAgIFJlbmRlcmVyLnN0eWxlKGN0eCwgb2JqKVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnkpXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjdHgubGluZVRvKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSlcbiAgICAgICAgfVxuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBzdGF0aWMgY2lyY2xlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIG9iaj86IFN0eWxlT2JqZWN0KSB7XG4gICAgICAgIFJlbmRlcmVyLnN0eWxlKGN0eCwgb2JqKVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9pbnQoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBvYmo/OiBTdHlsZU9iamVjdCkge1xuICAgICAgICBSZW5kZXJlci5jaXJjbGUoY3R4LCB4LCB5LCA1LCBvYmopXG4gICAgfVxufVxuXG5leHBvcnQgeyBSZW5kZXJlciB9XG4iLCJpbXBvcnQgeyBDZWxsLCBDZWxsVHlwZSB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wYXRoJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi9lbnYnXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vZW5lbXknXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyJ1xuXG5jbGFzcyBUdXJyZXQge1xuICAgIGNlbGw6IENlbGxcbiAgICBlbnY6IEVudlxuICAgIHBvczogUG9pbnRcbiAgICBoZWFsdGg6IG51bWJlclxuICAgIHJhZGl1czogbnVtYmVyXG4gICAgdGFyZ2V0OiBFbmVteVxuICAgIGNhblNob290OiBib29sZWFuXG4gICAgZmlyZVJhdGU6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoY2VsbDogQ2VsbCwgZW52OiBFbnYpIHtcbiAgICAgICAgdGhpcy5jZWxsID0gY2VsbFxuICAgICAgICB0aGlzLmVudiA9IGVudlxuICAgICAgICB0aGlzLnBvcyA9IG5ldyBQb2ludCgodGhpcy5jZWxsLnggKyAwLjUpICogdGhpcy5lbnYuY2VsbFdpZHRoLCAodGhpcy5jZWxsLnkgKyAwLjUpICogdGhpcy5lbnYuY2VsbFdpZHRoKVxuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMFxuICAgICAgICB0aGlzLnJhZGl1cyA9IDEwMFxuICAgICAgICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZFxuICAgICAgICB0aGlzLmNhblNob290ID0gdHJ1ZVxuICAgICAgICB0aGlzLmZpcmVSYXRlID0gMTAwIC8vIGVhY2ggbXNcbiAgICB9XG5cbiAgICB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRhcmdldHM6IEFycmF5PEVuZW15PiA9IHRoaXMuZW52LmVuZW1pZXNcbiAgICAgICAgICAgIC5zb3J0KChlbmVteTEsIGVuZW15MikgPT4gdGhpcy5wb3MuZGlzdChlbmVteTEucG9zKSAtIHRoaXMucG9zLmRpc3QoZW5lbXkyLnBvcykpXG4gICAgICAgICAgICAuZmlsdGVyKGVuZW15ID0+IHRoaXMucG9zLmRpc3QoZW5lbXkucG9zKSA8IHRoaXMucmFkaXVzKVxuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGgpIHsgdGhpcy50YXJnZXQgPSB0YXJnZXRzWzBdIH1cbiAgICAgICAgZWxzZSB7IHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkIH1cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMuY2FuU2hvb3QpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHByZWRpY3QgcG9zaXRpb25cbiAgICAgICAgICAgIHRoaXMuZW52LnNob3RzLnB1c2gobmV3IFNob3QoPFBvaW50PnsgLi4udGhpcy5wb3MgfSwgTWF0aC5hdGFuMih0aGlzLnRhcmdldC5wb3MueSAtIHRoaXMucG9zLnksIHRoaXMudGFyZ2V0LnBvcy54IC0gdGhpcy5wb3MueCkpKVxuICAgICAgICAgICAgdGhpcy5jYW5TaG9vdCA9IGZhbHNlXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5TaG9vdCA9IHRydWVcbiAgICAgICAgICAgIH0sIHRoaXMuZmlyZVJhdGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIuY2lyY2xlKGN0eCwgdGhpcy5wb3MueCwgdGhpcy5wb3MueSwgMTAsIHsgbGluZVdpZHRoOiAyLCBzdHJva2VTdHlsZTogJ2JsYWNrJyB9KVxuICAgICAgICBSZW5kZXJlci5jaXJjbGUoY3R4LCB0aGlzLnBvcy54LCB0aGlzLnBvcy55LCB0aGlzLnJhZGl1cywgeyBsaW5lV2lkdGg6IDEsIHRyYW5zcGFyZW5jeTogLjI1LCBzdHJva2VTdHlsZTogJ3doaXRlJyB9KVxuICAgIH1cbn1cblxuY2xhc3MgU2hvdCB7XG4gICAgcG9zOiBQb2ludFxuICAgIGRpcjogbnVtYmVyXG4gICAgZGFtYWdlOiBudW1iZXJcbiAgICBsZW5ndGg6IG51bWJlclxuICAgIHNwZWVkOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHBvczogUG9pbnQsIGRpcjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9zID0gcG9zXG4gICAgICAgIHRoaXMuZGlyID0gZGlyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gMTBcbiAgICAgICAgdGhpcy5sZW5ndGggPSAxMFxuICAgICAgICB0aGlzLnNwZWVkID0gMTBcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucG9zLnggKz0gdGhpcy5zcGVlZCAqIE1hdGguY29zKHRoaXMuZGlyKVxuICAgICAgICB0aGlzLnBvcy55ICs9IHRoaXMuc3BlZWQgKiBNYXRoLnNpbih0aGlzLmRpcilcbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgUmVuZGVyZXIubGluZShjdHgsIHRoaXMucG9zLCBuZXcgUG9pbnQodGhpcy5wb3MueCArIHRoaXMubGVuZ3RoICogTWF0aC5jb3ModGhpcy5kaXIpLCB0aGlzLnBvcy55ICsgdGhpcy5sZW5ndGggKiBNYXRoLnNpbih0aGlzLmRpcikpLCB7IGxpbmVXaWR0aDogMiwgc3Ryb2tlU3R5bGU6ICdibGFjaycgfSlcbiAgICB9XG59XG5cbmV4cG9ydCB7IFR1cnJldCwgU2hvdCB9XG4iXSwic291cmNlUm9vdCI6IiJ9