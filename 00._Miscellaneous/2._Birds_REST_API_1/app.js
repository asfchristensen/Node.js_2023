"use strict";

const express = require("express");

const app = express();

//-- REST API CRUD --//


//import list from birds.js
const birds = require('./birds')


//---Make routes---//


//get all birds
app.get("/birds", (req, res) => {
    res.send({ "bird list" : birds.birdlist });
});


//get bird by id
app.get("/birds/:id", (req, res) => {
    let birdwithid = birds.findbyid(req.params.id);
    res.send({ "bird by id" : birdwithid});
});


//get bird by color
app.get("/birds/color/:color", (req, res) => {
    let birdwithcolor = birds.findbycolor(req.params.color);
    res.send({ "bird by color" : birdwithcolor});
});

//get bird by specie
app.get("/birds/species/:species", (req, res) => {
    let birdspecies = birds.findbyspecies(req.params.species);
    res.send({ "bird by specie" : birdspecies});
});

//get bird by diet
app.get("/birds/diet/:diet", (req, res) => {
    let birddiet = birds.findbydiet(req.params.diet);
    res.send({ "bird by diet" : birddiet});
});


//This server will listen for requests on port 8080
app.listen(8080);