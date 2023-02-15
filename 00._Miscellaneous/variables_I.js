
//Person object
const me = {
    name: "Hans"
};

const hobbies = ["Football", "Swimming"];
//Adding data to an array
hobbies.push("Cooking");
//Assign "hobbies" to the object "me"  
me.hobbies = hobbies;
//Changing name property 
me.name = "Lars"

console.log(me)

//Single and double quotes
const hobbyOne = "Football skill level: '6'";
const hobbyTwo = 'Swimming skill level: "3"';
const hobbyThree = `Cooking`;
const allHobbies = `Cooking skill level: "'${2 + 2}'"`; 
 
console.log(allHobbies);