function Board(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.road = new Road(canvas);

  this.car = new Car(canvas, "./images/car.png");
  this.car.x = this.road.width / 2 + 15;
  this.car.y = this.road.height - 120;

  this.obstacles = [];
  this.addObstacle();
}

Board.prototype.addObstacle = function() {
  this.obstacles.push(new Obstacle(this.canvas, this.road.width, 90));
};

Board.prototype.draw = function() {
  this.road.draw();
  this.car.draw();
  this.obstacles.forEach(function(o) {
    o.draw();
  })
  window.requestAnimationFrame(this.draw.bind(this));
};
