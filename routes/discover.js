//Modules
const express = require('express');
const path = require("path");
const router = express.Router();
const { Client } = require('pg');

//Setting up statics
router.use(express.static(path.join(__dirname, '..', 'public')));

//Functions
async function getRecipe() {
    //Connection to db
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
        rejectUnauthorized: false
        }
    });

    client.connect();

    const query = {
        text: "SELECT * FROM recipes",
        rowMode: 'array'
    };

    //Query
    var data = [];

    var result = await client.query(query);

    for (let i = 0; i < result.rows.length; i++) {
        data.push(result.rows[i]);
    }
    
    return data;
}

//Routes
router.get("/", async (req, res) => {
    console.log("discover");

    var data = await getRecipe();
    var num_cards = data.length;
    res.render("discover", { name: 'Guest', num_cards: num_cards, data: data});

    console.log(path.join(__dirname, '..', 'public'));
});

router.post("/", (req, res) => {
    res.render("discover");

    const data = req.body;

    console.log("KACHOW");
});

router.put("/", (req, res) => {
    console.log("discover");
});

router.delete("/", (req, res) => {
    console.log("discover");
});


module.exports = router;