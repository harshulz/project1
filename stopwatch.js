let counter = 0;

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

const timerEl = document.querySelector("#timer");
const outer = document.querySelector("#outer");

//functioning the time format
function formatTime(seconds) {
  // Calculate hours, minutes, and seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // Format the time
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

  return formattedTime;
}

/* The `startTimer()` function is responsible for starting the timer. Inside this function, there is a
 It formats the
 The timer will continue to run until it is stopped by the user clicking the stop
button. */

function startTimer() {
  timerEl.style.color = "greenyellow";
  outer.style.borderColor = "greenyellow";

  // `setInterval` method that increments the `counter` variable by 1 every second.
  timerInterval = setInterval(() => {
    counter++;
    //current time using the `formatTime()` function and updates the timer display element with the formatted time.
    const currentTime = formatTime(counter);
    //console.log(currentTime);
    timerEl.textContent = currentTime;
    return currentTime;
  }, 1000);
}

/* The `stopTimer()` function is responsible for stopping the timer. Inside this function, it clears
the interval set by `setInterval` using the `clearInterval` method, which stops the timer from
incrementing the counter variable. It then updates the timer display element with the current
formatted time based on the counter value. Finally, it returns the formatted time as a string. */

function stopTimer() {
  timerEl.style.color = "orange";
  outer.style.borderColor = "orange";
  clearInterval(timerInterval);
  timerEl.textContent = formatTime(counter);
  return timerEl.textContent;
}

/**
 * The `resetTimer` function resets a timer by changing its color, resetting the counter, and updating
 * the display.
 * @returns The function `resetTimer` is returning the text content of the `timerEl` element after
 * resetting the timer.
 */
function resetTimer() {
  timerEl.style.color = "red";

  outer.style.borderColor = "red";
  clearInterval(timerInterval);
  counter = 0;

  timerEl.textContent = formatTime(counter);
  return timerEl.textContent;
}

//when no timer is started then initital value of timer is 0
timerEl.textContent = formatTime(0);

//addEventListener to each button
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
