var BouncyDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="bouncy-dancer"></span>');
  Dancer.apply(this, arguments);
  this.leftIncr = randomize();
  this.topIncr = randomize();
  this._delay = 500;
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //if this.left > current width of window STOP!
  //if this.top > current height of window STOP!
  var width = $("body").width();
  var height = $("body").height();

  if((this.left > width-25) || (this.left<25)){
    this.leftIncr = this.leftIncr * (-1);
  }

  if((this.top > height-25) || (this.top<25)){
    this.topIncr = this.topIncr * (-1);
  }
  this.left += this.leftIncr;
  this.top += this.topIncr;
  this.setPosition(this.top, this.left);
};

var randomize = function(){
  return Math.sin(Math.random()*10)* 5;
};
