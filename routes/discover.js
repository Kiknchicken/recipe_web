//Modules
const express = require('express');
const path = require("path");
const router = express.Router();

//Setting up statics
router.use(express.static(path.join(__dirname, '..', 'public')));

//Seting EJS
router.set('view engine', 'ejs');
router.set('views', path.join('views'));

router.get("/", (req, res) => {
    console.log("discover");
    res.render("discover", { name: 'Guest' });
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