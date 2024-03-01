const resBtn = document.querySelector(".restart-btn");

const statusPlayer = document.querySelector(".statusPlayer");

const cells = document.querySelectorAll(".cell");

let gameState = ["", "", "", "", "", "", "", "", ""];

let move = "X";

let isGameActive = true;

const playerXWon = "Player X Won";
const playerOWon = "Player O Won";
const tie = "Tie";

const winnerComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let pMove;

statusPlayer.innerHTML = `E' il turno di: ${move}`;

const startGame = () => {
  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      playGame(cell, index);
    });
  });
};

const playGame = (cell, index) => {
  if (move === "X") {
    cell.textContent = "X";
    gameState[index] = move;
    checkWin();
    // gameOver();
    move = "O";
    statusPlayer.textContent = `E' il turno di: ${move}`;
  } else if (move === "O") {
    gameState[index] = move;
    cell.textContent = "O";
    checkWin();
    move = "X";
    statusPlayer.textContent = `E' il turno di: ${move}`;
  }
};

function checkWin() {
  let roundWin = false;
  for (i = 0; i < winnerComb.length; i++) {
    const win = winnerComb[i];
    let a = gameState[win[0]];
    let b = gameState[win[1]];
    let c = gameState[win[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWin = true;
      console.log(`${move} ha vinto`);
      restartGame();
      break;
    }
  }
}

// function gameOver() {
//   if(roundWin === true)
// }

const restartGame = () => {
  move = "X";
  cells.forEach((cell) => {
    cell.textContent = "";
    gameState = ["", "", "", "", "", "", "", "", ""];
  });

  statusPlayer.textContent = `E' il turno di: ${move}`;
};

resBtn.addEventListener("click", restartGame);

startGame();