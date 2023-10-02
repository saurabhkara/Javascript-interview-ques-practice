// Polyfill for isNaN

function isNotNumber(input) {
  return typeof input == "number" ? false : true;
}
console.log(isNotNumber(12));
console.log(isNotNumber("ram"));
