(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var MovingObject = Asteroids.MovingObject = function(attrObj) {
    this.pos = attrObj.pos;
    this.vel = attrObj.vel;
    this.radius = attrObj.radius;
    this.color = attrObj.color;
    this.game = attrObj.game;
  };

  MovingObject.prototype.draw = function(ctx) {
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

  MovingObject.prototype.move = function() {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    this.pos = this.game.wrapPos(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var distX = this.pos[0] - otherObject.pos[0];
    var distY = this.pos[1] - otherObject.pos[1];
    var dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

    return (dist < (this.radius + otherObject.radius));
  };

  MovingObject.prototype.collideWith = function (otherObject) {};


})();

