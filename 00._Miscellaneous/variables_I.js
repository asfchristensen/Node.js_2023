
// person object
const me = {
    name: "Hans"
};

const hobbies = ["Football", "Swimming"];
// adding data to an array
hobbies.push("Cooking");
// assign "hobbies" to the object "me"  
me.hobbies = hobbies;
// changing name property 
me.name = "Lars"

console.log(me)

// single and double quotes
const hobbyOne = "Football skill level: '6'";
const hobbyTwo = 'Swimming skill level: "3"';
const hobbyThree = `Cooking`;
const allHobbies = `Cooking skill level: "'${2 + 2}'"`; 
 
console.log(allHobbies);