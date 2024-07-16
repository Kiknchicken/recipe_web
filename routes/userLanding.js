//Modules
const express = require('express');
const path = require("path");
const router = express.Router();

console.log(__dirname);

//Setting up statics
router.use(express.static(path.join(__dirname, '..', 'public')));

router.get("/", (req, res) => {
    console.log("userlanding");
    res.render("userLanding");
    console.log(__dirname);
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