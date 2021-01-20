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
const grid = new grid_1.Grid(40, 40);
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
        this.cellWidth = Math.min(this.width / this.grid.rows, this.height / this.grid.cols);
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
        this.path = path;
        this.path.recalculate();
        this.defineCellsType();
    }
    spawnEnemy() {
        this.enemies.push(new enemy_1.Enemy(this, 100));
    }
    defineCellsType() {
        this.grid.cells.forEach(cell => cell.type = grid_1.CellType.Ground);
        if (this.path.points.length) {
            let percent = 0;
            const deltaPercent = this.cellWidth / 2 / this.path.length * 100;
            while (percent <= 100) {
                const { x, y } = this.path.pointAt(percent);
                const cell = this.getCell(x, y);
                if (cell) {
                    cell.type = grid_1.CellType.Road;
                }
                percent += deltaPercent;
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
            if (cell.type == grid_1.CellType.Turret) {
                const turret = this.turrets.find(turret => turret.cell === cell);
                this.displayStats(e, turret);
            }
            else {
                this.hideStats();
            }
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
            case 'Backspace':
                this.setPath(new path_1.Path([]));
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
    displayStats(e, turret) {
        const { x, y } = e;
        const statsPannel = document.querySelector('.floating-stats');
        statsPannel.style.left = `${x + 10}px`;
        statsPannel.style.top = `${y + 10}px`;
        statsPannel.style.display = 'block';
        statsPannel.style.opacity = '.9';
        statsPannel.innerHTML = `
            <li>Health   : ${turret.health}%</li>
            <li>Radius   : ${turret.radius}px</li>
            <li>Damage   : ${turret.damage}</li>
            <li>FireRate : ${turret.fireRate}</li>`;
    }
    hideStats() {
        const statsPannel = document.querySelector('.floating-stats');
        statsPannel.style.display = 'none';
        statsPannel.style.opacity = '0';
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
        this.end = this.points[this.points.length - 1];
        this.recalculate();
    }
    pointAt(percent) {
        return this.svg.getPointAtLength(this.length * percent / 100);
    }
    recalculate() {
        this.end = this.points[this.points.length - 1];
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        this.svg.setAttribute('d', this.toSVGPath());
        this.length = this.svg.getTotalLength();
    }
    toSVGPath() {
        const builder = new svg_path_builder_1.default();
        if (this.points.length) {
            const path = builder.moveTo(this.entry.x, this.entry.y);
            for (let i = 1; i < this.points.length; i++) {
                path.lineTo(this.points[i].x, this.points[i].y); // smoothTo ?
            }
            const stringPath = path.toString();
            return stringPath;
        }
        else {
            return 'M 0 0';
        }
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
        if (!points.length)
            return;
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
        this.damage = 10;
        this.target = undefined;
        this.canShoot = true;
        this.dir = -Math.PI / 2;
        this.fireRate = 100; // each ms
    }
    shoot() {
        // TODO: predict position
        this.env.shots.push(new Shot(Object.assign({}, this.pos), this.dir, this.damage));
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
    constructor(pos, dir, damage = 10) {
        this.pos = pos;
        this.dir = dir;
        this.damage = damage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcGF0aC1idWlsZGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNzb3VyY2VzL2Fzc2V0cy90dXJyZXQtYmFzZS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9yZXNzb3VyY2VzL2Fzc2V0cy90dXJyZXQtaGVhZC0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52LnRzIiwid2VicGFjazovLy8uL3NyYy9ncmlkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R1cnJldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFB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QUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNwTCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ25NLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJ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QUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakQsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUE2QjtRQUNoQyxpQkFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLFlBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ2pMLENBQUM7Q0FDSjtBQUVnQixvQkFBSSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGEsYixjKXt2YXIgZD1uZXcgWE1MSHR0cFJlcXVlc3Q7ZC5vcGVuKFwiR0VUXCIsYSksZC5yZXNwb25zZVR5cGU9XCJibG9iXCIsZC5vbmxvYWQ9ZnVuY3Rpb24oKXtnKGQucmVzcG9uc2UsYixjKX0sZC5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxkLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5uYXZpZ2F0b3ImJi9NYWNpbnRvc2gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJi9BcHBsZVdlYktpdC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmIS9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksZz1mLnNhdmVBc3x8KFwib2JqZWN0XCIhPXR5cGVvZiB3aW5kb3d8fHdpbmRvdyE9PWY/ZnVuY3Rpb24oKXt9OlwiZG93bmxvYWRcImluIEhUTUxBbmNob3JFbGVtZW50LnByb3RvdHlwZSYmIWE/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihiLGQsZSxnKXtpZihnPWd8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxnJiYoZy5kb2N1bWVudC50aXRsZT1nLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGIpcmV0dXJuIGMoYixkLGUpO3ZhciBoPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1iLnR5cGUsaT0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxqPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoanx8aCYmaXx8YSkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaz1uZXcgRmlsZVJlYWRlcjtrLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWsucmVzdWx0O2E9aj9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxnP2cubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZz1udWxsfSxrLnJlYWRBc0RhdGFVUkwoYil9ZWxzZXt2YXIgbD1mLlVSTHx8Zi53ZWJraXRVUkwsbT1sLmNyZWF0ZU9iamVjdFVSTChiKTtnP2cubG9jYXRpb249bTpsb2NhdGlvbi5ocmVmPW0sZz1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsLnJldm9rZU9iamVjdFVSTChtKX0sNEU0KX19KTtmLnNhdmVBcz1nLnNhdmVBcz1nLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1nKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7dmFyIF9jcmVhdGVDbGFzcz1mdW5jdGlvbigpe2Z1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LHByb3BzKXtmb3IodmFyIGk9MDtpPHByb3BzLmxlbmd0aDtpKyspe3ZhciBkZXNjcmlwdG9yPXByb3BzW2ldO2Rlc2NyaXB0b3IuZW51bWVyYWJsZT1kZXNjcmlwdG9yLmVudW1lcmFibGV8fGZhbHNlO2Rlc2NyaXB0b3IuY29uZmlndXJhYmxlPXRydWU7aWYoXCJ2YWx1ZVwiaW4gZGVzY3JpcHRvcilkZXNjcmlwdG9yLndyaXRhYmxlPXRydWU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxkZXNjcmlwdG9yLmtleSxkZXNjcmlwdG9yKTt9fXJldHVybiBmdW5jdGlvbihDb25zdHJ1Y3Rvcixwcm90b1Byb3BzLHN0YXRpY1Byb3BzKXtpZihwcm90b1Byb3BzKWRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLHByb3RvUHJvcHMpO2lmKHN0YXRpY1Byb3BzKWRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3Isc3RhdGljUHJvcHMpO3JldHVybiBDb25zdHJ1Y3Rvcjt9O30oKTtmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsQ29uc3RydWN0b3Ipe2lmKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3Rvcikpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7fX12YXIgQ09NTUFORF9UWVBFUz17bGluZTonbGluZScsY3VydmU6J2N1cnZlJyxhcmM6J2FyYyd9O3ZhciBQT1NJVElPTl9NT0RFUz17YWJzOidhYnNvbHV0ZScscmVsOidyZWxhdGl2ZSd9O3ZhciBDT01NQU5EUz1be3R5cGU6Q09NTUFORF9UWVBFUy5saW5lLGtleTonTScsbmFtZTonbW92ZVRvJ30se3R5cGU6Q09NTUFORF9UWVBFUy5saW5lLGtleTonTCcsbmFtZTonbGluZVRvJ30se3R5cGU6Q09NTUFORF9UWVBFUy5saW5lLGtleTonSCcsbmFtZTonaG9yaXpvbnRhbExpbmVUbyd9LHt0eXBlOkNPTU1BTkRfVFlQRVMubGluZSxrZXk6J1YnLG5hbWU6J3ZlcnRpY2FsTGluZVRvJ31dO3ZhciBQYXRoQnVpbGRlcj1mdW5jdGlvbigpe2Z1bmN0aW9uIFBhdGhCdWlsZGVyKCl7dmFyIF90aGlzPXRoaXM7X2NsYXNzQ2FsbENoZWNrKHRoaXMsUGF0aEJ1aWxkZXIpO3RoaXMuZGF0YT0nJzt0aGlzLm1vZGU9UE9TSVRJT05fTU9ERVMuYWJzO3RoaXMuY2xvc2VkPWZhbHNlO0NPTU1BTkRTLmZvckVhY2goZnVuY3Rpb24oX3JlZil7dmFyIHR5cGU9X3JlZi50eXBlLGtleT1fcmVmLmtleSxuYW1lPV9yZWYubmFtZTtPYmplY3QuZGVmaW5lUHJvcGVydHkoX3RoaXMsbmFtZSx7ZW51bWVyYWJsZTp0cnVlLHZhbHVlOl90aGlzLl9nZXRDb21tYW5kUHJvdmlkZXIodHlwZSxrZXksbmFtZSl9KTt9KTt9X2NyZWF0ZUNsYXNzKFBhdGhCdWlsZGVyLFt7a2V5OidfZ2V0Q29tbWFuZFByb3ZpZGVyJyx2YWx1ZTpmdW5jdGlvbiBfZ2V0Q29tbWFuZFByb3ZpZGVyKHR5cGUsa2V5KXt2YXIgX3RoaXMyPXRoaXM7c3dpdGNoKHR5cGUpe2Nhc2UgQ09NTUFORF9UWVBFUy5saW5lOnJldHVybiBmdW5jdGlvbih4LHkpe3JldHVybiBfdGhpczIuX2FwcGx5TGluZUNvbW1hbmQoa2V5LHgseSk7fTt9fX0se2tleTonX2FwcGx5TGluZUNvbW1hbmQnLHZhbHVlOmZ1bmN0aW9uIF9hcHBseUxpbmVDb21tYW5kKGtleSx4LHkpe2lmKHRoaXMuY2xvc2VkKXtjb25zb2xlLndhcm4oJ2NvbW1hbmQgYXBwbHkgY29tbWFuZCB0byBjbG9zZWQgcGF0aCcpO3JldHVybiB0aGlzO314PWtleT09PSdWJz8nJzp4O3k9a2V5PT09J0gnPycnOicgJyt5O3RoaXMuZGF0YSs9JyAnK3RoaXMuX3BhcnNlQ29tbWFuZEtleShrZXkpK3greTtyZXR1cm4gdGhpczt9fSx7a2V5OidfcGFyc2VDb21tYW5kS2V5Jyx2YWx1ZTpmdW5jdGlvbiBfcGFyc2VDb21tYW5kS2V5KGtleSl7aWYodGhpcy5tb2RlPT09UE9TSVRJT05fTU9ERVMuYWJzKXtyZXR1cm4ga2V5LnRvVXBwZXJDYXNlKCk7fXJldHVybiBrZXkudG9Mb3dlckNhc2UoKTt9fSx7a2V5Oidfc2V0UG9zaXRpb25Nb2RlJyx2YWx1ZTpmdW5jdGlvbiBfc2V0UG9zaXRpb25Nb2RlKG1vZGUpe3RoaXMubW9kZT1tb2RlO319LHtrZXk6J3Jlc2V0Jyx2YWx1ZTpmdW5jdGlvbiByZXNldCgpe3RoaXMuZGF0YT0nJzt9fSx7a2V5Oid0b1N0cmluZycsdmFsdWU6ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5kYXRhO319LHtrZXk6J3JlbGF0aXZlJyx2YWx1ZTpmdW5jdGlvbiByZWxhdGl2ZSgpe3RoaXMuX3NldFBvc2l0aW9uTW9kZShQT1NJVElPTl9NT0RFUy5yZWwpO3JldHVybiB0aGlzO319LHtrZXk6J2Fic29sdXRlJyx2YWx1ZTpmdW5jdGlvbiBhYnNvbHV0ZSgpe3RoaXMuX3NldFBvc2l0aW9uTW9kZShQT1NJVElPTl9NT0RFUy5hYnMpO3JldHVybiB0aGlzO319LHtrZXk6J2Nsb3NlUGF0aCcsdmFsdWU6ZnVuY3Rpb24gY2xvc2VQYXRoKCl7dGhpcy5wYXRoKz0nIFonO3RoaXMuY2xvc2VkPXRydWU7cmV0dXJuIHRoaXM7fX0se2tleTonaXNDbG9zZWQnLHZhbHVlOmZ1bmN0aW9uIGlzQ2xvc2VkKCl7cmV0dXJuIHRoaXMuY2xvc2VkO319XSk7cmV0dXJuIFBhdGhCdWlsZGVyO30oKTtleHBvcnRzLmRlZmF1bHQ9UGF0aEJ1aWxkZXI7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0LzMwOWQwZmE5NjIyMGQ2YjA5ZTgwODc3OGNkOGQ2ZWVkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9lZDcyMzA1ZGEzYjUxZWI4OTkwNDE2NDI1OTNlNDBmMS5wbmdcIjsiLCJpbXBvcnQgeyBFbnYgfSBmcm9tICcuL2VudidcbmltcG9ydCB7IEdyaWQsIENlbGwgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBQYXRoLCBQb2ludCB9IGZyb20gJy4vcGF0aCdcblxuZnVuY3Rpb24gY3JlYXRlQ2FudmFzKHc6IG51bWJlciwgaDogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIGNvbnN0IHJhdGlvOiBudW1iZXIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgY2FudmFzLndpZHRoID0gdyAqIHJhdGlvXG4gICAgY2FudmFzLmhlaWdodCA9IGggKiByYXRpb1xuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHcgKyAncHgnXG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGggKyAncHgnXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuc2V0VHJhbnNmb3JtKHJhdGlvLCAwLCAwLCByYXRpbywgMCwgMClcbiAgICBjYW52YXMub25jb250ZXh0bWVudSA9IGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpIC8vIE5vIHJpZ2h0IGNsaWNrXG4gICAgcmV0dXJuIGNhbnZhc1xufVxuXG5jb25zdCBsb2FkaW5nU2NyZWVuOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXNjcmVlbicpXG5jb25zdCBwcm9ncmVzc0JhcjogSFRNTFByb2dyZXNzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXNjcmVlbiBwcm9ncmVzcycpXG5cblxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGNyZWF0ZUNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxucHJvZ3Jlc3NCYXIudmFsdWUgKz0gMTBcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKGNhbnZhcylcbnByb2dyZXNzQmFyLnZhbHVlICs9IDEwXG5cbmNvbnN0IGdyaWQ6IEdyaWQgPSBuZXcgR3JpZCg0MCwgNDApXG5jb25zdCBlbnY6IEVudiA9IG5ldyBFbnYoZ3JpZCwgY2FudmFzKVxucHJvZ3Jlc3NCYXIudmFsdWUgKz0gMTBcblxuY29uc3QgZW50cnlQb2ludDogUG9pbnQgPSBuZXcgUG9pbnQoMCwgMClcbmNvbnN0IHBhdGg6IFBhdGggPSBuZXcgUGF0aChbZW50cnlQb2ludF0pXG4vLyBlbnYuc2V0UGF0aChwYXRoKVxuXG5cbi8vIExvYWQgTWFwXG5lbnYubG9hZE1hcCgndGVzdDMubWFwJylcbnByb2dyZXNzQmFyLnZhbHVlICs9IDEwXG5sb2FkaW5nU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZW52LmhhbmRsZUtleURvd24oZSkpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiBlbnYuaGFuZGxlTW91c2VNb3ZlKGUpKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBlbnYuaGFuZGxlTW91c2VDbGljayhlKSlcblxuXG5lbnYudXBkYXRlKClcbiIsImltcG9ydCB7IFBhdGgsIFBvaW50IH0gZnJvbSAnLi9wYXRoJ1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4vZW52J1xuXG5leHBvcnQgY2xhc3MgRW5lbXkge1xuICAgIGVudjogRW52XG4gICAgcGF0aDogUGF0aFxuICAgIHBvczogUG9pbnRcbiAgICBub2RlSW5kZXg6IG51bWJlclxuICAgIHJhZGl1czogbnVtYmVyXG4gICAgc3BlZWQ6IG51bWJlclxuICAgIHBlcmNlbnQ6IG51bWJlclxuICAgIGFuZ2xlOiBudW1iZXJcbiAgICBoZWFsdGg6IG51bWJlclxuICAgIGFsaXZlOiBib29sZWFuXG5cbiAgICBjb25zdHJ1Y3RvcihlbnY6IEVudiwgaGVhbHRoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5lbnYgPSBlbnZcbiAgICAgICAgdGhpcy5wYXRoID0gdGhpcy5lbnYucGF0aFxuICAgICAgICB0aGlzLm5vZGVJbmRleCA9IDBcbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgUG9pbnQodGhpcy5wYXRoLmVudHJ5LngsIHRoaXMucGF0aC5lbnRyeS55KVxuICAgICAgICB0aGlzLnJhZGl1cyA9IDEwXG4gICAgICAgIHRoaXMuc3BlZWQgPSA1XG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoXG4gICAgICAgIHRoaXMuYWxpdmUgPSB0cnVlXG4gICAgICAgIHRoaXMucGVyY2VudCA9IDBcbiAgICAgICAgdGhpcy5hbmdsZSA9IDBcbiAgICB9XG5cbiAgICBtb3ZlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLm5leHRQb3MoKVxuICAgICAgICB0aGlzLnBvcy54ID0gcG9zLnhcbiAgICAgICAgdGhpcy5wb3MueSA9IHBvcy55XG4gICAgICAgIHRoaXMucGVyY2VudCArPSB0aGlzLnBhdGgubGVuZ3RoICogdGhpcy5zcGVlZCAqIDFlLTVcblxuICAgICAgICBsZXQgcG9zQmVmb3JlID0gdGhpcy5wYXRoLnBvaW50QXQodGhpcy5wZXJjZW50IC0gMSlcbiAgICAgICAgbGV0IHBvc0FmdGVyID0gdGhpcy5wYXRoLnBvaW50QXQodGhpcy5wZXJjZW50ICsgMSlcbiAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguYXRhbjIocG9zQWZ0ZXIueSAtIHBvc0JlZm9yZS55LCBwb3NBZnRlci54IC0gcG9zQmVmb3JlLngpICogMTgwIC8gTWF0aC5QSVxuICAgIH1cblxuICAgIG5leHRQb3MoaXRlcmF0aW9uOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIGxldCBuZXh0UGVyY2VudDogbnVtYmVyID0gdGhpcy5wYXRoLmxlbmd0aCAqIHRoaXMuc3BlZWQgKiAxZS01ICogaXRlcmF0aW9uXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGgucG9pbnRBdCh0aGlzLnBlcmNlbnQgKyBuZXh0UGVyY2VudClcbiAgICB9XG5cbiAgICBjaGVja0hpdCgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5lbnYuc2hvdHMuZm9yRWFjaChzaG90ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcy5kaXN0KHNob3QucG9zKSA8IHRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gc2hvdC5kYW1hZ2VcbiAgICAgICAgICAgICAgICB0aGlzLmVudi5zaG90cyA9IHRoaXMuZW52LnNob3RzLmZpbHRlcihlbnZTaG90ID0+IGVudlNob3QgIT09IHNob3QpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb3ZlKClcbiAgICAgICAgdGhpcy5jaGVja0hpdCgpXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIFJlbmRlcmVyLmNpcmNsZShjdHgsIHRoaXMucG9zLngsIHRoaXMucG9zLnksIHRoaXMucmFkaXVzLCB7IHN0cm9rZVN0eWxlOiAncmVkJywgbGluZVdpZHRoOiAyIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5cbmltcG9ydCB7IEdyaWQsIENlbGwsIENlbGxUeXBlIH0gZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHsgUGF0aCwgUG9pbnQsIFZlY3RvcjIgfSBmcm9tICcuL3BhdGgnXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyJ1xuaW1wb3J0IHsgVHVycmV0LCBTaG90IH0gZnJvbSAnLi90dXJyZXQnXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vZW5lbXknXG5pbXBvcnQgKiBhcyBjb2xvciBmcm9tICcuLi9yZXNzb3VyY2VzL2NvbG9yLmpzb24nXG5cblxuZXhwb3J0IGNsYXNzIEVudiB7XG4gICAgZ3JpZDogR3JpZFxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgaGVpZ2h0OiBudW1iZXJcbiAgICBjZWxsV2lkdGg6IG51bWJlclxuICAgIGNlbGxIZWlnaHQ6IG51bWJlclxuICAgIHR1cnJldHM6IEFycmF5PFR1cnJldD5cbiAgICBlbmVtaWVzOiBBcnJheTxFbmVteT5cbiAgICBzaG90czogQXJyYXk8U2hvdD5cbiAgICBoZWFsdGg6IG51bWJlclxuICAgIHBhdGg6IFBhdGhcblxuICAgIGNvbnN0cnVjdG9yKGdyaWQ6IEdyaWQsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZFxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGhcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgdGhpcy50dXJyZXRzID0gW11cbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW11cbiAgICAgICAgdGhpcy5zaG90cyA9IFtdXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwMCAvLyBocFxuICAgICAgICB0aGlzLmNlbGxXaWR0aCA9IE1hdGgubWluKHRoaXMud2lkdGggLyB0aGlzLmdyaWQucm93cywgdGhpcy5oZWlnaHQgLyB0aGlzLmdyaWQuY29scylcbiAgICAgICAgdGhpcy5jZWxsSGVpZ2h0ID0gdGhpcy5jZWxsV2lkdGhcbiAgICAgICAgdGhpcy5wYXRoID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgbG9hZE1hcChmaWxlbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGZldGNoKGByZXNzb3VyY2VzL21hcC8ke2ZpbGVuYW1lLnJlcGxhY2UoL1xcLm1hcC8sICcnKX0ubWFwYClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihtYXAgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlRmFjdG9yOiBWZWN0b3IyID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCAvIG1hcC5zY3JlZW4ud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAvIG1hcC5zY3JlZW4ud2lkdGgsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGg6IFBhdGggPSBQYXRoLmZyb21KU09OKG1hcC5wYXRoLCBzY2FsZUZhY3RvcilcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhdGgocGF0aClcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGgudG9TVkdQYXRoKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbiAgICB9XG5cbiAgICBzYXZlTWFwKGZpbGVuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmFtZTogc3RyaW5nID0gZmlsZW5hbWUucmVwbGFjZSgnLm1hcCcsICcnKVxuICAgICAgICBjb25zdCBtYXBPYmplY3Q6IG9iamVjdCA9IHtcbiAgICAgICAgICAgICdtYXAtbmFtZSc6IG5hbWUsXG4gICAgICAgICAgICBzY3JlZW46IHsgd2lkdGg6IHRoaXMuY2FudmFzLndpZHRoLCBoZWlnaHQ6IHRoaXMuY2FudmFzLmhlaWdodCB9LFxuICAgICAgICAgICAgcGF0aDogeyBwb2ludHM6IHRoaXMucGF0aC5wb2ludHMubWFwKHBvaW50ID0+IFtwb2ludC54LCBwb2ludC55XSkgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGUgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkobWFwT2JqZWN0KV0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXG4gICAgICAgIHNhdmVBcyhmaWxlLCBgJHtuYW1lfS5tYXBgKVxuICAgIH1cblxuICAgIHNldFBhdGgocGF0aDogUGF0aCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoXG4gICAgICAgIHRoaXMucGF0aC5yZWNhbGN1bGF0ZSgpXG4gICAgICAgIHRoaXMuZGVmaW5lQ2VsbHNUeXBlKClcbiAgICB9XG5cbiAgICBzcGF3bkVuZW15KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRW5lbXkodGhpcywgMTAwKSlcbiAgICB9XG5cbiAgICBkZWZpbmVDZWxsc1R5cGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JpZC5jZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC50eXBlID0gQ2VsbFR5cGUuR3JvdW5kKVxuICAgICAgICBpZiAodGhpcy5wYXRoLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBwZXJjZW50OiBudW1iZXIgPSAwXG4gICAgICAgICAgICBjb25zdCBkZWx0YVBlcmNlbnQ6IG51bWJlciA9IHRoaXMuY2VsbFdpZHRoIC8gMiAvIHRoaXMucGF0aC5sZW5ndGggKiAxMDBcbiAgICAgICAgICAgIHdoaWxlIChwZXJjZW50IDw9IDEwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5wYXRoLnBvaW50QXQocGVyY2VudClcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsOiBDZWxsID0gdGhpcy5nZXRDZWxsKHgsIHkpXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC50eXBlID0gQ2VsbFR5cGUuUm9hZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwZXJjZW50ICs9IGRlbHRhUGVyY2VudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q2VsbCh4OiBudW1iZXIsIHk6IG51bWJlcik6IENlbGwge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ3JpZC5jZWxscyBhcyBhbnkpLmZpbmQoY2VsbCA9PiB7XG4gICAgICAgICAgICByZXR1cm4geCA+PSBjZWxsLnggKiB0aGlzLmNlbGxXaWR0aCAmJlxuICAgICAgICAgICAgICAgIHggPCAoY2VsbC54ICsgMSkgKiB0aGlzLmNlbGxXaWR0aCAqIGNlbGwud2lkdGggJiZcbiAgICAgICAgICAgICAgICB5ID49IGNlbGwueSAqIHRoaXMuY2VsbEhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHkgPCAoY2VsbC55ICsgMSkgKiB0aGlzLmNlbGxIZWlnaHQgKiBjZWxsLmhlaWdodFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRldGVjdENlbGwoZTogTW91c2VFdmVudCk6IENlbGwge1xuICAgICAgICBjb25zdCB4ID0gZS5vZmZzZXRYXG4gICAgICAgIGNvbnN0IHkgPSBlLm9mZnNldFlcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbCh4LCB5KVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JpZC5jZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5oaWdobGlnaHQgPSBmYWxzZSlcbiAgICAgICAgY29uc3QgY2VsbDogQ2VsbCA9IHRoaXMuZGV0ZWN0Q2VsbChlKVxuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgY2VsbC5oaWdobGlnaHQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmdyaWQuZm9jdXNDZWxsID0gY2VsbFxuXG4gICAgICAgICAgICBpZiAoY2VsbC50eXBlID09IENlbGxUeXBlLlR1cnJldCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHR1cnJldDogVHVycmV0ID0gdGhpcy50dXJyZXRzLmZpbmQodHVycmV0ID0+IHR1cnJldC5jZWxsID09PSBjZWxsKVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVN0YXRzKGUsIHR1cnJldClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlU3RhdHMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkVuZW15KClcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZU1hcCgndGVzdDIubWFwJylcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhdGgobmV3IFBhdGgoW10pKVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZUNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2VsbDogQ2VsbCA9IHRoaXMuZGV0ZWN0Q2VsbChlKVxuICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiB0aGlzLnBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aC5hZGRQb2ludChuZXcgUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpKVxuICAgICAgICAgICAgdGhpcy5kZWZpbmVDZWxsc1R5cGUoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGwgJiYgKGNlbGwudHlwZSA9PT0gQ2VsbFR5cGUuRW1wdHkgfHwgY2VsbC50eXBlID09PSBDZWxsVHlwZS5Hcm91bmQpKSB7XG4gICAgICAgICAgICBjZWxsLnR5cGUgPSBDZWxsVHlwZS5UdXJyZXRcbiAgICAgICAgICAgIHRoaXMudHVycmV0cy5wdXNoKG5ldyBUdXJyZXQoY2VsbCwgdGhpcykpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5U3RhdHMoZTogTW91c2VFdmVudCwgdHVycmV0OiBUdXJyZXQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBlXG4gICAgICAgIGNvbnN0IHN0YXRzUGFubmVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9hdGluZy1zdGF0cycpXG4gICAgICAgIHN0YXRzUGFubmVsLnN0eWxlLmxlZnQgPSBgJHt4ICsgMTB9cHhgXG4gICAgICAgIHN0YXRzUGFubmVsLnN0eWxlLnRvcCA9IGAke3kgKyAxMH1weGBcbiAgICAgICAgc3RhdHNQYW5uZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgc3RhdHNQYW5uZWwuc3R5bGUub3BhY2l0eSA9ICcuOSdcbiAgICAgICAgc3RhdHNQYW5uZWwuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGxpPkhlYWx0aCAgIDogJHt0dXJyZXQuaGVhbHRofSU8L2xpPlxuICAgICAgICAgICAgPGxpPlJhZGl1cyAgIDogJHt0dXJyZXQucmFkaXVzfXB4PC9saT5cbiAgICAgICAgICAgIDxsaT5EYW1hZ2UgICA6ICR7dHVycmV0LmRhbWFnZX08L2xpPlxuICAgICAgICAgICAgPGxpPkZpcmVSYXRlIDogJHt0dXJyZXQuZmlyZVJhdGV9PC9saT5gXG4gICAgfVxuXG4gICAgaGlkZVN0YXRzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdGF0c1Bhbm5lbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxvYXRpbmctc3RhdHMnKVxuICAgICAgICBzdGF0c1Bhbm5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIHN0YXRzUGFubmVsLnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLnR1cnJldHMuZm9yRWFjaCh0dXJyZXQgPT4gdHVycmV0LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuZmlsdGVyKGVuZW15ID0+IGVuZW15LmFsaXZlKVxuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGUoKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICBsZXQgZmlsbENvbG9yOiBzdHJpbmcgPSBjb2xvci5iZ1xuICAgICAgICB0aGlzLmdyaWQuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLlR1cnJldCkge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbG9yLnR1cnJldFxuICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLlJvYWQpIHtcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSBjb2xvci5yb2FkXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwudHlwZSA9PT0gQ2VsbFR5cGUuR3JvdW5kKSB7XG4gICAgICAgICAgICAgICAgZmlsbENvbG9yID0gY29sb3IuZ3JvdW5kXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbG9yLmJnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZW5kZXJlci5yZWN0KGN0eCwgY2VsbC54ICogdGhpcy5jZWxsV2lkdGgsIGNlbGwueSAqIHRoaXMuY2VsbEhlaWdodCwgdGhpcy5jZWxsV2lkdGggKiBjZWxsLndpZHRoIC0gLjE1LCB0aGlzLmNlbGxIZWlnaHQgKiBjZWxsLmhlaWdodCAtIC4xNSwge1xuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW5jeTogMSxcbiAgICAgICAgICAgICAgICBmaWxsU3R5bGU6IGZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogY29sb3Iuc2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAuNVxyXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5wYXRoKSB7IHRoaXMucGF0aC5yZW5kZXIoY3R4KSB9XG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnJlbmRlcihjdHgpKVxuICAgICAgICB0aGlzLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LnJlbmRlcihjdHgpKVxuICAgICAgICB0aGlzLnR1cnJldHMuZm9yRWFjaCh0dXJyZXQgPT4gdHVycmV0LnJlbmRlcihjdHgpKVxuXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodENlbGw6IENlbGwgPSB0aGlzLmdyaWQuY2VsbHMuZmluZChjZWxsID0+IGNlbGwuaGlnaGxpZ2h0KVxuICAgICAgICBpZiAoaGlnaGxpZ2h0Q2VsbCkge1xuICAgICAgICAgICAgUmVuZGVyZXIucmVjdChjdHgsIGhpZ2hsaWdodENlbGwueCAqIHRoaXMuY2VsbFdpZHRoLCBoaWdobGlnaHRDZWxsLnkgKiB0aGlzLmNlbGxIZWlnaHQsIHRoaXMuY2VsbFdpZHRoICogaGlnaGxpZ2h0Q2VsbC53aWR0aCAtIC4xNSwgdGhpcy5jZWxsSGVpZ2h0ICogaGlnaGxpZ2h0Q2VsbC5oZWlnaHQgLSAuMTUsIHtcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IC4yNSxcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogY29sb3IuaGlnaGxpZ2h0VHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgZmlsbFN0eWxlOiBjb2xvci5oaWdobGlnaHRUcmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBNb3ZlIHRvIG5wbSBwYWNrYWdlIChhdCBsZWFzdCBnaXRodWIpXG5cbmludGVyZmFjZSBOZWloYm9vck9iamVjdCB7XG4gICAgdG9wPzogQ2VsbFxuICAgIHJpZ2h0PzogQ2VsbFxuICAgIGJvdHRvbT86IENlbGxcbiAgICBsZWZ0PzogQ2VsbFxufVxuXG5lbnVtIENlbGxUeXBlIHtcbiAgICBUdXJyZXQsXG4gICAgUm9hZCxcbiAgICBHcm91bmQsXG4gICAgRW1wdHlcbn1cblxuY2xhc3MgR3JpZCB7XG4gICAgcm93czogbnVtYmVyXG4gICAgY29sczogbnVtYmVyXG4gICAgY2VsbHM6IEFycmF5PENlbGw+XG4gICAgZm9jdXNDZWxsOiBDZWxsXG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xzOiBudW1iZXIsIHJvd3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzXG4gICAgICAgIHRoaXMuY29scyA9IGNvbHNcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgIHRoaXMuZm9jdXNDZWxsID0gbnVsbFxuICAgICAgICB0aGlzLmNyZWF0ZUNlbGxzKClcbiAgICAgICAgdGhpcy5kZWZpbmVOZWlnaGJvb3JzKClcbiAgICB9XG5cbiAgICBjcmVhdGVDZWxscygpIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5jb2xzOyBjb2wrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5yb3dzOyByb3crKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChuZXcgQ2VsbChjb2wsIHJvdykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDZWxsKG5ld0NlbGw6IENlbGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNlbGxzLmluY2x1ZGVzKG5ld0NlbGwpKSByZXR1cm5cbiAgICAgICAgaWYgKG5ld0NlbGwud2lkdGggIT09IDEgfHwgbmV3Q2VsbC5oZWlnaHQgIT09IDEpIHtcbiAgICAgICAgICAgIGlmIChuZXdDZWxsLndpZHRoID4gMSkge1xuICAgICAgICAgICAgICAgIGxldCByYW5nZTogbnVtYmVyID0gbmV3Q2VsbC53aWR0aCAtIDFcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQ2VsbDogQXJyYXk8Q2VsbD4gPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IGNlbGwueSA9PT0gbmV3Q2VsbC55ICYmIGNlbGwueCA+IG5ld0NlbGwueCAmJiBjZWxsLnggPD0gbmV3Q2VsbC54ICsgcmFuZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGNlbGwgPT4gIXJlbW92ZUNlbGwuaW5jbHVkZXMoY2VsbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3Q2VsbC5oZWlnaHQgPiAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlOiBudW1iZXIgPSBuZXdDZWxsLmhlaWdodCAtIDFcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQ2VsbDogQXJyYXk8Q2VsbD4gPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IGNlbGwueCA9PT0gbmV3Q2VsbC54ICYmIGNlbGwueSA+IG5ld0NlbGwueSAmJiBjZWxsLnkgPD0gbmV3Q2VsbC55ICsgcmFuZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGNlbGwgPT4gIXJlbW92ZUNlbGwuaW5jbHVkZXMoY2VsbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWZpbmVOZWlnaGJvb3JzKClcbiAgICAgICAgdGhpcy5jZWxsc1t0aGlzLmNlbGxzLmluZGV4T2YobmV3Q2VsbCldID0gbmV3Q2VsbFxuICAgIH1cblxuICAgIGRlZmluZU5laWdoYm9vcnMoKSB7XG4gICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwubmVpZ2hib29yLnRvcCA9IGNlbGwueSA+PSAxID8gdGhpcy5jZWxscy5maWx0ZXIob3RoZXJjZWxsID0+IG90aGVyY2VsbC54IDw9IGNlbGwueCAmJiBvdGhlcmNlbGwueCArIG90aGVyY2VsbC53aWR0aCA+IGNlbGwueCAmJiBvdGhlcmNlbGwueSA9PT0gY2VsbC55IC0gY2VsbC5oZWlnaHQpWzBdIDogbnVsbFxuICAgICAgICAgICAgY2VsbC5uZWlnaGJvb3IuYm90dG9tID0gY2VsbC55IDw9IHRoaXMucm93cyAtIDEgPyB0aGlzLmNlbGxzLmZpbHRlcihvdGhlcmNlbGwgPT4gb3RoZXJjZWxsLnggPD0gY2VsbC54ICYmIG90aGVyY2VsbC54ICsgb3RoZXJjZWxsLndpZHRoID4gY2VsbC54ICYmIG90aGVyY2VsbC55ID09PSBjZWxsLnkgKyBjZWxsLmhlaWdodClbMF0gOiBudWxsXG4gICAgICAgICAgICBjZWxsLm5laWdoYm9vci5sZWZ0ID0gY2VsbC54ID49IDEgPyB0aGlzLmNlbGxzLmZpbHRlcihvdGhlcmNlbGwgPT4gb3RoZXJjZWxsLnkgPD0gY2VsbC55ICYmIG90aGVyY2VsbC55ICsgb3RoZXJjZWxsLmhlaWdodCA+IGNlbGwueSAmJiBvdGhlcmNlbGwueCA9PT0gY2VsbC54IC0gY2VsbC53aWR0aClbMF0gOiBudWxsXG4gICAgICAgICAgICBjZWxsLm5laWdoYm9vci5yaWdodCA9IGNlbGwueCA8PSB0aGlzLmNvbHMgLSAxID8gdGhpcy5jZWxscy5maWx0ZXIob3RoZXJjZWxsID0+IG90aGVyY2VsbC55IDw9IGNlbGwueSAmJiBvdGhlcmNlbGwueSArIG90aGVyY2VsbC5oZWlnaHQgPiBjZWxsLnkgJiYgb3RoZXJjZWxsLnggPT09IGNlbGwueCArIGNlbGwud2lkdGgpWzBdIDogbnVsbFxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5jbGFzcyBDZWxsIHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgaGVpZ2h0OiBudW1iZXJcbiAgICBoaWdobGlnaHQ6IGJvb2xlYW5cbiAgICB0eXBlOiBDZWxsVHlwZVxuICAgIG5laWdoYm9vcjogTmVpaGJvb3JPYmplY3RcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aCA9IDEsIGhlaWdodCA9IDEpIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9IGZhbHNlXG4gICAgICAgIHRoaXMudHlwZSA9IENlbGxUeXBlLkdyb3VuZFxuICAgICAgICB0aGlzLm5laWdoYm9vciA9IHt9XG4gICAgfVxuXG4gICAgdG9nZ2xlSGlnaGxpZ2h0KCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9ICF0aGlzLmhpZ2hsaWdodFxuICAgIH1cbn1cblxuZXhwb3J0IHsgR3JpZCwgQ2VsbCwgQ2VsbFR5cGUgfVxuIiwiaW1wb3J0IFBhdGhCdWlsZGVyIGZyb20gJ3N2Zy1wYXRoLWJ1aWxkZXInO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcidcblxuaW50ZXJmYWNlIEpTT05QYXRoIHtcbiAgICBwb2ludHM6IEFycmF5PEFycmF5PG51bWJlcj4+XG59XG5cbmNsYXNzIFBhdGgge1xuICAgIGVudHJ5OiBQb2ludFxuICAgIHBvaW50czogQXJyYXk8UG9pbnQ+XG4gICAgZW5kOiBQb2ludFxuICAgIHN2ZzogYW55XG4gICAgbGVuZ3RoOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50czogQXJyYXk8UG9pbnQ+KSB7XG4gICAgICAgIHRoaXMuZW50cnkgPSBwb2ludHNbMF0gfHwgbnVsbFxuICAgICAgICB0aGlzLmVuZCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1cbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHNcbiAgICAgICAgdGhpcy5zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKCdkJywgdGhpcy50b1NWR1BhdGgoKSlcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLnN2Zy5nZXRUb3RhbExlbmd0aCgpXG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21KU09OKGpzb246IEpTT05QYXRoLCBzY2FsZUZhY3RvcjogVmVjdG9yMiA9IFZfVU5JVCkge1xuICAgICAgICBjb25zdCBwb2ludHM6IEFycmF5PFBvaW50PiA9IGpzb24ucG9pbnRzLm1hcCh0dXBsZSA9PiBuZXcgUG9pbnQodHVwbGVbMF0gKiBzY2FsZUZhY3Rvci54LCB0dXBsZVsxXSAqIHNjYWxlRmFjdG9yLnkpKVxuICAgICAgICByZXR1cm4gbmV3IFBhdGgocG9pbnRzKVxuICAgIH1cblxuICAgIGFkZFBvaW50KHBvaW50OiBQb2ludCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZW50cnkpIHRoaXMuZW50cnkgPSBwb2ludFxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KVxuICAgICAgICB0aGlzLmVuZCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdXG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGUoKVxuICAgIH1cblxuICAgIHBvaW50QXQocGVyY2VudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdmcuZ2V0UG9pbnRBdExlbmd0aCh0aGlzLmxlbmd0aCAqIHBlcmNlbnQgLyAxMDApXG4gICAgfVxuXG4gICAgcmVjYWxjdWxhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW5kID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV1cbiAgICAgICAgdGhpcy5zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKCdkJywgdGhpcy50b1NWR1BhdGgoKSlcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLnN2Zy5nZXRUb3RhbExlbmd0aCgpXG4gICAgfVxuXG4gICAgdG9TVkdQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGJ1aWxkZXI6IFBhdGhCdWlsZGVyID0gbmV3IFBhdGhCdWlsZGVyKClcbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGJ1aWxkZXIubW92ZVRvKHRoaXMuZW50cnkueCwgdGhpcy5lbnRyeS55KVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhdGgubGluZVRvKHRoaXMucG9pbnRzW2ldLngsIHRoaXMucG9pbnRzW2ldLnkpIC8vIHNtb290aFRvID9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ1BhdGg6IHN0cmluZyA9IHBhdGgudG9TdHJpbmcoKVxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ1BhdGhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnTSAwIDAnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIucG9seShjdHgsIHRoaXMucG9pbnRzLCB7IGxpbmVXaWR0aDogMSwgZmlsbFN0eWxlOiAnZ3JleScsIHRyYW5zcGFyZW5jeTogLjI1IH0pXG4gICAgfVxufVxuXG5jbGFzcyBQb2ludCB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICB9XG5cbiAgICBkaXN0KHBvaW50OiBQb2ludCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHRoaXMueCAtIHBvaW50LngpICoqIDIgKyAodGhpcy55IC0gcG9pbnQueSkgKiogMilcbiAgICB9XG59XG5cbmNsYXNzIFZlY3RvcjIge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgVl9OVUxMID0gbmV3IFZlY3RvcjIoMCwgMClcbmV4cG9ydCBjb25zdCBWX1VOSVQgPSBuZXcgVmVjdG9yMigxLCAxKVxuXG5leHBvcnQgeyBQYXRoLCBQb2ludCwgVmVjdG9yMiB9XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcGF0aCdcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICcuL3RleHR1cmUnXG5cbmludGVyZmFjZSBTdHlsZU9iamVjdCB7XG4gICAgc3Ryb2tlU3R5bGU/OiBzdHJpbmcsXG4gICAgbGluZVdpZHRoPzogbnVtYmVyLFxuICAgIGxpbmVKb2luPzogQ2FudmFzTGluZUpvaW4sXG4gICAgZmlsbFN0eWxlPzogc3RyaW5nLFxuICAgIHRyYW5zcGFyZW5jeT86IG51bWJlclxufVxuXG5jb25zdCBkZWZhdWx0U3R5bGVPYmplY3Q6IFN0eWxlT2JqZWN0ID0ge1xuICAgIHN0cm9rZVN0eWxlOiAnYmxhY2snLFxuICAgIGxpbmVXaWR0aDogNCxcbiAgICBsaW5lSm9pbjogJ3JvdW5kJyxcbiAgICBmaWxsU3R5bGU6ICdibGFjaycsXG4gICAgdHJhbnNwYXJlbmN5OiAxXG59XG5cbmNsYXNzIFJlbmRlcmVyIHtcblxuICAgIHN0YXRpYyBzdHlsZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgb2JqPzogU3R5bGVPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3R5bGVPYmplY3QgPSB7IC4uLmRlZmF1bHRTdHlsZU9iamVjdCwgLi4ub2JqIH1cbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHN0eWxlT2JqZWN0LmxpbmVXaWR0aFxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHlsZU9iamVjdC5zdHJva2VTdHlsZVxuICAgICAgICBjdHgubGluZUpvaW4gPSBzdHlsZU9iamVjdC5saW5lSm9pblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gc3R5bGVPYmplY3QuZmlsbFN0eWxlXG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHN0eWxlT2JqZWN0LnRyYW5zcGFyZW5jeVxuICAgIH1cblxuICAgIHN0YXRpYyBsaW5lKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50LCBvYmo/OiBTdHlsZU9iamVjdCk6IHZvaWQge1xuICAgICAgICBSZW5kZXJlci5zdHlsZShjdHgsIG9iailcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8ocG9pbnQxLngsIHBvaW50MS55KVxuICAgICAgICBjdHgubGluZVRvKHBvaW50Mi54LCBwb2ludDIueSlcbiAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgc3RhdGljIHJlY3QoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgb2JqPzogU3R5bGVPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIuc3R5bGUoY3R4LCBvYmopXG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICBjdHguc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIH1cblxuICAgIHN0YXRpYyBwb2x5KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBwb2ludHM6IEFycmF5PFBvaW50Piwgb2JqPzogU3R5bGVPYmplY3QpIHtcbiAgICAgICAgUmVuZGVyZXIuc3R5bGUoY3R4LCBvYmopXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBpZiAoIXBvaW50cy5sZW5ndGgpIHJldHVyblxuICAgICAgICBjdHgubW92ZVRvKHBvaW50c1swXS54LCBwb2ludHNbMF0ueSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocG9pbnRzW2ldLngsIHBvaW50c1tpXS55KVxuICAgICAgICB9XG4gICAgICAgIGN0eC5zdHJva2UoKVxuICAgIH1cblxuICAgIHN0YXRpYyBjaXJjbGUoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgb2JqPzogU3R5bGVPYmplY3QpIHtcbiAgICAgICAgUmVuZGVyZXIuc3R5bGUoY3R4LCBvYmopXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpXG4gICAgICAgIGN0eC5zdHJva2UoKVxuICAgIH1cblxuICAgIHN0YXRpYyBwb2ludChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIG9iaj86IFN0eWxlT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIFJlbmRlcmVyLmNpcmNsZShjdHgsIHgsIHksIDUsIG9iailcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVjdFNwcml0ZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0ZXh0dXJlOiBUZXh0dXJlKTogdm9pZCB7XG4gICAgICAgIFJlbmRlcmVyLnN0eWxlKGN0eCwge30pXG4gICAgICAgIGN0eC5zYXZlKClcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh4ICsgd2lkdGggLyAyLCB5ICsgaGVpZ2h0IC8gMilcbiAgICAgICAgY3R4LnNjYWxlKHRleHR1cmUuc2NhbGUueCwgdGV4dHVyZS5zY2FsZS55KVxuICAgICAgICBjdHgucm90YXRlKHRleHR1cmUucm90YXRpb24pXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0ZXh0dXJlLmltYWdlLFxuICAgICAgICAgICAgd2lkdGggKiB0ZXh0dXJlLm9mZnNldC54IC0gd2lkdGggLyAyLFxuICAgICAgICAgICAgaGVpZ2h0ICogdGV4dHVyZS5vZmZzZXQueSAtIGhlaWdodCAvIDIsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICApXG4gICAgICAgIGN0eC5yZXN0b3JlKClcbiAgICB9XG59XG5cbmV4cG9ydCB7IFJlbmRlcmVyIH1cbiIsImltcG9ydCB7IFBvaW50LCBWZWN0b3IyLCBWX1VOSVQsIFZfTlVMTCB9IGZyb20gJy4vcGF0aCdcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBUVVJSRVRfQkFTRSB9IGZyb20gJy4uL3Jlc3NvdXJjZXMvYXNzZXRzL3R1cnJldC1iYXNlLTIucG5nJ1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBUVVJSRVRfSEVBRCB9IGZyb20gJy4uL3Jlc3NvdXJjZXMvYXNzZXRzL3R1cnJldC1oZWFkLTIucG5nJ1xuXG5cbmludGVyZmFjZSBUZXh0dXJlT3B0aW9ucyB7XG4gICAgcm90YXRpb24/OiBudW1iZXIsIC8vIHJhZGlhbnNcbiAgICBvZmZzZXQ/OiBWZWN0b3IyLFxuICAgIHNjYWxlPzogVmVjdG9yMlxufVxuXG5jbGFzcyBUZXh0dXJlIHtcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudFxuICAgIHJvdGF0aW9uOiBudW1iZXJcbiAgICBvZmZzZXQ6IFZlY3RvcjJcbiAgICBzaXplOiBWZWN0b3IyXG4gICAgc2NhbGU6IFZlY3RvcjJcbiAgICBvcHRpb25zOiBUZXh0dXJlT3B0aW9uc1xuXG4gICAgY29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcsIG9wdGlvbnM/OiBUZXh0dXJlT3B0aW9ucykge1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKClcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBzb3VyY2VcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IFZlY3RvcjIodGhpcy5pbWFnZS53aWR0aCwgdGhpcy5pbWFnZS5oZWlnaHQpXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMub3B0aW9ucy5yb3RhdGlvbiB8fCAwXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5vcHRpb25zLm9mZnNldCB8fCBWX05VTEwgLy8gcmVsYXRpdmUgdG8gdGhlIHNpemVcbiAgICAgICAgdGhpcy5zY2FsZSA9IHRoaXMub3B0aW9ucy5zY2FsZSB8fCBWX1VOSVRcbiAgICB9XG59XG5cbmNsYXNzIFNwcml0ZSBleHRlbmRzIFRleHR1cmUge1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nLCBvcHRpb25zPzogVGV4dHVyZU9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoc291cmNlLCBvcHRpb25zKVxuICAgIH1cbn1cblxuY29uc3QgVFVSUkVUX0JBU0VfVEVYVFVSRSA9IG5ldyBUZXh0dXJlKFRVUlJFVF9CQVNFKVxuY29uc3QgVFVSUkVUX0hFQURfVEVYVFVSRSA9IG5ldyBUZXh0dXJlKFRVUlJFVF9IRUFELCB7IHNjYWxlOiBuZXcgVmVjdG9yMigxLjIsIDEuMiksIG9mZnNldDogbmV3IFZlY3RvcjIoMCwgLTEgLyA5KSB9KVxuXG5leHBvcnQgeyBTcHJpdGUsIFRleHR1cmUgfVxuZXhwb3J0IHsgVFVSUkVUX0JBU0VfVEVYVFVSRSwgVFVSUkVUX0hFQURfVEVYVFVSRSB9XG4iLCJpbXBvcnQgeyBDZWxsLCBDZWxsVHlwZSB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wYXRoJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi9lbnYnXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vZW5lbXknXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyJ1xuXG5pbXBvcnQgeyBUVVJSRVRfQkFTRV9URVhUVVJFLCBUVVJSRVRfSEVBRF9URVhUVVJFIH0gZnJvbSAnLi90ZXh0dXJlJ1xuXG5jbGFzcyBUdXJyZXQge1xuICAgIGNlbGw6IENlbGxcbiAgICBlbnY6IEVudlxuICAgIG9yaWdpbjogUG9pbnRcbiAgICBwb3M6IFBvaW50XG4gICAgaGVhbHRoOiBudW1iZXJcbiAgICByYWRpdXM6IG51bWJlclxuICAgIHRhcmdldDogRW5lbXlcbiAgICBkYW1hZ2U6IG51bWJlclxuICAgIGNhblNob290OiBib29sZWFuXG4gICAgZGlyOiBudW1iZXJcbiAgICBmaXJlUmF0ZTogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcihjZWxsOiBDZWxsLCBlbnY6IEVudikge1xuICAgICAgICB0aGlzLmNlbGwgPSBjZWxsXG4gICAgICAgIHRoaXMuZW52ID0gZW52XG4gICAgICAgIHRoaXMub3JpZ2luID0gbmV3IFBvaW50KHRoaXMuY2VsbC54ICogdGhpcy5lbnYuY2VsbFdpZHRoLCB0aGlzLmNlbGwueSAqIHRoaXMuZW52LmNlbGxXaWR0aClcbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgUG9pbnQoKHRoaXMuY2VsbC54ICsgMC41KSAqIHRoaXMuZW52LmNlbGxXaWR0aCwgKHRoaXMuY2VsbC55ICsgMC41KSAqIHRoaXMuZW52LmNlbGxXaWR0aClcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDBcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAxMDBcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAxMFxuICAgICAgICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZFxuICAgICAgICB0aGlzLmNhblNob290ID0gdHJ1ZVxuICAgICAgICB0aGlzLmRpciA9IC1NYXRoLlBJIC8gMlxuICAgICAgICB0aGlzLmZpcmVSYXRlID0gMTAwIC8vIGVhY2ggbXNcbiAgICB9XG5cbiAgICBzaG9vdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gVE9ETzogcHJlZGljdCBwb3NpdGlvblxuICAgICAgICB0aGlzLmVudi5zaG90cy5wdXNoKG5ldyBTaG90KDxQb2ludD57IC4uLnRoaXMucG9zIH0sIHRoaXMuZGlyLCB0aGlzLmRhbWFnZSkpXG4gICAgICAgIHRoaXMuY2FuU2hvb3QgPSBmYWxzZVxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhblNob290ID0gdHJ1ZVxuICAgICAgICB9LCB0aGlzLmZpcmVSYXRlKVxuICAgIH1cblxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldCB8fCB0aGlzLnBvcy5kaXN0KHRoaXMudGFyZ2V0LnBvcykgPiB0aGlzLnJhZGl1cyB8fCAhdGhpcy50YXJnZXQuYWxpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldHM6IEFycmF5PEVuZW15PiA9IHRoaXMuZW52LmVuZW1pZXNcbiAgICAgICAgICAgICAgICAuc29ydCgoZW5lbXkxLCBlbmVteTIpID0+IHRoaXMucG9zLmRpc3QoZW5lbXkxLnBvcykgLSB0aGlzLnBvcy5kaXN0KGVuZW15Mi5wb3MpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZW5lbXkgPT4gdGhpcy5wb3MuZGlzdChlbmVteS5wb3MpIDwgdGhpcy5yYWRpdXMpXG4gICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGgpIHsgdGhpcy50YXJnZXQgPSB0YXJnZXRzWzBdIH1cbiAgICAgICAgICAgIGVsc2UgeyB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZCB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZWRpY3RUYXJnZXRQb3MgPSB0aGlzLnRhcmdldC5uZXh0UG9zKDQpXG4gICAgICAgICAgICB0aGlzLmRpciA9IE1hdGguYXRhbjIocHJlZGljdFRhcmdldFBvcy55IC0gdGhpcy5wb3MueSwgcHJlZGljdFRhcmdldFBvcy54IC0gdGhpcy5wb3MueClcbiAgICAgICAgICAgIGlmICh0aGlzLmNhblNob290KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG9vdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgVFVSUkVUX0hFQURfVEVYVFVSRS5yb3RhdGlvbiA9IHRoaXMuZGlyICsgTWF0aC5QSSAvIDJcbiAgICAgICAgUmVuZGVyZXIucmVjdFNwcml0ZShjdHgsIHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnksIHRoaXMuZW52LmNlbGxXaWR0aCwgdGhpcy5lbnYuY2VsbFdpZHRoLCBUVVJSRVRfQkFTRV9URVhUVVJFKVxuICAgICAgICBSZW5kZXJlci5yZWN0U3ByaXRlKGN0eCwgdGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSwgdGhpcy5lbnYuY2VsbFdpZHRoLCB0aGlzLmVudi5jZWxsV2lkdGgsIFRVUlJFVF9IRUFEX1RFWFRVUkUpXG4gICAgICAgIC8vIFJlbmRlcmVyLmNpcmNsZShjdHgsIHRoaXMucG9zLngsIHRoaXMucG9zLnksIDEwLCB7IGxpbmVXaWR0aDogMiwgc3Ryb2tlU3R5bGU6ICdibGFjaycgfSlcbiAgICAgICAgUmVuZGVyZXIuY2lyY2xlKGN0eCwgdGhpcy5wb3MueCwgdGhpcy5wb3MueSwgdGhpcy5yYWRpdXMsIHsgbGluZVdpZHRoOiAxLCB0cmFuc3BhcmVuY3k6IC4yNSwgc3Ryb2tlU3R5bGU6ICd3aGl0ZScgfSlcbiAgICB9XG59XG5cbmNsYXNzIFNob3Qge1xuICAgIHBvczogUG9pbnRcbiAgICBkaXI6IG51bWJlclxuICAgIGRhbWFnZTogbnVtYmVyXG4gICAgbGVuZ3RoOiBudW1iZXJcbiAgICBzcGVlZDogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3Rvcihwb3M6IFBvaW50LCBkaXI6IG51bWJlciwgZGFtYWdlOiBudW1iZXIgPSAxMCkge1xuICAgICAgICB0aGlzLnBvcyA9IHBvc1xuICAgICAgICB0aGlzLmRpciA9IGRpclxuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZVxuICAgICAgICB0aGlzLmxlbmd0aCA9IDEwXG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMFxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wb3MueCArPSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy5kaXIpXG4gICAgICAgIHRoaXMucG9zLnkgKz0gdGhpcy5zcGVlZCAqIE1hdGguc2luKHRoaXMuZGlyKVxuICAgIH1cblxuICAgIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBSZW5kZXJlci5saW5lKGN0eCwgdGhpcy5wb3MsIG5ldyBQb2ludCh0aGlzLnBvcy54ICsgdGhpcy5sZW5ndGggKiBNYXRoLmNvcyh0aGlzLmRpciksIHRoaXMucG9zLnkgKyB0aGlzLmxlbmd0aCAqIE1hdGguc2luKHRoaXMuZGlyKSksIHsgbGluZVdpZHRoOiAyLCBzdHJva2VTdHlsZTogJ2JsYWNrJyB9KVxuICAgIH1cbn1cblxuZXhwb3J0IHsgVHVycmV0LCBTaG90IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=