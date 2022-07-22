const buttons = Array.from(document.getElementsByTagName('button'));
const display = document.getElementById('display');
const results = document.getElementById('results');
const history = document.getElementById('history');
let inputString = "";
let currentNumber = null;
let priorNumber = null;
let runningTotal = null;
let buttonPressed;
let inputHistory = "";
let operator = null;

results.textContent = 0;

buttons.forEach(button => {
    button.addEventListener('click', event => {

        buttonPressed = event.target.value
        Calculate(buttonPressed);
    })
});

// buttons.forEach(button => {
//     button.addEventListener('keypress', event => {

//         console.log(event.key);
//         buttonPressed = event.key
//         Calculate(buttonPressed)
//     })
// });

document.addEventListener('keydown', event => {
    
    event.preventDefault();
    console.log(event.key);
    buttonPressed = event.key;
    Calculate(buttonPressed);
})

function Calculate(event) {

    if (buttonPressed >= 0) {
        inputString += buttonPressed;
        results.textContent = inputString;
    }

    if (buttonPressed.match(/[\/\*\-\+\=Enter]/)) {
        if (runningTotal === null) {
            if (inputString) {
                runningTotal = parseFloat(inputString);
                history.textContent = runningTotal;
                inputString = ""
            }
        }
        else if (currentNumber === null) {
            if (inputString) {
                currentNumber = parseFloat(inputString);
                inputString = "";
                if (operator === "+") {
                    runningTotal += currentNumber;
                }
                else if (operator === "-") {
                    runningTotal -= currentNumber;
                }
                else if (operator === "*") {
                    runningTotal *= currentNumber;
                }
                else if (operator === "/") {
                    runningTotal /= currentNumber;
                }
                history.textContent += ` ${operator} ${currentNumber}`;
                if (operator === "=" || operator === "Enter") {
                    history.textContent = runningTotal;
                }
                currentNumber = null;
            }
        }
        operator = buttonPressed;
        results.textContent = runningTotal;
    }

    if (buttonPressed === "clear" || buttonPressed === "Escape") {
        results.textContent = 0;
        runningTotal = null;
        currentNumber = null;
        operator = null;
        inputString = "";
        history.textContent = "";
    }

    if (buttonPressed === "backspace" || buttonPressed === "Backspace") {
        if (inputString) {
            inputString = inputString.slice(0, -1);
            results.textContent = inputString;
        }
        else if (parseFloat(results.textContent) === runningTotal) {
            results.textContent = results.textContent.slice(0, -1);
            runningTotal = parseFloat(results.textContent);
            results.textContent = runningTotal;
        }
    }

    if (buttonPressed === "x^2") {
        if (inputString) {
            history.textContent += ` sqr(${inputString})`;
            inputString = parseFloat(inputString * inputString);
            results.textContent = inputString;
        }
        else if (parseFloat(results.textContent) === runningTotal) {
            history.textContent += ` sqr(${runningTotal})`;
            runningTotal *= runningTotal;
            results.textContent = runningTotal;
        }
    }

    if (buttonPressed === "invert") {
        if (inputString) {
            inputString *= -1;
            results.textContent = inputString;
        }
        else if (parseFloat(results.textContent) === runningTotal) {
            runningTotal *= -1;
            results.textContent = runningTotal;
        }
    }

    if (buttonPressed === ".") {
        if (!(inputString)) {
            inputString += "0.";
            results.textContent = inputString;
        }
        if (!(inputString.match(/\./))) {
            inputString += ".";
            results.textContent = inputString;
        }
    }
}