const express = require("express");
const app = express();

// serving static files
app.use(express.static("public"))

// importing the tanks array
const tanksUtil = require("./util/tanks.js");
console.log(tanksUtil.getTanks());

let visitorCount = 0;

/* Pages */

// root route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
});

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html");
});

// assignment serve a page called tank museum guards 
app.get("/museumGuards", (req, res) => {
    res.sendFile(__dirname + "/public/museumGuards/museumGuards.html");
});


/* API */

app.get("/api/tanks", (req, res) => {
    res.send({ data: tanks });
});

app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount });
});

app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount });
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});
