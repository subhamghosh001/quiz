const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        questiona:"who is the most inteligent marvel character?",
        options:["captain america","hulk","iron man","thanos"],
        answer: "captain america"
    },
];

const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    const correctAnswer = quizData[currentQuestion].answer;
    if (answer === correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const totalQuestions = quizData.length;
    const percentage = (score / totalQuestions) * 100;
    let resultText = `You scored ${score} out of ${totalQuestions}. `;
    if (percentage >= 60) {
        resultText += "Congratulations! You are a winner!";
        
    } else {
        resultText += "Sorry, you didn't pass this time.";
       
    }
    resultElement.textContent = resultText;
}

displayQuestion();
submitButton.addEventListener('click', showResult);