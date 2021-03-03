//timer: 25 min - stop(alarm) - 5min - stop(alarm)
//background: pomodoro - change on break
//buttons: START/PAUSE - when click to start change to 'PAUSE'
//         CANCEL - when counting



const timer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const cancelButton = document.querySelector('.cancel-button');
const section = document.querySelector('.section');
const startingMinutes = 25;
let workingTime = startingMinutes * 60;
let myInterval = -1;
let startingBreakTime = 5;
let breakTime = startingBreakTime * 60;
let sound = new Audio('goes-without-saying-608.mp3');
//let howFastTheTimerGoes = 1;
let howFastTheTimerGoes = 1000;


//startButton - workingTime
startButton.addEventListener('click', () => {
    //if paused
    if (myInterval == -1) {
        startButton.textContent = 'PAUSE';  

    myInterval = setInterval(() => {
        //when is finished - clear work
        if (workingTime <= 0) {
            section.classList.add('section-changed');
            sound.play();
            
            clearInterval(workingTime = 0);
            //set break
            //myInterval = breakTime
            setTimeout(() => {
                //if finished - clear break
            if (breakTime <= 0) {
                clearInterval(breakTime = 0);
                sound.currentTime = 0;
            }
            let MM = Math.floor(breakTime / 60);
            let SS = breakTime % 60;
            timer.innerHTML = `${MM}:${SS < 10 ? '0' + SS : SS}`;
            breakTime--;
            }, 1000)
        }
        let MM = Math.floor(workingTime / 60);
        let SS = workingTime % 60;
        timer.innerHTML = `${MM}:${SS < 10 ? '0' + SS : SS}`;
        workingTime--;
    }, howFastTheTimerGoes)

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
        startButton.textContent = 'RESET';
})

//reset the timer after canceling
startButton.addEventListener('click', () => {
    if (myInterval == 0 || workingTime == 0) {
        myInterval = setInterval(() => {
            workingTime = startingMinutes * 60;
            startButton.textContent = 'RESTART'; 
            let MM = Math.floor(workingTime / 60);
            let SS = workingTime % 60;
            timer.innerHTML = `${MM}:${SS < 10 ? '0' + SS : SS}`;
            workingTime--;
    }, 1)
        }
})

