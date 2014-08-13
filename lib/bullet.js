(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Bullet = Asteroids.Bullet = function(ship) {
    var bulletVel = [(ship.vel[0] * 1.5), (ship.vel[1] * 1.5)];

    var attributes = {
      pos: ship.pos,
      vel: bulletVel, // REMEMVER TO CHECK THIS!
      radius: Bullet.RADIUS,
      color: Bullet.COLOR,
      game: ship.game
    };

    Asteroids.MovingObject.call(this, attributes);
  };

  Asteroids.Utils.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      if (this.isCollidedWith(otherObject)) {
        this.game.remove(otherObject);
        this.game.remove(this);
      }
    }
  }

  Bullet.COLOR = "#FF3300";
  Bullet.RADIUS = 5; // REMEMBER TO CHECK THE SIZE OF THIS!

})();