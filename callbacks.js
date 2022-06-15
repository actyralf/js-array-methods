const fruits = ["Apple", "Banana", "Kiwi"];

// Higher Order Function: A function that receives another function as parameter

// Can be called with an anonymous function:

fruits.forEach((fruit) => {
  console.log(fruit);
});

// ... or with a function reference (named function)

function logFruit(fruit) {
  console.log(fruit);
}

// logFruit is called a "callback" function

fruits.forEach(logFruit);

logFruit("Cherry");

function doThisTenTimes(callback) {
  for (i = 0; i < 10; i++) {
    callback();
  }
}

doThisTenTimes(() => {
  console.log("Ralf");
});

let counter = 0;
// This is a pure function:
const newCounter = addTwoNumbers(counter, 10);
// This changes application state:
counter = newCounter;
doThisTenTimes(() => {
  counter++;
});
console.log(counter);

// Pure functions and "side effects"

// - A pure function returns always the same value when called with the same parameters
// - A pure function does not change the state of the application

// This is a pure function:
function addTwoNumbers(a, b) {
  return a + b;
}

// This is NOT a pure function (it changes a variable outside of the function scope)
function increaseCounter() {
  counter++;
}

// This is NOT a pure function (it returns different values depending on when it is called)
function getDateTime() {
  return Date.now();
}
