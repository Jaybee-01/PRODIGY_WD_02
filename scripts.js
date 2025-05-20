let [minutes, seconds, milliseconds] = [0, 0, 0];
let timer = document.getElementById("display");
let interval = null;
let isRunning = false;

function updateDisplay() {
  let m = minutes < 10 ? `0${minutes}` : minutes;
  let s = seconds < 10 ? `0${seconds}` : seconds;
  let ms = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
  timer.innerHTML = `${m}:${s}:${ms}`;
}

// function to start
function start() {
  if (!isRunning) {
    interval = setInterval(run, 10);
    isRunning = true;
  }
}

function run() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  updateDisplay();
}

function pause() {
  clearInterval(interval);
  isRunning = false;
}

function reset() {
  clearInterval(interval);
  [minutes, seconds, milliseconds] = [0, 0, 0];
  isRunning = false;
  updateDisplay();
}
