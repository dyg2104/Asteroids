(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    var attributes = {
      pos: pos,
      vel: Asteroids.Utils.randomVec(1),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR,
      game: game
    };

    Asteroids.MovingObject.call(this, attributes);
  };

  Asteroids.Utils.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (this.isCollidedWith(otherObject)) {
      if (otherObject instanceof Asteroids.Ship) {
        otherObject.relocate();
      } else if (otherObject instanceof Asteroids.Bullet) {
        this.game.remove(this);
        this.game.remove(otherObject);
      }
    }
  };

  Asteroid.COLOR = "#6600CC";
  Asteroid.RADIUS = 20;

})();
