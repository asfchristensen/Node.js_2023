"use strict";

const express = require("express");

const app = express();

//-- REST API CRUD --//


// import list from birds.js
const birds = require('./birds')


//---Make routes---//


// get all birds
app.get("/birds", (req, res) => {
    res.send({ "bird list" : birds.birdList });
});


// get bird by id
app.get("/birds/:id", (req, res) => {
    let birdWithId = birds.findById(req.params.id);
    res.send({ "bird by id" : birdWithId});
});


// get bird by color
app.get("/birds/color/:color", (req, res) => {
    let birdWithColor = birds.findByColor(req.params.color);
    res.send({ "bird by color" : birdWithColor});
});

// get bird by specie
app.get("/birds/species/:species", (req, res) => {
    let birdSpecies = birds.findBySpecies(req.params.species);
    res.send({ "bird by specie" : birdSpecies});
});

// get bird by diet
app.get("/birds/diet/:diet", (req, res) => {
    let birdDiet = birds.findByDiet(req.params.diet);
    res.send({ "bird by diet" : birdDiet});
});


// this server will listen for requests on port 8080
// uses callback function
app.listen(8080), () => {
    console.log("Server is running on port", 8080);
};