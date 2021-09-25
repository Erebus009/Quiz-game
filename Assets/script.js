// Global vars.
const next = document.getElementById('nextBtn')
const startBtn = document.getElementById('startBtn');
const questionsbox = document.getElementById('box')
var count = document.querySelector('.timer')
var questions = document.querySelector('.questions')
// object layout for questions. 





startBtn.addEventListener("click", startQuiz);

// When start clicked begins a timer for each questiuon and removes start button from view.
function startQuiz(){
    console.log("Game begins");
    // add class remove to start btn CSS= display:none;
    startBtn.classList.add('remove');
    // remove class remove on div box containing all the buttons and questions to begin question 1. 
    questionsbox.classList.remove('remove');

    // If start button is clicked start timer for each question in array. 
    var time = 1;
    
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