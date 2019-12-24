let countdown;
const timerDisplay = document.querySelector("#timer");

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    
    countdown = setInterval(function () {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
    
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainedseconds = seconds % 60;
    const display = `${minutes < 10 ? '0' : '' }${minutes}:${remainedseconds < 10 ? '0' : '' }${remainedseconds}`;
    timerDisplay.textContent = display;
    console.log({minutes , remainedseconds})
}