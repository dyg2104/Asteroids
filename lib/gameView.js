(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  };

  var GameView = Asteroids.GameView = function(ctx) {
    this.interval = 20;
    this.game = new Asteroids.Game;
    this.ctx = ctx;

  };

  GameView.prototype.start = function () {
    var game = this.game;
    var ctx = this.ctx;

    this.bindKeyHandlers();

    window.setInterval(function() {
      game.step();
      game.draw(ctx);
    }, game.interval);
  };

  GameView.prototype.bindKeyHandlers = function () {
    var ship = this.game.ship;

    key("right", function () {
       ship.power([1,0]); //check val!
    });

    key("up", function () {
      ship.power([0,-1]); //check val!
    });

    key("left", function () {
      ship.power([-1,0]); //check val!
    });

    key("down", function () {
      ship.power([0,1]); //check val!
    });
  };

})();