//number holders
let op = undefined
let a = 0
let b = 0
let aStore = []
let bStore = []

// operations

function addition(a, b) { // change all sums to a
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
    a = undefined
    b = undefined
}

window.onload = function(){



// display, hold values for calculation

let temp = 0

let display = document.querySelector('#display')

display.textContent = temp



// buttons

const add = document.querySelector('#add');
add.addEventListener('click', () => {
  op = 1
  console.log('+')
  //display operator on screen
});

const sub = document.querySelector('#sub');
sub.addEventListener('click', () => {
  op = 2
  console.log('-')
});

const mul = document.querySelector('#mul');
mul.addEventListener('click', () => {
  op = 3
  console.log('x')
});

const div = document.querySelector('#div');
div.addEventListener('click', () => {
  op = 4
  console.log('÷')
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
  a = Number(aStore.join(""));
  b = Number(bStore.join("")); // join arrays into numbers
  aStore = []
  bStore = []
  
  console.log('=')
  operate(op, a, b)
  op = undefined
  // return and display a
  //evaluate
});

// numbers

const one = document.querySelector('#one');
one.addEventListener('click', () => {
  if (op == undefined) {
    aStore.push(1)
  }
  else {
    bStore.push(1)
  }

  console.log(1)
});

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

//console then display



// display pushes right to left
// click number button => show on display and hold in aArray (allow for multiple digits)
// operator button => show on display and add to function/variable  "op"
// 2nd number button => show on display hold in bArray
// equals button => convert arrays to a b, return or evaluate answer, show on display, reset variables/arrays a, b, op, undefined
// hold previous answer
// ac/clear button => wipe display/show 0
// c/backspace => remove last character entered

// layout/alignment, style, hover/click effects

// add kb/numpad support





// find a way to differentiate/select aArray and bArray
// independennt display/array

