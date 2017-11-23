function Board(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.road = new Road(this.canvas);

  this.car = new Car(this.canvas, "./images/car.png");
  this.car.x = this.road.width / 2 + 15;
  this.car.y = this.road.height - 120;

  this.obstacles = [];
  this.frames = 0;
}

Board.prototype.init = function() {
  this.obstacles = [];
  this.frames = 0;
  clearInterval(this.obstacleInterval);

  this.clear();
  this.road.draw();
  this.car.draw();
};

Board.prototype.start = function() {
  this.init();
  this.addObstacle();
  this.obstacleInterval = setInterval(this.addObstacle.bind(this), 2000);
  this.draw();
};

Board.prototype.drawScore = function() {
  this.ctx.font = '18px serif';
  this.ctx.fillStyle = 'black';
  this.ctx.fillText('Score: ' + Math.floor(this.frames/5), 50, 50);
};

Board.prototype.addObstacle = function() {
  this.obstacles.push(new Obstacle(this.canvas, this.road.width, 90, 2));
};

Board.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(o) {
    return o.y < this.canvas.height + 30;
  });
};

Board.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Board.prototype.draw = function() {
  this.frames += 1;
  if (!this.car.collide(this.obstacles)) {
    this.clear();
    this.clearObstacles();

    this.road.draw();
    this.car.draw();

    this.obstacles.forEach(function(o) {
      o.draw();
    });

    this.drawScore();
    this.animationId = window.requestAnimationFrame(this.draw.bind(this));
  } else {
     cancelAnimationFrame(this.animationId);
  }
};
