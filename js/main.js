//timer: 25 min - stop(alarm) - 5min - stop(alarm)
//background: pomodoro - change on break
//buttons: START/PAUSE - when click to start change to 'PAUSE'
//         CANCEL - when counting



const timer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const cancelButton = document.querySelector('.cancel-button');
const startingMinutes = 25;
let workingTime = startingMinutes * 60;
let myInterval = -1;
let startingBreakTime = 5;
let breakTime = startingBreakTime * 60;
//let sound = 


//startButton - workingTime
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

    //if working
} else {
    startButton.textContent = 'START';
    clearInterval(myInterval);
    myInterval = -1;
}  
});

//cancelButton
 cancelButton.addEventListener('click', () => {
    clearInterval(myInterval);
    myInterval = 0;
        let MM = 0 + '0';
        let SS = 0 + '0';
        timer.innerHTML = `${MM}:${SS}`;
        workingTime = 0;
        startButton.textContent = 'START';
})
