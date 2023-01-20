
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const time = document.getElementById("time");
const stopWatch = document.getElementById("stopWatch");

let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hor = document.getElementById("hor");

let SEC = 0;
let HOR = 0;
let MIN = 0;



const startStopWatch = () => {
    
        SEC += 1;
        time.innerHTML = `
        <h1 id="hor"><p > ${(HOR < 10 ? "0" : "") + HOR}: </p></h1>
        <h1 id="min"><p > ${(MIN < 10 ? "0" : "") + MIN} : </p></h1>
        <h1 id="sec"><p >  ${(SEC < 10 ? "0" : "") + SEC} </p></h1>
        `;

        stopWatch.appendChild(time);

        if(SEC >= 59){
            MIN +=1;
            time.innerHTML = `
            <h1 id="hor"><p > ${HOR}: </p></h1>
            <h1 id="min"><p > ${MIN} : </p></h1>
            <h1 id="sec"><p >  ${SEC} </p></h1>
            `;
    
            stopWatch.appendChild(time);
            SEC = 0;
        }
        if(MIN >= 59){
            HOR += 1;
            time.innerHTML = `
            <h1 id="hor"><p > ${HOR}: </p></h1>
            <h1 id="min"><p > ${MIN} : </p></h1>
            <h1 id="sec"><p >  ${SEC} </p></h1>
        `;

        stopWatch.appendChild(time);
            MIN = 0;
        }
   
}

const startWatch =  () => {setInterval(startStopWatch, 1000);}


const toStop = () =>{
    clearInterval(startWatch);
}


startBtn.addEventListener("click", startWatch);
stopBtn.addEventListener("click", toStop);


