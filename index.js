let timer= 60;
let score =0;
let randHit= 0;
let startGame= document.getElementById('start-game');

function increaseScore(){
    score += 10;
    document.querySelector('#score-value').textContent= score;
}

function getNewHit(){
    randHit= Math.floor(Math.random()*10);
    document.querySelector('#hit-value').textContent= randHit;
}

function makeBubble(){
    let bubbleCollection= "";
for(let i=1; i<=160; i++){
    var randNum= Math.floor(Math.random()*10);
    bubbleCollection += `<div class="bubble">${randNum}</div>`;
}

document.querySelector('#panel-bottom').innerHTML= bubbleCollection;
}

function runTimer(){
    var timerInterval= setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timer').textContent= timer;
        }else{
            clearInterval(timerInterval);
            startGame.disabled= false;
            document.querySelector('#panel-bottom').innerHTML= `<h1 id="game-over">Game Over!</h1> <h2 id="score-card">Your Score is: ${score}</h2>`
        }
    },1000);
}


startGame.addEventListener("click", function(){
    startGame.disabled= true;
    document.querySelector('#score-value').textContent= 0;
    score= 0;
    timer= 60;
    let targetArea= document.querySelector('#panel-bottom');
    targetArea.addEventListener("click",function(details){
    let clickedNum= Number(details.target.textContent);
    if(clickedNum === randHit){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
    getNewHit();
    runTimer();
    makeBubble();
})

// getNewHit();
// runTimer();
// makeBubble();