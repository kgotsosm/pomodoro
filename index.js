const timerEl = document.getElementById('timer');
const startEl = document.getElementById('start');
const pauseEl = document.getElementById('pause');
const resetEl = document.getElementById('reset');
const addFiveEl = document.getElementById('addFive');
const minusFiveEl = document.getElementById('minusFive');

let interval;
// 25mins * 60
let timeLeft = 1500

// State to check whether timer is running - stops rerender of interval
let isRunning = false;

function displayTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    let displayedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;

    timerEl.innerHTML = displayedTime;
}

function startTimer() {
    if(!isRunning) {
        // Minus 1 from seconds remaining every second
        interval = setInterval(() => {
            timeLeft --
            displayTimer();

            // If time remaining is 0 - alert that time is up
            if (timeLeft === 0) {
                clearInterval(interval);
                alert("Time's up!")
                // timeLeft = 1500;
                displayTimer();
            }
        }, 1000);
    }
    isRunning = true;
}

function pauseTimer() {
    clearInterval(interval);
    isRunning = false;
}
function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500
    displayTimer();
    isRunning = false;
}

function addFive() {
    timeLeft += 300;
    displayTimer();
}

function minusFive() {
    if (timeLeft <= 300) {
        clearInterval(interval);
        timeLeft = 0;
        resetTimer();
    } else {
        timeLeft -= 300;
    }

}

addFiveEl.addEventListener('click', addFive);
minusFiveEl.addEventListener('click', minusFive);
startEl.addEventListener('click', startTimer);
pauseEl.addEventListener('click', pauseTimer)
resetEl.addEventListener('click', resetTimer)