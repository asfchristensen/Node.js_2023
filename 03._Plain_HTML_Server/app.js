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
    res.send({ data: tanksUtil.getTanks() });
});

app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount });
});

app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount });
});

// for SERVER SIDE REDIRECTION
// how can you send data through a get request? (include in Mandatory 1) With query string or path variable
/*app.get("/api/guards", (req, res) => {
    // now the guard should take you to the tanks if you write localhost:8080/api/guards?passport=theskyisblue
    if (req.query.passport === "theskyisblue") {
        res.redirect("/api/tanks");
    } else {
        // the response to the browser so it doesn't hang and can't get any response is you type ../guards?passprt=theskyisnotblue
        // | if this res.send isn't in an else the server will try to send 2 responses and it can't, so it will otherwise give an error
        res.send({ message: "You are not allowed to see the tanks. Give us the secret in the query string with the key bein passport. "});
    }
});*/

app.get("/api/guards", (req, res) => {
    if (req.query.passport === "theskyisblue") {
        // by adding a return here you don't have to but the res.send in an else like the above code^^
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
