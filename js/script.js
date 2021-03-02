const timer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const cancelButton = document.querySelector('.cancel-button');
let workingTime = 1500;//25 * 60

function setWorkingTime() {
    setInterval(function() {
        if (workingTime <= 0) {
            clearInterval(workingTime = 0);
        }
        let MM = Math.floor(workingTime / 60);
        let SS = workingTime % 60;
        timer.innerHTML = `${MM}:${SS}`
        workingTime--;
        
    }, 1)
    }
   

startButton.addEventListener('click', setWorkingTime);


    
        
     
      
     
 