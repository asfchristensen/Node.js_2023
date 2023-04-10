// hoisting
console.log(random(0,10)); 

// function declaration
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

// anonymous function
const randomAnonymousFunction = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
};

// with {}
const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

// one-line
const randomArrowFunctionCompact = (min,max) => Math.floor(Math.random() * (max - min + 1) - min);


// callback function 
function genericActionPerformer(genericAction, genericName) {

    return genericAction(genericName);
}


//-- TASKS --//

// 1
const subtract = (name) => `${name} is subtracting.`;

// task without touching the two functions above but still using them below
// task you must use both functions
// task make it console.log Tobias is subtracting 

console.log(genericActionPerformer(subtract, 'Tobias'));

// 2
const walk = (name) => `${name} is walking`;

// task make it say Nicolas is walking

console.log(genericActionPerformer(walk, 'Nicolas'));

// 3
// task make Andrea read in on line

console.log(genericActionPerformer((name) => `${name} is reading something`, "Andrea"));

