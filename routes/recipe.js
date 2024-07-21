//Modules
const express = require('express');
const path = require("path");
const router = express.Router();

//Setting up statics
router.use(express.static(path.join(__dirname, '..', 'public')));

router.get("/", (req, res) => {
    console.log("recipes");
    res.render("recipe");
    console.log(path.join(__dirname, '..', 'public'));
});

router.post("/", (req, res) => {
    const formData = JSON.stringify(req.body);
    console.log(formData);
    console.log("POGGO DATA");

    res.render("recipes post");
});

module.exports = router;