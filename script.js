let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;
let lapCounter = 1;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay(){

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = `${h} : ${m} : ${s}`;
}

function stopwatch(){

    seconds++;

    if(seconds === 60){
        seconds = 0;
        minutes++;
    }

    if(minutes === 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

document.getElementById("start").onclick = function(){

    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch, 1000);
};

document.getElementById("pause").onclick = function(){
    clearInterval(timer);
};

document.getElementById("reset").onclick = function(){

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCounter = 1;

    updateDisplay();

    laps.innerHTML = "";
};

document.getElementById("lap").onclick = function(){

    if(timer !== null){

        let li = document.createElement("li");

        li.innerHTML = `
            <span>Lap ${lapCounter}</span>
            <span>${display.innerText}</span>
        `;

        laps.prepend(li);

        lapCounter++;
    }
};