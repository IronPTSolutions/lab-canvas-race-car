window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }
};

var board = new Board(document.getElementById("canvas"));
board.draw();
