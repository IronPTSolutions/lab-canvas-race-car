function Obstacle(canvas, maxWidth, gapWidth) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  console.log(maxWidth);

  this.width = Math.max(100, Math.floor(Math.random() * (maxWidth - gapWidth)));
  this.height = 30;
  this.x = 40 + Math.floor(Math.random() * gapWidth);
  this.y = 0;
}

Obstacle.prototype.draw = function() {
  this.ctx.save();
  this.ctx.fillStyle = "#870007";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.ctx.restore();
};
