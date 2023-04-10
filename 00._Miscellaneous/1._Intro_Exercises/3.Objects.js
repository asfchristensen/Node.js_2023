// --------------------------------------
// Objects
// --------------------------------------
// exercise 1 - Retrieve value from object by key

const myObj = { message: "Hello, earthling! I bring peace." };
const myObjMessage = myObj.message;

// log the message 

console.log(myObjMessage);


// --------------------------------------
// exercise 2 - Defining an object. 

// create an object that has your name and age. 

const me = {
    name: "Fie",
    age: 30
}

console.log(me);


// --------------------------------------
// exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true;

console.log(stackOverflow);


// --------------------------------------
// exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;
// adding new property
thisSong.about = "Just a tribute.";

console.log(thisSong);

// --------------------------------------
