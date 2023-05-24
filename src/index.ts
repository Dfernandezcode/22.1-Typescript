// Example of TS - Number would be shown as:

let result: number = 10;
let numberDecimal: number = 2.5;
let negativeNumber: number = -15;

let myVariable = "hello world"; // strings cannot be numbers and vice versa.
// myVariable = 99 - won't work. myVariable already declared as string.
// Typescrupt will infer variable types (deduces)

// STRINGs will work.
let wholeNumber: number = 2;

const myText: string = "This works!";
const myTextOne: string = "This works one!";
const myTextTwo: string = `This works two! ${wholeNumber}!`;

// BOOLEANs
const isSunday: boolean = false;
const isFriday: boolean = true;

// Undefined variables.
let myValue;
myValue = "I Don't have a value";

// Example of any  => BAD PRACTICE.
let testAny: any = 123;
testAny = "Now a string!"
testAny = true;

//BEST PRACTICE:
let testCorrect: string;
// console.log("Value before: " + testCorrect); //undefined
testCorrect = "I have a value now!" // value defined
console.log("Value after: " + testCorrect ) // value can be read as string.

//IF Value is not defined -> assign type and define later.

// Objects  
const address: object = {
    street: "fake street",
    number: 123,
    isOpen: true
}

// Arrays
const cars: string[] = ["Audi", "BMW", "MINI"];
console.log(cars[0]);
console.log(cars[1]);

const grades: number[] = [7, 3, 6, 10, 9];

//Another way to define arrays -> albeit less common.
const spanishCities: Array<string> = ["Madrid", "Valencia", "Barcelona"]

// DON'T FORGET THE SYNTAX. 

// let {variable name}: {variable type} = {variable value}

// Once global install is done with: npm install -g typescript
// you can use tsc (typescriptcompiler?) to convert traditional JS file to TS.
//EXAMPLE: tsc notes.ts => converts notes.ts to a notes.js file.

// Boolean

