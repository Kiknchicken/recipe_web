//Modules
const express = require('express');
const path = require("path");
const router = express.Router();
const { Client } = require('pg');

//Setting up statics
router.use(express.static(path.join(__dirname, '..', 'public')));

//Stuff
const cards_num = 5;
const taco = "TACO TUESDAY";

//Connection to db
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
    if (err) throw err;
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
    client.end();
});

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