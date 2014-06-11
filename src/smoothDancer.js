var SmoothDancer = function(top, left, timeBetweenSteps){
  // this.$node = $('<img class="smooth-dancer" src="http://puu.sh/41mP0.gif">');
  this.$node = $('<span class="smooth-dancer"></span>');
  Dancer.apply(this, arguments);
  this._t = 0;
  this._radius = Math.floor(Math.random()*250);
  this._initLeft = left;
  this._initTop = top;
  this._delay = 2000;
};

SmoothDancer.prototype = Object.create(Dancer.prototype);
SmoothDancer.prototype.constructor = SmoothDancer;

SmoothDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this._t += 0.05;
  this.left = this._initLeft + this._radius*Math.cos(this._t);
  this.top = this._initTop + this._radius*Math.sin(this._t);

  this.setPosition(this.top, this.left);
};

