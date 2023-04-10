const express = require("express");

const app = express();

app.use(express.static("public"));

/* pages */

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

/* time */

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* api */

app.get("/api/time", (req, res) => {
    res.send({ data: weekdays[new Date().getDay()] });
});

/* port */

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});