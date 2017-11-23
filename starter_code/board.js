function Board(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.road = new Road(canvas);

  this.car = new Car(canvas, "./images/car.png");
  this.car.x = this.road.width / 2 + 15;
  this.car.y = this.road.height - 120;

  
}

Board.prototype.draw = function() {
  this.road.draw();
  this.car.draw();

  window.requestAnimationFrame(this.draw.bind(this));
};
