const buttons = Array.from(document.getElementsByTagName('button'));
const display = document.getElementById('display');
let currentNumber = 0;
let runningTotal = 0;
let priorNumber = 0;
let operator;
let buttonPressed = "";
let operatorPressed = true;
let numberPressed = false;
let equalsPressed = false;
let runningTotalExists = false;

display.textContent = 0;

buttons.forEach(button => {
    button.addEventListener('click', event => {

        if (event.target.value >= 0 && event.target.value <= 9) {
            if (operatorPressed === false && equalsPressed === false) {
                display.textContent += event.target.value;
            }
            else if (operatorPressed === true) {
                display.textContent = event.target.value;
                operatorPressed = false;
            }
            if (equalsPressed === true) {
                display.textContent = event.target.value;
                runningTotal = 0;
                equalsPressed = false;
            }
            numberPressed = true;
        }

        if (event.target.value === "x^2") {

        }

        if (event.target.value === "clear") {

        }

        if (event.target.value === "backspace") {

        }

        if (event.target.value.match(/[\/*+-]/)) {

            currentNumber = parseInt(display.textContent);

            if (numberPressed === true) {

                if (runningTotalExists === true) {

                    console.log(operator);
                    if (operator === "+")
                        runningTotal = Add(runningTotal, currentNumber);
                    else if (operator === "-")
                        runningTotal = Subtract(runningTotal, currentNumber);
                    else if (operator === "*")
                        runningTotal = Multiply(runningTotal, currentNumber);
                    else if (operator === "/")
                        runningTotal = Divide(runningTotal, currentNumber);

                    display.textContent = runningTotal;
                }

                else if (runningTotalExists === false) {
                    runningTotal = currentNumber;
                    runningTotalExists = true;
                }
            }

            operator = event.target.value;
            operatorPressed = true;
            numberPressed = false;
        }

        if (event.target.value === "=") {

            if (runningTotalExists === true) {
                if (equalsPressed === false)
                    currentNumber = parseInt(display.textContent);

                if (operator === "+")
                    runningTotal = Add(runningTotal, currentNumber);
                else if (operator === "-")
                    runningTotal = Subtract(runningTotal, currentNumber);
                else if (operator === "*")
                    runningTotal = Multiply(runningTotal, currentNumber);
                else if (operator === "/")
                    runningTotal = Divide(runningTotal, currentNumber);

                console.log(runningTotal);

                display.textContent = runningTotal;
                numberPressed = false;
            }
            equalsPressed = true;

        }

        if (event.target.value === ".") {

        }

        if (event.target.value === "+/-") {

        }

    })
});

function Operation(firstNumber, secondNumber, operator) {
    if (operator === "+") {

    }
}

function Add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function Subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function Multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function Divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}