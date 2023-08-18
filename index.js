// console.log("Hello Saurabh!!");
//===========================================
//data type in javascript
let a = "a";
let b = 2;
let c = false;
let d = null;
let e;
let f = 234567890123456789012345678901234567890n;
let g = Symbol("jjd");
let h = [];
let i = {};
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);
// console.log(typeof h);
// console.log(typeof i);

//=======================================================
//Hoisting
h1 = 25;
// console.log(h1);
var h1;

//=======================================================
//NaN
// console.log(isNaN(5));
// console.log(isNaN("hajhj"));

//========================================================
//Passed by value and passed by reference

let v1 = 10;
let v2 = v1;
v2 = 20;
// console.log(v1, v2);

let obj1 = { name: "Saurabh" };
let obj2 = obj1;
obj2.name = "Kumar";
// console.log(obj1, obj2);

//=========================================================
//Higher order functions

function abc() {
  console.log("abc function called");
}

function higherOrderFunction(abc) {
  console.log("Higher order fuction");
  abc();
}

// higherOrderFunction(abc);

//===========================================================
//this keyword
//this keyword refers to the current context in which a function is executed. It represents the object that is currently executing the code. The value of this can vary depending on how a function is called, and it plays a crucial role in determining the scope and context of the code

// console.log(this); // In a browser environment, this would refer to the global object (window).

const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

// person.greet(); // Output: Hello, my name is John.

function sayHello() {
  console.log(`Hello, ${this.name}!`);
}

const obj3 = { name: "Alice" };
const obj4 = { name: "Bob" };

obj3.sayHello = sayHello;
obj4.sayHello = sayHello;

// obj3.sayHello(); // Output: Hello, Alice!
// obj4.sayHello(); // Output: Hello, Bob!

function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}.`);
  };
}

const person1 = new Person("Alice");
const person2 = new Person("Bob");

// person1.greet(); // Output: Hello, my name is Alice.
// person2.greet(); // Output: Hello, my name is Bob.

//========================================================
//Call, Apply and Bind

function test(num) {
  console.log(num);
  console.log(this.name);
}

const obj5 = { name: "Saurabh" };
// test.call(obj5, 56);
// test.apply(obj5, [58]);
// test.bind(obj5)(68);

//=========================================================
//Currying

function abcd(a, b, c, d) {
  return a + b + c + d;
}

function currying(a) {
  return function (b) {
    return b ? currying(a + b) : a;
  };
}
// console.log(currying(5)(4)(3)());

//============================================================
//Scope and Scope chaining

var gloabl = "global";
function scope() {
  let local = "local";
  let a = 0;
  function scopeChainingExplain() {
    let block = "block";
    let a = 2;
    console.log(gloabl, local, block);
    console.log(a);
  }
  scopeChainingExplain();
}
// scope();

//==============================================================
//Closures

function clousure() {
  let local = "local";
  return function inner() {
    console.log(local);
  };
}
// clousure()();

//==============================================================
//Callbacks

function cb() {
  console.log("Callback");
}

function outerFun(cb) {
  console.log("outer function");
  cb();
}

// outerFun(cb);

//================================================================
//Memoization

function memo() {
  let data = {};
  return function (key, value) {
    if (data[key]) {
      return data[key];
    } else {
      data[key] = value;
      return value;
    }
  };
}

// const mm = memo();
// console.log(mm("name", "Saurabh"));
// console.log(mm("name", "Saurabhkkk"));

//================================================
//Arrow function

const arrowFun = () => {
  console.log(this);
};
// arrowFun();

//=================================================
