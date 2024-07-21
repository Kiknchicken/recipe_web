//Modules
const express = require('express');
const path = require("path");
const router = express.Router();

//Setting up statics
router.use(express.static(path.join(__dirname, '..', 'public')));

router.get("/", (req, res) => {
    console.log("userlanding");
    res.render("userLanding");
    console.log(path.join(__dirname, '..', 'public'));
});

router.post("/", (req, res) => {
    res.render("userLanding");
});

router.put("/", (req, res) => {
    console.log("userlanding");
});

router.delete("/", (req, res) => {
    console.log("userlanding");
});


module.exports = router;