
// importing the tanks array from the tanks.json file
const { tanks } = require("./tanks.json");

function getTanks() {
    return tanks;
}

function addTank(tank) {
    tanks.push(tank);
    return tanks;
}

// exporting functions 
module.exports = {
    getTanks,
    addTank
};

