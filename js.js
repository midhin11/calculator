function add (a, b) {
    return (a+b);
    // return numbers.reduce((sum, number) => (sum+number), 0)
}


function subtract (a, b) {
    return (a-b);
    // return numbers.reduce((sum, number) => (sum - number), 0)
}

function multiply (a, b) {
    return (a*b);
    // return numbers.reduce((sum, number) => (sum+number), 0)
}

function divide (a,b) {
    return (a/b);
}

function operate (operator, a, b) {
    switch (operator) {
        case "+" : return add(a, b);
        case "-" : return subtract(a, b);
        case "*" : return multiply(a, b);
        case "/" : return divide(a, b);
        default : return "Invalid Operator!";
    }

}

let display = document.querySelector(".display");
let firstNumber;
let secondNumber;
let operator = "";
let calculationDone = false;
let buttons = document.querySelector(".not-equals");
buttons.addEventListener("click", (e) => {
    if(e.target === buttons){
        return;
    }

    if(e.target.textContent === "C"){
        display.textContent = "";
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
        return;
    }

    if(display.textContent.length >= 8){
        return;
    }
    
    if(calculationDone) {
        display.textContent = e.target.textContent;
        calculationDone = false;
    } else {
        display.textContent += e.target.textContent;
    }
})

let operatorSelection = document.querySelector(".operators");
operatorSelection.addEventListener("click", (e) => {
    if(display.textContent === "") {
        return;
    }

    if(firstNumber === undefined){
        firstNumber = Number(display.textContent);
    } else {
        secondNumber = Number(display.textContent);
        firstNumber = operate(operator, firstNumber, secondNumber);
    }
    secondNumber = undefined;
    display.textContent = "";
    operator = e.target.textContent;
})

let equals = document.querySelector(".equals");
equals.addEventListener("click", (e) => {
    if(display.textContent === ""){
        return;
    }
    secondNumber = Number(display.textContent);
    if(firstNumber === undefined) {
        return;
    }
    let answer = operate(operator, firstNumber, secondNumber);
    if (answer > 99999999) {
        answer = 99999999;
    }
    display.textContent = Number(answer.toFixed(7));
    firstNumber = undefined;
    calculationDone = true;
    // secondNumber = undefined;
})
