// Global vars.
const startBtn = document.getElementById('startBtn');
const questionsbox = document.getElementById('box')



startBtn.addEventListener("click", startQuiz);

// When start clicked begins a timer for each questiuon and removes start button from view.
function startQuiz(){
    console.log("Game begins");
    startBtn.classList.add('remove');
    questionsbox.classList.remove('remove');
    
}
console.log(startQuiz);