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
//Create an object with getter and setter for property

//=========================================================================
//Modify the given object so that it can be used inside a for...of loop
const obj = {
  name: "Suravi",
  designation: "Software developer",
  salary: "1 crore",
  address: "Kolkata",
  gender: "Female",
  [Symbol.iterator]() {
    let keys = Object.keys(this);

    let index = 0;

    return {
      next: () => {
        return index > keys.length
          ? {
              value: undefined,
              done: true,
            }
          : {
              value: this[keys[index++]],
              done: false,
            };
      },
    };
  },
};

// const iterator = obj[Symbol.iterator]();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

//===========================================================
//Write a polyfill for Object.create
const obj12 = {};

Object.prototype.myCreate = function (params) {
  let obj = {};
  if (params === null) {
    obj.__proto__ = null;
  } else {
    for (let key in params) {
      obj.__proto__[key] = params[key];
    }
  }
  return obj;
};
// const obj15 = Object.myCreate(null);
// const obj16 = Object.myCreate({ name: "Saurabh" });
// console.log(obj15);
// console.log(obj16);

//===================================================================
//Write a code show Optional chaining for objects and functions

const obj14 = {
  name: "Saurabh",
  address: {
    city: "Ara",
    pincode: 802301,
  },
  printDetails(arg) {
    console.log(
      "Name : ",
      this.name,
      "Address :",
      this.address.city,
      this.address.pincode,
      arg
    );
  },
};

// console.log(obj14?.trial?.());
// console.log(obj14?.printDetails?.("Bhojpur"));

//Show the usage of static variable & function in a class and accessing it from the code

class Details {
  constructor() {}
  static print() {
    console.log("Printing name");
  }
}
// Details.print();

//Write a class which uses private variable and function

class PrivateProp {
  #name = "";
  constructor(name, salary) {
    this.#name = name;
    this.salary = salary;
    // this.#print();
  }

  #print() {
    console.log("Detail share nahi karna hai");
  }
}
// const ih = new PrivateProp("Saurabh", "000");
// console.log(ih.name);
// console.log(ih.salary);

//====================================================================
//Show how inheritance works in Class and the use of super keyword with working example

class Inheritance {
  constructor(name) {
    this.name = name;
  }
  printParent() {
    console.log("Printing Parents class method");
  }
}

class ChildClass extends Inheritance {
  constructor(salary, name) {
    super(name);
    this.Salary = salary;
  }
  print() {
    console.log(this.name);
  }
}

// const child = new ChildClass("10 lac", "Saurabh");
// child.print();
// child.printParent();
//=================================================================
//
// console.log(Array.isArray([]));
// console.log(typeof []);
// console.log(typeof {});

//==================================================================
//Array
//Write a program to append and prepend, single or multiple values in to an array
let arrMeth = [2, 3];

arrMeth.push(4, 5);
arrMeth.unshift(0, 1);
// console.log(arrMeth);

//====================================================================
//Show insertion and removal of elements can happen in the array for given index

// arrMeth.splice(2, 1, 8, 9);
// console.log(arrMeth);

//Show how an array in JavaScript can act like a stack and queue

//==========================================================================
//Promises

function promise1() {
  return new Promise((resolve, reject) => {
    resolve(15);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    resolve(12);
  });
}

function promise3() {
  return new Promise((resolve, reject) => {
    resolve(8);
    // reject(5);
  });
}

function resolveAll() {
  const p1 = promise1();
  const p2 = promise2();
  const p3 = promise3();
  try {
    // const result = await Promise.allSettled([p1, p2, p3]);
    const result = Promise.all([p1, p2, p3]).then((data) => {
      console.log(data);
    });
    console.log(result);
  } catch (error) {
    console.log("Error", error);
  }
}
// resolveAll();
