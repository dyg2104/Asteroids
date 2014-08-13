(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Game = Asteroids.Game = function() {
    this.asteroids = this.addAsteroids();
    this.ship = new Asteroids.Ship(this.randomPosition(), this);
    this.bullets = [];
  };

  Game.DIM_X = 1000; //CHECK THIS
  Game.DIM_Y = 1000; //CHECK THIS
  Game.NUM_ASTEROIDS = 1; //CHECK THIS

  Game.prototype.addAsteroids = function() {
    var asteroidList = [];

    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      asteroidList.push(new Asteroids.Asteroid(this.randomPosition(), this));
    };

    return asteroidList;
  };

  Game.prototype.randomPosition = function() {
    return [(Math.random() * Game.DIM_X), (Math.random() * Game.DIM_Y)];
  };

  Game.prototype.allObjects = function() {
    var astrs = this.asteroids.slice(0); // shallow copy
    return astrs.concat(this.ship, this.bullets.slice(0));
  }

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    for (var i = 0; i < this.allObjects().length; i++) {
      this.allObjects()[i].draw(ctx);
    };
  };

  Game.prototype.moveObjects = function() {
    for (var i = 0; i < this.allObjects().length; i++) {
      this.allObjects()[i].move();
    };
  };

  Game.prototype.wrapPos = function (pos) {
    var newPos = pos;

    if (newPos[0] < 0) {
      newPos[0] += Game.DIM_X;
    } else if (newPos[0] > Game.DIM_X) {
      newPos[0] -= Game.DIM_X;
    }

    if (newPos[1] < 0) {
      newPos[1] += Game.DIM_Y;
    } else if (newPos[1] > Game.DIM_Y) {
      newPos[1] -= Game.DIM_Y;
    }

    return newPos;
  };

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < (this.allObjects().length-1); i++) {
      for (var j = i + 1; j < this.allObjects().length; j++) {
        this.allObjects()[i].collideWith(this.allObjects()[j]);
      };
    };
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroids.Asteroid) {
      var indDelete = this.asteroids.indexOf(obj);
      this.asteroids.splice(indDelete, 1);
    } else if (obj instanceof Asteroids.Bullet) {
      var indDelete = this.bullets.indexOf(obj);
      this.bullets.splice(indDelete, 1);
    }

  };

})();