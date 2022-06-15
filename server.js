//dependencies
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//initialize express/configure app
const app = express();
const PORT = process.env.PORT;

//connect to DB
const projects = require("./projects.json");
const about = require("./about.json");

//set up model

//mount middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//mount routes
app.get("/", (req, res) => {
    res.send("hello");
});

//index
app.get("/projects", async (req, res) => {
    res.json(projects);
});

app.get("/about", async (req, res) => {
    res.json(about);
})

//delete

//update

//create

//tell express to listen
app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});