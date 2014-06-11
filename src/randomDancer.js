//Random Dancer
var RandomDancer = function (top, left, timeBetweenSteps, URL) {
  this.URL = URL || 'http://media2.giphy.com/media/JLgFuqnDXwIjC/giphy.gif';
  SmoothDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="random-dancer" src="' + this.URL + '">');
};

RandomDancer.prototype = Object.create(SmoothDancer.prototype);
RandomDancer.prototype.constructor = RandomDancer;

