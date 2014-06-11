var ExtraSmoothDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="extra-smooth-dancer"></span>')
  SmoothDancer.apply(this, arguments);
  this._a = 3;
  this._b = 2;
};

ExtraSmoothDancer.prototype = Object.create(SmoothDancer.prototype);
ExtraSmoothDancer.prototype.constructor = ExtraSmoothDancer;

