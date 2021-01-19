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

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/svg-path-builder/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/svg-path-builder/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var COMMAND_TYPES={line:'line',curve:'curve',arc:'arc'};var POSITION_MODES={abs:'absolute',rel:'relative'};var COMMANDS=[{type:COMMAND_TYPES.line,key:'M',name:'moveTo'},{type:COMMAND_TYPES.line,key:'L',name:'lineTo'},{type:COMMAND_TYPES.line,key:'H',name:'horizontalLineTo'},{type:COMMAND_TYPES.line,key:'V',name:'verticalLineTo'}];var PathBuilder=function(){function PathBuilder(){var _this=this;_classCallCheck(this,PathBuilder);this.data='';this.mode=POSITION_MODES.abs;this.closed=false;COMMANDS.forEach(function(_ref){var type=_ref.type,key=_ref.key,name=_ref.name;Object.defineProperty(_this,name,{enumerable:true,value:_this._getCommandProvider(type,key,name)});});}_createClass(PathBuilder,[{key:'_getCommandProvider',value:function _getCommandProvider(type,key){var _this2=this;switch(type){case COMMAND_TYPES.line:return function(x,y){return _this2._applyLineCommand(key,x,y);};}}},{key:'_applyLineCommand',value:function _applyLineCommand(key,x,y){if(this.closed){console.warn('command apply command to closed path');return this;}x=key==='V'?'':x;y=key==='H'?'':' '+y;this.data+=' '+this._parseCommandKey(key)+x+y;return this;}},{key:'_parseCommandKey',value:function _parseCommandKey(key){if(this.mode===POSITION_MODES.abs){return key.toUpperCase();}return key.toLowerCase();}},{key:'_setPositionMode',value:function _setPositionMode(mode){this.mode=mode;}},{key:'reset',value:function reset(){this.data='';}},{key:'toString',value:function toString(){return this.data;}},{key:'relative',value:function relative(){this._setPositionMode(POSITION_MODES.rel);return this;}},{key:'absolute',value:function absolute(){this._setPositionMode(POSITION_MODES.abs);return this;}},{key:'closePath',value:function closePath(){this.path+=' Z';this.closed=true;return this;}},{key:'isClosed',value:function isClosed(){return this.closed;}}]);return PathBuilder;}();exports.default=PathBuilder;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

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
    const ratio = window.devicePixelRatio || 1;
    const canvas = document.createElement('canvas');
    canvas.width = w * ratio;
    canvas.height = h * ratio;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
    canvas.oncontextmenu = e => e.preventDefault(); // No right click
    return canvas;
}
const loadingScreen = document.querySelector('.loading-screen');
const progressBar = document.querySelector('.loading-screen progress');
const canvas = createCanvas(window.innerWidth, window.innerHeight);
const ctx = canvas.getContext('2d');
progressBar.value += 10;
document.querySelector('main').appendChild(canvas);
progressBar.value += 10;
const grid = new grid_1.Grid(50, 50);
const env = new env_1.Env(grid, canvas);
progressBar.value += 10;
const entryPoint = new path_1.Point(0, 0);
const path = new path_1.Path([entryPoint]);
// env.setPath(path)
// Load Map
env.loadMap('test3.map');
progressBar.value += 10;
loadingScreen.style.display = 'none';
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
        this.speed = 5;
        this.health = health;
        this.alive = true;
        this.percent = 0;
        this.angle = 0;
    }
    move() {
        const pos = this.nextPos();
        this.pos.x = pos.x;
        this.pos.y = pos.y;
        this.percent += this.path.length * this.speed * 1e-5;
        let posBefore = this.path.pointAt(this.percent - 1);
        let posAfter = this.path.pointAt(this.percent + 1);
        this.angle = Math.atan2(posAfter.y - posBefore.y, posAfter.x - posBefore.x) * 180 / Math.PI;
    }
    nextPos(iteration = 1) {
        let nextPercent = this.path.length * this.speed * 1e-5 * iteration;
        return this.path.pointAt(this.percent + nextPercent);
    }
    checkHit() {
        this.env.shots.forEach(shot => {
            if (this.pos.dist(shot.pos) < this.radius) {
                this.health -= shot.damage;
                this.env.shots = this.env.shots.filter(envShot => envShot !== shot);
                if (this.health <= 0) {
                    this.alive = false;
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
const file_saver_1 = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
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
    loadMap(filename) {
        fetch(`ressources/map/${filename.replace(/\.map/, '')}.map`)
            .then(data => data.json())
            .then(map => {
            const scaleFactor = {
                x: this.canvas.width / map.screen.width,
                y: this.canvas.height / map.screen.width,
            };
            const path = path_1.Path.fromJSON(map.path, scaleFactor);
            this.setPath(path);
            this.path.toSVGPath();
        })
            .catch(err => console.error(err));
    }
    saveMap(filename) {
        const name = filename.replace('.map', '');
        const mapObject = {
            'map-name': name,
            screen: { width: this.canvas.width, height: this.canvas.height },
            path: { points: this.path.points.map(point => [point.x, point.y]) }
        };
        const file = new Blob([JSON.stringify(mapObject)], { type: 'application/json' });
        file_saver_1.saveAs(file, `${name}.map`);
    }
    setPath(path) {
        if (!this.path) {
            this.path = path;
        }
        else {
            path.points.forEach(point => this.path.addPoint(point));
        }
        this.defineCellsType();
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
                break;
            case 'Enter':
                this.saveMap('test2.map');
                e.preventDefault();
                break;
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
        this.enemies = this.enemies.filter(enemy => enemy.alive);
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

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const svg_path_builder_1 = __importDefault(__webpack_require__(/*! svg-path-builder */ "./node_modules/svg-path-builder/dist/index.js"));
const render_1 = __webpack_require__(/*! ./render */ "./src/render.ts");
class Path {
    constructor(points) {
        this.entry = points[0] || null;
        this.end = points[points.length - 1];
        this.points = points;
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        this.svg.setAttribute('d', this.toSVGPath());
        this.length = this.svg.getTotalLength();
    }
    static fromJSON(json, scaleFactor = exports.V_UNIT) {
        const points = json.points.map(tuple => new Point(tuple[0] * scaleFactor.x, tuple[1] * scaleFactor.y));
        return new Path(points);
    }
    addPoint(point) {
        if (!this.entry)
            this.entry = point;
        this.points.push(point);
        this.recalculate();
    }
    pointAt(percent) {
        return this.svg.getPointAtLength(this.length * percent / 100);
    }
    recalculate() {
        this.end = this.points[this.points.length - 1];
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        this.svg.setAttribute('d', this.toSVGPath());
    }
    toSVGPath() {
        const builder = new svg_path_builder_1.default();
        const path = builder.moveTo(this.entry.x, this.entry.y);
        for (let i = 1; i < this.points.length; i++) {
            path.lineTo(this.points[i].x, this.points[i].y); // smoothTo ?
        }
        const stringPath = path.toString();
        return stringPath;
    }
    render(ctx) {
        render_1.Renderer.poly(ctx, this.points, { lineWidth: 1, fillStyle: 'grey', transparency: .25 });
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
exports.V_NULL = new Vector2(0, 0);
exports.V_UNIT = new Vector2(1, 1);


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
class Texture {
    constructor(source, options) {
        this.image = new Image();
        this.image.src = source;
        this.size = new path_1.Vector2(this.image.width, this.image.height);
        this.options = options || {};
        this.rotation = this.options.rotation || 0;
        this.offset = this.options.offset || path_1.V_NULL; // relative to the size
        this.scale = this.options.scale || path_1.V_UNIT;
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
const TURRET_HEAD_TEXTURE = new Texture(turret_head_2_png_1.default, { scale: new path_1.Vector2(1.2, 1.2), offset: new path_1.Vector2(0, -1 / 9) });
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
        if (!this.target || this.pos.dist(this.target.pos) > this.radius || !this.target.alive) {
            const targets = this.env.enemies
                .sort((enemy1, enemy2) => this.pos.dist(enemy1.pos) - this.pos.dist(enemy2.pos))
                .filter(enemy => this.pos.dist(enemy.pos) < this.radius);
            if (targets.length) {
                this.target = targets[0];
            }
            else {
                this.target = undefined;
            }
        }
        if (this.target) {
            const predictTargetPos = this.target.nextPos(4);
            this.dir = Math.atan2(predictTargetPos.y - this.pos.y, predictTargetPos.x - this.pos.x);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcGF0aC1idWlsZGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNzb3VyY2VzL2Fzc2V0cy90dXJyZXQtYmFzZS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9yZXNzb3VyY2VzL2Fzc2V0cy90dXJyZXQtaGVhZC0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52LnRzIiwid2VicGFjazovLy8uL3NyYy9ncmlkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R1cnJldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFB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LENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3BMLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbk0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDckwsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxH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O0lBQ2pMLENBQUM7Q0FDSjtBQUVnQixvQkFBSSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGEsYixjKXt2YXIgZD1uZXcgWE1MSHR0cFJlcXVlc3Q7ZC5vcGVuKFwiR0VUXCIsYSksZC5yZXNwb25zZVR5cGU9XCJibG9iXCIsZC5vbmxvYWQ9ZnVuY3Rpb24oKXtnKGQucmVzcG9uc2UsYixjKX0sZC5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxkLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5uYXZpZ2F0b3ImJi9NYWNpbnRvc2gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJi9BcHBsZVdlYktpdC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmIS9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksZz1mLnNhdmVBc3x8KFwib2JqZWN0XCIhPXR5cGVvZiB3aW5kb3d8fHdpbmRvdyE9PWY/ZnVuY3Rpb24oKXt9OlwiZG93bmxvYWRcImluIEhUTUxBbmNob3JFbGVtZW50LnByb3RvdHlwZSYmIWE/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihiLGQsZSxnKXtpZihnPWd8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxnJiYoZy5kb2N1bWVudC50aXRsZT1nLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGIpcmV0dXJuIGMoYixkLGUpO3ZhciBoPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1iLnR5cGUsaT0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxqPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoanx8aCYmaXx8YSkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaz1uZXcgRmlsZVJlYWRlcjtrLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWsucmVzdWx0O2E9aj9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxnP2cubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZz1udWxsfSxrLnJlYWRBc0RhdGFVUkwoYil9ZWxzZXt2YXIgbD1mLlVSTHx8Zi53ZWJraXRVUkwsbT1sLmNyZWF0ZU9iamVjdFVSTChiKTtnP2cubG9jYXRpb249bTpsb2NhdGlvbi5ocmVmPW0sZz1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLnJldm9rZU9iamVjdFVSTChtKX0sNEU0KX19KTtmLnNhdmVBcz1nLnNhdmVBcz1nLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1nKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7dmFyIF9jcmVhdGVDbGFzcz1mdW5jdGlvbigpe2Z1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LHByb3BzKXtmb3IodmFyIGk9MDtpPHByb3BzLmxlbmd0aDtpKyspe3ZhciBkZXNjcmlwdG9yPXByb3BzW2ldO2Rlc2NyaXB0b3IuZW51bWVyYWJsZT1kZXNjcmlwdG9yLmVudW1lcmFibGV8fGZhbHNlO2Rlc2NyaXB0b3IuY29uZmlndXJhYmxlPXRydWU7aWYoXCJ2YWx1ZVwiaW4gZGVzY3JpcHRvcilkZXNjcmlwdG9yLndyaXRhYmxlPXRydWU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxkZXNjcmlwdG9yLmtleSxkZXNjcmlwdG9yKTt9fXJldHVybiBmdW5jdGlvbihDb25zdHJ1Y3Rvcixwcm90b1Byb3BzLHN0YXRpY1Byb3BzKXtpZihwcm90b1Byb3BzKWRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLHByb3RvUHJvcHMpO2lmKHN0YXRpY1Byb3BzKWRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3Isc3RhdGljUHJvcHMpO3JldHVybiBDb25zdHJ1Y3Rvcjt9O30oKTtmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsQ29uc3RydWN0b3Ipe2lmKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3Rvcikpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7fX12YXIgQ09NTUFORF9UWVBFUz17bGluZTonbGluZScsY3VydmU6J2N1cnZlJyxhcmM6J2FyYyd9O3ZhciBQT1NJVElPTl9NT0RFUz17YWJzOidhYnNvbHV0ZScscmVsOidyZWxhdGl2ZSd9O3ZhciBDT01NQU5EUz1be3R5cGU6Q09NTUFORF9UWVBFUy5saW5lLGtleTonTScsbmFtZTonbW92ZVRvJ30se3R5cGU6Q09NTUFORF9UWVBFUy5saW5lLGtleTonTCcsbmFtZTonbGluZVRvJ30se3R5cGU6Q09NTUFORF9UWVBFUy5saW5lLGtleTonSCcsbmFtZTonaG9yaXpvbnRhbExpbmVUbyd9LHt0eXBlOkNPTU1BTkRfVFlQRVMubGluZSxrZXk6J1YnLG5hbWU6J3ZlcnRpY2FsTGluZVRvJ31dO3ZhciBQYXRoQnVpbGRlcj1mdW5jdGlvbigpe2Z1bmN0aW9uIFBhdGhCdWlsZGVyKCl7dmFyIF90aGlzPXRoaXM7X2NsYXNzQ2FsbENoZWNrKHRoaXMsUGF0aEJ1aWxkZXIpO3RoaXMuZGF0YT0nJzt0aGlzLm1vZGU9UE9TSVRJT05fTU9ERVMuYWJzO3RoaXMuY2xvc2VkPWZhbHNlO0NPTU1BTkRTLmZvckVhY2goZnVuY3Rpb24oX3JlZil7dmFyIHR5cGU9X3JlZi50eXBlLGtleT1fcmVmLmtleSxuYW1lPV9yZWYubmFtZTtPYmplY3QuZGVmaW5lUHJvcGVydHkoX3RoaXMsbmFtZSx7ZW51bWVyYWJsZTp0cnVlLHZhbHVlOl90aGlzLl9nZXRDb21tYW5kUHJvdmlkZXIodHlwZSxrZXksbmFtZSl9KTt9KTt9X2NyZWF0ZUNsYXNzKFBhdGhCdWlsZGVyLFt7a2V5OidfZ2V0Q29tbWFuZFByb3ZpZGVyJyx2YWx1ZTpmdW5jdGlvbiBfZ2V0Q29tbWFuZFByb3ZpZGVyKHR5cGUsa2V5KXt2YXIgX3RoaXMyPXRoaXM7c3dpdGNoKHR5cGUpe2Nhc2UgQ09NTUFORF9UWVBFUy5saW5lOnJldHVybiBmdW5jdGlvbih4LHkpe3JldHVybiBfdGhpczIuX2FwcGx5TGluZUNvbW1hbmQoa2V5LHgseSk7fTt9fX0se2tleTonX2FwcGx5TGluZUNvbW1hbmQnLHZhbHVlOmZ1bmN0aW9uIF9hcHBseUxpbmVDb21tYW5kKGtleSx4LHkpe2lmKHRoaXMuY2xvc2VkKXtjb25zb2xlLndhcm4oJ2NvbW1hbmQgYXBwbHkgY29tbWFuZCB0byBjbG9zZWQgcGF0aCcpO3JldHVybiB0aGlzO314PWtleT09PSdWJz8nJzp4O3k9a2V5PT09J0gnPycnOicgJyt5O3RoaXMuZGF0YSs9JyAnK3RoaXMuX3BhcnNlQ29tbWFuZEtleShrZXkpK3greTtyZXR1cm4gdGhpczt9fSx7a2V5OidfcGFyc2VDb21tYW5kS2V5Jyx2YWx1ZTpmdW5jdGlvbiBfcGFyc2VDb21tYW5kS2V5KGtleSl7aWYodGhpcy5tb2RlPT09UE9TSVRJT05fTU9ERVMuYWJzKXtyZXR1cm4ga2V5LnRvVXBwZXJDYXNlKCk7fXJldHVybiBrZXkudG9Mb3dlckNhc2UoKTt9fSx7a2V5Oidfc2V0UG9zaXRpb25Nb2RlJyx2YWx1ZTpmdW5jdGlvbiBfc2V0UG9zaXRpb25Nb2RlKG1vZGUpe3RoaXMubW9kZT1tb2RlO319LHtrZXk6J3Jlc2V0Jyx2YWx1ZTpmdW5jdGlvbiByZXNldCgpe3RoaXMuZGF0YT0nJzt9fSx7a2V5Oid0b1N0cmluZycsdmFsdWU6ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5kYXRhO319LHtrZXk6J3JlbGF0aXZlJyx2YWx1ZTpmdW5jdGlvbiByZWxhdGl2ZSgpe3RoaXMuX3NldFBvc2l0aW9uTW9kZShQT1NJVElPTl9NT0RFUy5yZWwpO3JldHVybiB0aGlzO319LHtrZXk6J2Fic29sdXRlJyx2YWx1ZTpmdW5jdGlvbiBhYnNvbHV0ZSgpe3RoaXMuX3NldFBvc2l0aW9uTW9kZShQT1NJVElPTl9NT0RFUy5hYnMpO3JldHVybiB0aGlzO319LHtrZXk6J2Nsb3NlUGF0aCcsdmFsdWU6ZnVuY3Rpb24gY2xvc2VQYXRoKCl7dGhpcy5wYXRoKz0nIFonO3RoaXMuY2xvc2VkPXRydWU7cmV0dXJuIHRoaXM7fX0se2tleTonaXNDbG9zZWQnLHZhbHVlOmZ1bmN0aW9uIGlzQ2xvc2VkKCl7cmV0dXJuIHRoaXMuY2xvc2VkO319XSk7cmV0dXJuIFBhdGhCdWlsZGVyO30oKTtleHBvcnRzLmRlZmF1bHQ9UGF0aEJ1aWxkZXI7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0LzMwOWQwZmE5NjIyMGQ2YjA5ZTgwODc3OGNkOGQ2ZWVkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9lZDcyMzA1ZGEzYjUxZWI4OTkwNDE2NDI1OTNlNDBmMS5wbmdcIjsiLCJpbXBvcnQgeyBFbnYgfSBmcm9tICcuL2VudidcbmltcG9ydCB7IEdyaWQsIENlbGwgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBQYXRoLCBQb2ludCB9IGZyb20gJy4vcGF0aCdcblxuZnVuY3Rpb24gY3JlYXRlQ2FudmFzKHc6IG51bWJlciwgaDogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIGNvbnN0IHJhdGlvOiBudW1iZXIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgY2FudmFzLndpZHRoID0gdyAqIHJhdGlvXG4gICAgY2FudmFzLmhlaWdodCA9IGggKiByYXRpb1xuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHcgKyAncHgnXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGggKyAncHgnXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuc2V0VHJhbnNmb3JtKHJhdGlvLCAwLCAwLCByYXRpbywgMCwgMClcbiAgICBjYW52YXMub25jb250ZXh0bWVudSA9IGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpIC8vIE5vIHJpZ2h0IGNsaWNrXG4gICAgcmV0dXJuIGNhbnZhc1xufVxuXG5jb25zdCBsb2FkaW5nU2NyZWVuOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXNjcmVlbicpXG5jb25zdCBwcm9ncmVzc0JhcjogSFRNTFByb2dyZXNzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXNjcmVlbiBwcm9ncmVzcycpXG5cblxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGNyZWF0ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxucHJvZ3Jlc3NCYXIudmFsdWUgKz0gMTBcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKGNhbnZhcylcbnByb2dyZXNzQmFyLnZhbHVlICs9IDEwXG5cbmNvbnN0IGdyaWQ6IEdyaWQgPSBuZXcgR3JpZCg1MCwgNTApXG5jb25zdCBlbnY6IEVudiA9IG5ldyBFbnYoZ3JpZCwgY2FudmFzKVxucHJvZ3Jlc3NCYXIudmFsdWUgKz0gMTBcblxuY29uc3QgZW50cnlQb2ludDogUG9pbnQgPSBuZXcgUG9pbnQoMCwgMClcbmNvbnN0IHBhdGg6IFBhdGggPSBuZXcgUGF0aChbZW50cnlQb2ludF0pXG4vLyBlbnYuc2V0UGF0aChwYXRoKVxuXG5cbi8vIExvYWQgTWFwXG5lbnYubG9hZE1hcCgndGVzdDMubWFwJylcbnByb2dyZXNzQmFyLnZhbHVlICs9IDEwXG5sb2FkaW5nU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBlbnYuaGFuZGxlS2V5RG93bihlKSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IGVudi5oYW5kbGVNb3VzZU1vdmUoZSkpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGVudi5oYW5kbGVNb3VzZUNsaWNrKGUpKVxuXG5cbmVudi51cGRhdGUoKVxuIiwiaW1wb3J0IHsgUGF0aCwgUG9pbnQgfSBmcm9tICcuL3BhdGgnXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi9lbnYnXG5cbmV4cG9ydCBjbGFzcyBFbmVteSB7XG4gICAgZW52OiBFbnZcbiAgICBwYXRoOiBQYXRoXG4gICAgcG9zOiBQb2ludFxuICAgIG5vZGVJbmRleDogbnVtYmVyXG4gICAgcmFkaXVzOiBudW1iZXJcbiAgICBzcGVlZDogbnVtYmVyXG4gICAgcGVyY2VudDogbnVtYmVyXG4gICAgYW5nbGU6IG51bWJlclxuICAgIGhlYWx0aDogbnVtYmVyXG4gICAgYWxpdmU6IGJvb2xlYW5cblxuXG4gICAgY29uc3RydWN0b3IoZW52OiBFbnYsIGhlYWx0aDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZW52ID0gZW52XG4gICAgICAgIHRoaXMucGF0aCA9IHRoaXMuZW52LnBhdGhcbiAgICAgICAgdGhpcy5ub2RlSW5kZXggPSAwXG4gICAgICAgIHRoaXMucG9zID0gbmV3IFBvaW50KHRoaXMucGF0aC5lbnRyeS54LCB0aGlzLnBhdGguZW50cnkueSlcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAxMFxuICAgICAgICB0aGlzLnNwZWVkID0gNVxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aFxuICAgICAgICB0aGlzLmFsaXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLnBlcmNlbnQgPSAwXG4gICAgICAgIHRoaXMuYW5nbGUgPSAwXG4gICAgfVxuXG4gICAgbW92ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5uZXh0UG9zKClcbiAgICAgICAgdGhpcy5wb3MueCA9IHBvcy54XG4gICAgICAgIHRoaXMucG9zLnkgPSBwb3MueVxuICAgICAgICB0aGlzLnBlcmNlbnQgKz0gdGhpcy5wYXRoLmxlbmd0aCAqIHRoaXMuc3BlZWQgKiAxZS01XG5cbiAgICAgICAgbGV0IHBvc0JlZm9yZSA9IHRoaXMucGF0aC5wb2ludEF0KHRoaXMucGVyY2VudCAtIDEpXG4gICAgICAgIGxldCBwb3NBZnRlciA9IHRoaXMucGF0aC5wb2ludEF0KHRoaXMucGVyY2VudCArIDEpXG4gICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLmF0YW4yKHBvc0FmdGVyLnkgLSBwb3NCZWZvcmUueSwgcG9zQWZ0ZXIueCAtIHBvc0JlZm9yZS54KSAqIDE4MCAvIE1hdGguUElcbiAgICB9XG5cbiAgICBuZXh0UG9zKGl0ZXJhdGlvbjogbnVtYmVyID0gMSkge1xuICAgICAgICBsZXQgbmV4dFBlcmNlbnQgPSB0aGlzLnBhdGgubGVuZ3RoICogdGhpcy5zcGVlZCAqIDFlLTUgKiBpdGVyYXRpb25cbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aC5wb2ludEF0KHRoaXMucGVyY2VudCArIG5leHRQZXJjZW50KVxuICAgIH1cblxuICAgIGNoZWNrSGl0KCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLmVudi5zaG90cy5mb3JFYWNoKHNob3QgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zLmRpc3Qoc2hvdC5wb3MpIDwgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBzaG90LmRhbWFnZVxuICAgICAgICAgICAgICAgIHRoaXMuZW52LnNob3RzID0gdGhpcy5lbnYuc2hvdHMuZmlsdGVyKGVudlNob3QgPT4gZW52U2hvdCAhPT0gc2hvdClcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsaXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vdmUoKVxuICAgICAgICB0aGlzLmNoZWNrSGl0KClcbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIuY2lyY2xlKGN0eCwgdGhpcy5wb3MueCwgdGhpcy5wb3MueSwgdGhpcy5yYWRpdXMsIHsgc3Ryb2tlU3R5bGU6ICdyZWQnLCBsaW5lV2lkdGg6IDIgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcblxuaW1wb3J0IHsgR3JpZCwgQ2VsbCwgQ2VsbFR5cGUgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBQYXRoLCBQb2ludCwgVmVjdG9yMiB9IGZyb20gJy4vcGF0aCdcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXInXG5pbXBvcnQgeyBUdXJyZXQsIFNob3QgfSBmcm9tICcuL3R1cnJldCdcbmltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi9lbmVteSdcbmltcG9ydCAqIGFzIGNvbG9yIGZyb20gJy4uL3Jlc3NvdXJjZXMvY29sb3IuanNvbidcblxuXG5leHBvcnQgY2xhc3MgRW52IHtcbiAgICBncmlkOiBHcmlkXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHdpZHRoOiBudW1iZXJcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIGNlbGxXaWR0aDogbnVtYmVyXG4gICAgY2VsbEhlaWdodDogbnVtYmVyXG4gICAgdHVycmV0czogQXJyYXk8VHVycmV0PlxuICAgIGVuZW1pZXM6IEFycmF5PEVuZW15PlxuICAgIHNob3RzOiBBcnJheTxTaG90PlxuICAgIGhlYWx0aDogbnVtYmVyXG4gICAgcGF0aDogUGF0aFxuXG4gICAgY29uc3RydWN0b3IoZ3JpZDogR3JpZCwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodFxuICAgICAgICB0aGlzLnR1cnJldHMgPSBbXVxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXVxuICAgICAgICB0aGlzLnNob3RzID0gW11cbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDAwIC8vIGhwXG4gICAgICAgIHRoaXMuY2VsbFdpZHRoID0gdGhpcy53aWR0aCAvIHRoaXMuZ3JpZC5jb2xzXG4gICAgICAgIHRoaXMuY2VsbEhlaWdodCA9IHRoaXMuY2VsbFdpZHRoXG4gICAgICAgIHRoaXMucGF0aCA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGxvYWRNYXAoZmlsZW5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBmZXRjaChgcmVzc291cmNlcy9tYXAvJHtmaWxlbmFtZS5yZXBsYWNlKC9cXC5tYXAvLCAnJyl9Lm1hcGApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4obWFwID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZUZhY3RvcjogVmVjdG9yMiA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5jYW52YXMud2lkdGggLyBtYXAuc2NyZWVuLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLyBtYXAuc2NyZWVuLndpZHRoLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoOiBQYXRoID0gUGF0aC5mcm9tSlNPTihtYXAucGF0aCwgc2NhbGVGYWN0b3IpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXRoKHBhdGgpXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRoLnRvU1ZHUGF0aCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXG4gICAgfVxuXG4gICAgc2F2ZU1hcChmaWxlbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IGZpbGVuYW1lLnJlcGxhY2UoJy5tYXAnLCAnJylcbiAgICAgICAgY29uc3QgbWFwT2JqZWN0OiBvYmplY3QgPSB7XG4gICAgICAgICAgICAnbWFwLW5hbWUnOiBuYW1lLFxuICAgICAgICAgICAgc2NyZWVuOiB7IHdpZHRoOiB0aGlzLmNhbnZhcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmNhbnZhcy5oZWlnaHQgfSxcbiAgICAgICAgICAgIHBhdGg6IHsgcG9pbnRzOiB0aGlzLnBhdGgucG9pbnRzLm1hcChwb2ludCA9PiBbcG9pbnQueCwgcG9pbnQueV0pIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxlID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KG1hcE9iamVjdCldLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxuICAgICAgICBzYXZlQXMoZmlsZSwgYCR7bmFtZX0ubWFwYClcbiAgICB9XG5cbiAgICBzZXRQYXRoKHBhdGg6IFBhdGgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IHBhdGhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhdGgucG9pbnRzLmZvckVhY2gocG9pbnQgPT4gdGhpcy5wYXRoLmFkZFBvaW50KHBvaW50KSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlZmluZUNlbGxzVHlwZSgpXG4gICAgfVxuXG4gICAgc3Bhd25FbmVteSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEVuZW15KHRoaXMsIDEwMCkpXG4gICAgfVxuXG4gICAgZGVmaW5lQ2VsbHNUeXBlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMucGF0aCB8fCB0aGlzLnBhdGgucG9pbnRzLmxlbmd0aCA8IDIpIHJldHVyblxuICAgICAgICBsZXQgbm9kZUluZGV4OiBudW1iZXIgPSAwXG4gICAgICAgIGNvbnN0IGVwczogbnVtYmVyID0gMlxuICAgICAgICBsZXQgeCA9IHRoaXMucGF0aC5wb2ludHNbMF0ueFxuICAgICAgICBsZXQgeSA9IHRoaXMucGF0aC5wb2ludHNbMF0ueVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwMDA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYOiBudW1iZXIgPSB0aGlzLnBhdGgucG9pbnRzW25vZGVJbmRleCArIDFdLnggLSB0aGlzLnBhdGgucG9pbnRzW25vZGVJbmRleF0ueFxuICAgICAgICAgICAgY29uc3QgZGVsdGFZOiBudW1iZXIgPSB0aGlzLnBhdGgucG9pbnRzW25vZGVJbmRleCArIDFdLnkgLSB0aGlzLnBhdGgucG9pbnRzW25vZGVJbmRleF0ueVxuICAgICAgICAgICAgY29uc3Qgc2xvcGU6IG51bWJlciA9IE1hdGguc3FydChkZWx0YVggKiogMiArIGRlbHRhWSAqKiAyKVxuICAgICAgICAgICAgY29uc3QgYW5nbGU6IG51bWJlciA9IE1hdGguYXRhbjIoZGVsdGFZLCBkZWx0YVgpXG4gICAgICAgICAgICB4ICs9IHNsb3BlICogTWF0aC5jb3MoYW5nbGUpICogMC4wNFxuICAgICAgICAgICAgeSArPSBzbG9wZSAqIE1hdGguc2luKGFuZ2xlKSAqIDAuMDRcbiAgICAgICAgICAgIGNvbnN0IGNlbGw6IENlbGwgPSB0aGlzLmdldENlbGwoeCwgeSlcbiAgICAgICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICAgICAgY2VsbC50eXBlID0gQ2VsbFR5cGUuUm9hZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHggLSB0aGlzLnBhdGgucG9pbnRzW25vZGVJbmRleCArIDFdLngpIDwgZXBzICYmXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoeSAtIHRoaXMucGF0aC5wb2ludHNbbm9kZUluZGV4ICsgMV0ueSkgPCBlcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZUluZGV4ICsgMSA8IHRoaXMucGF0aC5wb2ludHMubGVuZ3RoIC0gMSkgeyBub2RlSW5kZXgrKyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IGJyZWFrIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENlbGwoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBDZWxsIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdyaWQuY2VsbHMgYXMgYW55KS5maW5kKGNlbGwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHggPj0gY2VsbC54ICogdGhpcy5jZWxsV2lkdGggJiZcbiAgICAgICAgICAgICAgICB4IDwgKGNlbGwueCArIDEpICogdGhpcy5jZWxsV2lkdGggKiBjZWxsLndpZHRoICYmXG4gICAgICAgICAgICAgICAgeSA+PSBjZWxsLnkgKiB0aGlzLmNlbGxIZWlnaHQgJiZcbiAgICAgICAgICAgICAgICB5IDwgKGNlbGwueSArIDEpICogdGhpcy5jZWxsSGVpZ2h0ICogY2VsbC5oZWlnaHRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkZXRlY3RDZWxsKGU6IE1vdXNlRXZlbnQpOiBDZWxsIHtcbiAgICAgICAgY29uc3QgeCA9IGUub2Zmc2V0WFxuICAgICAgICBjb25zdCB5ID0gZS5vZmZzZXRZXG4gICAgICAgIHJldHVybiB0aGlzLmdldENlbGwoeCwgeSlcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmUoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdyaWQuY2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuaGlnaGxpZ2h0ID0gZmFsc2UpXG4gICAgICAgIGNvbnN0IGNlbGw6IENlbGwgPSB0aGlzLmRldGVjdENlbGwoZSlcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgIGNlbGwuaGlnaGxpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5ncmlkLmZvY3VzQ2VsbCA9IGNlbGxcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduRW5lbXkoKVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlTWFwKCd0ZXN0Mi5tYXAnKVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZUNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2VsbDogQ2VsbCA9IHRoaXMuZGV0ZWN0Q2VsbChlKVxuICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiB0aGlzLnBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aC5hZGRQb2ludChuZXcgUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpKVxuICAgICAgICAgICAgdGhpcy5kZWZpbmVDZWxsc1R5cGUoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGwgJiYgKGNlbGwudHlwZSA9PT0gQ2VsbFR5cGUuRW1wdHkgfHwgY2VsbC50eXBlID09PSBDZWxsVHlwZS5Hcm91bmQpKSB7XG4gICAgICAgICAgICBjZWxsLnR5cGUgPSBDZWxsVHlwZS5UdXJyZXRcbiAgICAgICAgICAgIHRoaXMudHVycmV0cy5wdXNoKG5ldyBUdXJyZXQoY2VsbCwgdGhpcykpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLnR1cnJldHMuZm9yRWFjaCh0dXJyZXQgPT4gdHVycmV0LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuZmlsdGVyKGVuZW15ID0+IGVuZW15LmFsaXZlKVxuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGUoKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICBsZXQgZmlsbENvbG9yOiBzdHJpbmcgPSBjb2xvci5iZ1xuICAgICAgICB0aGlzLmdyaWQuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLlR1cnJldCkge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbG9yLnR1cnJldFxuICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLlJvYWQpIHtcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSBjb2xvci5yb2FkXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwudHlwZSA9PT0gQ2VsbFR5cGUuR3JvdW5kKSB7XG4gICAgICAgICAgICAgICAgZmlsbENvbG9yID0gY29sb3IuZ3JvdW5kXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbG9yLmJnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZW5kZXJlci5yZWN0KGN0eCwgY2VsbC54ICogdGhpcy5jZWxsV2lkdGgsIGNlbGwueSAqIHRoaXMuY2VsbEhlaWdodCwgdGhpcy5jZWxsV2lkdGggKiBjZWxsLndpZHRoIC0gLjE1LCB0aGlzLmNlbGxIZWlnaHQgKiBjZWxsLmhlaWdodCAtIC4xNSwge1xuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW5jeTogMSxcbiAgICAgICAgICAgICAgICBmaWxsU3R5bGU6IGZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogY29sb3Iuc2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAuNVxyXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5wYXRoKSB7IHRoaXMucGF0aC5yZW5kZXIoY3R4KSB9XG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnJlbmRlcihjdHgpKVxuICAgICAgICB0aGlzLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LnJlbmRlcihjdHgpKVxuICAgICAgICB0aGlzLnR1cnJldHMuZm9yRWFjaCh0dXJyZXQgPT4gdHVycmV0LnJlbmRlcihjdHgpKVxuXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodENlbGw6IENlbGwgPSB0aGlzLmdyaWQuY2VsbHMuZmluZChjZWxsID0+IGNlbGwuaGlnaGxpZ2h0KVxuICAgICAgICBpZiAoaGlnaGxpZ2h0Q2VsbCkge1xuICAgICAgICAgICAgUmVuZGVyZXIucmVjdChjdHgsIGhpZ2hsaWdodENlbGwueCAqIHRoaXMuY2VsbFdpZHRoLCBoaWdobGlnaHRDZWxsLnkgKiB0aGlzLmNlbGxIZWlnaHQsIHRoaXMuY2VsbFdpZHRoICogaGlnaGxpZ2h0Q2VsbC53aWR0aCAtIC4xNSwgdGhpcy5jZWxsSGVpZ2h0ICogaGlnaGxpZ2h0Q2VsbC5oZWlnaHQgLSAuMTUsIHtcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IC4yNSxcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogY29sb3IuaGlnaGxpZ2h0VHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgZmlsbFN0eWxlOiBjb2xvci5oaWdobGlnaHRUcmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBNb3ZlIHRvIG5wbSBwYWNrYWdlIChhdCBsZWFzdCBnaXRodWIpXG5cbmludGVyZmFjZSBOZWloYm9vck9iamVjdCB7XG4gICAgdG9wPzogQ2VsbFxuICAgIHJpZ2h0PzogQ2VsbFxuICAgIGJvdHRvbT86IENlbGxcbiAgICBsZWZ0PzogQ2VsbFxufVxuXG5lbnVtIENlbGxUeXBlIHtcbiAgICBUdXJyZXQsXG4gICAgUm9hZCxcbiAgICBHcm91bmQsXG4gICAgRW1wdHlcbn1cblxuY2xhc3MgR3JpZCB7XG4gICAgcm93czogbnVtYmVyXG4gICAgY29sczogbnVtYmVyXG4gICAgY2VsbHM6IEFycmF5PENlbGw+XG4gICAgZm9jdXNDZWxsOiBDZWxsXG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xzOiBudW1iZXIsIHJvd3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzXG4gICAgICAgIHRoaXMuY29scyA9IGNvbHNcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgIHRoaXMuZm9jdXNDZWxsID0gbnVsbFxuICAgICAgICB0aGlzLmNyZWF0ZUNlbGxzKClcbiAgICAgICAgdGhpcy5kZWZpbmVOZWlnaGJvb3JzKClcbiAgICB9XG5cbiAgICBjcmVhdGVDZWxscygpIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5jb2xzOyBjb2wrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5yb3dzOyByb3crKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChuZXcgQ2VsbChjb2wsIHJvdykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDZWxsKG5ld0NlbGw6IENlbGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNlbGxzLmluY2x1ZGVzKG5ld0NlbGwpKSByZXR1cm5cbiAgICAgICAgaWYgKG5ld0NlbGwud2lkdGggIT09IDEgfHwgbmV3Q2VsbC5oZWlnaHQgIT09IDEpIHtcbiAgICAgICAgICAgIGlmIChuZXdDZWxsLndpZHRoID4gMSkge1xuICAgICAgICAgICAgICAgIGxldCByYW5nZTogbnVtYmVyID0gbmV3Q2VsbC53aWR0aCAtIDFcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQ2VsbDogQXJyYXk8Q2VsbD4gPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IGNlbGwueSA9PT0gbmV3Q2VsbC55ICYmIGNlbGwueCA+IG5ld0NlbGwueCAmJiBjZWxsLnggPD0gbmV3Q2VsbC54ICsgcmFuZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGNlbGwgPT4gIXJlbW92ZUNlbGwuaW5jbHVkZXMoY2VsbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3Q2VsbC5oZWlnaHQgPiAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlOiBudW1iZXIgPSBuZXdDZWxsLmhlaWdodCAtIDFcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQ2VsbDogQXJyYXk8Q2VsbD4gPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IGNlbGwueCA9PT0gbmV3Q2VsbC54ICYmIGNlbGwueSA+IG5ld0NlbGwueSAmJiBjZWxsLnkgPD0gbmV3Q2VsbC55ICsgcmFuZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGNlbGwgPT4gIXJlbW92ZUNlbGwuaW5jbHVkZXMoY2VsbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWZpbmVOZWlnaGJvb3JzKClcbiAgICAgICAgdGhpcy5jZWxsc1t0aGlzLmNlbGxzLmluZGV4T2YobmV3Q2VsbCldID0gbmV3Q2VsbFxuICAgIH1cblxuICAgIGRlZmluZU5laWdoYm9vcnMoKSB7XG4gICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwubmVpZ2hib29yLnRvcCA9IGNlbGwueSA+PSAxID8gdGhpcy5jZWxscy5maWx0ZXIob3RoZXJjZWxsID0+IG90aGVyY2VsbC54IDw9IGNlbGwueCAmJiBvdGhlcmNlbGwueCArIG90aGVyY2VsbC53aWR0aCA+IGNlbGwueCAmJiBvdGhlcmNlbGwueSA9PT0gY2VsbC55IC0gY2VsbC5oZWlnaHQpWzBdIDogbnVsbFxuICAgICAgICAgICAgY2VsbC5uZWlnaGJvb3IuYm90dG9tID0gY2VsbC55IDw9IHRoaXMucm93cyAtIDEgPyB0aGlzLmNlbGxzLmZpbHRlcihvdGhlcmNlbGwgPT4gb3RoZXJjZWxsLnggPD0gY2VsbC54ICYmIG90aGVyY2VsbC54ICsgb3RoZXJjZWxsLndpZHRoID4gY2VsbC54ICYmIG90aGVyY2VsbC55ID09PSBjZWxsLnkgKyBjZWxsLmhlaWdodClbMF0gOiBudWxsXG4gICAgICAgICAgICBjZWxsLm5laWdoYm9vci5sZWZ0ID0gY2VsbC54ID49IDEgPyB0aGlzLmNlbGxzLmZpbHRlcihvdGhlcmNlbGwgPT4gb3RoZXJjZWxsLnkgPD0gY2VsbC55ICYmIG90aGVyY2VsbC55ICsgb3RoZXJjZWxsLmhlaWdodCA+IGNlbGwueSAmJiBvdGhlcmNlbGwueCA9PT0gY2VsbC54IC0gY2VsbC53aWR0aClbMF0gOiBudWxsXG4gICAgICAgICAgICBjZWxsLm5laWdoYm9vci5yaWdodCA9IGNlbGwueCA8PSB0aGlzLmNvbHMgLSAxID8gdGhpcy5jZWxscy5maWx0ZXIob3RoZXJjZWxsID0+IG90aGVyY2VsbC55IDw9IGNlbGwueSAmJiBvdGhlcmNlbGwueSArIG90aGVyY2VsbC5oZWlnaHQgPiBjZWxsLnkgJiYgb3RoZXJjZWxsLnggPT09IGNlbGwueCArIGNlbGwud2lkdGgpWzBdIDogbnVsbFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUtleWJvYXJkRXZlbnQoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9jdXNDZWxsKSByZXR1cm5cbiAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgY2FzZSAnS2V5Vyc6XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWyd0b3AnXSA/IHRoaXMuZm9jdXNDZWxsID0gdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWyd0b3AnXSA6IG51bGxcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIGNhc2UgJ0tleVMnOlxuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNDZWxsLm5laWdoYm9vclsnYm90dG9tJ10gPyB0aGlzLmZvY3VzQ2VsbCA9IHRoaXMuZm9jdXNDZWxsLm5laWdoYm9vclsnYm90dG9tJ10gOiBudWxsXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICBjYXNlICdLZXlBJzpcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzQ2VsbC5uZWlnaGJvb3JbJ2xlZnQnXSA/IHRoaXMuZm9jdXNDZWxsID0gdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWydsZWZ0J10gOiBudWxsXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgY2FzZSAnS2V5RCc6XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0NlbGwubmVpZ2hib29yWydyaWdodCddID8gdGhpcy5mb2N1c0NlbGwgPSB0aGlzLmZvY3VzQ2VsbC5uZWlnaGJvb3JbJ3JpZ2h0J10gOiBudWxsXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgQ2VsbCB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgd2lkdGg6IG51bWJlclxuICAgIGhlaWdodDogbnVtYmVyXG4gICAgaGlnaGxpZ2h0OiBib29sZWFuXG4gICAgdHlwZTogQ2VsbFR5cGVcbiAgICBuZWlnaGJvb3I6IE5laWhib29yT2JqZWN0XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGggPSAxLCBoZWlnaHQgPSAxKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSBmYWxzZVxuICAgICAgICB0aGlzLnR5cGUgPSBDZWxsVHlwZS5Hcm91bmRcbiAgICAgICAgdGhpcy5uZWlnaGJvb3IgPSB7fVxuICAgIH1cblxuICAgIHRvZ2dsZUhpZ2hsaWdodCgpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQgPSAhdGhpcy5oaWdobGlnaHRcbiAgICB9XG59XG5cbmV4cG9ydCB7IEdyaWQsIENlbGwsIENlbGxUeXBlIH1cbiIsImltcG9ydCBQYXRoQnVpbGRlciBmcm9tICdzdmctcGF0aC1idWlsZGVyJztcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXInXG5cbmludGVyZmFjZSBKU09OUGF0aCB7XG4gICAgcG9pbnRzOiBBcnJheTxBcnJheTxudW1iZXI+PlxufVxuXG5jbGFzcyBQYXRoIHtcbiAgICBlbnRyeTogUG9pbnRcbiAgICBwb2ludHM6IEFycmF5PFBvaW50PlxuICAgIGVuZDogUG9pbnRcbiAgICBzdmc6IGFueVxuICAgIGxlbmd0aDogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludHM6IEFycmF5PFBvaW50Pikge1xuICAgICAgICB0aGlzLmVudHJ5ID0gcG9pbnRzWzBdIHx8IG51bGxcbiAgICAgICAgdGhpcy5lbmQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdXG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzXG4gICAgICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMudG9TVkdQYXRoKCkpXG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5zdmcuZ2V0VG90YWxMZW5ndGgoKVxuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tSlNPTihqc29uOiBKU09OUGF0aCwgc2NhbGVGYWN0b3I6IFZlY3RvcjIgPSBWX1VOSVQpIHtcbiAgICAgICAgY29uc3QgcG9pbnRzOiBBcnJheTxQb2ludD4gPSBqc29uLnBvaW50cy5tYXAodHVwbGUgPT4gbmV3IFBvaW50KHR1cGxlWzBdICogc2NhbGVGYWN0b3IueCwgdHVwbGVbMV0gKiBzY2FsZUZhY3Rvci55KSlcbiAgICAgICAgcmV0dXJuIG5ldyBQYXRoKHBvaW50cylcbiAgICB9XG5cbiAgICBhZGRQb2ludChwb2ludDogUG9pbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmVudHJ5KSB0aGlzLmVudHJ5ID0gcG9pbnRcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwb2ludClcbiAgICAgICAgdGhpcy5yZWNhbGN1bGF0ZSgpXG4gICAgfVxuXG4gICAgcG9pbnRBdChwZXJjZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN2Zy5nZXRQb2ludEF0TGVuZ3RoKHRoaXMubGVuZ3RoICogcGVyY2VudCAvIDEwMClcbiAgICB9XG5cbiAgICByZWNhbGN1bGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbmQgPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAxXVxuICAgICAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoJ2QnLCB0aGlzLnRvU1ZHUGF0aCgpKVxuICAgIH1cblxuICAgIHRvU1ZHUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBidWlsZGVyOiBQYXRoQnVpbGRlciA9IG5ldyBQYXRoQnVpbGRlcigpXG4gICAgICAgIGNvbnN0IHBhdGggPSBidWlsZGVyLm1vdmVUbyh0aGlzLmVudHJ5LngsIHRoaXMuZW50cnkueSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGF0aC5saW5lVG8odGhpcy5wb2ludHNbaV0ueCwgdGhpcy5wb2ludHNbaV0ueSkgLy8gc21vb3RoVG8gP1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cmluZ1BhdGg6IHN0cmluZyA9IHBhdGgudG9TdHJpbmcoKVxuICAgICAgICByZXR1cm4gc3RyaW5nUGF0aFxuICAgIH1cblxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgICAgICBSZW5kZXJlci5wb2x5KGN0eCwgdGhpcy5wb2ludHMsIHsgbGluZVdpZHRoOiAxLCBmaWxsU3R5bGU6ICdncmV5JywgdHJhbnNwYXJlbmN5OiAuMjUgfSlcbiAgICB9XG59XG5cbmNsYXNzIFBvaW50IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgIH1cblxuICAgIGRpc3QocG9pbnQ6IFBvaW50KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gcG9pbnQueCkgKiogMiArICh0aGlzLnkgLSBwb2ludC55KSAqKiAyKVxuICAgIH1cbn1cblxuY2xhc3MgVmVjdG9yMiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBWX05VTEwgPSBuZXcgVmVjdG9yMigwLCAwKVxuZXhwb3J0IGNvbnN0IFZfVU5JVCA9IG5ldyBWZWN0b3IyKDEsIDEpXG5cbmV4cG9ydCB7IFBhdGgsIFBvaW50LCBWZWN0b3IyIH1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wYXRoJ1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSdcblxuaW50ZXJmYWNlIFN0eWxlT2JqZWN0IHtcbiAgICBzdHJva2VTdHlsZT86IHN0cmluZyxcbiAgICBsaW5lV2lkdGg/OiBudW1iZXIsXG4gICAgbGluZUpvaW4/OiBDYW52YXNMaW5lSm9pbixcbiAgICBmaWxsU3R5bGU/OiBzdHJpbmcsXG4gICAgdHJhbnNwYXJlbmN5PzogbnVtYmVyXG59XG5cbmNvbnN0IGRlZmF1bHRTdHlsZU9iamVjdDogU3R5bGVPYmplY3QgPSB7XG4gICAgc3Ryb2tlU3R5bGU6ICdibGFjaycsXG4gICAgbGluZVdpZHRoOiA0LFxuICAgIGxpbmVKb2luOiAncm91bmQnLFxuICAgIGZpbGxTdHlsZTogJ2JsYWNrJyxcbiAgICB0cmFuc3BhcmVuY3k6IDFcbn1cblxuY2xhc3MgUmVuZGVyZXIge1xuXG4gICAgc3RhdGljIHN0eWxlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBvYmo/OiBTdHlsZU9iamVjdCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdHlsZU9iamVjdCA9IHsgLi4uZGVmYXVsdFN0eWxlT2JqZWN0LCAuLi5vYmogfVxuICAgICAgICBjdHgubGluZVdpZHRoID0gc3R5bGVPYmplY3QubGluZVdpZHRoXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0eWxlT2JqZWN0LnN0cm9rZVN0eWxlXG4gICAgICAgIGN0eC5saW5lSm9pbiA9IHN0eWxlT2JqZWN0LmxpbmVKb2luXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBzdHlsZU9iamVjdC5maWxsU3R5bGVcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gc3R5bGVPYmplY3QudHJhbnNwYXJlbmN5XG4gICAgfVxuXG4gICAgc3RhdGljIGxpbmUoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQsIG9iaj86IFN0eWxlT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIFJlbmRlcmVyLnN0eWxlKGN0eCwgb2JqKVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyhwb2ludDEueCwgcG9pbnQxLnkpXG4gICAgICAgIGN0eC5saW5lVG8ocG9pbnQyLngsIHBvaW50Mi55KVxuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVjdChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBvYmo/OiBTdHlsZU9iamVjdCk6IHZvaWQge1xuICAgICAgICBSZW5kZXJlci5zdHlsZShjdHgsIG9iailcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgfVxuXG4gICAgc3RhdGljIHBvbHkoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvaW50czogQXJyYXk8UG9pbnQ+LCBvYmo/OiBTdHlsZU9iamVjdCkge1xuICAgICAgICBSZW5kZXJlci5zdHlsZShjdHgsIG9iailcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhwb2ludHNbaV0ueCwgcG9pbnRzW2ldLnkpXG4gICAgICAgIH1cbiAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgc3RhdGljIGNpcmNsZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBvYmo/OiBTdHlsZU9iamVjdCkge1xuICAgICAgICBSZW5kZXJlci5zdHlsZShjdHgsIG9iailcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgc3RhdGljIHBvaW50KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgb2JqPzogU3R5bGVPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIuY2lyY2xlKGN0eCwgeCwgeSwgNSwgb2JqKVxuICAgIH1cblxuICAgIHN0YXRpYyByZWN0U3ByaXRlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRleHR1cmU6IFRleHR1cmUpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIuc3R5bGUoY3R4LCB7fSlcbiAgICAgICAgY3R4LnNhdmUoKVxuICAgICAgICBjdHgudHJhbnNsYXRlKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQgLyAyKVxuICAgICAgICBjdHguc2NhbGUodGV4dHVyZS5zY2FsZS54LCB0ZXh0dXJlLnNjYWxlLnkpXG4gICAgICAgIGN0eC5yb3RhdGUodGV4dHVyZS5yb3RhdGlvbilcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRleHR1cmUuaW1hZ2UsXG4gICAgICAgICAgICB3aWR0aCAqIHRleHR1cmUub2Zmc2V0LnggLSB3aWR0aCAvIDIsXG4gICAgICAgICAgICBoZWlnaHQgKiB0ZXh0dXJlLm9mZnNldC55IC0gaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgY3R4LnJlc3RvcmUoKVxuICAgIH1cbn1cblxuZXhwb3J0IHsgUmVuZGVyZXIgfVxuIiwiaW1wb3J0IHsgUG9pbnQsIFZlY3RvcjIsIFZfVU5JVCwgVl9OVUxMIH0gZnJvbSAnLi9wYXRoJ1xuXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRVUlJFVF9CQVNFIH0gZnJvbSAnLi4vcmVzc291cmNlcy9hc3NldHMvdHVycmV0LWJhc2UtMi5wbmcnXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRVUlJFVF9IRUFEIH0gZnJvbSAnLi4vcmVzc291cmNlcy9hc3NldHMvdHVycmV0LWhlYWQtMi5wbmcnXG5cblxuaW50ZXJmYWNlIFRleHR1cmVPcHRpb25zIHtcbiAgICByb3RhdGlvbj86IG51bWJlciwgLy8gcmFkaWFuc1xuICAgIG9mZnNldD86IFZlY3RvcjIsXG4gICAgc2NhbGU/OiBWZWN0b3IyXG59XG5cbmNsYXNzIFRleHR1cmUge1xuICAgIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50XG4gICAgcm90YXRpb246IG51bWJlclxuICAgIG9mZnNldDogVmVjdG9yMlxuICAgIHNpemU6IFZlY3RvcjJcbiAgICBzY2FsZTogVmVjdG9yMlxuICAgIG9wdGlvbnM6IFRleHR1cmVPcHRpb25zXG5cbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZywgb3B0aW9ucz86IFRleHR1cmVPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHNvdXJjZVxuICAgICAgICB0aGlzLnNpemUgPSBuZXcgVmVjdG9yMih0aGlzLmltYWdlLndpZHRoLCB0aGlzLmltYWdlLmhlaWdodClcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5vcHRpb25zLnJvdGF0aW9uIHx8IDBcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLm9wdGlvbnMub2Zmc2V0IHx8IFZfTlVMTCAvLyByZWxhdGl2ZSB0byB0aGUgc2l6ZVxuICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5vcHRpb25zLnNjYWxlIHx8IFZfVU5JVFxuICAgIH1cbn1cblxuY2xhc3MgU3ByaXRlIGV4dGVuZHMgVGV4dHVyZSB7XG4gICAgY29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcsIG9wdGlvbnM/OiBUZXh0dXJlT3B0aW9ucykge1xuICAgICAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpXG4gICAgfVxufVxuXG5jb25zdCBUVVJSRVRfQkFTRV9URVhUVVJFID0gbmV3IFRleHR1cmUoVFVSUkVUX0JBU0UpXG5jb25zdCBUVVJSRVRfSEVBRF9URVhUVVJFID0gbmV3IFRleHR1cmUoVFVSUkVUX0hFQUQsIHsgc2NhbGU6IG5ldyBWZWN0b3IyKDEuMiwgMS4yKSwgb2Zmc2V0OiBuZXcgVmVjdG9yMigwLCAtMSAvIDkpIH0pXG5cbmV4cG9ydCB7IFNwcml0ZSwgVGV4dHVyZSB9XG5leHBvcnQgeyBUVVJSRVRfQkFTRV9URVhUVVJFLCBUVVJSRVRfSEVBRF9URVhUVVJFIH1cbiIsImltcG9ydCB7IENlbGwsIENlbGxUeXBlIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BhdGgnXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuL2VudidcbmltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi9lbmVteSdcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXInXG5cbmltcG9ydCB7IFRVUlJFVF9CQVNFX1RFWFRVUkUsIFRVUlJFVF9IRUFEX1RFWFRVUkUgfSBmcm9tICcuL3RleHR1cmUnXG5cbmNsYXNzIFR1cnJldCB7XG4gICAgY2VsbDogQ2VsbFxuICAgIGVudjogRW52XG4gICAgb3JpZ2luOiBQb2ludFxuICAgIHBvczogUG9pbnRcbiAgICBoZWFsdGg6IG51bWJlclxuICAgIHJhZGl1czogbnVtYmVyXG4gICAgdGFyZ2V0OiBFbmVteVxuICAgIGNhblNob290OiBib29sZWFuXG4gICAgZGlyOiBudW1iZXJcbiAgICBmaXJlUmF0ZTogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcihjZWxsOiBDZWxsLCBlbnY6IEVudikge1xuICAgICAgICB0aGlzLmNlbGwgPSBjZWxsXG4gICAgICAgIHRoaXMuZW52ID0gZW52XG4gICAgICAgIHRoaXMub3JpZ2luID0gbmV3IFBvaW50KHRoaXMuY2VsbC54ICogdGhpcy5lbnYuY2VsbFdpZHRoLCB0aGlzLmNlbGwueSAqIHRoaXMuZW52LmNlbGxXaWR0aClcbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgUG9pbnQoKHRoaXMuY2VsbC54ICsgMC41KSAqIHRoaXMuZW52LmNlbGxXaWR0aCwgKHRoaXMuY2VsbC55ICsgMC41KSAqIHRoaXMuZW52LmNlbGxXaWR0aClcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDBcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAxMDBcbiAgICAgICAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWRcbiAgICAgICAgdGhpcy5jYW5TaG9vdCA9IHRydWVcbiAgICAgICAgdGhpcy5kaXIgPSAtTWF0aC5QSSAvIDJcbiAgICAgICAgdGhpcy5maXJlUmF0ZSA9IDEwMCAvLyBlYWNoIG1zXG4gICAgfVxuXG4gICAgc2hvb3QoKTogdm9pZCB7XG4gICAgICAgIC8vIFRPRE86IHByZWRpY3QgcG9zaXRpb25cbiAgICAgICAgdGhpcy5lbnYuc2hvdHMucHVzaChuZXcgU2hvdCg8UG9pbnQ+eyAuLi50aGlzLnBvcyB9LCB0aGlzLmRpcikpXG4gICAgICAgIHRoaXMuY2FuU2hvb3QgPSBmYWxzZVxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhblNob290ID0gdHJ1ZVxuICAgICAgICB9LCB0aGlzLmZpcmVSYXRlKVxuICAgIH1cblxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldCB8fCB0aGlzLnBvcy5kaXN0KHRoaXMudGFyZ2V0LnBvcykgPiB0aGlzLnJhZGl1cyB8fCAhdGhpcy50YXJnZXQuYWxpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldHM6IEFycmF5PEVuZW15PiA9IHRoaXMuZW52LmVuZW1pZXNcbiAgICAgICAgICAgICAgICAuc29ydCgoZW5lbXkxLCBlbmVteTIpID0+IHRoaXMucG9zLmRpc3QoZW5lbXkxLnBvcykgLSB0aGlzLnBvcy5kaXN0KGVuZW15Mi5wb3MpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZW5lbXkgPT4gdGhpcy5wb3MuZGlzdChlbmVteS5wb3MpIDwgdGhpcy5yYWRpdXMpXG4gICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGgpIHsgdGhpcy50YXJnZXQgPSB0YXJnZXRzWzBdIH1cbiAgICAgICAgICAgIGVsc2UgeyB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZCB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZWRpY3RUYXJnZXRQb3MgPSB0aGlzLnRhcmdldC5uZXh0UG9zKDQpXG4gICAgICAgICAgICB0aGlzLmRpciA9IE1hdGguYXRhbjIocHJlZGljdFRhcmdldFBvcy55IC0gdGhpcy5wb3MueSwgcHJlZGljdFRhcmdldFBvcy54IC0gdGhpcy5wb3MueClcbiAgICAgICAgICAgIGlmICh0aGlzLmNhblNob290KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG9vdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgVFVSUkVUX0hFQURfVEVYVFVSRS5yb3RhdGlvbiA9IHRoaXMuZGlyICsgTWF0aC5QSSAvIDJcbiAgICAgICAgUmVuZGVyZXIucmVjdFNwcml0ZShjdHgsIHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnksIHRoaXMuZW52LmNlbGxXaWR0aCwgdGhpcy5lbnYuY2VsbFdpZHRoLCBUVVJSRVRfQkFTRV9URVhUVVJFKVxuICAgICAgICBSZW5kZXJlci5yZWN0U3ByaXRlKGN0eCwgdGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSwgdGhpcy5lbnYuY2VsbFdpZHRoLCB0aGlzLmVudi5jZWxsV2lkdGgsIFRVUlJFVF9IRUFEX1RFWFRVUkUpXG4gICAgICAgIC8vIFJlbmRlcmVyLmNpcmNsZShjdHgsIHRoaXMucG9zLngsIHRoaXMucG9zLnksIDEwLCB7IGxpbmVXaWR0aDogMiwgc3Ryb2tlU3R5bGU6ICdibGFjaycgfSlcbiAgICAgICAgUmVuZGVyZXIuY2lyY2xlKGN0eCwgdGhpcy5wb3MueCwgdGhpcy5wb3MueSwgdGhpcy5yYWRpdXMsIHsgbGluZVdpZHRoOiAxLCB0cmFuc3BhcmVuY3k6IC4yNSwgc3Ryb2tlU3R5bGU6ICd3aGl0ZScgfSlcbiAgICB9XG59XG5cbmNsYXNzIFNob3Qge1xuICAgIHBvczogUG9pbnRcbiAgICBkaXI6IG51bWJlclxuICAgIGRhbWFnZTogbnVtYmVyXG4gICAgbGVuZ3RoOiBudW1iZXJcbiAgICBzcGVlZDogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3Rvcihwb3M6IFBvaW50LCBkaXI6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBvcyA9IHBvc1xuICAgICAgICB0aGlzLmRpciA9IGRpclxuICAgICAgICB0aGlzLmRhbWFnZSA9IDEwXG4gICAgICAgIHRoaXMubGVuZ3RoID0gMTBcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEwXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnBvcy54ICs9IHRoaXMuc3BlZWQgKiBNYXRoLmNvcyh0aGlzLmRpcilcbiAgICAgICAgdGhpcy5wb3MueSArPSB0aGlzLnNwZWVkICogTWF0aC5zaW4odGhpcy5kaXIpXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIFJlbmRlcmVyLmxpbmUoY3R4LCB0aGlzLnBvcywgbmV3IFBvaW50KHRoaXMucG9zLnggKyB0aGlzLmxlbmd0aCAqIE1hdGguY29zKHRoaXMuZGlyKSwgdGhpcy5wb3MueSArIHRoaXMubGVuZ3RoICogTWF0aC5zaW4odGhpcy5kaXIpKSwgeyBsaW5lV2lkdGg6IDIsIHN0cm9rZVN0eWxlOiAnYmxhY2snIH0pXG4gICAgfVxufVxuXG5leHBvcnQgeyBUdXJyZXQsIFNob3QgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==