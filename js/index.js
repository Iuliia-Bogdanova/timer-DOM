let timerInput = document.querySelector(".timer-input");
const timerView = document.querySelector(".timer-view");
const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const resetBtn = document.querySelector(".resetBtn");
const errorDiv = document.querySelector(".error");
let interval;

// Clear default value on focus
timerInput.addEventListener('focus', () => {
    if (timerInput.value === "0") {
        timerInput.value = "";
    }
});

// Function to countdown
function countDown () {
    let seconds = parseInt(timerInput.value);
    if (!isNaN(seconds)) {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        seconds = seconds % 60;

        timerView.innerHTML =
        formatTime(hours) +
        ":" +
        formatTime(minutes) +
        ":" +
        formatTime(seconds);

        if (seconds > 0 || minutes > 0 || hours > 0) {
          timerInput.value = seconds + minutes * 60 + hours * 3600 - 1;
        } else {
            clearInterval(interval);
        }
    }
}

// Function to format time with zeros
function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

// Functionality for startBtn
startBtn.addEventListener('click', () => {
    if (!/^\d+$/.test(timerInput.value)) {
        errorDiv.style.display = "flex";
        return;
        } else {
        errorDiv.style.display = "none";
    }

    clearInterval(interval);
    interval = setInterval(countDown, 1000);

    timerView.style.display = "flex";
    timerInput.style.display = "none";
});

// Add pauseBtn
pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
});

// Add resetBtn
resetBtn.addEventListener('click', () => {
    location.reload();
});