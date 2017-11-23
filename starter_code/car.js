var RIGHT_KEY = 39;
var LEFT_KEY = 37;

function Car(canvas, image) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = 0;
  this.y = 0;
  this.scale = 0.30;
  this.speed = 20;

  this.image = new Image();
  this.image.src = image;
  this.image.onload = (function() {
    this.isReady = true;
    this.width = this.image.width * this.scale;
    this.height = this.image.height * this.scale;
  }).bind(this);

  document.onkeydown = this.onKeyDown.bind(this);
}

Car.prototype.onKeyDown = function(event) {
  if (event.keyCode == RIGHT_KEY) {
    this.moveRight();
  } else if (event.keyCode == LEFT_KEY) {
    this.moveLeft();
  }
  return true;
};

Car.prototype.moveRight = function() {
  if (this.x < this.canvas.width - 99) {
    this.x += this.speed;
  }
};

Car.prototype.moveLeft = function() {
  if (this.x > 40) {
    this.x -= this.speed;
  }
};

Car.prototype.collide = function(elements) {
  collitions = elements.filter((function(e) {
    return e.collide(this);
  }).bind(this));

  if (collitions.length > 0) {
    return true;
  }
  return false;
};

Car.prototype.draw = function() {
  if (this.isReady) {
    this.ctx.save();
    this.ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  this.ctx.restore();
};
