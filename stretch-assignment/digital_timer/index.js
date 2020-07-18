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
            this.disableButtons({start:true,stop:true})
            clearInterval(this.tickInterval);
        } 
    }
    start = () => { 
        this.disableButtons({start:true,stop:false})
        this.tickInterval = setInterval(this.tick,10); 
    }
    stop = () => { 
        clearInterval(this.tickInterval); 
        this.disableButtons({start:false,stop:true})
    }
    reset = () => { 
        clearInterval(this.tickInterval); 
        this.t = 0; 
        this.updateDOM(); 
        document.querySelector(".digits").classList.remove("redDigit");
        this.disableButtons({start:false,stop:true})
    }
    updateDOM = () => {
        let tS = this.t.toString();
        ["msTens","msHundreds","secondOnes","secondTens"].forEach((e,i)=>{
            document.querySelector(`#${e}`).innerText = tS[tS.length-i-1] || 0;
        });
    }
    disableButtons = (stateObject) => {
        Object.keys(stateObject).forEach(e=>{document.querySelector(`#${e}Button`).disabled = stateObject[e]})
    }
}

function createButtons() {
    const timer1 = new timer();
    const buttonDiv = document.createElement("div");
    buttonDiv.id = "buttonDiv";
    document.querySelector("body").appendChild(buttonDiv);
    ["start","stop","reset"].forEach(e=>{
        const button = document.createElement("button");
        button.id = `${e}Button`;
        button.innerText = e;
        buttonDiv.appendChild(button);
        button.addEventListener('click',()=>{timer1[e]()})
    })
}

window.addEventListener('load',()=>{createButtons();})


/*
    * SG1: Implement a start button. The digital timer should not start until the button is pressed.
    * SG2: Once you have a start button working, configure it so that when a user presses the start button it is disabled and not enabled until the timer finishes.
    * SG3: Once you have finished SG2, add new new button called `reset` that resets the timer to 0:00:00 and then pressing the start button again will start the timer from 0.
    * SG4: Finally, if you have completed all the stretch goals, spend some time styling your timer and buttons.
*/