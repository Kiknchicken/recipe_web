//Modules
const express = require('express');

//Defining routing object
const router = express.Router();

//Setting up statics
app.use(express.static(path.join('public')));

router.get("/", (req, res) => {
    console.log("userlanding");
    res.render("userLanding");
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