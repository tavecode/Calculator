//number holders
let op = undefined
let a = 0
let b = 0
let aStore = []
let bStore = []
//let cArray = []
//let dArray = []

// operations

function addition(a, b) { // change all sums to a
   return result = a + b; // sum
};

function subtract(a, b) {
    return result = a - b; // difference
};

function multiply(a, b) {
    return result = a * b; // product
};

function divide(a, b) {
    return result = a / b; // quotient
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
// running calc display
// recent number display

function updateDisplay() {
  if (op == undefined) {
    content = (aStore.join(""));
    display.textContent = content
  }
  else {
    content = (bStore.join(""));
    display.textContent = content
  }
}








//let temp = 0
//content = (cArray.join(""));
//content = (dArray.join(""));

let display = document.querySelector('#display')

//display.textContent = temp



// buttons

const add = document.querySelector('#add');
add.addEventListener('click', () => {
  op = 1
  console.log('+')
  display.textContent = '+'
  //display operator on screen
});

const sub = document.querySelector('#sub');
sub.addEventListener('click', () => {
  op = 2
  console.log('-')
  display.textContent = '-'
});

const mul = document.querySelector('#mul');
mul.addEventListener('click', () => {
  op = 3
  console.log('x')
  display.textContent = 'x'
});

const div = document.querySelector('#div');
div.addEventListener('click', () => {
  op = 4
  console.log('÷')
  display.textContent = '÷'
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
  console.log(result)
  display.textContent = result;
  // return and display a
  //evaluate
});

// numbers
const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
  if (op == undefined) {
    aStore.push(0)
  }
  else {
    bStore.push(0)
  }
  updateDisplay()
  console.log(0)
});

const one = document.querySelector('#one');
one.addEventListener('click', () => {
  if (op == undefined) {
    aStore.push(1)
    // add to string for display
  }
  else {
    bStore.push(1)
  }
  updateDisplay()
  console.log(1)
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
  if (op == undefined) {
    aStore.push(2)
  }
  else {
    bStore.push(2)
  }
  updateDisplay()
  console.log(2)
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
  if (op == undefined) {
    aStore.push(3)
  }
  else {
    bStore.push(3)
  }
  updateDisplay()
  console.log(3)
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
  if (op == undefined) {
    aStore.push(4)
  }
  else {
    bStore.push(4)
  }
  updateDisplay()
  console.log(4)
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
  if (op == undefined) {
    aStore.push(5)
  }
  else {
    bStore.push(5)
  }
  updateDisplay()
  console.log(5)
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
  if (op == undefined) {
    aStore.push(6)
  }
  else {
    bStore.push(6)
  }
  updateDisplay()
  console.log(6)
});;

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
  if (op == undefined) {
    aStore.push(7)
  }
  else {
    bStore.push(7)
  }
  updateDisplay()
  console.log(7)
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
  if (op == undefined) {
    aStore.push(8)
  }
  else {
    bStore.push(8)
  }
  updateDisplay()
  console.log(8)
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
  if (op == undefined) {
    aStore.push(9)
  }
  else {
    bStore.push(9)
  }
  updateDisplay()
  console.log(9)
});

const point = document.querySelector('#point');
point.addEventListener('click', () => {
  if (op == undefined) {
    aStore.push('.')
  }
  else {
    bStore.push('.')
  }
  updateDisplay()
  console.log('.')
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  aStore = []
  bStore = []
  op = undefined
  updateDisplay(0)

});

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
  if (op == undefined) {
    aStore.pop()
  }
  else if (bStore == []) {
    op = undefined
  }
  else {
    bStore.pop()
  }
  updateDisplay(0)

});





}

//console then display



// display pushes right to left
// running calc display
// recent number display
// click number button => show on display and hold in aArray (allow for multiple digits)
// operator button => show on display and add to function/variable  "op"
// 2nd number button => show on display hold in bArray
// equals button => convert arrays to a b, return or evaluate answer, show on display, reset variables/arrays a, b, op, undefined
// hold previous answer
// running/ multiple calc function
// ac/clear button => wipe display/show 0
// c/backspace => remove last character entered
// add decimals and exp

// layout/alignment, style, hover/click effects
// colour scheme

// add kb/numpad support





// find a way to differentiate/select aArray and bArray
// independennt display/array



// display a until op
// display op
// display b

