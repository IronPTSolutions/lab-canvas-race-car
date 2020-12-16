class Board {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.road = new Road(this.canvas);

    this.car = new Car(this.canvas, "./images/car.png");
    this.car.x = this.road.width / 2 + 15;
    this.car.y = this.road.height - 120;

    this.obstacles = [];
    this.frames = 0;
  }

  init() {
    this.obstacles = [];
    this.frames = 0;
    clearInterval(this.obstacleInterval);

    this.clear();
    this.road.draw();
    this.car.draw();
  }

  start() {
    this.init();
    this.addObstacle();
    this.obstacleInterval = setInterval(() => this.addObstacle(), 2000);
    this.draw();
  }

  drawScore() {
    this.ctx.font = "18px serif";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Score: " + Math.floor(this.frames / 5), 50, 50);
  }

  addObstacle() {
    this.obstacles.push(new Obstacle(this.canvas, this.road.width, 90, 2));
  }

  clearObstacles() {
    this.obstacles = this.obstacles.filter((o) => {
      return o.y < this.canvas.height + 30;
    });
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw() {
    this.frames += 1;
    if (!this.car.collide(this.obstacles)) {
      this.clear();
      this.clearObstacles();

      this.road.draw();
      this.car.draw();

      this.obstacles.forEach(function (o) {
        o.draw();
      });

      this.drawScore();
      this.animationId = window.requestAnimationFrame(() => this.draw());
    } else {
      cancelAnimationFrame(this.animationId);
    }
  }
}
