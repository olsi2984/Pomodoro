const timerDisplay = document.querySelector("#timer");
const sessionDisplay = document.querySelector("#s_screen");
const breakDisplay = document.querySelector("#b_screen");
let seconds = 1500;
let breakseconds = 300;
let onSession = "ON";
let onBreak;

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    onSession = "OFF"
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

var start_btn = document.querySelector('#start_btn');
start_btn.addEventListener("click", function(){ 
    timer(seconds);

    });

var reset_btn = document.querySelector('#reset_btn');
reset_btn.addEventListener("click", function(){ 
    clearInterval(countdown); 
    timerDisplay.textContent = "25:00" ;
    seconds = 1500;
    breakseconds = 300;
    sessionDisplay.textContent = seconds / 60;
    breakDisplay.textContent = breakseconds / 60;  
    });

var stop_btn = document.querySelector('#stop_btn');
stop_btn.addEventListener("click", function(){
    clearInterval(countdown); 
    arr = timerDisplay.innerHTML.split(":");
    seconds = parseInt(arr[0], 10) * 60 + parseInt(arr[1], 10);
    });

var s_up = document.querySelector('#s_up');
s_up.addEventListener("click", function(){ 
    if (seconds / 60 >= 60) {
        return;
    }
    seconds = seconds + 60; 
    sessionDisplay.textContent = seconds / 60;
    timerDisplay.textContent = seconds / 60 + ":00"
    });

var s_down = document.querySelector('#s_down');
s_down.addEventListener("click", function(){ 
    if (seconds / 60 <= 1) {
        return;
    }
    seconds = seconds - 60; 
    sessionDisplay.textContent = seconds / 60;
    timerDisplay.textContent = seconds / 60 + ":00"
    });

var b_up = document.querySelector('#b_up');
b_up.addEventListener("click", function(){ 
    if (breakseconds / 60 >= 10) {
        return;
    }
    breakseconds = breakseconds + 60; 
    breakDisplay.textContent = breakseconds / 60;
    
    });

var b_down = document.querySelector('#b_down');
b_down.addEventListener("click", function(){ 
    if (breakseconds / 60 <= 1) {
        return;
    }
    breakseconds = breakseconds - 60; 
    breakDisplay.textContent = breakseconds / 60;
    });    