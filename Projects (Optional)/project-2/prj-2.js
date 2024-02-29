const resBtn = document.querySelector(".restart-btn");

const playerMove = document.querySelector(".playerMove");

const winnerOptions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let move = "Nessuno";

playerMove.innerHTML = `E' il turno di: ${move}`;

const cells = document.querySelectorAll(".cell");

cells.forEach((cell, index) => {
  console.log(index);
  cell.addEventListener("click", () => {
    playGame(cell);
  });
});

const playGame = (cell) => {
  if (move === "Nessuno" || move === "X") {
    cell.textContent = "X";
    move = "O";
    playerMove.textContent = `E' il turno di: ${move}`;
  } else if (move === "O") {
    cell.textContent = "O";
    move = "X";
    playerMove.textContent = `E' il turno di: ${move}`;
  }
  checkWin();
};

const restartGame = () => {
  move = "Nessuno";
  cells.forEach((cell, index) => {
    cell.textContent = "";
  });

  playerMove.textContent = `E' il turno di: ${move}`;
};

resBtn.addEventListener("click", restartGame);
