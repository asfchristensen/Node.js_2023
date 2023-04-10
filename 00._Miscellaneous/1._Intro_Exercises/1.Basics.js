// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------

// exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log(`My first name is ${firstName} and my last name is ${lastName}`);

// uou can also use String concatenation 
console.log("My first name is " + firstName + " and my last name is " + lastName);


// --------------------------------------
// exercise 2 - Numbers and Strings

const year = "2022";
const number = 1;

// add the year plus the number
// the result should be 2023
// you cannot touch line 1 or 2

// parsing the string to a number by using Number(string)
// | if it is not a number then the program should fail and show NaN in the console
const addedYearAndNumber = Number(year) + number;

console.log(addedYearAndNumber);

// you can also solve it in two other ways:

// 1
// parseInt can be referred to globally because it is a class
// | it gives the number but don't have the letters (if those are present) 
// | fx 234dfgjh will print 234 in the console only!
const resultOne = parseInt(year) + number;
console.log(resultOne);

// 2
// the "+" in front of the "year" converts it to a number 
const resultTwo = +year + number;

// --------------------------------------

