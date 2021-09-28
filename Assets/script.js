// Global vars.

const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
const questionsbox = document.getElementById("box");
const container = document.querySelector(".container");
const writeScores = document.querySelector("#writeScores");
var countEl = document.querySelector(".timer");
var questionEl = document.querySelector(".questions");
const answerBtnEl = document.getElementById("button-grid");

var topScores = [];

















var score = 0;
var time = 20;
var counterRan = 0;


let shuffle, currentindex;

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
  shuffle = questionBank.sort(() => Math.random() - 0.5);
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
    writeScores.classList.remove("remove");
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

// When correct button is selected and when wrong button is selected.
function selected(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct;

  if (correct) {
    counterRan++;
    score = score + time;
    nextBtn.classList.remove("remove");
    countEl.textContent = "Correct!";
    console.log(score);

  }
}

function reset() {
  nextBtn.classList.add("remove");
  while (answerBtnEl.firstChild) {
    answerBtnEl.removeChild(answerBtnEl.firstChild);
  }
}

document.getElementById('submit').addEventListener("click", function(){
  console.log(document.getElementById("initials").value)
  console.log( document.getElementById("final-score").textContent)
  var currentUser = {};
  currentUser.initials = document.getElementById("initials").value
  currentUser.score = document.getElementById("final-score").textContent
  topScores.push(currentUser) 
  localStorage.setItem("highscores",JSON.stringify(topScores))
})  

console.log(score);