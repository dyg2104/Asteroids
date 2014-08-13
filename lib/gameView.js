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

    window.setInterval(function() {
      game.moveObjects();
      game.draw(ctx);
    }, game.interval);
  };

})();