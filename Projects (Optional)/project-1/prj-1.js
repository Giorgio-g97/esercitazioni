const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {
  startTimer();
});

let intervalId = null;
let [seconds, minutes, hours] = [0, 0, 0];
let isTimerStarted;
let timerDisplay = document.querySelector(".time");

const incremSeconds = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

//Controllo: se numero<10, allora 00, altrimenti numero >= 10
  let h = hours < 10 ? '0' + hours : hours 
  let m = minutes < 10 ? '0' + minutes : minutes 
  let s = seconds < 10 ? '0' + seconds : seconds 

  timerDisplay.innerHTML = `Time: ${h}:${m}:${s}`;
};

const startTimer = () => {
  if (!isTimerStarted) {
    isTimerStarted = true;
    startBtn.innerHTML = "Stop";
    intervalId = setInterval(incremSeconds, 1000);
  } else if (isTimerStarted === true) {
    isTimerStarted = false;
    startBtn.innerHTML = "Start";
    clearInterval(intervalId);
  }
};

const resBtn = document.querySelector(".res-btn");
resBtn.addEventListener("click", () => {
  seconds = 0;
  timerDisplay.innerHTML = `Time: 00:00:00`;
});
