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
	
  Ship.COLOR = "#00FF33";
  Ship.RADIUS = 15;
	
  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function() {
    var bullet = new Asteroids.Bullet(this);
    this.game.bullets.push(bullet);
  };
	
	Ship.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
		

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      true
    );

    ctx.fill();
  };
	

})();