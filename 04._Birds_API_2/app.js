const express = require("express");

const app = express();

//import list from birds.js
const birds = require('./birds')

app.use(express.json());

//-- REST API CRUD --//

//---Make routes---//

//create new bird
app.post("/birds", (req, res) => {
    const { ...bird } = req.body;
    const birdToSave = birds.createBird(bird);
    res.send({ data : birdToSave });
});

//get all birds
app.get("/birds", (req, res) => {
    res.send({ data : birds.birdList });
});

//get bird by id
app.get("/birds/:id", (req, res) => {
    const { id } = req.params;
    const birdWithId = birds.findById(id);
    res.send({ data : birdWithId });
});

//get bird by color
app.get("/birds/color/:color", (req, res) => {
    const { color } = req.params;
    const birdWithColor = birds.findByColor(color);
    res.send({ data : birdWithColor });
});

//get bird by specie
app.get("/birds/species/:species", (req, res) => {
    const { species } = req.params;
    const birdSpecies = birds.findBySpecies(species);
    res.send({ data : birdSpecies });
});

//get bird by diet
app.get("/birds/diet/:diet", (req, res) => {
    const { diet } = req.params;
    const birdDiet = birds.findByDiet(diet);
    res.send({ data : birdDiet });
});

//update bird by id
app.patch("/birds/:id", (req, res) => {
    const { id } = req.params;
    const { ...bird } = req.body;
    const birdToUpdate = birds.updateBird(id, bird);
    res.send({ data: birdToUpdate });
});

//delete bird by id
app.delete("/birds/:id", (req, res) => {
    const { id } = req.params;
    const birdToDelete = birds.deleteBird(id);    
    res.send({ data : birdToDelete}); 
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});



