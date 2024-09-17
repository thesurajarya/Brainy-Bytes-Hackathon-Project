let num1, num2, correctAnswer, currentOperation;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

    const operations = [
        { symbol: '+', method: (a, b) => a + b },
        { symbol: '-', method: (a, b) => a - b },
        { symbol: '*', method: (a, b) => a * b },
        { symbol: '/', method: (a, b) => parseFloat((a / b).toFixed(2)) }
    ];

    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    currentOperation = randomOperation.symbol;
    correctAnswer = randomOperation.method(num1, num2);

    let questionText;
    if (currentOperation === '/' && num2 !== 1 && num1 % num2 !== 0) {
        questionText = `What is ${num1 * num2} ÷ ${num2}?`;
        correctAnswer = num1; // Ensure the division has an integer result
    } else {
        questionText = `What is ${num1} ${currentOperation} ${num2}?`;
    }

    document.getElementById('question').innerText = questionText;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').innerText = 'Correct! Well done!';
    } else {
        document.getElementById('feedback').innerText = `Incorrect. The correct answer was ${correctAnswer}.`;
    }
}

function nextQuestion() {
    generateQuestion();
}

window.onload = generateQuestion;

