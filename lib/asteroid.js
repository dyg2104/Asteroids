(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var Asteroid = Asteroids.Asteroid = function(pos) {
    var attributes = {
      pos: pos,
      vel: Asteroids.Utils.randomVec(50), // REMEMVER TO CHECK THIS!
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR };

    Asteroids.MovingObject.call(this, attributes);
  };

  Asteroid.COLOR = "#6600CC";
  Asteroid.RADIUS = 20; // REMEMBER TO CHECK THE SIZE OF THIS!

  Asteroids.Utils.inherits(Asteroid, Asteroids.MovingObject);

})();
