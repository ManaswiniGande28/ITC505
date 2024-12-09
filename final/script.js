document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById('board');
  const movesDisplay = document.getElementById('moves');
  const timeDisplay = document.getElementById('time');
  const targetMovesDisplay = document.getElementById('targetMoves');
  const targetTimeDisplay = document.getElementById('targetTime');
  let moveCount = 0;
  let timer;
  let seconds = 0;

  const gridSize = 5;
  const boardState = Array(gridSize).fill().map(() => Array(gridSize).fill(false)); // false = white, true = black

  // Set target moves and target time
  const targetMoves = 20;
  const targetTime = 60; // target time in seconds

  // Display target values
  targetMovesDisplay.textContent = `Target Moves: ${targetMoves}`;
  targetTimeDisplay.textContent = `Target Time: ${targetTime}s`;

  // Create the board
  function createBoard() {
      board.innerHTML = '';
      for (let row = 0; row < gridSize; row++) {
          for (let col = 0; col < gridSize; col++) {
              const square = document.createElement('div');
              square.classList.add('square');
              square.dataset.row = row;
              square.dataset.col = col;
              square.addEventListener('click', toggleSquare);
              board.appendChild(square);
          }
      }
  }

  // Toggle the state of a square and its neighbors
  function toggleSquare(event) {
      const square = event.target;
      const row = parseInt(square.dataset.row);
      const col = parseInt(square.dataset.col);
      
      toggleState(row, col);
      // Toggle the 4 neighbors (up, down, left, right)
      if (row > 0) toggleState(row - 1, col); // up
      if (row < gridSize - 1) toggleState(row + 1, col); // down
      if (col > 0) toggleState(row, col - 1); // left
      if (col < gridSize - 1) toggleState(row, col + 1); // right

      moveCount++;
      movesDisplay.textContent = `Moves: ${moveCount}`;
      
      if (checkWin()) {
          clearInterval(timer);
          alertWin();
      }
  }

  // Toggle square state
  function toggleState(row, col) {
      const square = board.children[row * gridSize + col];
      boardState[row][col] = !boardState[row][col];
      square.classList.toggle('is-off', boardState[row][col]);
  }

  // Check if all squares are turned off (black)
  function checkWin() {
      for (let row = 0; row < gridSize; row++) {
          for (let col = 0; col < gridSize; col++) {
              if (!boardState[row][col]) {
                  return false;
              }
          }
      }
      return true;
  }

  // Randomize the board configuration
  function randomizeBoard() {
      const randomMoves = Math.floor(Math.random() * 20) + 10; // Random moves between 10 and 30
      for (let i = 0; i < randomMoves; i++) {
          const row = Math.floor(Math.random() * gridSize);
          const col = Math.floor(Math.random() * gridSize);
          toggleState(row, col);
      }
  }

  // Timer functionality
  function startTimer() {
      timer = setInterval(function () {
          seconds++;
          timeDisplay.textContent = `Time: ${seconds}s`;
          // If time exceeds target, stop the game
          if (seconds >= targetTime) {
              clearInterval(timer);
              alert("Time's up! You didn't beat the target time.");
          }
      }, 1000);
  }

  // Display winning message and compare with targets
  function alertWin() {
      if (moveCount <= targetMoves && seconds <= targetTime) {
          alert(`You win! You completed the game in ${moveCount} moves and ${seconds} seconds, which is great!`);
      } else {
          alert(`You win! You completed the game in ${moveCount} moves and ${seconds} seconds. Try to beat the target next time!`);
      }
  }

  // Initialize the game
  createBoard();
  randomizeBoard();
  startTimer();
});
