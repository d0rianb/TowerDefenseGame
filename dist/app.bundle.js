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
env.setPath(path);
// Load Map
// env.loadMap('test3.map')
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
        statsPannel.style.opacity = .9;
        statsPannel.innerHTML = `
            <li>Health   : ${turret.health}%</li>
            <li>Radius   : ${turret.radius}px</li>
            <li>Damage   : ${turret.damage}</li>
            <li>FireRate : ${turret.fireRate}</li>`;
    }
    hideStats() {
        const statsPannel = document.querySelector('.floating-stats');
        statsPannel.style.display = 'none';
        statsPannel.style.opacity = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcGF0aC1idWlsZGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNzb3VyY2VzL2Fzc2V0cy90dXJyZXQtYmFzZS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9yZXNzb3VyY2VzL2Fzc2V0cy90dXJyZXQtaGVhZC0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52LnRzIiwid2VicGFjazovLy8uL3NyYy9ncmlkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R1cnJldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFB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Q0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNwTCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ25NLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3JMLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElB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SSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDakwsQ0FBQztDQUNKO0FBRWdCLG9CQUFJIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYSxiLGMpe3ZhciBkPW5ldyBYTUxIdHRwUmVxdWVzdDtkLm9wZW4oXCJHRVRcIixhKSxkLnJlc3BvbnNlVHlwZT1cImJsb2JcIixkLm9ubG9hZD1mdW5jdGlvbigpe2coZC5yZXNwb25zZSxiLGMpfSxkLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGQuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLm5hdmlnYXRvciYmL01hY2ludG9zaC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmL0FwcGxlV2ViS2l0Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxnPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlJiYhYT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGIsZCxlLGcpe2lmKGc9Z3x8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGcmJihnLmRvY3VtZW50LnRpdGxlPWcuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYilyZXR1cm4gYyhiLGQsZSk7dmFyIGg9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWIudHlwZSxpPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGo9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChqfHxoJiZpfHxhKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBrPW5ldyBGaWxlUmVhZGVyO2sub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ay5yZXN1bHQ7YT1qP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGc/Zy5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxnPW51bGx9LGsucmVhZEFzRGF0YVVSTChiKX1lbHNle3ZhciBsPWYuVVJMfHxmLndlYmtpdFVSTCxtPWwuY3JlYXRlT2JqZWN0VVJMKGIpO2c/Zy5sb2NhdGlvbj1tOmxvY2F0aW9uLmhyZWY9bSxnPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2wucmV2b2tlT2JqZWN0VVJMKG0pfSw0RTQpfX0pO2Yuc2F2ZUFzPWcuc2F2ZUFzPWcsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWcpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTt2YXIgX2NyZWF0ZUNsYXNzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQscHJvcHMpe2Zvcih2YXIgaT0wO2k8cHJvcHMubGVuZ3RoO2krKyl7dmFyIGRlc2NyaXB0b3I9cHJvcHNbaV07ZGVzY3JpcHRvci5lbnVtZXJhYmxlPWRlc2NyaXB0b3IuZW51bWVyYWJsZXx8ZmFsc2U7ZGVzY3JpcHRvci5jb25maWd1cmFibGU9dHJ1ZTtpZihcInZhbHVlXCJpbiBkZXNjcmlwdG9yKWRlc2NyaXB0b3Iud3JpdGFibGU9dHJ1ZTtPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LGRlc2NyaXB0b3Iua2V5LGRlc2NyaXB0b3IpO319cmV0dXJuIGZ1bmN0aW9uKENvbnN0cnVjdG9yLHByb3RvUHJvcHMsc3RhdGljUHJvcHMpe2lmKHByb3RvUHJvcHMpZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUscHJvdG9Qcm9wcyk7aWYoc3RhdGljUHJvcHMpZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3RvcixzdGF0aWNQcm9wcyk7cmV0dXJuIENvbnN0cnVjdG9yO307fSgpO2Z1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSxDb25zdHJ1Y3Rvcil7aWYoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fXZhciBDT01NQU5EX1RZUEVTPXtsaW5lOidsaW5lJyxjdXJ2ZTonY3VydmUnLGFyYzonYXJjJ307dmFyIFBPU0lUSU9OX01PREVTPXthYnM6J2Fic29sdXRlJyxyZWw6J3JlbGF0aXZlJ307dmFyIENPTU1BTkRTPVt7dHlwZTpDT01NQU5EX1RZUEVTLmxpbmUsa2V5OidNJyxuYW1lOidtb3ZlVG8nfSx7dHlwZTpDT01NQU5EX1RZUEVTLmxpbmUsa2V5OidMJyxuYW1lOidsaW5lVG8nfSx7dHlwZTpDT01NQU5EX1RZUEVTLmxpbmUsa2V5OidIJyxuYW1lOidob3Jpem9udGFsTGluZVRvJ30se3R5cGU6Q09NTUFORF9UWVBFUy5saW5lLGtleTonVicsbmFtZTondmVydGljYWxMaW5lVG8nfV07dmFyIFBhdGhCdWlsZGVyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gUGF0aEJ1aWxkZXIoKXt2YXIgX3RoaXM9dGhpcztfY2xhc3NDYWxsQ2hlY2sodGhpcyxQYXRoQnVpbGRlcik7dGhpcy5kYXRhPScnO3RoaXMubW9kZT1QT1NJVElPTl9NT0RFUy5hYnM7dGhpcy5jbG9zZWQ9ZmFsc2U7Q09NTUFORFMuZm9yRWFjaChmdW5jdGlvbihfcmVmKXt2YXIgdHlwZT1fcmVmLnR5cGUsa2V5PV9yZWYua2V5LG5hbWU9X3JlZi5uYW1lO09iamVjdC5kZWZpbmVQcm9wZXJ0eShfdGhpcyxuYW1lLHtlbnVtZXJhYmxlOnRydWUsdmFsdWU6X3RoaXMuX2dldENvbW1hbmRQcm92aWRlcih0eXBlLGtleSxuYW1lKX0pO30pO31fY3JlYXRlQ2xhc3MoUGF0aEJ1aWxkZXIsW3trZXk6J19nZXRDb21tYW5kUHJvdmlkZXInLHZhbHVlOmZ1bmN0aW9uIF9nZXRDb21tYW5kUHJvdmlkZXIodHlwZSxrZXkpe3ZhciBfdGhpczI9dGhpcztzd2l0Y2godHlwZSl7Y2FzZSBDT01NQU5EX1RZUEVTLmxpbmU6cmV0dXJuIGZ1bmN0aW9uKHgseSl7cmV0dXJuIF90aGlzMi5fYXBwbHlMaW5lQ29tbWFuZChrZXkseCx5KTt9O319fSx7a2V5OidfYXBwbHlMaW5lQ29tbWFuZCcsdmFsdWU6ZnVuY3Rpb24gX2FwcGx5TGluZUNvbW1hbmQoa2V5LHgseSl7aWYodGhpcy5jbG9zZWQpe2NvbnNvbGUud2FybignY29tbWFuZCBhcHBseSBjb21tYW5kIHRvIGNsb3NlZCBwYXRoJyk7cmV0dXJuIHRoaXM7fXg9a2V5PT09J1YnPycnOng7eT1rZXk9PT0nSCc/Jyc6JyAnK3k7dGhpcy5kYXRhKz0nICcrdGhpcy5fcGFyc2VDb21tYW5kS2V5KGtleSkreCt5O3JldHVybiB0aGlzO319LHtrZXk6J19wYXJzZUNvbW1hbmRLZXknLHZhbHVlOmZ1bmN0aW9uIF9wYXJzZUNvbW1hbmRLZXkoa2V5KXtpZih0aGlzLm1vZGU9PT1QT1NJVElPTl9NT0RFUy5hYnMpe3JldHVybiBrZXkudG9VcHBlckNhc2UoKTt9cmV0dXJuIGtleS50b0xvd2VyQ2FzZSgpO319LHtrZXk6J19zZXRQb3NpdGlvbk1vZGUnLHZhbHVlOmZ1bmN0aW9uIF9zZXRQb3NpdGlvbk1vZGUobW9kZSl7dGhpcy5tb2RlPW1vZGU7fX0se2tleToncmVzZXQnLHZhbHVlOmZ1bmN0aW9uIHJlc2V0KCl7dGhpcy5kYXRhPScnO319LHtrZXk6J3RvU3RyaW5nJyx2YWx1ZTpmdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLmRhdGE7fX0se2tleToncmVsYXRpdmUnLHZhbHVlOmZ1bmN0aW9uIHJlbGF0aXZlKCl7dGhpcy5fc2V0UG9zaXRpb25Nb2RlKFBPU0lUSU9OX01PREVTLnJlbCk7cmV0dXJuIHRoaXM7fX0se2tleTonYWJzb2x1dGUnLHZhbHVlOmZ1bmN0aW9uIGFic29sdXRlKCl7dGhpcy5fc2V0UG9zaXRpb25Nb2RlKFBPU0lUSU9OX01PREVTLmFicyk7cmV0dXJuIHRoaXM7fX0se2tleTonY2xvc2VQYXRoJyx2YWx1ZTpmdW5jdGlvbiBjbG9zZVBhdGgoKXt0aGlzLnBhdGgrPScgWic7dGhpcy5jbG9zZWQ9dHJ1ZTtyZXR1cm4gdGhpczt9fSx7a2V5Oidpc0Nsb3NlZCcsdmFsdWU6ZnVuY3Rpb24gaXNDbG9zZWQoKXtyZXR1cm4gdGhpcy5jbG9zZWQ7fX1dKTtyZXR1cm4gUGF0aEJ1aWxkZXI7fSgpO2V4cG9ydHMuZGVmYXVsdD1QYXRoQnVpbGRlcjsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvMzA5ZDBmYTk2MjIwZDZiMDllODA4Nzc4Y2Q4ZDZlZWQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2VkNzIzMDVkYTNiNTFlYjg5OTA0MTY0MjU5M2U0MGYxLnBuZ1wiOyIsImltcG9ydCB7IEVudiB9IGZyb20gJy4vZW52J1xuaW1wb3J0IHsgR3JpZCwgQ2VsbCB9IGZyb20gJy4vZ3JpZCdcbmltcG9ydCB7IFBhdGgsIFBvaW50IH0gZnJvbSAnLi9wYXRoJ1xuXG5mdW5jdGlvbiBjcmVhdGVDYW52YXModzogbnVtYmVyLCBoOiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgY29uc3QgcmF0aW86IG51bWJlciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICBjYW52YXMud2lkdGggPSB3ICogcmF0aW9cbiAgICBjYW52YXMuaGVpZ2h0ID0gaCAqIHJhdGlvXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gdyArICdweCdcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaCArICdweCdcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5zZXRUcmFuc2Zvcm0ocmF0aW8sIDAsIDAsIHJhdGlvLCAwLCAwKVxuICAgIGNhbnZhcy5vbmNvbnRleHRtZW51ID0gZSA9PiBlLnByZXZlbnREZWZhdWx0KCkgLy8gTm8gcmlnaHQgY2xpY2tcbiAgICByZXR1cm4gY2FudmFzXG59XG5cbmNvbnN0IGxvYWRpbmdTY3JlZW46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctc2NyZWVuJylcbmNvbnN0IHByb2dyZXNzQmFyOiBIVE1MUHJvZ3Jlc3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctc2NyZWVuIHByb2dyZXNzJylcblxuXG5jb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gY3JlYXRlQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5jb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5wcm9ncmVzc0Jhci52YWx1ZSArPSAxMFxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuYXBwZW5kQ2hpbGQoY2FudmFzKVxucHJvZ3Jlc3NCYXIudmFsdWUgKz0gMTBcblxuY29uc3QgZ3JpZDogR3JpZCA9IG5ldyBHcmlkKDQwLCA0MClcbmNvbnN0IGVudjogRW52ID0gbmV3IEVudihncmlkLCBjYW52YXMpXG5wcm9ncmVzc0Jhci52YWx1ZSArPSAxMFxuXG5jb25zdCBlbnRyeVBvaW50OiBQb2ludCA9IG5ldyBQb2ludCgwLCAwKVxuY29uc3QgcGF0aDogUGF0aCA9IG5ldyBQYXRoKFtlbnRyeVBvaW50XSlcbmVudi5zZXRQYXRoKHBhdGgpXG5cblxuLy8gTG9hZCBNYXBcbi8vIGVudi5sb2FkTWFwKCd0ZXN0My5tYXAnKVxucHJvZ3Jlc3NCYXIudmFsdWUgKz0gMTBcbmxvYWRpbmdTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBlbnYuaGFuZGxlS2V5RG93bihlKSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IGVudi5oYW5kbGVNb3VzZU1vdmUoZSkpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGVudi5oYW5kbGVNb3VzZUNsaWNrKGUpKVxuXG5cbmVudi51cGRhdGUoKVxuIiwiaW1wb3J0IHsgUGF0aCwgUG9pbnQgfSBmcm9tICcuL3BhdGgnXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi9lbnYnXG5cbmV4cG9ydCBjbGFzcyBFbmVteSB7XG4gICAgZW52OiBFbnZcbiAgICBwYXRoOiBQYXRoXG4gICAgcG9zOiBQb2ludFxuICAgIG5vZGVJbmRleDogbnVtYmVyXG4gICAgcmFkaXVzOiBudW1iZXJcbiAgICBzcGVlZDogbnVtYmVyXG4gICAgcGVyY2VudDogbnVtYmVyXG4gICAgYW5nbGU6IG51bWJlclxuICAgIGhlYWx0aDogbnVtYmVyXG4gICAgYWxpdmU6IGJvb2xlYW5cblxuXG4gICAgY29uc3RydWN0b3IoZW52OiBFbnYsIGhlYWx0aDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZW52ID0gZW52XG4gICAgICAgIHRoaXMucGF0aCA9IHRoaXMuZW52LnBhdGhcbiAgICAgICAgdGhpcy5ub2RlSW5kZXggPSAwXG4gICAgICAgIHRoaXMucG9zID0gbmV3IFBvaW50KHRoaXMucGF0aC5lbnRyeS54LCB0aGlzLnBhdGguZW50cnkueSlcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAxMFxuICAgICAgICB0aGlzLnNwZWVkID0gNVxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aFxuICAgICAgICB0aGlzLmFsaXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLnBlcmNlbnQgPSAwXG4gICAgICAgIHRoaXMuYW5nbGUgPSAwXG4gICAgfVxuXG4gICAgbW92ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5uZXh0UG9zKClcbiAgICAgICAgdGhpcy5wb3MueCA9IHBvcy54XG4gICAgICAgIHRoaXMucG9zLnkgPSBwb3MueVxuICAgICAgICB0aGlzLnBlcmNlbnQgKz0gdGhpcy5wYXRoLmxlbmd0aCAqIHRoaXMuc3BlZWQgKiAxZS01XG5cbiAgICAgICAgbGV0IHBvc0JlZm9yZSA9IHRoaXMucGF0aC5wb2ludEF0KHRoaXMucGVyY2VudCAtIDEpXG4gICAgICAgIGxldCBwb3NBZnRlciA9IHRoaXMucGF0aC5wb2ludEF0KHRoaXMucGVyY2VudCArIDEpXG4gICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLmF0YW4yKHBvc0FmdGVyLnkgLSBwb3NCZWZvcmUueSwgcG9zQWZ0ZXIueCAtIHBvc0JlZm9yZS54KSAqIDE4MCAvIE1hdGguUElcbiAgICB9XG5cbiAgICBuZXh0UG9zKGl0ZXJhdGlvbjogbnVtYmVyID0gMSkge1xuICAgICAgICBsZXQgbmV4dFBlcmNlbnQgPSB0aGlzLnBhdGgubGVuZ3RoICogdGhpcy5zcGVlZCAqIDFlLTUgKiBpdGVyYXRpb25cbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aC5wb2ludEF0KHRoaXMucGVyY2VudCArIG5leHRQZXJjZW50KVxuICAgIH1cblxuICAgIGNoZWNrSGl0KCk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLmVudi5zaG90cy5mb3JFYWNoKHNob3QgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zLmRpc3Qoc2hvdC5wb3MpIDwgdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSBzaG90LmRhbWFnZVxuICAgICAgICAgICAgICAgIHRoaXMuZW52LnNob3RzID0gdGhpcy5lbnYuc2hvdHMuZmlsdGVyKGVudlNob3QgPT4gZW52U2hvdCAhPT0gc2hvdClcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsaXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vdmUoKVxuICAgICAgICB0aGlzLmNoZWNrSGl0KClcbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIuY2lyY2xlKGN0eCwgdGhpcy5wb3MueCwgdGhpcy5wb3MueSwgdGhpcy5yYWRpdXMsIHsgc3Ryb2tlU3R5bGU6ICdyZWQnLCBsaW5lV2lkdGg6IDIgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcblxuaW1wb3J0IHsgR3JpZCwgQ2VsbCwgQ2VsbFR5cGUgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBQYXRoLCBQb2ludCwgVmVjdG9yMiB9IGZyb20gJy4vcGF0aCdcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXInXG5pbXBvcnQgeyBUdXJyZXQsIFNob3QgfSBmcm9tICcuL3R1cnJldCdcbmltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi9lbmVteSdcbmltcG9ydCAqIGFzIGNvbG9yIGZyb20gJy4uL3Jlc3NvdXJjZXMvY29sb3IuanNvbidcblxuXG5leHBvcnQgY2xhc3MgRW52IHtcbiAgICBncmlkOiBHcmlkXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHdpZHRoOiBudW1iZXJcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIGNlbGxXaWR0aDogbnVtYmVyXG4gICAgY2VsbEhlaWdodDogbnVtYmVyXG4gICAgdHVycmV0czogQXJyYXk8VHVycmV0PlxuICAgIGVuZW1pZXM6IEFycmF5PEVuZW15PlxuICAgIHNob3RzOiBBcnJheTxTaG90PlxuICAgIGhlYWx0aDogbnVtYmVyXG4gICAgcGF0aDogUGF0aFxuXG4gICAgY29uc3RydWN0b3IoZ3JpZDogR3JpZCwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodFxuICAgICAgICB0aGlzLnR1cnJldHMgPSBbXVxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXVxuICAgICAgICB0aGlzLnNob3RzID0gW11cbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDAwIC8vIGhwXG4gICAgICAgIHRoaXMuY2VsbFdpZHRoID0gTWF0aC5taW4odGhpcy53aWR0aCAvIHRoaXMuZ3JpZC5yb3dzLCB0aGlzLmhlaWdodCAvIHRoaXMuZ3JpZC5jb2xzKVxuICAgICAgICB0aGlzLmNlbGxIZWlnaHQgPSB0aGlzLmNlbGxXaWR0aFxuICAgICAgICB0aGlzLnBhdGggPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBsb2FkTWFwKGZpbGVuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgZmV0Y2goYHJlc3NvdXJjZXMvbWFwLyR7ZmlsZW5hbWUucmVwbGFjZSgvXFwubWFwLywgJycpfS5tYXBgKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKG1hcCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVGYWN0b3I6IFZlY3RvcjIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoIC8gbWFwLnNjcmVlbi53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC8gbWFwLnNjcmVlbi53aWR0aCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aDogUGF0aCA9IFBhdGguZnJvbUpTT04obWFwLnBhdGgsIHNjYWxlRmFjdG9yKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGF0aChwYXRoKVxuICAgICAgICAgICAgICAgIHRoaXMucGF0aC50b1NWR1BhdGgoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuICAgIH1cblxuICAgIHNhdmVNYXAoZmlsZW5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSBmaWxlbmFtZS5yZXBsYWNlKCcubWFwJywgJycpXG4gICAgICAgIGNvbnN0IG1hcE9iamVjdDogb2JqZWN0ID0ge1xuICAgICAgICAgICAgJ21hcC1uYW1lJzogbmFtZSxcbiAgICAgICAgICAgIHNjcmVlbjogeyB3aWR0aDogdGhpcy5jYW52YXMud2lkdGgsIGhlaWdodDogdGhpcy5jYW52YXMuaGVpZ2h0IH0sXG4gICAgICAgICAgICBwYXRoOiB7IHBvaW50czogdGhpcy5wYXRoLnBvaW50cy5tYXAocG9pbnQgPT4gW3BvaW50LngsIHBvaW50LnldKSB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsZSA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShtYXBPYmplY3QpXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSlcbiAgICAgICAgc2F2ZUFzKGZpbGUsIGAke25hbWV9Lm1hcGApXG4gICAgfVxuXG4gICAgc2V0UGF0aChwYXRoOiBQYXRoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5wYXRoKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGggPSBwYXRoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRoLnBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHRoaXMucGF0aC5hZGRQb2ludChwb2ludCkpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWZpbmVDZWxsc1R5cGUoKVxuICAgIH1cblxuICAgIHNwYXduRW5lbXkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBFbmVteSh0aGlzLCAxMDApKVxuICAgIH1cblxuICAgIGRlZmluZUNlbGxzVHlwZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhdGggfHwgdGhpcy5wYXRoLnBvaW50cy5sZW5ndGggPCAyKSByZXR1cm5cbiAgICAgICAgbGV0IG5vZGVJbmRleDogbnVtYmVyID0gMFxuICAgICAgICBjb25zdCBlcHM6IG51bWJlciA9IDJcbiAgICAgICAgbGV0IHggPSB0aGlzLnBhdGgucG9pbnRzWzBdLnhcbiAgICAgICAgbGV0IHkgPSB0aGlzLnBhdGgucG9pbnRzWzBdLnlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDAwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWDogbnVtYmVyID0gdGhpcy5wYXRoLnBvaW50c1tub2RlSW5kZXggKyAxXS54IC0gdGhpcy5wYXRoLnBvaW50c1tub2RlSW5kZXhdLnhcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWTogbnVtYmVyID0gdGhpcy5wYXRoLnBvaW50c1tub2RlSW5kZXggKyAxXS55IC0gdGhpcy5wYXRoLnBvaW50c1tub2RlSW5kZXhdLnlcbiAgICAgICAgICAgIGNvbnN0IHNsb3BlOiBudW1iZXIgPSBNYXRoLnNxcnQoZGVsdGFYICoqIDIgKyBkZWx0YVkgKiogMilcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlOiBudW1iZXIgPSBNYXRoLmF0YW4yKGRlbHRhWSwgZGVsdGFYKVxuICAgICAgICAgICAgeCArPSBzbG9wZSAqIE1hdGguY29zKGFuZ2xlKSAqIDAuMDRcbiAgICAgICAgICAgIHkgKz0gc2xvcGUgKiBNYXRoLnNpbihhbmdsZSkgKiAwLjA0XG4gICAgICAgICAgICBjb25zdCBjZWxsOiBDZWxsID0gdGhpcy5nZXRDZWxsKHgsIHkpXG4gICAgICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgICAgIGNlbGwudHlwZSA9IENlbGxUeXBlLlJvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh4IC0gdGhpcy5wYXRoLnBvaW50c1tub2RlSW5kZXggKyAxXS54KSA8IGVwcyAmJlxuICAgICAgICAgICAgICAgIE1hdGguYWJzKHkgLSB0aGlzLnBhdGgucG9pbnRzW25vZGVJbmRleCArIDFdLnkpIDwgZXBzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVJbmRleCArIDEgPCB0aGlzLnBhdGgucG9pbnRzLmxlbmd0aCAtIDEpIHsgbm9kZUluZGV4KysgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyBicmVhayB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDZWxsKHg6IG51bWJlciwgeTogbnVtYmVyKTogQ2VsbCB7XG4gICAgICAgIHJldHVybiAodGhpcy5ncmlkLmNlbGxzIGFzIGFueSkuZmluZChjZWxsID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4ID49IGNlbGwueCAqIHRoaXMuY2VsbFdpZHRoICYmXG4gICAgICAgICAgICAgICAgeCA8IChjZWxsLnggKyAxKSAqIHRoaXMuY2VsbFdpZHRoICogY2VsbC53aWR0aCAmJlxuICAgICAgICAgICAgICAgIHkgPj0gY2VsbC55ICogdGhpcy5jZWxsSGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgeSA8IChjZWxsLnkgKyAxKSAqIHRoaXMuY2VsbEhlaWdodCAqIGNlbGwuaGVpZ2h0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGV0ZWN0Q2VsbChlOiBNb3VzZUV2ZW50KTogQ2VsbCB7XG4gICAgICAgIGNvbnN0IHggPSBlLm9mZnNldFhcbiAgICAgICAgY29uc3QgeSA9IGUub2Zmc2V0WVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxsKHgsIHkpXG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VNb3ZlKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ncmlkLmNlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLmhpZ2hsaWdodCA9IGZhbHNlKVxuICAgICAgICBjb25zdCBjZWxsOiBDZWxsID0gdGhpcy5kZXRlY3RDZWxsKGUpXG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICBjZWxsLmhpZ2hsaWdodCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5mb2N1c0NlbGwgPSBjZWxsXG5cbiAgICAgICAgICAgIGlmIChjZWxsLnR5cGUgPT0gQ2VsbFR5cGUuVHVycmV0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHVycmV0OiBUdXJyZXQgPSB0aGlzLnR1cnJldHMuZmluZCh0dXJyZXQgPT4gdHVycmV0LmNlbGwgPT09IGNlbGwpXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U3RhdHMoZSwgdHVycmV0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVTdGF0cygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkVuZW15KClcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZU1hcCgndGVzdDIubWFwJylcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNlbGw6IENlbGwgPSB0aGlzLmRldGVjdENlbGwoZSlcbiAgICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgdGhpcy5wYXRoKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGguYWRkUG9pbnQobmV3IFBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKSlcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lQ2VsbHNUeXBlKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsICYmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLkVtcHR5IHx8IGNlbGwudHlwZSA9PT0gQ2VsbFR5cGUuR3JvdW5kKSkge1xuICAgICAgICAgICAgY2VsbC50eXBlID0gQ2VsbFR5cGUuVHVycmV0XG4gICAgICAgICAgICB0aGlzLnR1cnJldHMucHVzaChuZXcgVHVycmV0KGNlbGwsIHRoaXMpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheVN0YXRzKGU6IE1vdXNlRXZlbnQsIHR1cnJldDogVHVycmV0KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZVxuICAgICAgICBjb25zdCBzdGF0c1Bhbm5lbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxvYXRpbmctc3RhdHMnKVxuICAgICAgICBzdGF0c1Bhbm5lbC5zdHlsZS5sZWZ0ID0gYCR7eCArIDEwfXB4YFxuICAgICAgICBzdGF0c1Bhbm5lbC5zdHlsZS50b3AgPSBgJHt5ICsgMTB9cHhgXG4gICAgICAgIHN0YXRzUGFubmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIHN0YXRzUGFubmVsLnN0eWxlLm9wYWNpdHkgPSAuOVxuICAgICAgICBzdGF0c1Bhbm5lbC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8bGk+SGVhbHRoICAgOiAke3R1cnJldC5oZWFsdGh9JTwvbGk+XG4gICAgICAgICAgICA8bGk+UmFkaXVzICAgOiAke3R1cnJldC5yYWRpdXN9cHg8L2xpPlxuICAgICAgICAgICAgPGxpPkRhbWFnZSAgIDogJHt0dXJyZXQuZGFtYWdlfTwvbGk+XG4gICAgICAgICAgICA8bGk+RmlyZVJhdGUgOiAke3R1cnJldC5maXJlUmF0ZX08L2xpPmBcbiAgICB9XG5cbiAgICBoaWRlU3RhdHMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0YXRzUGFubmVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9hdGluZy1zdGF0cycpXG4gICAgICAgIHN0YXRzUGFubmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgc3RhdHNQYW5uZWwuc3R5bGUub3BhY2l0eSA9IDBcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLnR1cnJldHMuZm9yRWFjaCh0dXJyZXQgPT4gdHVycmV0LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuZmlsdGVyKGVuZW15ID0+IGVuZW15LmFsaXZlKVxuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGUoKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICBsZXQgZmlsbENvbG9yOiBzdHJpbmcgPSBjb2xvci5iZ1xuICAgICAgICB0aGlzLmdyaWQuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGlmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLlR1cnJldCkge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbG9yLnR1cnJldFxuICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsLnR5cGUgPT09IENlbGxUeXBlLlJvYWQpIHtcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSBjb2xvci5yb2FkXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwudHlwZSA9PT0gQ2VsbFR5cGUuR3JvdW5kKSB7XG4gICAgICAgICAgICAgICAgZmlsbENvbG9yID0gY29sb3IuZ3JvdW5kXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbG9yLmJnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZW5kZXJlci5yZWN0KGN0eCwgY2VsbC54ICogdGhpcy5jZWxsV2lkdGgsIGNlbGwueSAqIHRoaXMuY2VsbEhlaWdodCwgdGhpcy5jZWxsV2lkdGggKiBjZWxsLndpZHRoIC0gLjE1LCB0aGlzLmNlbGxIZWlnaHQgKiBjZWxsLmhlaWdodCAtIC4xNSwge1xuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW5jeTogMSxcbiAgICAgICAgICAgICAgICBmaWxsU3R5bGU6IGZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogY29sb3Iuc2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAuNVxyXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy5wYXRoKSB7IHRoaXMucGF0aC5yZW5kZXIoY3R4KSB9XG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IGVuZW15LnJlbmRlcihjdHgpKVxuICAgICAgICB0aGlzLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LnJlbmRlcihjdHgpKVxuICAgICAgICB0aGlzLnR1cnJldHMuZm9yRWFjaCh0dXJyZXQgPT4gdHVycmV0LnJlbmRlcihjdHgpKVxuXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodENlbGw6IENlbGwgPSB0aGlzLmdyaWQuY2VsbHMuZmluZChjZWxsID0+IGNlbGwuaGlnaGxpZ2h0KVxuICAgICAgICBpZiAoaGlnaGxpZ2h0Q2VsbCkge1xuICAgICAgICAgICAgUmVuZGVyZXIucmVjdChjdHgsIGhpZ2hsaWdodENlbGwueCAqIHRoaXMuY2VsbFdpZHRoLCBoaWdobGlnaHRDZWxsLnkgKiB0aGlzLmNlbGxIZWlnaHQsIHRoaXMuY2VsbFdpZHRoICogaGlnaGxpZ2h0Q2VsbC53aWR0aCAtIC4xNSwgdGhpcy5jZWxsSGVpZ2h0ICogaGlnaGxpZ2h0Q2VsbC5oZWlnaHQgLSAuMTUsIHtcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IC4yNSxcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogY29sb3IuaGlnaGxpZ2h0VHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgZmlsbFN0eWxlOiBjb2xvci5oaWdobGlnaHRUcmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBNb3ZlIHRvIG5wbSBwYWNrYWdlIChhdCBsZWFzdCBnaXRodWIpXG5cbmludGVyZmFjZSBOZWloYm9vck9iamVjdCB7XG4gICAgdG9wPzogQ2VsbFxuICAgIHJpZ2h0PzogQ2VsbFxuICAgIGJvdHRvbT86IENlbGxcbiAgICBsZWZ0PzogQ2VsbFxufVxuXG5lbnVtIENlbGxUeXBlIHtcbiAgICBUdXJyZXQsXG4gICAgUm9hZCxcbiAgICBHcm91bmQsXG4gICAgRW1wdHlcbn1cblxuY2xhc3MgR3JpZCB7XG4gICAgcm93czogbnVtYmVyXG4gICAgY29sczogbnVtYmVyXG4gICAgY2VsbHM6IEFycmF5PENlbGw+XG4gICAgZm9jdXNDZWxsOiBDZWxsXG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xzOiBudW1iZXIsIHJvd3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzXG4gICAgICAgIHRoaXMuY29scyA9IGNvbHNcbiAgICAgICAgdGhpcy5jZWxscyA9IFtdXG4gICAgICAgIHRoaXMuZm9jdXNDZWxsID0gbnVsbFxuICAgICAgICB0aGlzLmNyZWF0ZUNlbGxzKClcbiAgICAgICAgdGhpcy5kZWZpbmVOZWlnaGJvb3JzKClcbiAgICB9XG5cbiAgICBjcmVhdGVDZWxscygpIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5jb2xzOyBjb2wrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5yb3dzOyByb3crKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChuZXcgQ2VsbChjb2wsIHJvdykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDZWxsKG5ld0NlbGw6IENlbGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNlbGxzLmluY2x1ZGVzKG5ld0NlbGwpKSByZXR1cm5cbiAgICAgICAgaWYgKG5ld0NlbGwud2lkdGggIT09IDEgfHwgbmV3Q2VsbC5oZWlnaHQgIT09IDEpIHtcbiAgICAgICAgICAgIGlmIChuZXdDZWxsLndpZHRoID4gMSkge1xuICAgICAgICAgICAgICAgIGxldCByYW5nZTogbnVtYmVyID0gbmV3Q2VsbC53aWR0aCAtIDFcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQ2VsbDogQXJyYXk8Q2VsbD4gPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IGNlbGwueSA9PT0gbmV3Q2VsbC55ICYmIGNlbGwueCA+IG5ld0NlbGwueCAmJiBjZWxsLnggPD0gbmV3Q2VsbC54ICsgcmFuZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGNlbGwgPT4gIXJlbW92ZUNlbGwuaW5jbHVkZXMoY2VsbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3Q2VsbC5oZWlnaHQgPiAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlOiBudW1iZXIgPSBuZXdDZWxsLmhlaWdodCAtIDFcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlQ2VsbDogQXJyYXk8Q2VsbD4gPSB0aGlzLmNlbGxzLmZpbHRlcihjZWxsID0+IGNlbGwueCA9PT0gbmV3Q2VsbC54ICYmIGNlbGwueSA+IG5ld0NlbGwueSAmJiBjZWxsLnkgPD0gbmV3Q2VsbC55ICsgcmFuZ2UpXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMuY2VsbHMuZmlsdGVyKGNlbGwgPT4gIXJlbW92ZUNlbGwuaW5jbHVkZXMoY2VsbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWZpbmVOZWlnaGJvb3JzKClcbiAgICAgICAgdGhpcy5jZWxsc1t0aGlzLmNlbGxzLmluZGV4T2YobmV3Q2VsbCldID0gbmV3Q2VsbFxuICAgIH1cblxuICAgIGRlZmluZU5laWdoYm9vcnMoKSB7XG4gICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwubmVpZ2hib29yLnRvcCA9IGNlbGwueSA+PSAxID8gdGhpcy5jZWxscy5maWx0ZXIob3RoZXJjZWxsID0+IG90aGVyY2VsbC54IDw9IGNlbGwueCAmJiBvdGhlcmNlbGwueCArIG90aGVyY2VsbC53aWR0aCA+IGNlbGwueCAmJiBvdGhlcmNlbGwueSA9PT0gY2VsbC55IC0gY2VsbC5oZWlnaHQpWzBdIDogbnVsbFxuICAgICAgICAgICAgY2VsbC5uZWlnaGJvb3IuYm90dG9tID0gY2VsbC55IDw9IHRoaXMucm93cyAtIDEgPyB0aGlzLmNlbGxzLmZpbHRlcihvdGhlcmNlbGwgPT4gb3RoZXJjZWxsLnggPD0gY2VsbC54ICYmIG90aGVyY2VsbC54ICsgb3RoZXJjZWxsLndpZHRoID4gY2VsbC54ICYmIG90aGVyY2VsbC55ID09PSBjZWxsLnkgKyBjZWxsLmhlaWdodClbMF0gOiBudWxsXG4gICAgICAgICAgICBjZWxsLm5laWdoYm9vci5sZWZ0ID0gY2VsbC54ID49IDEgPyB0aGlzLmNlbGxzLmZpbHRlcihvdGhlcmNlbGwgPT4gb3RoZXJjZWxsLnkgPD0gY2VsbC55ICYmIG90aGVyY2VsbC55ICsgb3RoZXJjZWxsLmhlaWdodCA+IGNlbGwueSAmJiBvdGhlcmNlbGwueCA9PT0gY2VsbC54IC0gY2VsbC53aWR0aClbMF0gOiBudWxsXG4gICAgICAgICAgICBjZWxsLm5laWdoYm9vci5yaWdodCA9IGNlbGwueCA8PSB0aGlzLmNvbHMgLSAxID8gdGhpcy5jZWxscy5maWx0ZXIob3RoZXJjZWxsID0+IG90aGVyY2VsbC55IDw9IGNlbGwueSAmJiBvdGhlcmNlbGwueSArIG90aGVyY2VsbC5oZWlnaHQgPiBjZWxsLnkgJiYgb3RoZXJjZWxsLnggPT09IGNlbGwueCArIGNlbGwud2lkdGgpWzBdIDogbnVsbFxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5jbGFzcyBDZWxsIHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgaGVpZ2h0OiBudW1iZXJcbiAgICBoaWdobGlnaHQ6IGJvb2xlYW5cbiAgICB0eXBlOiBDZWxsVHlwZVxuICAgIG5laWdoYm9vcjogTmVpaGJvb3JPYmplY3RcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aCA9IDEsIGhlaWdodCA9IDEpIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9IGZhbHNlXG4gICAgICAgIHRoaXMudHlwZSA9IENlbGxUeXBlLkdyb3VuZFxuICAgICAgICB0aGlzLm5laWdoYm9vciA9IHt9XG4gICAgfVxuXG4gICAgdG9nZ2xlSGlnaGxpZ2h0KCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9ICF0aGlzLmhpZ2hsaWdodFxuICAgIH1cbn1cblxuZXhwb3J0IHsgR3JpZCwgQ2VsbCwgQ2VsbFR5cGUgfVxuIiwiaW1wb3J0IFBhdGhCdWlsZGVyIGZyb20gJ3N2Zy1wYXRoLWJ1aWxkZXInO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcidcblxuaW50ZXJmYWNlIEpTT05QYXRoIHtcbiAgICBwb2ludHM6IEFycmF5PEFycmF5PG51bWJlcj4+XG59XG5cbmNsYXNzIFBhdGgge1xuICAgIGVudHJ5OiBQb2ludFxuICAgIHBvaW50czogQXJyYXk8UG9pbnQ+XG4gICAgZW5kOiBQb2ludFxuICAgIHN2ZzogYW55XG4gICAgbGVuZ3RoOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50czogQXJyYXk8UG9pbnQ+KSB7XG4gICAgICAgIHRoaXMuZW50cnkgPSBwb2ludHNbMF0gfHwgbnVsbFxuICAgICAgICB0aGlzLmVuZCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1cbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHNcbiAgICAgICAgdGhpcy5zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKCdkJywgdGhpcy50b1NWR1BhdGgoKSlcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLnN2Zy5nZXRUb3RhbExlbmd0aCgpXG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21KU09OKGpzb246IEpTT05QYXRoLCBzY2FsZUZhY3RvcjogVmVjdG9yMiA9IFZfVU5JVCkge1xuICAgICAgICBjb25zdCBwb2ludHM6IEFycmF5PFBvaW50PiA9IGpzb24ucG9pbnRzLm1hcCh0dXBsZSA9PiBuZXcgUG9pbnQodHVwbGVbMF0gKiBzY2FsZUZhY3Rvci54LCB0dXBsZVsxXSAqIHNjYWxlRmFjdG9yLnkpKVxuICAgICAgICByZXR1cm4gbmV3IFBhdGgocG9pbnRzKVxuICAgIH1cblxuICAgIGFkZFBvaW50KHBvaW50OiBQb2ludCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZW50cnkpIHRoaXMuZW50cnkgPSBwb2ludFxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KVxuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlKClcbiAgICB9XG5cbiAgICBwb2ludEF0KHBlcmNlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ZnLmdldFBvaW50QXRMZW5ndGgodGhpcy5sZW5ndGggKiBwZXJjZW50IC8gMTAwKVxuICAgIH1cblxuICAgIHJlY2FsY3VsYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVuZCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdXG4gICAgICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMudG9TVkdQYXRoKCkpXG4gICAgfVxuXG4gICAgdG9TVkdQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGJ1aWxkZXI6IFBhdGhCdWlsZGVyID0gbmV3IFBhdGhCdWlsZGVyKClcbiAgICAgICAgY29uc3QgcGF0aCA9IGJ1aWxkZXIubW92ZVRvKHRoaXMuZW50cnkueCwgdGhpcy5lbnRyeS55KVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXRoLmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LCB0aGlzLnBvaW50c1tpXS55KSAvLyBzbW9vdGhUbyA/XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyaW5nUGF0aDogc3RyaW5nID0gcGF0aC50b1N0cmluZygpXG4gICAgICAgIHJldHVybiBzdHJpbmdQYXRoXG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIFJlbmRlcmVyLnBvbHkoY3R4LCB0aGlzLnBvaW50cywgeyBsaW5lV2lkdGg6IDEsIGZpbGxTdHlsZTogJ2dyZXknLCB0cmFuc3BhcmVuY3k6IC4yNSB9KVxuICAgIH1cbn1cblxuY2xhc3MgUG9pbnQge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgfVxuXG4gICAgZGlzdChwb2ludDogUG9pbnQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnggLSBwb2ludC54KSAqKiAyICsgKHRoaXMueSAtIHBvaW50LnkpICoqIDIpXG4gICAgfVxufVxuXG5jbGFzcyBWZWN0b3IyIHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFZfTlVMTCA9IG5ldyBWZWN0b3IyKDAsIDApXG5leHBvcnQgY29uc3QgVl9VTklUID0gbmV3IFZlY3RvcjIoMSwgMSlcblxuZXhwb3J0IHsgUGF0aCwgUG9pbnQsIFZlY3RvcjIgfVxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BhdGgnXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnLi90ZXh0dXJlJ1xuXG5pbnRlcmZhY2UgU3R5bGVPYmplY3Qge1xuICAgIHN0cm9rZVN0eWxlPzogc3RyaW5nLFxuICAgIGxpbmVXaWR0aD86IG51bWJlcixcbiAgICBsaW5lSm9pbj86IENhbnZhc0xpbmVKb2luLFxuICAgIGZpbGxTdHlsZT86IHN0cmluZyxcbiAgICB0cmFuc3BhcmVuY3k/OiBudW1iZXJcbn1cblxuY29uc3QgZGVmYXVsdFN0eWxlT2JqZWN0OiBTdHlsZU9iamVjdCA9IHtcbiAgICBzdHJva2VTdHlsZTogJ2JsYWNrJyxcbiAgICBsaW5lV2lkdGg6IDQsXG4gICAgbGluZUpvaW46ICdyb3VuZCcsXG4gICAgZmlsbFN0eWxlOiAnYmxhY2snLFxuICAgIHRyYW5zcGFyZW5jeTogMVxufVxuXG5jbGFzcyBSZW5kZXJlciB7XG5cbiAgICBzdGF0aWMgc3R5bGUoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG9iaj86IFN0eWxlT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0eWxlT2JqZWN0ID0geyAuLi5kZWZhdWx0U3R5bGVPYmplY3QsIC4uLm9iaiB9XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBzdHlsZU9iamVjdC5saW5lV2lkdGhcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc3R5bGVPYmplY3Quc3Ryb2tlU3R5bGVcbiAgICAgICAgY3R4LmxpbmVKb2luID0gc3R5bGVPYmplY3QubGluZUpvaW5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHN0eWxlT2JqZWN0LmZpbGxTdHlsZVxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSBzdHlsZU9iamVjdC50cmFuc3BhcmVuY3lcbiAgICB9XG5cbiAgICBzdGF0aWMgbGluZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCwgb2JqPzogU3R5bGVPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgUmVuZGVyZXIuc3R5bGUoY3R4LCBvYmopXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHBvaW50MS54LCBwb2ludDEueSlcbiAgICAgICAgY3R4LmxpbmVUbyhwb2ludDIueCwgcG9pbnQyLnkpXG4gICAgICAgIGN0eC5zdHJva2UoKVxuICAgIH1cblxuICAgIHN0YXRpYyByZWN0KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG9iaj86IFN0eWxlT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIFJlbmRlcmVyLnN0eWxlKGN0eCwgb2JqKVxuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9seShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcG9pbnRzOiBBcnJheTxQb2ludD4sIG9iaj86IFN0eWxlT2JqZWN0KSB7XG4gICAgICAgIFJlbmRlcmVyLnN0eWxlKGN0eCwgb2JqKVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnkpXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjdHgubGluZVRvKHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSlcbiAgICAgICAgfVxuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBzdGF0aWMgY2lyY2xlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIG9iaj86IFN0eWxlT2JqZWN0KSB7XG4gICAgICAgIFJlbmRlcmVyLnN0eWxlKGN0eCwgb2JqKVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgICBjdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICBzdGF0aWMgcG9pbnQoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBvYmo/OiBTdHlsZU9iamVjdCk6IHZvaWQge1xuICAgICAgICBSZW5kZXJlci5jaXJjbGUoY3R4LCB4LCB5LCA1LCBvYmopXG4gICAgfVxuXG4gICAgc3RhdGljIHJlY3RTcHJpdGUoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdGV4dHVyZTogVGV4dHVyZSk6IHZvaWQge1xuICAgICAgICBSZW5kZXJlci5zdHlsZShjdHgsIHt9KVxuICAgICAgICBjdHguc2F2ZSgpXG4gICAgICAgIGN0eC50cmFuc2xhdGUoeCArIHdpZHRoIC8gMiwgeSArIGhlaWdodCAvIDIpXG4gICAgICAgIGN0eC5zY2FsZSh0ZXh0dXJlLnNjYWxlLngsIHRleHR1cmUuc2NhbGUueSlcbiAgICAgICAgY3R4LnJvdGF0ZSh0ZXh0dXJlLnJvdGF0aW9uKVxuICAgICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGV4dHVyZS5pbWFnZSxcbiAgICAgICAgICAgIHdpZHRoICogdGV4dHVyZS5vZmZzZXQueCAtIHdpZHRoIC8gMixcbiAgICAgICAgICAgIGhlaWdodCAqIHRleHR1cmUub2Zmc2V0LnkgLSBoZWlnaHQgLyAyLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgKVxuICAgICAgICBjdHgucmVzdG9yZSgpXG4gICAgfVxufVxuXG5leHBvcnQgeyBSZW5kZXJlciB9XG4iLCJpbXBvcnQgeyBQb2ludCwgVmVjdG9yMiwgVl9VTklULCBWX05VTEwgfSBmcm9tICcuL3BhdGgnXG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgVFVSUkVUX0JBU0UgfSBmcm9tICcuLi9yZXNzb3VyY2VzL2Fzc2V0cy90dXJyZXQtYmFzZS0yLnBuZydcbmltcG9ydCB7IGRlZmF1bHQgYXMgVFVSUkVUX0hFQUQgfSBmcm9tICcuLi9yZXNzb3VyY2VzL2Fzc2V0cy90dXJyZXQtaGVhZC0yLnBuZydcblxuXG5pbnRlcmZhY2UgVGV4dHVyZU9wdGlvbnMge1xuICAgIHJvdGF0aW9uPzogbnVtYmVyLCAvLyByYWRpYW5zXG4gICAgb2Zmc2V0PzogVmVjdG9yMixcbiAgICBzY2FsZT86IFZlY3RvcjJcbn1cblxuY2xhc3MgVGV4dHVyZSB7XG4gICAgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcbiAgICByb3RhdGlvbjogbnVtYmVyXG4gICAgb2Zmc2V0OiBWZWN0b3IyXG4gICAgc2l6ZTogVmVjdG9yMlxuICAgIHNjYWxlOiBWZWN0b3IyXG4gICAgb3B0aW9uczogVGV4dHVyZU9wdGlvbnNcblxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nLCBvcHRpb25zPzogVGV4dHVyZU9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gc291cmNlXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ldyBWZWN0b3IyKHRoaXMuaW1hZ2Uud2lkdGgsIHRoaXMuaW1hZ2UuaGVpZ2h0KVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLm9wdGlvbnMucm90YXRpb24gfHwgMFxuICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMub3B0aW9ucy5vZmZzZXQgfHwgVl9OVUxMIC8vIHJlbGF0aXZlIHRvIHRoZSBzaXplXG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLm9wdGlvbnMuc2NhbGUgfHwgVl9VTklUXG4gICAgfVxufVxuXG5jbGFzcyBTcHJpdGUgZXh0ZW5kcyBUZXh0dXJlIHtcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZywgb3B0aW9ucz86IFRleHR1cmVPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucylcbiAgICB9XG59XG5cbmNvbnN0IFRVUlJFVF9CQVNFX1RFWFRVUkUgPSBuZXcgVGV4dHVyZShUVVJSRVRfQkFTRSlcbmNvbnN0IFRVUlJFVF9IRUFEX1RFWFRVUkUgPSBuZXcgVGV4dHVyZShUVVJSRVRfSEVBRCwgeyBzY2FsZTogbmV3IFZlY3RvcjIoMS4yLCAxLjIpLCBvZmZzZXQ6IG5ldyBWZWN0b3IyKDAsIC0xIC8gOSkgfSlcblxuZXhwb3J0IHsgU3ByaXRlLCBUZXh0dXJlIH1cbmV4cG9ydCB7IFRVUlJFVF9CQVNFX1RFWFRVUkUsIFRVUlJFVF9IRUFEX1RFWFRVUkUgfVxuIiwiaW1wb3J0IHsgQ2VsbCwgQ2VsbFR5cGUgfSBmcm9tICcuL2dyaWQnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcGF0aCdcbmltcG9ydCB7IEVudiB9IGZyb20gJy4vZW52J1xuaW1wb3J0IHsgRW5lbXkgfSBmcm9tICcuL2VuZW15J1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcidcblxuaW1wb3J0IHsgVFVSUkVUX0JBU0VfVEVYVFVSRSwgVFVSUkVUX0hFQURfVEVYVFVSRSB9IGZyb20gJy4vdGV4dHVyZSdcblxuY2xhc3MgVHVycmV0IHtcbiAgICBjZWxsOiBDZWxsXG4gICAgZW52OiBFbnZcbiAgICBvcmlnaW46IFBvaW50XG4gICAgcG9zOiBQb2ludFxuICAgIGhlYWx0aDogbnVtYmVyXG4gICAgcmFkaXVzOiBudW1iZXJcbiAgICB0YXJnZXQ6IEVuZW15XG4gICAgZGFtYWdlOiBudW1iZXJcbiAgICBjYW5TaG9vdDogYm9vbGVhblxuICAgIGRpcjogbnVtYmVyXG4gICAgZmlyZVJhdGU6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoY2VsbDogQ2VsbCwgZW52OiBFbnYpIHtcbiAgICAgICAgdGhpcy5jZWxsID0gY2VsbFxuICAgICAgICB0aGlzLmVudiA9IGVudlxuICAgICAgICB0aGlzLm9yaWdpbiA9IG5ldyBQb2ludCh0aGlzLmNlbGwueCAqIHRoaXMuZW52LmNlbGxXaWR0aCwgdGhpcy5jZWxsLnkgKiB0aGlzLmVudi5jZWxsV2lkdGgpXG4gICAgICAgIHRoaXMucG9zID0gbmV3IFBvaW50KCh0aGlzLmNlbGwueCArIDAuNSkgKiB0aGlzLmVudi5jZWxsV2lkdGgsICh0aGlzLmNlbGwueSArIDAuNSkgKiB0aGlzLmVudi5jZWxsV2lkdGgpXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwXG4gICAgICAgIHRoaXMucmFkaXVzID0gMTAwXG4gICAgICAgIHRoaXMuZGFtYWdlID0gMTBcbiAgICAgICAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWRcbiAgICAgICAgdGhpcy5jYW5TaG9vdCA9IHRydWVcbiAgICAgICAgdGhpcy5kaXIgPSAtTWF0aC5QSSAvIDJcbiAgICAgICAgdGhpcy5maXJlUmF0ZSA9IDEwMCAvLyBlYWNoIG1zXG4gICAgfVxuXG4gICAgc2hvb3QoKTogdm9pZCB7XG4gICAgICAgIC8vIFRPRE86IHByZWRpY3QgcG9zaXRpb25cbiAgICAgICAgdGhpcy5lbnYuc2hvdHMucHVzaChuZXcgU2hvdCg8UG9pbnQ+eyAuLi50aGlzLnBvcyB9LCB0aGlzLmRpciwgdGhpcy5kYW1hZ2UpKVxuICAgICAgICB0aGlzLmNhblNob290ID0gZmFsc2VcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYW5TaG9vdCA9IHRydWVcbiAgICAgICAgfSwgdGhpcy5maXJlUmF0ZSlcbiAgICB9XG5cbiAgICB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQgfHwgdGhpcy5wb3MuZGlzdCh0aGlzLnRhcmdldC5wb3MpID4gdGhpcy5yYWRpdXMgfHwgIXRoaXMudGFyZ2V0LmFsaXZlKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRzOiBBcnJheTxFbmVteT4gPSB0aGlzLmVudi5lbmVtaWVzXG4gICAgICAgICAgICAgICAgLnNvcnQoKGVuZW15MSwgZW5lbXkyKSA9PiB0aGlzLnBvcy5kaXN0KGVuZW15MS5wb3MpIC0gdGhpcy5wb3MuZGlzdChlbmVteTIucG9zKSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGVuZW15ID0+IHRoaXMucG9zLmRpc3QoZW5lbXkucG9zKSA8IHRoaXMucmFkaXVzKVxuICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoKSB7IHRoaXMudGFyZ2V0ID0gdGFyZ2V0c1swXSB9XG4gICAgICAgICAgICBlbHNlIHsgdGhpcy50YXJnZXQgPSB1bmRlZmluZWQgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBwcmVkaWN0VGFyZ2V0UG9zID0gdGhpcy50YXJnZXQubmV4dFBvcyg0KVxuICAgICAgICAgICAgdGhpcy5kaXIgPSBNYXRoLmF0YW4yKHByZWRpY3RUYXJnZXRQb3MueSAtIHRoaXMucG9zLnksIHByZWRpY3RUYXJnZXRQb3MueCAtIHRoaXMucG9zLngpXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5TaG9vdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvb3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgICAgIFRVUlJFVF9IRUFEX1RFWFRVUkUucm90YXRpb24gPSB0aGlzLmRpciArIE1hdGguUEkgLyAyXG4gICAgICAgIFJlbmRlcmVyLnJlY3RTcHJpdGUoY3R4LCB0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55LCB0aGlzLmVudi5jZWxsV2lkdGgsIHRoaXMuZW52LmNlbGxXaWR0aCwgVFVSUkVUX0JBU0VfVEVYVFVSRSlcbiAgICAgICAgUmVuZGVyZXIucmVjdFNwcml0ZShjdHgsIHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnksIHRoaXMuZW52LmNlbGxXaWR0aCwgdGhpcy5lbnYuY2VsbFdpZHRoLCBUVVJSRVRfSEVBRF9URVhUVVJFKVxuICAgICAgICAvLyBSZW5kZXJlci5jaXJjbGUoY3R4LCB0aGlzLnBvcy54LCB0aGlzLnBvcy55LCAxMCwgeyBsaW5lV2lkdGg6IDIsIHN0cm9rZVN0eWxlOiAnYmxhY2snIH0pXG4gICAgICAgIFJlbmRlcmVyLmNpcmNsZShjdHgsIHRoaXMucG9zLngsIHRoaXMucG9zLnksIHRoaXMucmFkaXVzLCB7IGxpbmVXaWR0aDogMSwgdHJhbnNwYXJlbmN5OiAuMjUsIHN0cm9rZVN0eWxlOiAnd2hpdGUnIH0pXG4gICAgfVxufVxuXG5jbGFzcyBTaG90IHtcbiAgICBwb3M6IFBvaW50XG4gICAgZGlyOiBudW1iZXJcbiAgICBkYW1hZ2U6IG51bWJlclxuICAgIGxlbmd0aDogbnVtYmVyXG4gICAgc3BlZWQ6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IocG9zOiBQb2ludCwgZGlyOiBudW1iZXIsIGRhbWFnZTogbnVtYmVyID0gMTApIHtcbiAgICAgICAgdGhpcy5wb3MgPSBwb3NcbiAgICAgICAgdGhpcy5kaXIgPSBkaXJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2VcbiAgICAgICAgdGhpcy5sZW5ndGggPSAxMFxuICAgICAgICB0aGlzLnNwZWVkID0gMTBcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucG9zLnggKz0gdGhpcy5zcGVlZCAqIE1hdGguY29zKHRoaXMuZGlyKVxuICAgICAgICB0aGlzLnBvcy55ICs9IHRoaXMuc3BlZWQgKiBNYXRoLnNpbih0aGlzLmRpcilcbiAgICB9XG5cbiAgICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgUmVuZGVyZXIubGluZShjdHgsIHRoaXMucG9zLCBuZXcgUG9pbnQodGhpcy5wb3MueCArIHRoaXMubGVuZ3RoICogTWF0aC5jb3ModGhpcy5kaXIpLCB0aGlzLnBvcy55ICsgdGhpcy5sZW5ndGggKiBNYXRoLnNpbih0aGlzLmRpcikpLCB7IGxpbmVXaWR0aDogMiwgc3Ryb2tlU3R5bGU6ICdibGFjaycgfSlcbiAgICB9XG59XG5cbmV4cG9ydCB7IFR1cnJldCwgU2hvdCB9XG4iXSwic291cmNlUm9vdCI6IiJ9