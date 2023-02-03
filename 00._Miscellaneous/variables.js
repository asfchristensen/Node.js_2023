//Rule 1: Have to assign a value when declaring with const (possible with let)
//No: const me;
//Yes: let me;

//Vi opretter en person som et objekt da det altid er en klasse!
//Når man erklærer et JS-objekt har det memory, metoder osv. tilknyttet til det
const me = {
    /* key: value 
    === key-value pairs
    key = name
    value = "Hans"
    */
    name: "Hans"
};

const hobbies = ["Football", "Swimming"];
//Skubber yderligere information/data ind i et array
hobbies.push("Cooking");
//Tildeler objektet "me" dette array af hobbies 
me.hobbies = hobbies;

//Rule 2: Cannot reassign to constant
//me = {};
me.name = "Fie"

console.log(me)


//todo single quotes and double quotes
//begge kan bruges interchangably - men er det engelsk foretrækkes double pga. apostrofferne

const hobbyOne = "Football skill level: '6'";
const hobbyTwo = 'Swimming skill level: "3"';
const hobbyThree = `Cooking`;
//Back-ticks bruges til string interpolation dvs. template literals 
//Muligt med back-ticks at bruge begge på én gang som vist nedenfor 
const allHobbies = `Cooking skill level: "'${2 + 2}'"`;  
console.log(allHobbies);