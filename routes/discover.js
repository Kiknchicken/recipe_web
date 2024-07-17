//Modules
const express = require('express');
const path = require("path");
const router = express.Router();

//Setting up statics
router.use(express.static(path.join(__dirname, '..', 'public')));

//Stuff
const cards_num = 5;
const taco = "TACO TUESDAY";

//Routes
router.get("/", (req, res) => {
    console.log("discover");
    res.render("discover", { name: 'Guest', cards_num: cards_num, taco: taco});
    console.log(path.join(__dirname, '..', 'public'));
});

router.post("/", (req, res) => {
    res.render("discover");
});

router.put("/", (req, res) => {
    console.log("discover");
});

router.delete("/", (req, res) => {
    console.log("discover");
});


module.exports = router;