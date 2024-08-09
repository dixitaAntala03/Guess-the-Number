let rndmnum;
let score = 20;
let highScore = 0;

function randomNumber() {
    rndmnum = Math.floor((Math.random() * 20) + 1);

    let randomNum = document.getElementById("random");
    randomNum.innerText = "?";

    let txt = document.getElementById("txt");
    txt.innerText = "Start guessing...";

    score = 20;
    updateScore();
}

function randomNumberAgain() {
    randomNumber();

    highScore = 0;
    updateHighScore();
}

function checkNum() {
    let num = document.getElementById("number").value;
    let txt = document.getElementById("txt");

    if (score <= 1) {
        txt.innerText = "You Lose....! Please start again...";
        score--;
        updateScore();
        return;
    }

    if (num < rndmnum) {
        txt.innerText = "Too Low....!";
        score--;
    } else if (num > rndmnum) {
        txt.innerText = "Too High....!";
        score--;
    } else if (num == rndmnum) {
        let randomNum = document.getElementById("random");
        randomNum.innerText = rndmnum;
        txt.innerText = "You Win....!";
        
        if (score > highScore) {
            highScore = score;
            updateHighScore();
        }

        setTimeout(() => {
            randomNumber();
        }, 2500); 
    }

    updateScore();
}

function updateScore() {
    let scoreLabel = document.getElementById("score");
    scoreLabel.innerText = "Score: " + score;
}

function updateHighScore() {
    let highScoreLabel = document.getElementById("highScore");
    highScoreLabel.innerText = "Highscore: " + highScore;
}
