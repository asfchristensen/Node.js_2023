import express from "express";
const app = express();

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false, //it will resave the session eventhough we don't make changes to it 
    saveUninitialized: true,
    cookie: { secure: false } //if it is true then it expects us using TLS, we have to change it to false
  }));

// set the session
// the session code snippet above gives us acces to req in the following code:

//authentication
app.get("/gotham/:name", (req, res) => {
    req.session.name = req.params.name;
    res.send({ message: `Hi ${req.session.name}`});
});

// athourization 
app.get("/gotham/:name", (req, res) => {
    if (!req.session.name) {
        return res.send({ message: "Error. You are not welcome here."});
    }
    res.send({ message: `I remember you ${req.session.name}`});
});

// authentication 
// logout - session ended 
app.get("/leavegotham", (req, res) => {
    req.session.destroy(() => {
        res.send();
    })
})

app.get("/piblings", (req, res) => {
    res.send({ data: ["John", "Mark"] });
});


const PORT = process.env.PORT || 8080;
app.listen(8080, () => console.log("Server is running on port", PORT))