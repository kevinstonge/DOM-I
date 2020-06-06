window.addEventListener('load',()=>{
    let buttonDiv = document.createElement("div");
    buttonDiv.id = "buttonDiv";
    document.querySelector("body").appendChild(buttonDiv);
    
    let t = 0;
    let tick = () => { 
        if (t<1000) {
            t++; 
            tS = t.toString();
            ["msTens","msHundreds","secondOnes","secondTens"].forEach((e,i)=>{
                document.querySelector(`#${e}`).innerText = tS[tS.length-i-1] || 0;
            });
        }  
        else {
            document.querySelector(".digits").classList.add("redDigit");
            clearInterval(tickInterval);
        } 
    }
    var tickInterval = setInterval(tick, 10);


})

/*
    * SG1: Implement a start button. The digital timer should not start until the button is pressed.
    * SG2: Once you have a start button working, configure it so that when a user presses the start button it is disabled and not enabled until the timer finishes.
    * SG3: Once you have finished SG2, add new new button called `reset` that resets the timer to 0:00:00 and then pressing the start button again will start the timer from 0.
    * SG4: Finally, if you have completed all the stretch goals, spend some time styling your timer and buttons.
*/