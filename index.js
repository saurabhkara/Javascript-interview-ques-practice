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

const obj6 = {
  name: "Arrow function",
  checkOne: () => console.log(this),
};
// obj6.checkOne();

const obj7 = {
  name: "Outer Object Scope",
  innerObj: {
    name: "Inner Object scope",
    fullFunction: function () {
      checkOne = () => console.log(this);
      checkOne();
      console.log("Full function scope", this);
    },
  },
};
// obj7.innerObj.fullFunction();

//=================================================
//Prototype Design pattern

//================================================
//Var, let and const

{
  var var1 = "Var one";
  let let1 = "let one";
  const const1 = "const one";
  // console.log(var1, let1, const1);
}
// console.log(var1, let1, const1);

//==================================================
//Rest Parameter and Spread Parameter

const arr2 = [1, 2, 3, 4, 5];
const arr3 = [6, 7, 8, 9, 10];
const arr4 = [...arr2, ...arr3];
const [c1, ...r1] = arr4;
// console.log(arr4);
// console.log(c1, r1);

function restExam(a, ...r1) {
  console.log(a, r1);
}
// restExam(1, 2, ...arr3);

const obj8 = {
  ...arr2,
};
const obj9 = {
  ...obj8,
};
// console.log(obj8);
// console.log(obj9);

//=======================================================
//Ways to create object in Javascript

const obj10 = {
  name: "Saurabh",
};

function CreateObject(name) {
  this.name = name;
}

const obj11 = new CreateObject("Saurabh");
// console.log(obj11);
const obj12 = new Object({ name: "ram" });
// console.log(obj12);

class Object13 {
  constructor(name) {
    this.name = name;
  }
}
const obj13 = new Object13("Saurabh");
// console.log(obj13);

//==========================================================
//Promises

// let promise1 = new Promise((resolve, reject) => {
//   if (false) {
//     resolve("Successfuly resolved");
//   } else {
//     reject("Rejected for some reasone");
//   }
//   console.log("Welcome to Promise code");
// });

// promise1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((msg) => {
//     console.log(msg);
//   });

//==========================================================
//Classes

class Abc {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printDetail() {
    console.log("Name : ", this.name);
    console.log("Age : ", this.age);
  }
}
const saurabh = new Abc("Saurabh", 26);
// saurabh.printDetail();

//===============================================
//Generator Function
function* generate() {
  yield 1;
}
const iter = generate();
// console.log(iter.next());
// console.log(iter.next());

//=================================================
//WeakSet-it contains only object

const ws = new WeakSet([{ a: 1 }, { b: 2 }, { c: 3 }]);
// console.log(ws);

//=================================================
//WeakMap- Only object

const wm = new WeakMap();
// console.log(wm.set(abc, "123"));
// console.log(wm.set(abcd, "123"));

//=======================================================
//Difference between prototypal and classical inheritance

//=======================================================
//Singleton Pattern

const singleTon = (function () {
  let instance = null;
  function createInstance() {
    return {
      name: "Saurabh",
      age: Math.floor(Math.random() * 100),
    };
  }
  return {
    getInstance: function () {
      if (instance) {
        return instance;
      } else {
        return (instance = createInstance());
      }
    },
  };
})();

// console.log(singleTon.getInstance());
// console.log(singleTon.getInstance());
// console.log(singleTon.getInstance());
// console.log(singleTon.getInstance());

//===================================================
// Factory Design Pattern

class FullTime {
  salary = 10000;
}
class PartTime {
  salary = 5000;
}
class Freelancer {
  salary = 5000;
}

class Factory {
  employee = null;
  createEmployee(empType) {
    switch (empType) {
      case "fulltime":
        this.employee = new FullTime();
        break;
      case "parttime":
        this.employee = new PartTime();
        break;
      case "freelancer":
        this.employee = new Freelancer();
        break;
      default:
        break;
    }
    this.employee.type = empType;
    return this.employee;
  }
}

const factory = new Factory("");
// console.log(factory.createEmployee("fulltime"));
// console.log(factory.createEmployee("parttime"));
// console.log(factory.createEmployee("freelancer"));

//============================================================
//Prototype Design Pattern

//Prototype of car
function Car(wheel, engine) {
  this.wheel = wheel;
  this.engine = engine;
  this.start = function () {
    console.log("Your car has been started");
  };
  this.break = function () {
    console.log("Your car has been stopped");
  };
}

// const car = new Car(4, 2);
// car.start();
// car.break();

function CarPrototype(proto) {
  //that will create same type of car
  this.clone = function () {
    this.proto = proto;
    const car = new Car(4, 2);
    car.wheel = proto.wheel;
    car.engine = proto.engine;
    return car;
  };
}

function Run() {
  const proto = new Car(4, 2);
  const prototype = new CarPrototype(proto);
  const car1 = prototype.clone();
  const car2 = prototype.clone();
  car1.start();
}
// Run();
//============================================================
//Observer Design Pattern

class Subscriber {
  name = "";
  id;
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  message(mgs) {
    console.log(`Hey, ${this.name} ${mgs}`);
  }
}

const sub1 = new Subscriber("Ram", 1);
const sub2 = new Subscriber("Shyam", 2);
const sub3 = new Subscriber("Rohit", 3);
// sub1.message("Subscribe Kalro na!");
// sub2.message("Subscribe Kalro na!");
// sub3.message("Subscribe Kalro na!");

class YoutubeChannel {
  list = [];

  subscribe(subscriber) {
    this.list.push(subscriber);
  }
  unsubscribe(id) {
    this.list = this.list.filter((item) => item.id !== id);
  }
  publish(msg) {
    console.log(this.list);
    for (let subs of this.list) {
      subs.message(msg);
    }
  }
}

const yt = new YoutubeChannel();
// yt.publish();
// yt.subscribe(sub1);
// yt.subscribe(sub2);
// yt.subscribe(sub3);
// yt.publish("Subscribe kar na bhai !!");
// yt.unsubscribe(2);
// yt.publish("karooo subscribe");

//========================================================
//Async and await and generator functions

//========================================================
//Program to reverse each word in the given string

let strq = "Ram Ram Ram Shyam";

function reverseString(str, separator) {
  return str.split(separator).reverse().join(separator);
}
// let strReversed = reverseString(strq, "");
// let finalStr = reverseString(strReversed, " ");
// console.log(finalStr);

//==============================================================
//Given two string return true if they are anagram of each other

let anagramStr1 = "Ram";
let anagramStr2 = "maR";

function convert(str) {
  return str.toLowerCase().split("").sort().join("");
}
// const as1 = convert(anagramStr2);
// const as2 = convert(anagramStr2);

// if (v1 === v2) {
//   console.log("Both are anagram");
// } else {
//   console.log("Not anagram");
// }

//==================================================================
//Fibonacci series
let fibSeries = [0, 1];
function fibonacci(term) {
  for (let i = 0; i < term; i++) {
    fibSeries[i + 2] = fibSeries[i] + fibSeries[i + 1];
  }
  console.log(fibSeries);
}

// fibonacci(5);

//=======================================================
//ArmStrong Number

function armStrong(num) {
  let sum = 0;
  let num1 = num;
  while (num1 > 0) {
    let lastDigit = num1 % 10;
    num1 = parseInt(num1 / 10);
    sum = sum + lastDigit ** 3;
  }
  return sum === num;
}
// console.log(armStrong(153));

//=======================================================
//Factorial of number

function factorial(num) {
  let result = 1;
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  console.log(result);
}
// factorial(8);

//=========================================================
//Palindrome

function palimdrome(str1, str2) {
  str2 = str2.split("").reverse().join("");
  return str1 === str2;
}

// console.log(palimdrome("Ram", "maR"));

//========================================================
//Remove duplicated from Array

let arrDup = [1, 2, 2, 3, 3, 4, 5];
function removeDuplicateElem(arr) {
  let set = new Set(arr);
  return [...set];
}

// console.log(removeDuplicateElem(arrDup));

function removeDuplicateUsingObj(arr) {
  let result = arr.reduce((acc, item, index) => {
    acc[item] ? (acc[item] = acc[item] + 1) : (acc[item] = 1);
    return acc;
  }, {});
  console.log(result);
  return Object.keys(result);
}
// console.log(removeDuplicateUsingObj(arrDup));

//=========================================================
// 2:1 => 2 is elememt of arrR2 and 1 is number of times present in arrR1;
let arrR1 = [3, 4, 5, 6, 5, 4, 5];
let arrR2 = [2, 3, 4, 5, 6];

let result = arrR2.map((item, index) => {
  let elemAndCount = arrR1.reduce((acc, it) => {
    if (item === it) {
      acc = acc + 1;
    }
    return acc;
  }, 0);
  return `${item} : ${elemAndCount}`;
});
// console.log(result);

//============================================================
//Convert Nested object into flat object

let nestedObj = {
  name: "Ram",
  address: {
    present: {
      city: "Ara",
      pincode: 802301,
    },
    office: {
      city: "Vadodra",
      pincode: 300018,
    },
  },
};

// let flatObj = {};
function flatteningObj(obj, name, des) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      flatteningObj(obj[key], name + "_" + key, des);
    } else {
      des[name + "_" + key] = obj[key];
    }
  }
  return des;
}

// console.log(flatteningObj(nestedObj, "obj", {}));
// console.log(flatObj);

//===================================================
//Write function for add(a)(b)(c)() -Infinite currying

function add(a) {
  return (b) => {
    return b ? add(a + b) : a;
  };
}
// console.log(add(5)(3)());

//=======================================================
//convert multidimension array into single dimension array

let multiDimArray = [1, [2, 3], [4, 5, 6], [7, [8, 9]]];

function flatArray(arr, desiredArr) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatArray(item, desiredArr);
    } else {
      desiredArr.push(item);
    }
  });
  return desiredArr;
}
// console.log(flatArray(multiDimArray, []));

//=======================================================
//Sort only positive number in array
let arr12 = [-1, 40, 20, -4, 10, 2];

function sortPositiveArray(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      tempArr.push(arr[i]);
    }
  }
  tempArr = tempArr.sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      arr[i] = tempArr[index++];
    }
  }
  return arr;
}
// console.log(sortPositiveArray(arr12));

//==============================================================
//Remove duplicate keys and merge array values of an object in javascript

let originalArr = [
  { id: 1, element: [1, 2] },
  { id: 2, element: [3, 4] },
  { id: 2, element: ["a", "b"] },
  { id: 3, element: ["a", 2, "b"] },
];

function removeAndMerge(arr) {
  let result = arr.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].element = [...acc[item.id].element, ...item.element];
    } else {
      acc[item.id] = item;
    }
    return acc;
  }, {});
  return Object.values(result);
}
// console.log(removeAndMerge(originalArr));

//========================================================================
//Shift zero at last in the array

let arrwithZero = [1, 0, 2, 3, 0, 7, 9, 0, 10];

function shiftZero(arr) {
  arr.map((item, index) => {
    if (item === 0) {
      arr.splice(index, 1);
      arr.push(0);
    }
  });
  return arr;
}
// console.log(shiftZero(arrwithZero));

function shiftZeroUsingForLoop(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  for (let i = count; i < arr.length; i++) {
    arr[count] = 0;
    count++;
  }
  return arrwithZero;
}
// console.log(shiftZeroUsingForLoop(arrwithZero));

//=======================================================================
//Fetch Student object whose average marks is greater than other students

let students = [
  {
    name: "Ram",
    marks: [70, 60, 80, 65, 90],
  },
  {
    name: "Shyam",
    marks: [70, 60, 60, 45, 90],
  },
  {
    name: "Mohan",
    marks: [74, 67, 72, 69, 89],
  },
];

function highestAverage(students) {
  let result = students.reduce(
    (acc, item) => {
      let totalMarks = item.marks.reduce((total, item) => {
        return total + item;
      }, 0);

      let average = totalMarks / item.marks.length;
      if (acc.count < average) {
        acc.count = average;
        acc.row = item;
      }
      return acc;
    },
    {
      row: {},
      count: 0,
    }
  );
  return result;
}
// console.log(highestAverage(students));

//============================================================
//Print 1 to 5 numbers in every one second

function printOne2Five() {
  let count = 1;
  let internval = setInterval(function () {
    console.log(count++);
  }, 1000);
  setTimeout(() => {
    clearInterval(internval);
  }, 5000);
}

// printOne2Five();

//===================================================================
//Program to return odd repeating number in this ['a:3','d:1'] format

let arr15 = ["a", "a", "b", "c", "a", "c", "d", "e", "f"];

function oddRepeatingLetter(arr) {
  let countObj = arr.reduce((acc, item) => {
    if (acc[item]) {
      acc[item] = acc[item] + 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});

  let final = [];
  for (let key in countObj) {
    if (countObj[key] % 2 !== 0) {
      final.push(`${key} :${countObj[key]}`);
    }
  }
  console.log(final);
}
// oddRepeatingLetter(arr15);

//=============================================================
//Same key value put together in Array

let input = [
  {
    type: "abc",
    value: 123,
  },
  {
    type: "xyz",
    value: 456,
  },
  {
    type: "abc",
    value: 789,
  },
];

function sameTypeGrouping(arr) {
  let result = arr.reduce((acc, item) => {
    if (acc[item.type]) {
      acc[item.type].value = [...acc[item.type].value, item.value];
    } else {
      acc[item.type] = { ...item, value: [item.value] };
    }
    return acc;
  }, {});
  return result;
}
// console.log(Object.values(sameTypeGrouping(input)));

//=============================================================================
//Program to remove duplicates elements from an Array without inbuild functions

//============================================================================
//Polyfills for map

Array.prototype.myMap = function (cb) {
  if (!Array.isArray(this)) {
    throw new Error("Instance is not array");
  }
  let returnArr = [];
  for (let i = 0; i < this.length; i++) {
    let item = cb(this[i], i, this);
    returnArr.push(item);
  }
  return returnArr;
};

// const polyfillResult = arr2.myMap((item, index) => {
//   console.log(item, index);
//   return item + index;
// });

// console.log(polyfillResult);

//============================================================
//Polyfills for filter

Array.prototype.myFilter = function (cb) {
  if (!Array.isArray(this)) {
    throw new Error("Instance is not Array");
  }
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    let flag = cb(this[i], i, this);
    if (flag) {
      temp.push(this[i]);
    }
  }
  return temp;
};

// let myFilterResult = arr12.myFilter((item, index) => item > 5);
// console.log(myFilterResult);

//=================================================================
//Polyfills for Reduce method

Array.prototype.myReduce = function (cb, acc) {
  if (!Array.isArray(this)) {
    throw Error("Instance is not Array");
  }
  let result = acc;

  for (let i = 0; i < this.length; i++) {
    let returnValue = cb(result, this[i], i, this);
    result = returnValue ? returnValue : this[i];
  }
  return result;
};

// let myReduceResult = arr12.myReduce((acc, item) => {
//   console.log(acc, item);
//   return acc + item;
// }, 0);
// console.log(myReduceResult);

//================================================================
//Polyfill for Call method

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw Error("Instance is not callable");
  }
  let cntx = context ? context : {};
  cntx.fn = this;
  cntx.fn(...args);
};

// const obj15 = {
//   name: "Saurabh",
// };
// function callTheFunction(address) {
//   console.log(this.name, address);
// }
// callTheFunction.myCall(obj15, "Ara");

//==================================================
//Polyfill for Apply method

Function.prototype.myApply = function (context = {}, args) {
  if (typeof this !== "function") {
    throw Error(this, "is not callable");
  }
  context.fn = this;
  context.fn(...args);
};

const obj20 = {
  name: "Saurabh Kumar",
};
// function myApplyFunction(address) {
//   console.log(this.name, address);
// }
// myApplyFunction.myApply(obj20, ["Bhojpur"]);

//=============================================================
//Polyfills for Bind method

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, "is not callable");
  }
  context.fn = this;
  return function (args) {
    return context.fn(...args);
  };
};

// const obj22 = {
//   name: "Saurabh",
// };
// function myBindFunction(address) {
//   console.log(this.name, address);
// }

// myBindFunction.bind(obj22)("Ara");

//=================================================================
//Polyfill for once method

function Once(cb) {
  let called = true;
  return function () {
    if (called) {
      called = false;
      return cb();
    }
    called = "funcion already called";
    console.log(called);
    return called;
  };
}

function callbackOnce() {
  console.log("Function called");
}
// const returnFun = Once(callbackOnce);
// returnFun();
// returnFun();
// returnFun();

//=======================================================================
