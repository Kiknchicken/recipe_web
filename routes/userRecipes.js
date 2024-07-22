//Modules
const express = require('express');
const path = require("path");
const router = express.Router();

//Setting up statics
router.use(express.static(path.join(__dirname, '..', 'public')));

router.get("/", (req, res) => {
    console.log("userRecipes");
    res.render("userRecipes");
    console.log(path.join(__dirname, '..', 'public'));
});

router.post("/", (req, res) => {
    res.render("userRecipes");
});

router.put("/", (req, res) => {
    console.log("userRecipes");
});

router.delete("/", (req, res) => {
    console.log("userRecipes");
});


module.exports = router;