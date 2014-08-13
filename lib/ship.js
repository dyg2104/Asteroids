(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Ship = Asteroids.Ship = function(pos, game) {
    var attributes = {
      pos: pos,
      vel: [0,0],
      radius: Ship.RADIUS,
      color: Ship.COLOR,
      game: game
    };

    Asteroids.MovingObject.call(this, attributes);
  };

  Asteroids.Utils.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  }

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.COLOR = "#00FF33";
  Ship.RADIUS = 15; // REMEMBER TO CHECK THE SIZE OF THIS!

})();