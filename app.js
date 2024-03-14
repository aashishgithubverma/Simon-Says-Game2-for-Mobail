let gameSeq = [];
let userSeq = [];

let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let startBtn = document.querySelector(".startbutton");


startBtn.addEventListener("click", function () {
    gameFlash(this)
    if (started == false) {
        console.log("game start");
        started = true;

        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
};
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
};

function levelup() {

    userSeq = [];
    level++;
    h2.innerText = (`Level ${level}`);
    let randomIndx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameFlash(randomBtn);
}

function checkAns(idx) {
    //console.log("Ans check same value")
    console.log(idx)
    if (userSeq[idx] === gameSeq[idx]){
       if (userSeq.length == gameSeq.length){
        setTimeout(levelup, 1000);
       }
    }else{
        h2.innerHTML = `Game Over! Your Score is <b>${level}</b> <br> Press any key to start game.`
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 230)
        reset();
        startBtn.addEventListener("click", function () {
            gameFlash(this)
            if (started == false) {
                console.log("game start");
                started = true;
        
                levelup();
            }
        });
    }
}


function btnPress() {
    let btn = this;
    console.log("button was pressed");
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}
function reset (){
    started = false;
    gameSeq =[];
    userSeq =[];
    level = 0;
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}


