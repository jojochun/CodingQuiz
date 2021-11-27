// load scores from localStorage
var score = JSON.parse(localStorage.getItem("score")) || [];

var scoreBoard = document.getElementById("player-info");

for (var i = 0; i < score.length; i++) {
    var scoreLi = document.createElement("li")
    scoreLi.textContent = "user: " + score[i].initials + " score: " + score[i].time
    scoreBoard.append(scoreLi)
}

// button to restart game
var restartBtn = document.getElementById("restart-btn")

// take me to index.html to restart game
function redirect() {
    console.log(redirect)
    window.location.href = "/index.html"
}

// clear or reset the page
function resetGame() {
    score.length = 0;
}

// clear localStorage, possibly storage clear
function clearScreen() {
    localStorage.setItem("score", "");

    resetGame();
}

// 2. create a button to erase scores
var clearBtn = document.getElementsByName("clear-btn")


// add eventListener
clearBtn.addEventListener("click", clearScreen)
// add eventListener
restartBtn.addEventListener("click", redirect)