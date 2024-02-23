let score = JSON.parse(localStorage.getItem("score")) || {
  // Default operator
  wins: 0,
  losses: 0,
  ties: 0,
};

isAutoPlaying = false;

const autoPlay = () => {
  if (isAutoPlaying === false) {
    setInterval(() => {
      const playerRand = PCMove(); // 10:45h
      playGame(playerRand);
    }, 1000);
    isAutoPlaying = true
  }else{
    isAutoPlaying = false
  }
};

updateScore();

const playGame = (playerMove) => {
  let computerNum = PCMove();
  let result = "";

  if (playerMove === "Rock") {
    if (computerNum === "Rock") {
      result = "Hai pareggiato";
      computerNum = "✊";
      playerMove = "✊";
    } else if (computerNum === "Paper") {
      result = "Hai perso";
      computerNum = "✋";
      playerMove = "✊";
    } else if (computerNum === "Scissors") {
      result = "Hai vinto";
      computerNum = "✌️";
      playerMove = "✊";
    }
  } else if (playerMove === "Paper") {
    if (computerNum === "Rock") {
      result = "Hai vinto";
      computerNum = "✊";
      playerMove = "✋";
    } else if (computerNum === "Paper") {
      result = "Hai pareggiato";
      computerNum = "✋";
      playerMove = "✋";
    } else if (computerNum === "Scissors") {
      result = "Hai perso";
      computerNum = "✌️";
      playerMove = "✋";
    }
  } else if (playerMove === "Scissors") {
    if (computerNum === "Rock") {
      result = "Hai perso";
      computerNum = "✊";
      playerMove = "✌️";
    } else if (computerNum === "Paper") {
      result = "Hai vinto";
      computerNum = "✋";
      playerMove = "✌️";
    } else if (computerNum === "Scissors") {
      result = "Hai pareggiato";
      computerNum = "✌️";
      playerMove = "✌️";
    }
  }

  // Gestione punteggi

  if (result === "Hai vinto") {
    score.wins += 1;
  }
  if (result === "Hai perso") {
    score.losses += 1;
  }
  if (result === "Hai pareggiato") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  // Aggiorna il punteggio a display dopo averlo inserito
  updateScore();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-move"
  ).innerHTML = `Player Move ${playerMove} - ${computerNum} Computer Move`;
};

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Vittorie: ${score.wins}, Perse: ${score.losses}, Pareggi: ${score.ties}`;
}

// PC genera numero randomico
const PCMove = () => {
  // Variabile salvata all'interno dello scope funzione
  let computerNum = "";

  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerNum = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerNum = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerNum = "Scissors";
  }

  return computerNum;
};
