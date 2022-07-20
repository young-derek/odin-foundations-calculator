const buttons = Array.from(document.getElementsByTagName('button'));
const display = document.getElementById('display');
let currentNumber = 0;
let priorNumber = 0;
let operator;
let operatorPressed = false;

buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.value >= 0 && event.target.value <= 9)
        {
            // Button is a number
            if (operatorPressed === false)
            {
                display.textContent += event.target.value;
            }
            else if (operatorPressed === true)
            {
                display.textContent = event.target.value;
                operatorPressed = false;
            }
        }

        if (event.target.value === "x^2")
        {

        }

        if (event.target.value === "clear")
        {

        }

        if (event.target.value === "backspace")
        {

        }

        if (event.target.value.match(/[\/*+-]/))
        {
            currentNumber = display.textContent;
            operator = event.target.value;
            operatorPressed = true;
        }

        if (event.target.value === "*")
        {

        }

        if (event.target.value === "-")
        {

        }

        if (event.target.value === "+")
        {

        }

        if (event.target.value === "=")
        {

        }

        if (event.target.value === ".")
        {

        }

        if (event.target.value === "+/-")
        {

        }

    })
});

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