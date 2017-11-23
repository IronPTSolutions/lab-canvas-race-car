function Road(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = 0;
  this.y = 0;

  this.gapWidth = 10;
  this.roadWidth = 250;
  this.roadHeight = 500;
}

Road.prototype.draw = function() {
  this.ctx.save();
  this.ctx.fillStyle = "#008000";
  this.ctx.fillRect(this.x, this.y, 20, this.roadHeight);

  this.ctx.fillStyle = "#808080";
  this.ctx.fillRect(this.x + 20, this.y, 10, this.roadHeight);

  this.ctx.fillRect(this.x + 40, this.y, this.roadWidth, this.roadHeight);

  this.ctx.strokeStyle = "#fff";
  this.ctx.lineWidth = 3;
  this.ctx.setLineDash([15, 20]);
  this.ctx.moveTo(this.x + 40 + this.roadWidth / 2, this.y);
  this.ctx.lineTo(this.x + 40 + this.roadWidth / 2, this.y + this.roadHeight);
  this.ctx.stroke();
  this.ctx.setLineDash([]);

  this.ctx.fillRect(this.x + 40 + this.roadWidth + this.gapWidth, this.y, 10, this.roadHeight);

  this.ctx.fillStyle = "#008000";
  this.ctx.fillRect(this.x + 50 + this.roadWidth + this.gapWidth, this.y, 20, this.roadHeight);

  this.ctx.restore();
};
