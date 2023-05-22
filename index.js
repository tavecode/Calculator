

// operations

function addition(a, b) {
   return sum = a + b;
};

function subtract(a, b) {
    return difference = a - b;
};

function multiply(a, b) {
    return product = a * b;
};

function divide(a, b) {
    return quotient = a / b;
};

// operate

function operate(op, a, b) {
    if (op == 1) {
        return addition(a, b);
    };
    if (op == 2) {
        return subtract(a, b);
    };
    if (op == 3) {
        return multiply(a, b);
    };
    if (op == 4) {
        return divide(a, b);
    };
}

window.onload = function(){



// display, hold values for calculation

let temp

let display = document.querySelector('#display')

display.textContent = temp



// buttons

const add = document.querySelector('#add');
add.addEventListener('click', () => {
  operate(1, a, b)
});

const sub = document.querySelector('#sub');
sub.addEventListener('click', () => {
  operate(2, a, b)
});

const mul = document.querySelector('#mul');
mul.addEventListener('click', () => {
  operate(3, a, b)
});

const div = document.querySelector('#div');
div.addEventListener('click', () => {
  operate(4, a, b)
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
  //evaluate
});

// numbers

const one = document.querySelector('#one');
one.onclick = () => console.log(1);

const two = document.querySelector('#two');
two.onclick = () => console.log(2);

const three = document.querySelector('#three');
three.onclick = () => console.log(3);

const four = document.querySelector('#four');
four.onclick = () => console.log(4);

const five = document.querySelector('#five');
five.onclick = () => console.log(5);

const six = document.querySelector('#six');
six.onclick = () => console.log(6);

const seven = document.querySelector('#seven');
seven.onclick = () => console.log(7);

const eight = document.querySelector('#eight');
eight.onclick = () => console.log(8);

const nine = document.querySelector('#nine');
nine.onclick = () => console.log(9);




}

// display pushes right to left
// click number button => show on display and hold in a (allow for multiple digits) store in array??
// operator button => show on display and add to function/variable
// 2nd number button => show on display hold in b
// equals button => return or evaluate answer, show on display
// hold previous answer
// ac/clear button => wipe display/show 0
// c/backspace => remove last character entered

// layout/alignment, style, hover/click effects

