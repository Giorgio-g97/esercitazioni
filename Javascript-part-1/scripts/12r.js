let score = JSON.parse(localStorage.getItem("score")) || {
  // Default operator
  wins: 0,
  losses: 0,
  ties: 0,
};

let isAutoPlaying = false;

let intervalId;

const autoBtn = document.querySelector(".autoplay-btn");

// Al click di Auto Play
autoBtn.addEventListener("click", () => {
  autoPlay();
});

const autoPlay = () => {
  autoBtn.innerHTML = "Stop AutoPlay"; //12t
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      // il setInterval genera un ID
      const playerRand = PCMove();
      playGame(playerRand);
    }, 1000);
    console.log(intervalId);
    isAutoPlaying = true;
  } else {
    autoBtn.innerHTML = "Auto Play";
    clearInterval(intervalId); // stop interval prendendo l'ultimo ID
    isAutoPlaying = false;
  }
};

updateScore();

// Sostituz. con addEventListener

document.querySelector(".rock-btn").addEventListener("click", () => {
  playGame("Rock");
});

document.querySelector(".paper-btn").addEventListener("click", () => {
  playGame("Paper");
});

document.querySelector(".scissors-btn").addEventListener("click", () => {
  playGame("Scissors");
});

document.querySelector(".score-btn").addEventListener("click", () => {
  resetScore(); //12v
});

const resetScore = () => {
  const confRes = document.querySelector(".confirm-reset");
  confRes.innerHTML = `Are you sure you want to reset the score? <button class="yes-btn">Yes</button><button class="no-btn">No</button>`;
  const yesBtn = document.querySelector(".yes-btn");
  yesBtn.addEventListener("click", () => {//12x
    console.log('yes');
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem("score");
    updateScore();
    res = document.querySelector(".js-result");
    move = document.querySelector(".js-move");
    res.innerHTML = ""; // resetta i risultati
    move.innerHTML = ""; // resetta le giocate fatte
    confRes.innerHTML = ''
  });
  const noBtn = document.querySelector(".no-btn")
  noBtn.addEventListener("click", () => {
    confRes.innerHTML = ''
  })
};

//

// Utilizzo keydown

document.body.addEventListener("keydown", (e) => {
  // passiamo come parametro l'evento generato dalla pressione del tasto
  console.log(e.key); // loggerà la chiave premuta
  if (e.key === "r") {
    playGame("Rock");
  } else if (e.key === "p") {
    playGame("Paper");
  } else if (e.key === "s") {
    playGame("Scissors");
  } else if (e.key === "a") {
    //12u
    autoPlay();
  } else if (e.key === "Backspace") {
    //12w
    resetScore();
  }
});

//

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
