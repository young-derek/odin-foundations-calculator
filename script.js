const buttons = Array.from(document.getElementsByTagName('button'));
const display = document.getElementById('display');
let currentNumber = 0;
let runningTotal = 0;
let operator;
let typeLastClicked = "operator";
let buttonValue;
let runningTotalExists = false;

display.textContent = 0;

buttons.forEach(button => {
    button.addEventListener('click', event => {

        buttonValue = event.target.value;

        console.log(buttonValue);

        if (buttonValue >= 0 && buttonValue <= 9) {

            if (typeLastClicked != "operator" && typeLastClicked != "equals") {
                display.textContent += buttonValue;
            }

            else if (typeLastClicked === "operator") {
                display.textContent = buttonValue;
            }

            if (typeLastClicked === "equals") {
                display.textContent = buttonValue;
                operator = "";
                runningTotal = 0;
                runningTotalExists = false;
                currentNumber = parseFloat(display.textContent);
            }

            typeLastClicked = "number";
        }

        if (buttonValue === "x^2") {

            currentNumber = parseFloat(display.textContent);
            runningTotal = currentNumber * currentNumber;
            display.textContent = Math.round(runningTotal * 100000000) / 100000000;
        }

        if (buttonValue === "clear") {
            currentNumber = 0;
            runningTotal = 0;
            operator = "";
            typeLastClicked = "operator";
            runningTotalExists = false;
            buttonValue = "";
            display.textContent = 0;
        }

        if (buttonValue === "backspace") {
            if (typeLastClicked === "number") {
                display.textContent = display.textContent.slice(
                    0, display.textContent.length - 1);
            }
        }

        if (buttonValue.match(/[\/*+-]/)) {

            currentNumber = parseFloat(display.textContent);

            if (typeLastClicked === "number") {

                if (runningTotalExists) {

                    if (operator === "+")
                        runningTotal = Add(runningTotal, currentNumber);
                    else if (operator === "-")
                        runningTotal = Subtract(runningTotal, currentNumber);
                    else if (operator === "*")
                        runningTotal = Multiply(runningTotal, currentNumber);
                    else if (operator === "/")
                        runningTotal = Divide(runningTotal, currentNumber);

                    display.textContent = Math.round(runningTotal * 100000000) / 100000000;
                }

                else if (runningTotalExists === false) {
                    runningTotal = currentNumber;
                    runningTotalExists = true;
                }
            }
            operator = buttonValue;
            typeLastClicked = "operator";
        }

        if (buttonValue === "=") {

            if (runningTotalExists === true) {
                if (typeLastClicked != "equals")
                    currentNumber = parseFloat(display.textContent);

                if (operator === "+")
                    runningTotal = Add(runningTotal, currentNumber);
                else if (operator === "-")
                    runningTotal = Subtract(runningTotal, currentNumber);
                else if (operator === "*")
                    runningTotal = Multiply(runningTotal, currentNumber);
                else if (operator === "/")
                    runningTotal = Divide(runningTotal, currentNumber);

                display.textContent = Math.round(runningTotal * 100000000) / 100000000;
            }
            typeLastClicked = "equals";
        }

        if (buttonValue === ".") {

            if (typeLastClicked === "number"
                && !display.textContent.match(/\./)) {
                display.textContent += buttonValue;
            }
            else {

            }
        }

        if (buttonValue === "invert") {
            if (typeLastClicked === "number") {
                display.textContent *= -1;
            }
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