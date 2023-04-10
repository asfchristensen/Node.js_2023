const spaceships = [
    { name: "Chinese Weather Balloon", isPriceless: false, cost: 1_000_000 },
    { name: undefined, type: "UFO", isPriceless: true, cost: Number.MAX_SAFE_INTEGER },
    { name: "Apollo 13", versionNumber: 13, isPriceless: false, cost: 2_000_000 },
];

// 1) task loop and console log each element 

/*const printSpaceships = spaceships.forEach(spaceship => console.log(spaceship));
console.log(printSpaceships);

const printSpaceshipsIndex = spaceships.forEach((spaceship, index) => console.log(index));
console.log(printSpaceshipsIndex);*/

// 2) task for all spaceships make the owner China 

/*
const spaceshipsWithOwners = spaceships.map( spaceship => {
    spaceship.owner = "China";
    return spaceship;
});
console.log(spaceshipsWithOwners);
*/

const spaceshipsWithOwnersNoCodeSmell = spaceships.map( spaceship => {
    spaceship.owner = "China";
    return { ...spaceship, owner: "China"};
});
console.log(spaceshipsWithOwnersNoCodeSmell);

// 3) task add a cost of isPriceless: true to all spaceshipsWithOwners

/*const spaceshipsWithPriceless = spaceshipsWithOwners.map( spaceship => {
    spaceship.isPriceless = true;
    return spaceship;
})
console.log(spaceshipsWithPriceless);*/

// 4) task give me the priceless and not priceless spaceships in two lists 

const pricelessSpaceships = spaceships.filter(spaceship => spaceship.isPriceless === true);
const notPricelessSpaceships = spaceships.filter(spaceship => spaceship.isPriceless === false);

console.log(pricelessSpaceships);
console.log(notPricelessSpaceships);

// 5) task find a spaceship that costs less than or equal to 2 million 
// | yuan/dollars/whatever spacebucks

const affordableSpaceship = spaceships.find(spaceship => spaceship.cost <= 2_000_000);
console.log(affordableSpaceship);
