import express from "express";
const app = express();

app.use(express.static("public"));

// un-used imports
import path from "path"; 
import getJoke from "./util/jokes.js";

import templateEngine from "./util/templateEngine.js"

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
   tabTitle:  "Upper | Welcome"
});

const jokes = templateEngine.readPage("./public/pages/jokes/jokes.html");
const jokesPage = templateEngine.renderPage(jokes, {
    tabTitle:  "Upper | Jokes",
    cssLink: `<link rel="stylesheet" href="/pages/jokes/jokes.css">`
 });

const IRLQuests = templateEngine.readPage("./public/pages/IRLQuests/IRLQuests.html");
const IRLQuestsPage = templateEngine.renderPage(IRLQuests, {
    tabTitle:  "Upper | IRLQuests"
 });


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) => {
    res.send(IRLQuestsPage);
});


app.get("/jokes", async (req, res) => {
    // another way of SSR where you render a specific page in templateEngine
    const jokesPage = await templateEngine.renderJokePage();
    res.send(jokesPage);
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port " + PORT);
});

