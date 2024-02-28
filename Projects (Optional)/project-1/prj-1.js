const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {
  startTimer();
});

let intervalId = null;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isTimerStarted;
let timerDisplay = null;

const startTimer = () => {
  if (!isTimerStarted) {
    isTimerStarted = true;
    timerDisplay = document.querySelector(".time");
    if(seconds <= 9){
      seconds = '0' + seconds;
      seconds++
    }else if(seconds >= 59){
      seconds = 0;
      hours++;
    }
    // seconds++;
    startBtn.innerHTML = 'Stop'
    timerDisplay.innerHTML = `Time: ${hours}:${minutes}:${seconds}`;
    // console.log('start');
    intervalId = setInterval(() => {
      seconds++;
      // console.log(seconds);
      timerDisplay.innerHTML = `Time: ${hours}:${minutes}:${seconds}`;
    }, 1000);
  }else if(isTimerStarted === true){
    isTimerStarted = false;
    startBtn.innerHTML = 'Start'
    stopTimer();
  }
};

function stopTimer() {
  clearInterval(intervalId);
};

const resBtn = document.querySelector('.res-btn')
resBtn.addEventListener('click', () => {
  seconds = 0;
  timerDisplay.innerHTML = `Time: 00:00:00`;
})