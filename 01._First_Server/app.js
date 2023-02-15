
const express = require("express");

const app = express();

app.use(express.json());

//HTTP-method
app.get("/", (req, res) => {
    res.send({ message: "Out first route" });
});

let bicycleSpins = 0;
app.get("/spinthebicycle", (req,res) => {
    bicycleSpins += 1;
    res.send({ message: `People have spun the bicycle wheel ${bicycleSpins} times`});
});

//Task: create a new route that kicks the dinosaur and then the dinosaur says ow ow ow 
let kick = 0;
app.get("/kickdinosaur", (req,res) => {
    kick += 1;
    res.send({ message: `You've kicked the dinosaur ${kick} times and it goes "Ow ow ow"`});
})

//Send HTML-page back to the client
app.get("/about", (req,res) => {
    res.send(`
        <h1>About</h1>
        <h3>This is my about page.</h3>
    `);
});

//Send data with query-string e.g. /bat?adjective=spooky
app.get("/bat", (req,res) => {
    console.log(req.query);

    res.send({ message: `The bat is ${req.query.adjective}.` });
});

//Send data with pathvariable e.g. /bottle/large
app.get("/bottle/:bottleSize", (req,res) => {
    console.log(req.params);
    res.send({ bottleSize: req.params.bottleSize });
});


app.post("/package", (req,res) => {
    res.send({ message: req.body });
});


app.listen(8080);
