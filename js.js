function add(num1, num2){
    // let num1 = parseFloat(number1);
    // let num2 = parseFloat(number2);
    return num1+num2;
}

function subtract(num1, num2){
    // let num1 = parseFloat(number1);
    // let num2 = parseFloat(number2);
    return num1-num2;
}

function multiply(num1, num2){
    // let num1 = parseFloat(number1);
    // let num2 = parseFloat(number2);
    return num1*num2;
}

function divide(num1, num2){
    // let num1 = parseFloat(number1);
    // let num2 = parseFloat(number2);
    return ((num1/num2)*10/10);
}

function operate(number1, number2, operator){
    let ans = 0;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if(operator === "+"){
        ans = add(number1, number2);
    }
    else if(operator === "-"){
        ans = subtract(number1, number2);
    }
    else if(operator === "*"){
        ans = multiply(number1, number2);
    }
    else if(operator === "/"){
        if(number2 == 0){
            ans = "Nope!";
        }
        else{
            number1 *= 10;
            number2 *= 10;
        ans = divide(number1, number2);}
    }

    ans = ans.toString().slice(0,9)
    display.textContent = ans;
    number1 = ans;
    number2 = '';
    operator = '';
    return ans;
}

let number1 = '';
let number2 = '';
let operator = '';
let display = document.querySelector(".display");
let buttons = document.querySelector(".numbers-actions");

buttons.addEventListener("click", function(e){
    if(e.target.classList.contains("clearBtn")){
        number1 = '';
        number2 = '';
        operator = '';
        display.textContent = '';
    }
    if(e.target.classList.contains("sqBtn")){
        if(operator === ''){
            if(number1.length>=9){
                return;
            }
            number1 += e.target.textContent;
            display.textContent = parseFloat(number1);
        }
        else {
            if(number1.length>=9){
                return;
            }
            number2 += e.target.textContent;
            display.textContent = parseFloat(number2);
        }
    }
});

let operatorBtns = document.querySelector(".operators");
operatorBtns.addEventListener("click", function(e){
    if(e.target.classList.contains("opBtn")){
        operator = e.target.textContent;
        display.textContent = '';
    }
});

let equals = document.querySelector(".equals");
equals.addEventListener("click", function(){
    operate(number1, number2, operator);
});