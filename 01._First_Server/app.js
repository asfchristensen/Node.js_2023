
const express = require("express");

const app = express();

// parsing the body as JSON - not a route 
app.use(express.json());

// HTTP-method
app.get("/", (req, res) => {
    res.send({ message: "Out first route" });
});

let bicycleSpins = 0;
app.get("/spinthebicycle", (req,res) => {
    bicycleSpins += 1;
    res.send({ message: `People have spun the bicycle wheel ${bicycleSpins} times`});
});

// task create a new route that kicks the dinosaur and then the dinosaur says ow ow ow 
let kick = 0;
app.get("/kickdinosaur", (req,res) => {
    kick += 1;
    res.send({ message: `You've kicked the dinosaur ${kick} times and it goes "Ow ow ow"`});
})

// send HTML-page back to the client
app.get("/about", (req,res) => {
    res.send(`
        <h1>About</h1>
        <h3>This is my about page.</h3>
    `);
});

// send data with query-string e.g. /bat?adjective=spooky
app.get("/bat", (req,res) => {
    console.log(req.query);

    res.send({ message: `The bat is ${req.query.adjective}.` });
});

// send data with pathvariable e.g. /bottle/large
app.get("/bottle/:bottleSize", (req,res) => {
    console.log(req.params);
    res.send({ bottleSize: req.params.bottleSize });
});


/* Time */

// different ways to get time
// | sending time directly is valid because time is valid data i JavaScript
app.get("/time/time", (req, res) => {
    res.send({ 
        timeUTC: new Date(),
        timeLocal: Date(),
        unixTimestamp: Date.now()
    });
});

// assignment get the current date and month in English

/* console.log(new Date().getDay() –> gives a number but you want to have the name of the day) */
// | we want the names and create an array 
// | it is outside the function/route because or else you will create the array every time you access the endpoint
// | when you start the server you only create it once (makes it slighty slower) by putting it outside
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

app.get("/time/day", (req, res) => {
    // american week starts on a sunday
    // could also write: new Date().toLocaleDateString("da-dk", {weekday: "long"}); <– but not the point!

    res.send({ data: days[new Date().getDay()] });
});

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

app.get("/time/month", (req, res) => {
    res.send({ data: months[new Date().getMonth()] });
});


app.post("/package", (req,res) => {
    res.send({ message: req.body });
});


app.listen(8080);
