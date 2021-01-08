
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var questionEl = document.getElementById('question');
var answerBtn = document.getElementById('answer');
var mainEl = document.querySelector("#details");
var quizTime = 30;


var score = 0;

var questions = [
    {
        q: "Commonly used data types DO NOT include:",
        c: ["strings", "booleans", "alerts", "numbers"],
        a: "alerts"
      },
      {
        q: "The condition in an if / else statement is enclosed within ____.",
        c: ["quotes", "curly brackets", "parentheses", "square brackets"],
        a: "parentheses"
      },
      {
        q: "What does CSS stand for?",
        c: ["Cascading Styles Sheet", "Javascript", "Continuing Styles Sheet"],
        a: "Cascading Styles Sheet"
      },
      {
        q: "DOM is an abreviation for ____",
        c: ["Data Object Mode", "Dumb Old Man", "Document Object Model", "Dutle Opo Mipsy"],
        a: "Document Object Model"
      },
      {
        q: "Is JavaScript  fun to use?",
        c: ["Yes", "No"],
        a: "Yes"
      },
      {
        q: "Can I make a website using HTML?",
        c: ["True", "False"],
        a: "True"
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

    // crerate list as container for answers

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
//
//function endGame () {
// prompt to add high score
    
//}

startQuiz();