var RIGHT_KEY = 39;
var LEFT_KEY = 37;

class Car {
  constructor(canvas, image) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.x = 0;
    this.y = 0;
    this.scale = 0.3;
    this.speed = 20;

    this.image = new Image();
    this.image.src = image;
    this.image.onload = () => {
      this.isReady = true;
      this.width = this.image.width * this.scale;
      this.height = this.image.height * this.scale;
    };

    document.onkeydown = (e) => this.onKeyDown(e);
  }

  onKeyDown(event) {
    if (event.keyCode == RIGHT_KEY) {
      this.moveRight();
    } else if (event.keyCode == LEFT_KEY) {
      this.moveLeft();
    }
    return true;
  }

  moveRight() {
    if (this.x < this.canvas.width - 99) {
      this.x += this.speed;
    }
  }

  moveLeft() {
    if (this.x > 40) {
      this.x -= this.speed;
    }
  }

  collide(elements) {
    let collitions = elements.filter((e) => {
      return e.collide(this);
    });

    if (collitions.length > 0) {
      return true;
    }
    return false;
  }

  draw() {
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
  }
}
