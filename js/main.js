//timer: 25 min - stop(alarm) - 5min - stop(alarm)
//background: pomodoro - change on break
//buttons: START/PAUSE - when click to start change to 'PAUSE'
//         CANCEL - when counting


//
const timer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const cancelButton = document.querySelector('.cancel-button');
const startingMinutes = 25;
let workingTime = startingMinutes * 60;
let myInterval = -1;
let startingBreakTime = 5;
let breakTime = startingBreakTime * 60;
// let countdown = 0;
// let isBreak = true;
// let isPaused = true;

startButton.addEventListener('click', () => {
    //if paused
    if (myInterval == -1) {
        startButton.textContent = 'PAUSE';  
    myInterval = setInterval(() => {
        let MM = Math.floor(workingTime / 60);
        let SS = workingTime % 60;
        timer.innerHTML = `${MM}:${SS < 10 ? '0' + SS : SS}`;
        workingTime--;
    }, 1)
    //else pause
} else {
    startButton.textContent = 'START';
    clearInterval(myInterval);
    myInterval = -1;
}   
 function timeForBreak() {
    
  
   if (workingTime <= 0) {
        clearInterval(myInterval)
    // startButton.textContent = 'PAUSE';  
    // myInterval = setInterval(() => {
    //     let MM = Math.floor(breakTime / 60);
    //     let SS = breakTime % 60;
    //     timer.innerHTML = `${MM}:${SS < 10 ? '0' + SS : SS}`;
    //    breakTime--;
    // }, 10)
   }
}
})

// function buttonDisplay() {
//     if (isPaused && countdown === 0) {
//       startButton.textContent = "START";
//     } else if (isPaused && countdown !== 0) {
//       startButton.textContent = "Continue"; 
//     } else {
//       startButtno.textContent = "PAUSE";
//     }
//   }
  

