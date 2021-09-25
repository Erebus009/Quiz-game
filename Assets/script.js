// Global vars.
var score = [];
const next = document.getElementById('nextBtn')
const startBtn = document.getElementById('startBtn');
const questionsbox = document.getElementById('box')
var count = document.querySelector('.timer')
var question = document.querySelector('.questions')

// object layout for questions. 
var questions = [
    "cheese",
    "milk",
    "curds",
    "yogurt"
]


startBtn.addEventListener("click", startQuiz);

// When start clicked begins a timer for each questiuon and removes start button from view.
function startQuiz(){
    console.log("Game begins");
    // add class remove to start btn CSS= display:none;
    startBtn.classList.add('remove');
    // remove class remove on div box containing all the buttons and questions to begin question 1. 
    questionsbox.classList.remove('remove');

    // If start button is clicked start timer for each question in array. 
    var time = 45;
    // keeps text starting at whichever time is to keep from odd looking pop in of numbers when interval starts. 
    count.textContent=time;
    var timer = setInterval(() => {
        if ( time > 0) {
            time--,
        count.textContent = time;
        }else{
            count.textContent = "Time's up!";
            clearInterval(timer);
            next.classList.remove('remove')
          }
        }, 1000);

}






console.log(startQuiz);