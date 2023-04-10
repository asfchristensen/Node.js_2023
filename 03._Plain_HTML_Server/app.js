const express = require("express");
const app = express();

// serving static files
app.use(express.static("public"))

// importing the tanks array
const tanksUtil = require("./util/tanks.js");

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

app.get("/museumGuards", (req, res) => {
    res.sendFile(__dirname + "/public/museumGuards/museumGuards.html");
});

app.get("/proxy", (req, res) => {
    // task make a request to https://www.google.com
    // task serve the text data
    fetch('https://www.google.com')
    .then(response => response.text())
    .then(result => res.send(result));
});


/* API */

app.get("/api/tanks", (req, res) => {
    res.send({ data: tanksUtil.getTanks() });
});

app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount });
});

app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount });
});

// SERVER SIDE REDIRECTION
app.get("/api/guards", (req, res) => {
    if (req.query.passport === "theskyisblue") {
        return res.redirect("/api/tanks");
    } 
    res.send({ message: "You are not allowed to see the tanks. Give us the secret in the query string with the key bein passport. "});
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});
