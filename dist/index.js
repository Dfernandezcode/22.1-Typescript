// Example of TS - Number would be shown as:
const result = 10;
const numberDecimal = 2.5;
const negativeNumber = -15;
const myVariable = "hello world"; // strings cannot be numbers and vice versa.
// myVariable = 99 - won't work. myVariable already declared as string.
// Typescrupt will infer variable types (deduces)
// STRINGs will work.
const wholeNumber = 2;
const myText = "This works!";
const myTextOne = "This works one!";
const myTextTwo = "This works two! ".concat(wholeNumber, "!");
// BOOLEANs
const isSunday = false;
const isFriday = true;
// Undefined l variables.
let myValue;
myValue = "I Don't have a value";
// Example of any  => BAD PRACTICE.
const testAny = 123;
testAny = "Now a string!";
testAny = true;
//BEST PRACTICE:
const testCorrect;
// console.log("Value before: " + testCorrect); //undefined
testCorrect = "I have a value now!"; // value defined
console.log("Value after: " + testCorrect); // value can be read as string.
// IF Value is not defined -> assign type and define later.
// Objects
const address = {
  street: "fake street",
  number: 123,
  isOpen: true,
};
// Arrays
const cars = ["Audi", "BMW", "MINI"];
console.log(cars[0]);
console.log(cars[1]);
const grades = [7, 3, 6, 10, 9];
// Another way to define arrays -> albeit less common.
const spanishCities = ["Madrid", "Valencia", "Barcelona"];
// DON'T FORGET THE SYNTAX.
// let {variable name}: {variable type} = {variable value}
// Once global install is done with: npm install -g typescript
// you can use tsc (typescriptcompiler?) to convert traditional JS file to TS.
// EXAMPLE: tsc notes.ts => converts notes.ts to a notes.js file.
// Boolean
