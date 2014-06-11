var Dancer = function(top, left, timeBetweenSteps){
  // this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  console.log(timeBetweenSteps);
  this.step();
  this.setPosition(top,left);
  this.top = top;
  this.left = left;
  this._stop = false;
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //
  console.log('Called step function of Dancer.');
  if (!this._stop) {
    setTimeout(this.step.bind(this), this._timeBetweenSteps);
  }
};

Dancer.prototype.setPosition = function(top,left){
  this.top = top;
  this.left = left;
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


Dancer.prototype.lineup = function(){

  this._stop = true;

  var width = $("body").width();

  if (this.left <= (width/2)) {
    this.left = 25;
  } else {
    this.left = width-75;
  }
  var styleSettings = {
    top: this.top,
    left: this.left
  };

  this.$node.animate(styleSettings, this._delay);
};


