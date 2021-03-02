//timer: 25 min - stop(alarm) - 5min - stop(alarm)
//background: pomodoro - change on break
//buttons: START/PAUSE - when click to start change to 'PAUSE'
//         CANCEL - when counting


const timer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const cancelButton = document.querySelector('.cancel-button');
let workingTime = 1500;//25 * 60
let myInterval = -1;

function setWorkingTime() {
    if (myInterval == -1) {
        startButton.textContent = 'PAUSE';  

    myInterval = setInterval(() => {
        if (workingTime <= 0) {
            clearInterval(workingTime = 0);
        }
        let MM = Math.floor(workingTime / 60);
        let SS = workingTime % 60;
        timer.innerHTML = `${MM}:${SS < 10 ? '0' + SS : SS}`
        workingTime--;
    }, 1)
    
} else {
    startButton.textContent = 'START';
    clearInterval(myInterval);
    myInterval = -1;
}  
    }
   
startButton.addEventListener('click', setWorkingTime);


    
        
     
      
     
 