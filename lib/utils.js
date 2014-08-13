(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Utils = Asteroids.Utils = {};

  Utils.inherits = function (childClass, superClass) {
    function Surrogate() {};
    Surrogate.prototype = superClass.prototype;
    childClass.prototype = new Surrogate();
  };

  Utils.randomVec = function (length) {
    var dir = (Math.random() * (2 * Math.PI));
    return [(Math.cos(dir) * length),(Math.sin(dir) * length)]
  }

})();
