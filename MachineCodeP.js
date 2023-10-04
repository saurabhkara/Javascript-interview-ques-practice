// Polyfill for isNaN

function isNotNumber(input) {
  return typeof input == "number" ? false : true;
}
// console.log(isNotNumber(12));
// console.log(isNotNumber("ram"));

//============================================================================
// Write a function which returns another function and execute it after calling

function example1() {
  return function () {
    console.log("Return function called");
  };
}

// example1()();

//=============================================================================

function sample() {
  console.log("Function sent as argument");
}

function example2(fun) {
  if (typeof fun === "function") {
    fun();
  }
}
// example2(sample);

//===========================================================================
// Create a function having no parameters declared and print all the arguments passed to it

function example3() {
  // console.log(arguments.length)
  for (let key in arguments) {
    console.log(arguments[key]);
  }
}
// example3(1, 2, 3, 5, 8, 9);

//=================================================================
//Write a function which executes only if the number of arguments match the number of parameters the function is expecting

function example4(a, b, c, d) {
  if (example4.length === arguments.length) {
    console.log("argumemts and parameter of this function equal in number");
  } else {
    console.log(
      "argumemts and parameter of this function is not equal in number"
    );
  }
}
// example4(1, 2, 5, 8, 9);

//=========================================================================
//Design a function which can receive a variable number of arguments in parameters and print them

function example5(...params) {
  params.forEach((item) => {
    console.log(item);
  });
}
// example5(5, 5, 8, 9, 7, 2, 1);

//=============================================================================
//IIFE

// ((a) => {
//   console.log("Invoked as soon as it is declared", a);
// })(2);

// (function () {
//   console.log("Invoked as soon as it is declared");
// })();

//===========================================================================
// Show the usage of IIFE to set a value of a variable

let value = (() => parseInt(Math.random() * 10))();
// console.log(value);
