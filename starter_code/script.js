window.onload = function() {
  var board = new Board(document.getElementById("canvas"));
  board.draw();

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    board.start();
  }
};
