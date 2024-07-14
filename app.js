import mcqsArray from './data.js';

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const options = [
    document.getElementById('option1'),
    document.getElementById('option2'),
    document.getElementById('option3'),
    document.getElementById('option4')
];
const labels = [
    document.getElementById('label1'),
    document.getElementById('label2'),
    document.getElementById('label3'),
    document.getElementById('label4')
];
const submitButton = document.getElementById('btn');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const currentQuestion = mcqsArray[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.options.forEach((option, index) => {
        labels[index].textContent = option;
        options[index].value = option;
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = mcqsArray[currentQuestionIndex].answer;
        if (selectedOption.value === answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < mcqsArray.length) {
            loadQuestion();
        } else {
            displayScore();
        }
    } else {
        alert('Please select an option!');
    }
}

function displayScore() {
    scoreElement.textContent = `Your score is ${score} out of ${mcqsArray.length}`;
    submitButton.disabled = true;
}

submitButton.addEventListener('click', checkAnswer);

loadQuestion();
