//Modules
const express = require('express');
const path = require("path");
const router = express.Router();
const { Client } = require('pg');

//Setting up statics
router.use(express.static(path.join(__dirname, '..', 'public')));

//Routes
router.get("/", async (req, res) => {
    res.render("addRecipe");
});

router.post("/", (req, res) => {

});

router.put("/", (req, res) => {
    
});

router.delete("/", (req, res) => {
    
});

module.exports = router;