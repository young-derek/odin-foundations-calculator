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

        buttonPressed = event.target.value;

        if (buttonPressed >= 0) {
            inputString += buttonPressed;
            results.textContent = inputString;
        }

        if (buttonPressed.match(/[\/\*\-\+\=]/)) {
            if (runningTotal === null)
            {
                if (inputString)
                {
                    runningTotal = parseFloat(inputString);
                    inputString = ""
                }
            }
            else if (currentNumber === null)
            {
                if (inputString)
                {
                    currentNumber = parseFloat(inputString);
                    inputString = "";
                    if (operator === "+")
                    {
                        runningTotal += currentNumber;
                    }
                    else if (operator === "-")
                    {
                        runningTotal -= currentNumber;
                    }
                    else if (operator === "*")
                    {
                        runningTotal *= currentNumber;
                    }
                    else if (operator === "/")
                    {
                        runningTotal /= currentNumber;
                    }
                    currentNumber = null;
                }
            }
            operator = buttonPressed;
            results.textContent = runningTotal;
        }

        if (buttonPressed === "clear") {
            results.textContent = 0;
            runningTotal = null;
            currentNumber = null;
            operator = null;
            inputString = "";
        }

        if (buttonPressed === "backspace")
        {
            if (inputString)
            {
                inputString = inputString.slice(0, -1);
                results.textContent = inputString;
            }
        }

        if (buttonPressed === "x^2")
        {
            if (inputString)
            {
                inputString = parseFloat(inputString * inputString);
                results.textContent = inputString;
            }
            else if (parseFloat(results.textContent) === runningTotal)
            {
                runningTotal *= runningTotal;
                results.textContent = runningTotal;
            }
        }

        if (buttonPressed === "invert")
        {
            if (inputString)
            {
                inputString *= -1;
                results.textContent = inputString;
            }
            else if (parseFloat(results.textContent) === runningTotal)
            {
                runningTotal *= -1;
                results.textContent = runningTotal;
            }
        }

        if (buttonPressed === ".")
        {
            if (!(inputString.match(/\./)))
            {
                inputString += ".";
                results.textContent = inputString;
            }
        }
    })
});