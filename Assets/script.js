// Global vars.

const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
const questionsbox = document.getElementById("box");
const container = document.querySelector(".container");
const highscore = document.querySelector('#highscores')
var countEl = document.querySelector(".timer");
var questionEl = document.querySelector(".questions");
const answerBtnEl = document.getElementById("button-grid");
var user = prompt('Set your username.');
// variables for score/timers.
var score = 0;
var time = 20;
var counterRan = 0;
const max_high_score = 8;

let shuffle, currentindex;

const arrayHighScore = JSON.parse(localStorage.getItem('highscores')) || [];
console.log(arrayHighScore);










//  layout for questions.
const questionBank = [
  {
    question: "What is the world's rarest gutiar?",
    a: [
      {
        text: "1954 Original Gibson Les Paul Custom “Black Beauty”",
        correct: true,
      },
      { text: "1949 Bigsby Birdseye Maple Solid Body", correct: false },
      { text: "1958 Gibson Explorer", correct: false },
      { text: "1964 Vox V251 Guitar Organ Prototype", correct: false },
    ],
  },
  {
    question: "What is the world's most toxic frog?",
    a: [
      { text: "Tree frog", correct: false },
      { text: "Okopipi ", correct: false },
      { text: "Dyeing dart frog", correct: false },
      { text: "Golden poison frog", correct: true },
    ],
  },
  {
    question: "What is the world's deepest living fish?",
    a: [
      { text: "The lanternfish ", correct: false },
      { text: "Deep Angler Fish", correct: false },
      { text: "Mariana snailfish", correct: true },
      { text: "Black seadevil", correct: false },
    ],
  },
];

console.log(questionBank);
console.log();

// start button clicked starts quiz
startBtn.addEventListener("click", startQuiz);
// nextBtn.addEventListener('click', nextQuestion);
nextBtn.addEventListener("click", next);
// When start clicked begins a timer for each questiuon and removes start button from view.


function startQuiz() {
  console.log("Game begins");
  

  // add class remove to start btn CSS= display:none;
  startBtn.classList.add("remove");
  questionsbox.classList.remove("box");
  questionsbox.classList.add("box1");
  // remove class remove on div box containing all the buttons and questions to begin question 1.
  questionsbox.classList.remove("remove");
  shuffle = questionBank.sort(() => Math.random() - 0.1);
  currentindex = 0;

  // populate buttons with answers.
  showQuestion(shuffle[currentindex]);
  countEl.textContent = "Time left: " + time;
  timer();
}

// keeps text starting at whichever time is to keep from odd looking pop in of numbers when interval starts.
function timer() {
  var timer = setInterval(() => {
    if (time > 0) {
      time--;
      countEl.textContent = "Time left:" + time;
      if (counterRan === 1) {
        countEl.textContent = "Correct!";
        nextBtn.classList.remove("remove");
        clearInterval(timer);
      }
    } else {
      var button = document.querySelector("[data-correct]");
      button.removeAttribute("data-correct");
      clearInterval(timer);
      countEl.textContent = "Time's up!";
      nextBtn.classList.remove("remove");
    }
  }, 1000);
}

function showQuestion(questionBank) {
  questionEl.innerText = questionBank.question;
  questionBank.a.forEach((a) => {
    const button = document.createElement("button");
    button.innerText = a.text;
    if (a.correct) {
      button.dataset.correct = a.correct;
    }
    button.addEventListener("click", selected);
    answerBtnEl.appendChild(button);
  });
}
function next() {
  if (currentindex >= 2) {
    container.classList.add("remove");
    container.classList.remove("container");
    highscore.classList.remove('remove');

  }

  counterRan = 0;
  time = 20;
  reset();
  timer();
  questionsbox.classList.remove("remove");
  currentindex++;
  showQuestion(shuffle[currentindex]);
  countEl.textContent = "Time left: " + time;
}


// When correct button is slected and when wrong button is slected. 
function selected(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct;

  if (correct) {
    score = score + time + 5;
    counterRan++;
    nextBtn.classList.remove("remove");
    countEl.textContent = "Correct!";
  }
}

function reset() {
  nextBtn.classList.add("remove");
  while (answerBtnEl.firstChild) {
    answerBtnEl.removeChild(answerBtnEl.firstChild);
  }
}





console.log(score);