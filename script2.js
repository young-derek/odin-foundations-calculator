const buttons = Array.from(document.getElementsByTagName('button'));
const display = document.getElementById('display');
const results = document.getElementById('results');
const history = document.getElementById('history');
let inputString = "0";
let currentNumber = 0;
let runningTotal = 0;
let buttonPressed;
let priorButtonPressed;
let operator;

buttons.forEach(button => {
    button.addEventListener('click', event => {

        buttonPressed = event.target.value;
        console.log(`inputString @ start: ${inputString}`)
        console.log(`runningTotal @ start: ${runningTotal}`)

        // Add number input to input string
        if (buttonPressed >= 0 && buttonPressed <= 9) {
            if (inputString != 0)
            {
                inputString += buttonPressed;
            }
            else {
                inputString = buttonPressed;
            }
        }

        // Take action if input is an operator
        if (/[\/\*\-\+]/.test(buttonPressed) && inputString != "") {
            operator = buttonPressed;
            if (operator === "+") {
                runningTotal += parseFloat(inputString);
            }
            else if (operator === "-") {
                runningTotal -= parseFloat(inputString);
            }
            else if (operator === "*") {
                runningTotal *= parseFloat(inputString);
            }
            else if (operator === "/") {
                runningTotal /= parseFloat(inputString);
            }
            inputString = "";
        }


        if (buttonPressed === "=") {
            if (operator === "+") {

            }
            else if (operator === "-") {

            }
            else if (operator === "-") {

            }
            else if (operator === "-") {

            }
        }



        // currentNumber = parseFloat(inputString);
        priorButtonPressed = event.target.value;

        results.textContent = inputString;

        console.log(`inputString @ end: ${inputString}`)
        console.log(`runningTotal @ end: ${runningTotal}`)
    })

    results.textContent = inputString;
});