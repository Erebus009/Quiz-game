// Global vars.
var score = 0
const nextBtn = document.getElementById('nextBtn')
const startBtn = document.getElementById('startBtn');
const questionsbox = document.getElementById('box')
var countEl = document.querySelector('.timer')
var questionEl = document.querySelector('.questions')
const  answerBtnEl = document.getElementById('button-grid')


let shuffle , currentindex
//  layout for questions. 
const questionBank = [ 

    {
        question: "What is the world's rarest gutiar",
            a : [
                {text: '1954 Original Gibson Les Paul Custom “Black Beauty”',  correct:true},
                {text: '1949 Bigsby Birdseye Maple Solid Body', correct: false},
                {text: '1958 Gibson Explorer', correct: false},
                {text: '1964 Vox V251 Guitar Organ Prototype', correct: false}
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
        }, 900);
   

}

function showQuestion(questionBank){
    questionEl.innerText = questionBank.question;
    questionBank.a.forEach(a => {
        const button = document.createElement('button')
        button.innerText= a.text
        if (a.correct) {
            button.dataset.correct = a.correct
        }
        button.addEventListener('click', selected)
        answerBtnEl.appendChild(button)
    });
    
}
function next(){
    reset();
    showQuestion(shuffle[currentindex])
}
function selected(){
    nextBtn.classList.remove('remove')
    clearInterval(timer);
    score++;
}

function reset() {
    nextBtn.classList.add('remove')
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild
        (answerBtnEl.firstChild)
    }
}


console.log(startQuiz);
console.log(selected);