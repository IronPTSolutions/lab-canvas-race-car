function Board(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.road = new Road(canvas);
}

Board.prototype.draw = function() {
  this.road.draw();
};
