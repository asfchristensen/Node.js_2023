//When you write "express" it is looking for the modules "express"
//Man ved det er en pakke, fordi express ikke har en extension som fx .js
const express = require("express");

//Hvis man vil bruge express skal den instansieres
const app = express();

//Printer library'et som indeholder en masse functions 
/*console.log(express);*/

//Kan importere og instansiere ovenstående på en linje
/*const app = require("express")();*/

//Siger til express and den skal parse body til json i en POST
app.use(express.json());

//Definer GET-mapping'en 
//Har en server med dette endpoint nu
//Efter "," skriv en call-back function som tager imod et request og response argument

// route (entire thing)
// HTTP method
// | endpoint    callback function
app.get("/", (req, res) => {
    //det er et JS-objekt, men express laver konverteringen til JSON for os
    res.send({ message: "Out first route" });
});

let bicycleSpins = 0;
app.get("/spinthebicycle", (req,res) => {
    bicycleSpins += 1;
    res.send({ message: `People have spun the bicycle wheel ${bicycleSpins} times`});
}); //har ";" fordi det er et function-call af GET

//task create a new route that kicks the dinosaur and then the dinosaur says ow ow ow 

let kick = 0;
app.get("/kickdinosaur", (req,res) => {
    kick += 1;
    res.send({ message: `You've kicked the dinosaur ${kick} times and it goes "Ow ow ow"`});
})

//TODO Why JSON?
//--En specifik måde at definere data - det er strings så alle servere kan fortolke den data der bliver sendt (uanset sprog og platform)


//Muligt også at sende HTML tilbage dvs. en faktisk side
app.get("/about", (req,res) => {
    res.send(`
        <h1>About</h1>
        <h3>This is my about page.</h3>
    `);
});


//Måden hvorpå man kan sende data i en request med en query-string
// /bat?adjective=spooky
// | bliver altid passed som JSON, for så har man "instant access"
// | adjective = key og spooky=value
app.get("/bat", (req,res) => {
    console.log(req.query);

    res.send({ message: `The bat is ${req.query.adjective}.` });
});

//Make a pathvariable like /:variable (just like in postman) - spring is /{variable}
// /bottle/large
app.get("/bottle/:bottleSize", (req,res) => {
    console.log(req.params);
    //.bottleSize corresponds to the pathvariable –> det er dét der er mappingen! 
    res.send({ bottleSize: req.params.bottleSize });
});



app.post("/package", (req,res) => {
    //Test det i postman
    res.send({ message: req.body });
});


//Skal helst være i bunden 
app.listen(8080);
