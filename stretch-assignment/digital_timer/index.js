class timer {
    constructor() {
        this.t = 0;
        this.tickInterval = null;
    }
    tick = () => {
        if (this.t<1000) {
            this.t++; 
            this.updateDOM();
        }  
        else {
            document.querySelector(".digits").classList.add("redDigit");
            document.querySelector("#startButton").disabled = true;
            document.querySelector("#stopButton").disabled = true;
            clearInterval(this.tickInterval);
        } 
    }
    start = () => { 
        document.querySelector("#startButton").disabled = true;
        document.querySelector("#stopButton").disabled = false;
        this.tickInterval = setInterval(this.tick,10); 
    }
    stop = () => { 
        clearInterval(this.tickInterval); 
        document.querySelector("#startButton").disabled = false;
        document.querySelector("#stopButton").disabled = true;
    }
    reset = () => { 
        this.t = 0; 
        this.updateDOM(); 
        document.querySelector(".digits").classList.remove("redDigit");
        document.querySelector("#startButton").disabled = false;
        document.querySelector("#stopButton").disabled = true;
}
    updateDOM = () => {
        let tS = this.t.toString();
        ["msTens","msHundreds","secondOnes","secondTens"].forEach((e,i)=>{
            document.querySelector(`#${e}`).innerText = tS[tS.length-i-1] || 0;
        });
    }
}

function createButtons() {
    const buttonDiv = document.createElement("div");
    buttonDiv.id = "buttonDiv";
    document.querySelector("body").appendChild(buttonDiv);
    const startButton = document.createElement("button");
    startButton.id = "startButton";
    startButton.innerText = "start";
    buttonDiv.appendChild(startButton);
    startButton.addEventListener('click',()=>{timer1.start()});
    const stopButton = document.createElement("button");
    stopButton.id = "stopButton";
    stopButton.innerText = "stop";
    buttonDiv.appendChild(stopButton);
    stopButton.addEventListener('click',()=>{timer1.stop()});
    const resetButton = document.createElement("button");
    resetButton.id = "reset";
    resetButton.innerText = "reset";
    buttonDiv.appendChild(resetButton);
    resetButton.addEventListener('click',()=>{timer1.reset()});
}

const timer1 = new timer();

window.addEventListener('load',()=>{createButtons();})


/*
    * SG1: Implement a start button. The digital timer should not start until the button is pressed.
    * SG2: Once you have a start button working, configure it so that when a user presses the start button it is disabled and not enabled until the timer finishes.
    * SG3: Once you have finished SG2, add new new button called `reset` that resets the timer to 0:00:00 and then pressing the start button again will start the timer from 0.
    * SG4: Finally, if you have completed all the stretch goals, spend some time styling your timer and buttons.
*/