(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Game = Asteroids.Game = function() {
    this.asteroids = this.addAsteroids();
  };

  Game.DIM_X = 1000; //CHECK THIS
  Game.DIM_Y = 1000; //CHECK THIS
  Game.NUM_ASTEROIDS = 3; //CHECK THIS

  Game.prototype.addAsteroids = function() {
    var asteroidList = [];

    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      asteroidList.push(new Asteroids.Asteroid(this.randomPosition()));
    };

    return asteroidList;
  };

  Game.prototype.randomPosition = function() {
    return [(Math.random() * Game.DIM_X), (Math.random() * Game.DIM_Y)];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(ctx);
    };
  };

  Game.prototype.moveObjects = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    };
  };


})();