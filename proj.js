"use strict"

let count = 0;
let score = 0;
let highscore = 0;
let timer;
let timeout;
        
function letsRandomize(min,max){
     return (Math.floor(Math.random() * max) + min);
}

function zombiePlacer(){
    showZombie(1);
    zombieMove(1,200);
    if(score >= 4){
        showZombie(2);
        zombieMove(2,200);
    }
    if(score >= 8){
        showZombie(3);
        zombieMove(3,240);
        showZombie(4);
        zombieMove(4,120);
    }
}

var time = 30;
    var elem = document.getElementById('funky');

    var timerId = setInterval(countdown, 1000);

    function countdown() {
      if (time == 0) {
        time = 0
        clearTimeout(timerId);
        console.log('timer done')
        elem.innerHTML = 'Time: ' + time;
      } else {
        elem.innerHTML = 'Time: ' + time;
        time--;
      }
    }

function zombieMove(id,s){
    let w = letsRandomize(0, (window.innerWidth - s));
    let h = letsRandomize(0, (window.innerHeight - s));
    document.getElementById('mole' + id).style.top = h + 'px';
    document.getElementById('mole' + id).style.left = w + 'px';
    document.getElementById('boom' + id).style.top = h + 'px';
    document.getElementById('boom' + id).style.left = w + 'px';
}

function moveClicked(id, s){
    let w = letsRandomize(0, (window.innerWidth - s));
    let h = letsRandomize(0, (window.innerHeight - s));
    document.getElementById('mole' + id).style.top = h + 'px';
    document.getElementById('mole' + id).style.left = w + 'px';
    document.getElementById('boom' + id).style.display = "inline-block";
    timeout = setTimeout(showZ(id), 500);
}

function showZ(id){
    return function(){
        document.getElementById('mole' + id).style.display = "inline-block";
        document.getElementById('boom' + id).style.display = "none";
    }
}

function showZombie(id){
    document.getElementById('mole' + id).style.display = "inline-block";
    document.getElementById('boom' + id).style.display = "none";
}
        
function animate(id){
    document.getElementById('mole' + id).style.display = "none";
    document.getElementById('boom' + id).style.display = "inline-block";
}
        
function initialize(){
    let sw = window.innerWidth/2;
    let sh = window.innerHeight/2;
    count = 0;
    score = 0;
    zombieMove(1,200);
    document.getElementById('start').style.top = sh - 40 + 'px';
    document.getElementById('start').style.left = sw - 40 + 'px';
    document.getElementById('reset').style.top = window.innerHeight - 40 + 'px';
    document.getElementById('reset').style.left = sw - 40 + 'px';
    document.getElementById('score').innerHTML = "Score: " + score;
    document.getElementById('hscore').innerHTML = "High Score: " + highscore;
    document.getElementById('head').innerHTML = "Whack-A-Mole";
    document.getElementById('start').style.display = "inline-block";
    document.getElementById('mole1').onclick = handler(1, 200);
    document.getElementById('mole2').onclick = handler(2, 200);
    document.getElementById('mole3').onclick = handler(3, 240);
    document.getElementById('mole4').onclick = handler(4, 120);
    document.getElementById('reset').style.display = "none";
    document.getElementById('start').onclick = gameStart;
    document.getElementById('reset').onclick = reset;
    hideAll();
}
function reset(){
    initialize();
    stopTimer();
    clearTimeout(timeout);
}
        
function hideAll(){
    document.getElementById('mole1').style.display = "none";
    document.getElementById('mole2').style.display = "none";
    document.getElementById('mole3').style.display = "none";
    document.getElementById('mole4').style.display = "none";
    document.getElementById('boom1').style.display = "none";
    document.getElementById('boom2').style.display = "none";
    document.getElementById('boom3').style.display = "none";
    document.getElementById('boom4').style.display = "none";
    document.getElementById('reset').style.display = "none";
}
        
function gameStart(){
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "inline-block";
    document.getElementById('head').innerHTML = "";
    zombieMove(1,200);
    startTimer();
    showZombie(1);
}

function startTimer(){
    timer = setInterval(zombiePlacer, 2000);
}

function stopTimer(){
    clearInterval(timer);
}
        
function handler(id, s){
    return function (){
        document.getElementById('effect' + id).play();
        score += 1;
        animate(id);
        moveClicked(id, s);
        document.getElementById('score').innerHTML = "Score: " + score;
        if (score > highscore){
            highscore = score;
            document.getElementById('hscore').innerHTML = "NEW High Score: " + highscore;
        }
    }
}

document.body.onload = initialize;
