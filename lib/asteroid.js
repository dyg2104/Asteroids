(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    var attributes = {
      pos: pos,
      vel: Asteroids.Utils.randomVec(1), // REMEMVER TO CHECK THIS!
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR,
      game: game
    };

    Asteroids.MovingObject.call(this, attributes);
  };

  Asteroids.Utils.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      if (this.isCollidedWith(otherObject)) {
        otherObject.relocate();
      }
    }
  }

  Asteroid.COLOR = "#6600CC";
  Asteroid.RADIUS = 20; // REMEMBER TO CHECK THE SIZE OF THIS!

})();
