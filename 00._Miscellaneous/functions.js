//Possible because of hoisting (can call a function above the function)
//Declared first and the exists in the memory 
console.log(random(0,10)); 

//Execute the function which is already in the memory 
//Function declaration
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

//Anonymous function (it doesn't have a name)
//Variable assignment - then it becomes a single statement and has to have a ";" after the last "}"
const randomAnonymousFunction = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
};

//Between the {} is called a "function body" 
//If you explicitly want to return with "return" you have to have {}
//Used when you have multiple statements 
const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

//This compact version implicitly returns because of the arrow "=>"
//Cannot be used if you have multiple statements 
const randomArrowFunctionCompact = (min,max) => Math.floor(Math.random() * (max - min + 1) - min);

//Funktioner kan være argumenter/parameter i en anden funktion fordi de er "first class citizens"
//Hvorfor det er godt, at have en kompakt funktion
//genericAction is a callback function (en funktion der er passed som et argument som man "call back")
//Vi giver denne generiske funktion adfærd som kalder den adfærd vi har brug for
function genericActionPerformer(genericAction, genericName) {
    //do stuff...

    return genericAction(genericName);
}

//1
const subtract = (name) => `${name} is subtracting.`;

//task without touching the two functions above but still using them below
//task you must use both functions
//task make it console.log Tobias is subtracting 

console.log(genericActionPerformer(subtract, 'Tobias'));

//2
const walk = (name) => `${name} is walking`;

//task make it say Nicolas is walking

console.log(genericActionPerformer(walk, 'Nicolas'));

//3
//task make Andrea read in on line

console.log(genericActionPerformer((name) => `${name} is reading something`, "Andrea"));

