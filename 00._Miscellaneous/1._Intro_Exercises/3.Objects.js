// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = { message: "Hello, earthling! I bring peace." };
const myObjMessage = myObj.message;

// Log the message 

console.log(myObjMessage);


// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const me = {
    name: "Fie",
    age: 30
}

console.log(me);


// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true;

console.log(stackOverflow);


// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;
//Adding new property
thisSong.about = "Just a tribute.";

console.log(thisSong);

// --------------------------------------
