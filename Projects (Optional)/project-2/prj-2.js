const resBtn = document.querySelector(".restart-btn");

const statusPlayer = document.querySelector(".statusPlayer");

const cells = document.querySelectorAll(".cell");

const winP = document.querySelector(".winP");

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
    gameState[index] = move; // salva la mossa nell'indice preciso
    checkWin();
    move = "O";
    statusPlayer.textContent = `E' il turno di: ${move}`;
  } else if (move === "O") {
    cell.textContent = "O";
    gameState[index] = move;
    checkWin();
    move = "X";
    statusPlayer.textContent = `E' il turno di: ${move}`;
  }
};

function checkWin() {
  let roundWin = false;
  for (i = 0; i < winnerComb.length; i++) {
    const win = winnerComb[i];
    let a = gameState[win[0]]; // salva gli stati cliccati precedentemente in 3 variabili a, b e c
    let b = gameState[win[1]];
    let c = gameState[win[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      // se queste 3 variabili sono uguali (tutti "x" o "o")
      roundWin = true;
      winP.innerHTML = `<h1>${move} ha vinto!</h1>
      <h3>Prossimo turno tra 3 secondi</h3>`;
      setTimeout(() => {
        restartGame();
      }, 3000);
    }
  }
}

const restartGame = () => {
  move = "X";
  winP.textContent = "";
  cells.forEach((cell) => {
    cell.textContent = "";
    gameState = ["", "", "", "", "", "", "", "", ""];
  });

  statusPlayer.textContent = `E' il turno di: ${move}`;
};

resBtn.addEventListener("click", restartGame);

startGame();
