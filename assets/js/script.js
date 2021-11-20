

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
    correctAnswer: "justify-content",
},{
    question:"The visible part of the HTML document is between:",
    answers: ["<head> and </head>","<html> and </html>","<body> and </body>","<visible> and </visible"],
    correctAnswer: "<body> and </body>"
},{
    question:"Which way of adding CSS to HTML documents requires using a link?",
    answers: ["Internal","External","Reference","Inline"],
    correctAnswer: "External"
},{
    question:"In CSS, how do you select and element with a specific id?",
    answers: ["Write (.) followed by the id of the element","Write (.) after the id of the element","Write (#) followed by the id of the element","Write (id) followed by the id of the element"],
    correctAnswer: "Write (#) followed by the id of the element"
},{
    question:"In the CSS Box Model, what is the outermost part of the box?",
    answers: ["Padding","Content","Border","Margin"],
    correctAnswer: "Margin"
},{  
    question:"What is Media Query?",
    answers: ["A CSS technique introduced in CSS#","It uses the @media rule to include a block of CSS properties if only a certain condition is true","It adds media capabilities to CSS", "Both 1. and 2."],
    correctAnswer:"Both 1. and 2."
},{
    question:"What is NOT an advantage of placing JavaScript scripts in external files?",
    answers: ["It allows CSS files to load faster","Cached JavaScript files can speed up page loads","It separates HTML and code","It makes HTML and JavaScript easier to read and maintain"],
    correctAnswer: "It allows CSS files to load faster"
},{
    question:"Which JavaScript display/output method should only be used for testing because it deletes all existing HTML?",
    answers:["innerHTML","document.write()","window.alert","console.log"],
    correctAnswer: "document.write()"
},{
    question:"What separates JavaScript statements?",
    answers:[",",";",":","!"],
    correctAnswer: ";"
},{
    question:"What keyword do you use to exit a JavaScript function?",
    answers: ["switch","let","try","return"],
    correctAnswer: "return"
},{
    question:"What do professional programmers often use it as an alias for the main function in a JavaScript library?",
    answers: ["$","_","&","%"],
    correctAnswer: "$"
},{
    question:"What do professional programmers often use it as an alias for private(hidden) in a JavaScript library?",
    answers: ["$","_","&","%"],
    correctAnswer: "_"
},{
    question:"How are JavaScript objects written?",
    answers: ["With square brackets","With parentheses","With quotation marks","With curly braces"],
    correctAnswer: "With curly braces"
},{
    question:"What happens if you access a function without ()?",
    answers: ["You will return the function result","You will return the function object","You will return undefined","You will return a null value"],
    correctAnswer: "You will return the function object"
},{
    question:"In the DOM, all HTML elements are defined as:",
    answers: ["methods","classes","objects","values"],
    correctAnswer: "objects"
},{
    question:"What do you call a loop that never ends?",
    answers: ["Infinite loop", "Forever loop", "While loop","Nonstop loop"],
    correctAnswer: "Infinite loop"
}]
//Setting temporary timer
//var timer = 1
var timer = questions.length*20;





// create and display questions
// function that tells us which question we're on
var questionNumber = 0
var timerId 
var timerCountdown = document.getElementById("time")
var startScreen = document.getElementById("rules-container")
var questionEl = document.querySelector("#question")
var endScreen = document.getElementById("results-container")
var answerList = document.getElementById("answers")
var answerStatus = document.getElementById("check-answer")

// done
function startQuiz() {
    console.log("started")
    startScreen.setAttribute("class", "hide")
    timerCountdown.textContent = timer;
    questionEl.removeAttribute("class")
    timerId = setInterval(decreaseTime, 1000)
    updateQuestion();
};

//finished this function
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
    endScreen.removeAttribute("class")
    questionEl.setAttribute("class", "hide")

}

function updateQuestion() {
    //the questions array object
     var currentQuestion = questions[questionNumber]
     
     questionEl.textContent = currentQuestion.question
     answerList.innerHTML = "";

     //for loop answers on screen
     var answerEl = document.querySelector("#answers");
     for (var i = 0; i < currentQuestion.answers.length; i++){
         var liEl = document.createElement("li");
         var buttonEl = document.createElement("button");
         buttonEl.textContent = currentQuestion.answers[i]
         // add button class
         liEl.append(buttonEl)
         answerEl.append(liEl)
     }
}

//create timer, needs to start on button click, ends with finishing quiz or timer runs out
var startButton = document.querySelector("#start-btn")



// get user info and check it or validate if correct
function checkAnswer() {
    if (this.value !== questions[questionNumber].correctAnswer) {
        timer -= 15;
        if (timer < 0) {
            timer = 0
        }
        timerCountdown.textContent = timer;
        
        // playwrong sound effect

        answerStatus.textContent = "Wrong Answer"
    }
    // if else true, play the right sound and say correct answer
}



// progress thru questions, conditionals. get score and store in localStorage
updateQuestion()





startButton.addEventListener("click", startQuiz)