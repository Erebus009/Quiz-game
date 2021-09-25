// Global vars.
var score = [];
const nextBtn = document.getElementById('nextBtn')
const startBtn = document.getElementById('startBtn');
const questionsbox = document.getElementById('box')
var countEl = document.querySelector('.timer')
var questionEl = document.querySelector('.questions')
const  answerBtnEl = document.getElementById('correct')


let shuffle , currentindex
//  layout for questions. 
const questionBank = [ 

    {
        question: "tallest building in the world? ",
            answer : [
                {text: 'Home',  correct: true },
                {text: 'Cheese', correct: false},
                {text: 'rock', correct: false},
                {text: 'mold', correct: false}
            ]
        }
    ]
console.log(questionBank);
console.log();

// start button clicked starts quiz
startBtn.addEventListener("click", startQuiz);
// nextBtn.addEventListener('click', nextQuestion);

// When start clicked begins a timer for each questiuon and removes start button from view.
function startQuiz(){
    console.log("Game begins");
    // add class remove to start btn CSS= display:none;
    startBtn.classList.add('remove');
    // remove class remove on div box containing all the buttons and questions to begin question 1. 
    questionsbox.classList.remove('remove');
    shuffle = questionBank.sort(()=>Math.random() - 0.5)
    currentindex = 0;

    // populate buttons with answers. 
    showQuestion(shuffle[currentindex]);
    
    
    
    // goes to next question. 
    



    // If start button is clicked start timer for each question in array. 
    var time = 40;
    // keeps text starting at whichever time is to keep from odd looking pop in of numbers when interval starts. 
    countEl.textContent=time;
    var timer = setInterval(() => {
        if ( time > 0) {
            time--,
        countEl.textContent = time;
        }else{
            countEl.textContent = "Time's up!";
            clearInterval(timer);
            nextBtn.classList.remove('remove')
          }
        }, 1000);
         

}

function showQuestion(questionBank){
    questionEl.innerText = questionBank.question;
    questionBank.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText= answer.text
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        
    });
    
}
function next(){
    reset();
    showQuestion(shuffle[currentindex])
}

function selected(e){
    const selectedbtn 

}
function reset() {
    nextBtn.classList.add('remove')
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild
        (answerBtnEl.firstChild)
    }
}


console.log(startQuiz);