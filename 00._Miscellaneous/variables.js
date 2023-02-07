//Rule 1: Have to assign a value when declaring with const (possible with let)

//Create a person object because it is always a class
const me = {
    /* key: value 
    === key-value pairs
    key = name
    value = "Hans"
    */
    name: "Hans"
};

const hobbies = ["Football", "Swimming"];
//Adding data to an array
hobbies.push("Cooking");
//Assign "hobbies" to the object "me"  
me.hobbies = hobbies;

//Rule 2: Cannot reassign to constant

//No: me = {};
//But:
me.name = "Fie"

console.log(me)


//todo single quotes and double quotes
//--Both can be used interchangably - but in english the "double" is preferred

const hobbyOne = "Football skill level: '6'";
const hobbyTwo = 'Swimming skill level: "3"';
const hobbyThree = `Cooking`;
const allHobbies = `Cooking skill level: "'${2 + 2}'"`; 
 
console.log(allHobbies);