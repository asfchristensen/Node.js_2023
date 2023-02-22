// --------------------------------------
// exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// first way with parseFloat
const resultFloat = parseFloat(numberOne) + parseFloat(numberTwo) 
// second way with Number-method
const resultNumber = Number(numberOne) + Number(numberTwo) 

console.log(resultFloat);
console.log(resultNumber);


// --------------------------------------
// exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherResult = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
const resultTwoDecimals = anotherResult.toFixed(2);

console.log(resultTwoDecimals);


// --------------------------------------
// exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// show in the console the avg. with 5 decimals

const resultAvg = (one + two + three)/3;
const resultFiveDecimals = resultAvg.toFixed(5);

console.log(resultFiveDecimals);


// --------------------------------------
// exercise 6 - Get the character by index

const letters = "abc";
// get me the character "c"

// find the index and get the C
const cChar = letters.indexOf('c');
// show letter on index position 2
const showCwithCharAt = letters.charAt(2);
// show letter on index position 2 in another way
const showCAnotherWay = letters[2];

console.log(showCwithCharAt);
console.log(showCAnotherWay);


// --------------------------------------
// exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const characterJ = fact.replace('j', 'J');

console.log(characterJ);

// --------------------------------------


