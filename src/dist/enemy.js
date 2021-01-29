"use strict";
exports.__esModule = true;
exports.EnemyGenerator = exports.Enemy = void 0;
var path_1 = require("./path");
var render_1 = require("./render");
var interface_1 = require("./interface");
var enemyType_json_1 = require("../ressources/enemyType.json");
var Enemy = /** @class */ (function () {
    function Enemy(env, enemyObj) {
        this.env = env;
        this.path = this.env.path;
        this.nodeIndex = 0;
        this.pos = new path_1.Point(this.path.entry.x, this.path.entry.y);
        this.radius = enemyObj.radius;
        this.movement = {
            speed: enemyObj.speed,
            duration: null,
            startTime: performance.now()
        };
        this.health = enemyObj.health;
        this.money = enemyObj.money;
        this.alive = true;
        this.percent = 0;
        this.angle = 0;
    }
    Enemy.prototype.move = function () {
        if (!this.movement.duration) {
            this.movement.duration = this.path.length / this.movement.speed;
        }
        var nextPos = this.nextPos();
        if (this.pos.x === nextPos.x && this.pos.y === nextPos.y) {
            return this.env.hasReachEnd(this);
        }
        this.pos.x = nextPos.x;
        this.pos.y = nextPos.y;
        this.percent += (this.env.timestamp - this.movement.startTime - this.env.pauseDuration) / this.movement.duration / 10;
        // Angle calculation
        var posBefore = this.path.pointAt(this.percent - 1);
        var posAfter = this.path.pointAt(this.percent + 1);
        this.angle = Math.atan2(posAfter.y - posBefore.y, posAfter.x - posBefore.x) * 180 / Math.PI;
    };
    Enemy.prototype.nextPos = function (iteration) {
        if (iteration === void 0) { iteration = 1; }
        var nextPercent = (this.env.timestamp + (iteration - 1) * 60 - this.movement.startTime - this.env.pauseDuration) / this.movement.duration / 10;
        return this.path.pointAt(nextPercent);
    };
    Enemy.prototype.checkHit = function () {
        var _this = this;
        this.env.shots.forEach(function (shot) {
            if (_this.pos.dist(shot.pos) < _this.radius) {
                _this.health -= shot.damage;
                shot.turret.damageDone += shot.damage;
                _this.env.shots = _this.env.shots.filter(function (envShot) { return envShot !== shot; });
                if (_this.health <= 0) {
                    _this.alive = false;
                    shot.turret.kills += 1;
                    _this.env.onKill(_this);
                }
                return true;
            }
        });
        return false;
    };
    Enemy.prototype.update = function () {
        this.move();
        this.checkHit();
    };
    Enemy.prototype.render = function (ctx) {
        render_1.Renderer.circle(ctx, this.pos.x, this.pos.y, this.radius, { strokeStyle: 'red', lineWidth: 2 });
    };
    return Enemy;
}());
exports.Enemy = Enemy;
var EnemyGenerator = /** @class */ (function () {
    function EnemyGenerator(env, spawnRate, amount) {
        if (spawnRate === void 0) { spawnRate = 2000; }
        if (amount === void 0) { amount = 1; }
        this.env = env;
        this.spawnRate = spawnRate;
        this.amount = amount;
        this.interval = undefined;
        this.count = 0;
        this.wave = 0;
    }
    EnemyGenerator.prototype.start = function () {
        var _this = this;
        this.stop();
        this.spawn();
        this.interval = window.setInterval(function () { return _this.spawn(); }, this.spawnRate);
    };
    EnemyGenerator.prototype.stop = function () {
        if (this.interval) {
            window.clearInterval(this.interval);
            this.interval = undefined;
        }
    };
    EnemyGenerator.prototype.spawn = function () {
        var _this = this;
        if (!this.env.path || this.env.paused)
            return;
        var enemyType = enemyType_json_1["default"].enemies[this.wave % (enemyType_json_1["default"].enemies.length - 1)];
        enemyType.health += this.count * 2;
        this.env.enemies.push(new Enemy(this.env, enemyType));
        this.count++;
        if (this.count % 10 === 0) {
            this.wave++;
            interface_1.Interface.wave = this.wave;
            this.spawnRate = Math.max(this.spawnRate - 250, 100);
            this.stop();
            window.setTimeout(function () { return _this.start(); }, 3000);
        }
    };
    return EnemyGenerator;
}());
exports.EnemyGenerator = EnemyGenerator;
