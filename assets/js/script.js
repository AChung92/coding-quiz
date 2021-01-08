
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var questionEl = document.getElementById('question');
var answerBtn = document.getElementById('answer');
var mainEl = document.querySelector("#details");
var scoreEl = document.getElementById('score');
var highscoreButton = document.querySelector('#highscore');
var quizTime = 30;


var score = 0;

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "What does CSS stand for?",
        choices: ["Cascading Styles Sheet", "Javascript", "Continuing Styles Sheet"],
        answer: "Cascading Styles Sheet"

      },
      {
        title: "DOM is an abreviation for ____",
        choices: ["Data Object Mode", "Dumb Old Man", "Document Object Model", "Dutle Opo Mipsy"],
        answer: "Document Object Model"
      },
      {
        title: "Is JavaScript  fun to use?",
        choices: ["Yes", "No"],
        answer: "Yes"
      },
      {
        title: "Can I make a website using HTML?",
        choices: ["True", "False"],
        answer: "True"
      }
];

function startQuiz () {
    quiz = setQuestions(questions);
    countdown();
    newQuestion();

}

// function to get random question out of array

function setQuestions (arr) {
    let ranQuest = [];

    for (let i=0; i<arr.length; i++) {
        ranQuest.push(arr[i]);
    }

    return ranQuest;
}

// function to get new question


function newQuestion () {
    if (questions.length === 0) {
        endGame();
    }

    curQuestion = questions.pop();
    // clear html to get new question
    clearDetails();

    // add question to screen

    let question = document.createElement("h1");
    question.setAttribute("question", curQuestion.title);
    question.textContent = curQuestion.title;
    mainEl.appendChild(question)

    // create list as container for answers

    let choiceBox = document.createElement("ul");
    choiceBox.setAttribute("id","choiceBox");
    mainEl.appendChild(choiceBox);

    // add answers to screeen
    for (let i=0; i<curQuestion.choices.length; i++) {
        // creates variable for each answer option
        let listChoice = document.createElement("li");
        // adds data value
        listChoice.setAttribute("choice-value", curQuestion.choices[i]);
        listChoice.setAttribute("id","questionNum-"+i);
        listChoice.textContent = curQuestion.choices[i];
        // options to page
        choiceBox.appendChild(listChoice) 
    }

    // get answer
    choiceBox.addEventListener("click", function () {
        scoreAnswer(curQuestion);
    });
}

// add scoreAnswer

function scoreAnswer(cur) {
  var e = event.target;
  if (e.matches("li")) {
    let selectedItem = e.textContent;
    if (selectedItem === cur.answer) {
      score++;
    } else{
      quizTime - 5;
    }
  }
}


// timer

function countdown() {
    var timeInterval = setInterval(function() {
        if (quizTime >= 1) {
            timerEl.textContent = quizTime;
            quizTime--;
        } else {
        timerEl.textContent = '';   
        clearInterval(timeInterval);
        endGame();

        }
    }, 1000);
}

function clearDetails() {
    mainEl.innerHTML = "";
}

function stopTime() {
  quizTime = 0;
  //clearInterval(timeInterval)
}

function endGame () {
  stopTime();
  clearDetails();
  timerEl.setAttribute("style", "visibility: hidden;");
  scoreEl.setAttribute("style", "visibility: hidden");
  addHighscore();
}
// prompt to add high score

// function to save high score

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function addHighscore () {
  highscoreButton.addEventListener('click', function(event) {
    event.preventDefault();

    var initial = document.querySelector('#initial').value;
    var highscore = document.querySelector('#highscore').value;

    if (initial === '') {
      displayMessage ('error', 'Please submit initials');
  
    } else if (highscore === ''){
      displayMessage('error', 'Highscore cannot be blank');

    } else {
      displayMessage('success', 'Highscore added');

      localStorage.setItem('initial', initial);
      localStorage.setItem('highscore', highscore);
    }
  })
}


startBtn.onclick = startQuiz;
