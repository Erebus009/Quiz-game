// Global vars.
const startBtn = document.getElementById('startBtn');
const questions = document.getElementById('Q');



startBtn.addEventListener("click", startQuiz);

// When start clicked begins a timer for each questiuon and removes start button from view.
function startQuiz(){
    console.log("Game begins");
    startBtn.setAttribute('class', 'remove');
    
    questions.removeAttribute('class', 'remove');



}