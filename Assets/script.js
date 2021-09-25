// Global vars.
const startBtn = document.getElementById('startBtn');
const questionsbox = document.getElementById('box')
var count = document.querySelector('.Quiz-box')



startBtn.addEventListener("click", startQuiz);

// When start clicked begins a timer for each questiuon and removes start button from view.
function startQuiz(){
    console.log("Game begins");
    // add class remove to start btn CSS= display:none;
    startBtn.classList.add('remove');
    // remove class remove on div box containing all the buttons and questions to begin question 1. 
    questionsbox.classList.remove('remove');

    // If button is clicked start timer for each question in array. 
    var time = 60;
    
    var timer = setInterval(() => {
        if ( time > 0) {
            time--,
        count.textContent = time;
        }
        
    }, 1000);

    
}






console.log(startQuiz);