# MariyaPeychinova-timer
Pomodoro timer mini-project from Workshop4 of FAC21 precourse

I started with creatind a new private repository for my project within the FAC21 organisation on [GitHub](https://github.com/fac21/MariyaPeychinova-timer) and including a README.md.

Then, I cloned the repo in the Workshops directory on my device, using the link provided and pasting it in my terminal.

Using the terminal, in the MariyaPeychinova-timer directori I created new directories and new files for the HTML, CSS and Javascript. 

Starting with the html file, I created the main HTML page structure, including all nesesery meta and semantic tags I decided my prject needed. Then, started to add one by one the fitures of my page and styling them.

So I got up to ![these](images/Screenshot.png) an now what? 
I have no idea.
- First step - done: finaly managed to create a function, witch executes on click of the START button. The final countdown began!
What I did: 
1. Defined variables timer, startButton and cancelButton and asined to them the selected elements from the HTML file. 
```javascript
const timer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const cancelButton = document.querySelector('.cancel-button');
```
2. Added an EventListener to the startButton to triger on 'click' event, using an arrow function to define the inline function.
```javascript
startButton.addEventListener('click', () => {
})
```
3. I created a setInterval function in the eventListener to make the timer counts down from 25 and used a template literal to assine the changes in its innerHTML. I had to define variables for the startingMinutes and the workingTime, as I had to decrease it (workingTime--) in the function.
Also defined variables for the minutes and the seconds assining to them their values.

```javascript
setInterval(() => {
        let MM = Math.floor(workingTime / 60);
        let SS = workingTime % 60;

        timer.innerHTML = `${MM}:${SS < 10 ? '0' + SS : SS}`;
        
        workingTime--;
    }, 1000)
```
    Let's try to work on changing the startButton now!
4. startButton textContent changed on 'click' event in the eventListener.

```javascript
startButton.textContent = 'PAUSE';
```
Let's work on the loggic for 'PAUSE' and 'START'.
5. That wasn't easy! 
With defining a new variable myInterval, I managed to do it. 
```javascript
 //if paused
    if (myInterval == -1) {
        startButton.textContent = 'PAUSE';  
    myInterval = setInterval(() => {
        let MM = Math.floor(workingTime / 60);
        let SS = workingTime % 60;
        timer.innerHTML = `${MM}:${SS < 10 ? '0' + SS : SS}`;
        workingTime--;
    }, 1) //just while checking, so is faster
    //else pause
} else {
    startButton.textContent = 'START';
    clearInterval(myInterval);
    myInterval = -1;
}      
```
6. So how to make it stop when 00:00 and start the 5 minutes break? 






