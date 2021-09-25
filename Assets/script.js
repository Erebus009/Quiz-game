// Global vars.
var score = [];
const next = document.getElementById('nextBtn')
const startBtn = document.getElementById('startBtn');
const questionsbox = document.getElementById('box')
var count = document.querySelector('.timer')
var question = document.querySelector('.questions')

//  layout for questions. 
var questions = [

    "What does the milk from cows produce?"


]


var answers = [
    "cheese",
    "things",
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
    
    // populate buttons with answers. 

    var node = document.createTextNode(answers[0]);
    document.querySelector('.answer1').appendChild(node);

    var node2 = document.createTextNode(answers[1]);
    document.querySelector('.answer2').appendChild(node2);
    
    var node3 = document.createTextNode(answers[2]);
    document.querySelector('.answer3').appendChild(node3);
    
    var node4 = document.createTextNode(answers[3]);
    document.querySelector('.answer4').appendChild(node4);
   
    var asker = document.createTextNode(questions[0]);
    document.querySelector('.questions').appendChild(asker);
    

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