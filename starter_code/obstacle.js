class Obstacle {
  constructor(canvas, maxWidth, gapWidth, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.width = Math.max(
      100,
      Math.floor(Math.random() * (maxWidth - gapWidth))
    );
    this.height = 30;
    this.x = 40 + Math.floor(Math.random() * gapWidth);
    this.y = 0;
    this.speed = speed;
  }

  collide(element) {
    return !(
      this.x + this.width < element.x ||
      element.x + element.width < this.x ||
      this.y + this.height < element.y ||
      element.y + element.height < this.y
    );
  }

  draw() {
    this.ctx.save();
    this.ctx.fillStyle = "#870007";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.restore();

    this.y += this.speed;
  }
}
