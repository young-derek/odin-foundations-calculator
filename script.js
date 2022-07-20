const buttons = Array.from(document.getElementsByTagName('button'));
const display = document.getElementById('display');
const results = document.getElementById('results');
const history = document.getElementById('history');
let currentNumber = 0;
let runningTotal = 0;
let operator;
let typeLastClicked = "operator";
let buttonValue;
let runningTotalExists = false;

results.textContent = 0;

buttons.forEach(button => {
    button.addEventListener('click', event => {

        buttonValue = event.target.value;

        if (buttonValue >= 0 && buttonValue <= 9) {

            if (typeLastClicked != "operator" && typeLastClicked != "equals") {
                results.textContent += buttonValue;
            }

            else if (typeLastClicked === "operator") {
                results.textContent = buttonValue;
            }

            if (typeLastClicked === "equals") {
                results.textContent = buttonValue;
                operator = "";
                runningTotal = 0;
                runningTotalExists = false;
                currentNumber = parseFloat(results.textContent);
                history.textContent = buttonValue;
            }

            typeLastClicked = "number";
        }

        if (buttonValue === "x^2") {

            currentNumber = parseFloat(results.textContent);
            runningTotal = currentNumber * currentNumber;
            results.textContent = Math.round(runningTotal * 100000000) / 100000000;
        }

        if (buttonValue === "clear") {
            currentNumber = 0;
            runningTotal = 0;
            history.textContent = "";
            operator = "";
            typeLastClicked = "operator";
            runningTotalExists = false;
            buttonValue = "";
            results.textContent = 0;
        }

        if (buttonValue === "backspace") {
            if (typeLastClicked === "number") {
                results.textContent = results.textContent.slice(0, results.textContent.length - 1);
            }
        }

        if (buttonValue.match(/[\/\*\+\-]/)) {

            currentNumber = parseFloat(results.textContent);

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

                    results.textContent = Math.round(runningTotal * 100000000) / 100000000;
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
                    currentNumber = parseFloat(results.textContent);

                if (operator === "+")
                    runningTotal = Add(runningTotal, currentNumber);
                else if (operator === "-")
                    runningTotal = Subtract(runningTotal, currentNumber);
                else if (operator === "*")
                    runningTotal = Multiply(runningTotal, currentNumber);
                else if (operator === "/")
                    runningTotal = Divide(runningTotal, currentNumber);

                results.textContent = Math.round(runningTotal * 100000000) / 100000000;
            }
            else {
                runningTotal = parseInt(results.textContent);
                runningTotalExists = true;
            }
            typeLastClicked = "equals";
            history.textContent = runningTotal;
        }

        if (buttonValue === ".") {

            if (typeLastClicked === "operator") {
                results.textContent = '';
                if (!results.textContent.match(/\./)) {
                    results.textContent += buttonValue;
                    typeLastClicked = "number";
            }

            }
            else {

            }
        }

        if (buttonValue === "invert") {
            if (typeLastClicked === "number") {
                results.textContent *= -1;
            }
        }

        if (typeLastClicked === "number"
            && buttonValue != "backspace"
            && typeLastClicked != "equals")
            history.textContent += buttonValue;
        else if (buttonValue != "backspace" && typeLastClicked != "equals")
            history.textContent += " " + buttonValue + " ";
        else if (buttonValue === "backspace" && typeLastClicked === "number") {
            console.log(history.textContent.slice(history.textContent.length - 1) >= 0);
            if (history.textContent.slice(history.textContent.length - 1) != " ")
                history.textContent = history.textContent.slice(0, -1);
        }

        else if (typeLastClicked === "equals")
            history.textContent = runningTotal;
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