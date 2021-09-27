// Global vars.
var score = 0
const nextBtn = document.getElementById('nextBtn')
const startBtn = document.getElementById('startBtn');
const questionsbox = document.getElementById('box')
var countEl = document.querySelector('.timer')
var questionEl = document.querySelector('.questions')
const  answerBtnEl = document.getElementById('button-grid')
var time = 20;
var counterRan= 0;


let shuffle , currentindex
//  layout for questions. 
const questionBank = [ 

    {
        question: "What is the world's rarest gutiar?",
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
nextBtn.addEventListener('click', next)
// When start clicked begins a timer for each questiuon and removes start button from view.
function startQuiz(){
    console.log("Game begins");
    // allows time to be display right away. to stop div expansion being odd. 
    
    
    // add class remove to start btn CSS= display:none;
    startBtn.classList.add('remove');
    // remove class remove on div box containing all the buttons and questions to begin question 1. 
    questionsbox.classList.remove('remove');
    shuffle = questionBank.sort(()=>Math.random() - 0.5)
    currentindex = 0;

    // populate buttons with answers. 
    showQuestion(shuffle[currentindex]);
    countEl.textContent= 'Time left: ' + time;
    timer();
    
   
    
 
    
}





// keeps text starting at whichever time is to keep from odd looking pop in of numbers when interval starts. 
function timer(){

var timer = setInterval(() => {
    
    if ( time > 0) {
        time--;
        countEl.textContent= 'Time left:' + time;
    if(counterRan === 1){
        countEl.textContent = "Correct!"
        clearInterval(timer)

    }

     }else {
         
        clearInterval(timer)
        countEl.textContent = "Time's up!";
        nextBtn.classList.remove('remove')
        
        
      }
    }
, 1000);
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
    showQuestion(shuffle[currentindex]);
    
    
    
}
function selected(e){
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;
    if (correct) {
        counterRan++;
        nextBtn.classList.remove('remove');
        countEl.textContent = "Correct!";
        
        
        
    }
    
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
console.log(counterRan);