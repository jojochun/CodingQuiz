

// questions!
var questions = [{
    question:"What do all HTML documents start with?",
    answers: ["Hypertext","html","<!DOCTYPE html","<html>"],
    correctAnswer: "<!DOCTYPE html"
    
},{
    question:"What is the process of finding errors and fixing them within a program called?",
    answers: ["Solving","Fixing","Resetting","Debugging"],
    correctAnswer: "Debugging"

},{
    question:"How do you see which remote links (in GitHub) have been established for your project",
    answers: ["git remote links","git remote -v","git add A-","git remote origin"],
    correctAnswer: "git remote -v"

},{
    question:"Why do we need an alt attribute for images in an HTML document?",
    answers: ["To identify the image","To access the image","To give context for the image"],
    correctAnswer: "To give context for the image"
},{
    question:"Which CSS property do you use to align the flex container's items on the main-axis?",
    answers: ["justify-content","align-content","align-text","flex-center"],
    correctAnswer: "justify-content"
},{
    question:"The visible part of the HTML document is between:",
    answers: ["<head> and </head>","<html> and </html>","<body> and </body>","<visible> and </visible"],
    correctAnswer: "<body> and </body>"
}]


//Setting temporary timer
//var timer = 10
var timer = questions.length*10;

var questionNumber = 0
var timerId 
var timerCountdown = document.getElementById("time")
var startScreen = document.getElementById("rules-container")
var questionEl = document.querySelector("#question")
var endScreen = document.getElementById("results-container")
var answerList = document.getElementById("answers")
var answerStatus = document.getElementById("check-answer")
var questionScreen = document.getElementById("questions-container")
var submitEl = document.getElementById("submit")


// done
function startQuiz() {
    console.log("started")
    startScreen.setAttribute("class", "hide")
    timerCountdown.textContent = timer;
    questionScreen.removeAttribute("class")
    questionEl.removeAttribute("class")
    timerId = setInterval(decreaseTime, 1000)
    updateQuestion();
};

// done
function decreaseTime() {
    timer -= 1;
    timerCountdown.textContent = timer;
    if (timer <= 0) {
        endQuiz();
    }
}

//end quiz function(needs to work on it)
function endQuiz() {
    //still need to add high score
    clearInterval(timerId)
    startScreen.setAttribute("class", "hide")
    endScreen.removeAttribute("class")
    questionEl.setAttribute("class", "hide")
    questionScreen.setAttribute("class", "hide")
   
}


// create and display questions
// function that tells us which question we're on
function updateQuestion() {
    //check to see if we've reached the end of the array, endQuiz
   
     //the questions array object
     var currentQuestion = questions[questionNumber]
     var questionsLength = questions.length
     if (currentQuestion == questionsLength) {
        endQuiz();
     }
     
     questionEl.textContent = currentQuestion.question
     answerList.innerHTML = "";

     //for loop answers on screen
     var answerEl = document.querySelector("#answers");
     for (var i = 0; i < currentQuestion.answers.length; i++){
         var liEl = document.createElement("li");
         var buttonEl = document.createElement("button");
         buttonEl.textContent = currentQuestion.answers[i]
         buttonEl.addEventListener("click", checkAnswer )
         // add button class
         liEl.append(buttonEl)
         answerEl.append(liEl)
     }
}

//create timer, needs to start on button click
//ends with finishing quiz or timer runs out
var startButton = document.querySelector("#start-btn")



// get user info and check it or validate if correct
function checkAnswer(event) {
    console.log(event.target.textContent)
    console.log(questions[questionNumber].correctAnswer)
    if (event.target.textContent !== questions[questionNumber].correctAnswer) {
        console.log("wrong answer")
        timer -= 15;
        if (timer < 0) {
            timer = 0
        }
        timerCountdown.textContent = timer;
        
        // play wrong sound effect

        answerStatus.textContent = "Wrong Answer"
    }
    // if else true, play the right sound and say correct answer
    questionNumber++
    updateQuestion()
    
}


//score and store in localStorage
var saveScores = function() {
    var score = JSON.parse(localStorage.getItem("score")) || [];
    var initials = document.getElementById("initials-input")
    
    var playerInfo = {
        time: timer, 
        initials: initials.value
    }
    score.push(playerInfo)
    localStorage.setItem("score", JSON.stringify(score));
};

//get localStorage Scores
var loadScores = function() {
    score = JSON.parse(localStorage.getItem("score"));
 // display scores
 var scoreBoardEl = getElementBy("score-board")  
 var scoresList = document.createElement("li");
 scoresList.innerHTML = "<span>" + playerInfo.initials + "</span><h3>" + playerInfo.time + "</h3>",
scoreBoardEl.appendChild(scoresList);

};

submitEl.addEventListener("click", saveScores)
startButton.addEventListener("click", startQuiz)