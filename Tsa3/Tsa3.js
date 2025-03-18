const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");
const gradients = [
    "linear-gradient(10deg, #0cd116, #33beff)",
    "linear-gradient(100deg, #0cd116, #33beff)",
    "linear-gradient(190deg, #0cd116, #33beff)",
    "linear-gradient(280deg, #0cd116, #33beff)",
];
var activeButton = null;
var bgIndex = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.textContent;

        if (display.innerText === "Error") {
            fullExpression = "";
            display.innerText = "";
        }

        if (activeButton) {
            activeButton.style.border = "none";
        }

        //highlight after ma-click
        button.style.border = "2px solid grey";
        activeButton = button;

        if (!isNaN(value) || value === ".") {
            let parts = fullExpression.split(/[\+\-\*\/]/);
            let lastPart = parts[parts.length - 1];

            if (value !== "." || lastPart.indexOf(".") === -1) {
                fullExpression += value;
            }
        } else {
            if (value === "X") {
                fullExpression += "*";
            } else if (value === "+" || value === "-" || value === "/") {
                fullExpression += value;
            }
        }

        if (value === "=") {
            try {
                fullExpression = eval(fullExpression).toString();
            } catch {
                fullExpression = "Error";
            }
        }
        else if (value === "C") {
            fullExpression = "";
        }
        else if (value === "<") {
            fullExpression = fullExpression.slice(0, -1);
        }

        display.innerText = fullExpression;


        //code para sa gradient bg
        if (bgIndex >= gradients.length - 1) {
            bgIndex = 0;
        } else {
            bgIndex++;
        }
        container.style.transition = "background 0.5s ease-in-out";
        container.style.background = gradients[bgIndex];
    });
});