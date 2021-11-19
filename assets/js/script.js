// variables

// questions!
var questions = [{
    question:"What is HTML?",
    answers: ["Hypertext","Huge","Hemodynamic","Homotext"],
    correctAnswer: "Hypertext"
    
},{},{}]


// create and display questions
// function that tells us which question we're on
var questionNumber = 0
function updateQuestion() {
    //the questions array object
     var currentQuestion = questions[questionNumber]
     var questionEl = document.querySelector("#question");
     questionEl.textContent = currentQuestion.question
     var answerEl = document.querySelector("#answers");

     //for loop answers on screen
     for (var i = 0; i < currentQuestion.answers.length; i++){
         var liEl = document.createElement("li");
         var buttonEl = document.createElement("button");
         buttonEl.textContent = currentQuestion.answers[i]
         liEl.append(buttonEl)
         answerEl.append(liEl)
     }
}

//create timer, needs to start on button click, ends with finishing quiz or timer runs out


// get user info and check it or validate if correct

// progress thru questions, conditionals. get score and store in localStorage


updateQuestion()