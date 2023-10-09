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

//=========================================================================
// Write a function which can return multiple values from a function

function returnObj() {
  let obj = {
    name: "Saurabh",
    address: "Arrah",
  };
  return obj;
}
// console.log(returnObj());

function returnArr() {
  return [1, 2];
}
// console.log(returnArr());

function* returnMultipleValues() {
  yield 5;
  yield 4;
  yield 6;
}
// const gen = returnMultipleValues();
// console.log(gen.next());
// console.log(gen.next());

//=======================================================================
// Write a function which can set default values to the parameters of function when an argument is not passed. Also show how to use exisiting parameters to set the value of another parameter

function example6(a = 3, b = 4, c = a + b) {
  console.log(a, b, c);
}
// example6();

//===========================================================================
//Show the usage of call, apply and bind with practical example

function example7(a) {
  console.log("example 7 function called", a);
}

// example7.call(null, 5);
// example7.apply(null, [8]);
// example7.bind(null)(8);

//===========================================================================
//Show the usage of a function which can be used as a constructor

function example8(name, address) {
  this.mame = name;
  this.address = address;
}
// const ex8 = new example8("Saurabh", "Arrah");
// console.log(ex8);

//=========================================================================
//Show the different ways of creating an object

const objExam1 = {
  feature: "Object creation",
};
const objExam2 = Object.create({ feature: "Object Creation" });
// console.log(objExam2);
function ObjectExam3(key, value) {
  this[key] = value;
}

const objExam3 = new ObjectExam3("feature", "Object Creation");
// console.log(objExam3);

class ObjectExam4 {
  constructor(key, value) {
    this[key] = value;
  }
}
const obj4 = new ObjectExam4("feature", "Object creation using class");
// console.log(obj4);

//=========================================================================
//Display all the keys of an object

let obj5 = {
  name: "Saurabh",
  Salary: "1 lac",
};

function printKey(obj) {
  for (let key in obj) {
    console.log("Key :", key, "Value :", obj[key]);
    // console.log(obj.hasOwnProperty(key));
  }
}
// printKey(obj5);

// for (let key in objExam2) {
//   console.log(key);
//   console.log(objExam2.hasOwnProperty(key));
// }

//=======================================================================
//Write a function which can check if a given object is empty or not

const emptyObj = {};
function isObjectEmpty(obj) {
  let result = false;
  if (obj !== null && typeof obj !== "undefined" && typeof obj === "object") {
    result = Object.keys(objExam2).length === 0;
  }
  return result;
}
// console.log(isObjectEmpty(emptyObj));

//========================================================================
//Create an empty object which has no prototype attached to it

const obj7 = Object.create(null);
// console.log(obj7);

//=============================================================================
//Show the usage of 'Object.entries' to create an object from key value pairs

const entries = [
  ["name", "Saurabh"],
  ["salary", "1 lac "],
];

const objEntries = Object.fromEntries(entries);
// console.log(objEntries);

//============================================================================
//
