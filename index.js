var clutter = "";
var timer = 60;
var score = 0;
var hitrn = 0;


function makeBubble(){
    for(var i=1; i<=140; i++){

        var rn = Math.floor(Math.random()*10)
    
       clutter += `<div class="bubble">${rn}</div>`;
    
       document.querySelector("#pbtm").innerHTML = clutter
    
    }
}


function runTimer(){
    var timerun = setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerun);
            document.querySelector("#pbtm").innerHTML = ``;
        }
    }, 1000);
}

function makeNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#newHit").textContent = hitrn
}

function increseScore(){
   score += 10;
   document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickednum = (Number(details.target.textContent))
    if(clickednum === hitrn){
        increseScore();
        makeBubble();
        makeNewHit();
    }
})

makeBubble();
runTimer();
makeNewHit();



