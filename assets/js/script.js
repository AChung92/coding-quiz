const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var timerEl = document.getElementById('countdown');
var timeLeft = 30;

var randomizeQuestions, currentQuestionIndex

startButton.addEventListener('click',startGame, countdown);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
});

function startGame() {
    startButton.classList.add('hide');
    randomizeQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    nextQuestion();
}

function nextQuestion() {
    viewQuestion (randomizeQuestions[currentQuestionIndex]);

}

function viewQuestion(question) {
    resetState();
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');

        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(x) {
    var selectedButton = x.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.ddataset.correct)
    })
    if (randomizeQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    }
    else {
        // enter name/high score function
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        score++;
        element.classList.add('tracker')
    } else {
        timeLeft - 5000;
    }
}


function resetState() {
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild;
        (answerButtonsElement.firstChild);
    }
}
var questions = [
    {
        question: "Can I make a website using only HTML?",
        answers: [
            {text: 'true', correct: true},
            {text: 'false', correct: false}
        ]
    },

    {
        question: "What does CSS stand for?",
        answers: [
            {text: 'Cascading Style Sheets', correct: true},
            {text: 'Continuing Style Sheets', correct: false}
        ]

    },

    {
        question: "What does JS stand for?",
        answers: [
            {text: 'Just Saying', correct: false},
            {text: 'Javascript', correct: true}
        ]

    }
];

var score = 0;



function countdown() {
    

    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
         clearInterval(timeInterval);
         // enter end quiz code

        }


    }, 1000);
}