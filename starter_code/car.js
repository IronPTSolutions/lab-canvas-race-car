function Car(canvas, image) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = 0;
  this.y = 0;
  this.scale = 0.30;

  this.image = new Image();
  this.image.src = image;
  this.image.onload = (function() {
    this.isReady = true;
    this.width = this.image.width * this.scale;
    this.height = this.image.height * this.scale;
  }).bind(this);
}

Car.prototype.draw = function() {
  if (this.isReady) {
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
};
