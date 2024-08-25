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

async function getTags(data) {
    var tags = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i][9].includes(",")) {
            let dataSplit = data[i][9].split(",");

            for (let tag of dataSplit) {
                tags.push(tag);
            }
        } else {
            tags.push(data[i][9]);
        }
    }

    var tagSet = new Set(tags);

    return tagSet;
}

//Routes
router.get("/", async (req, res) => {
    console.log("discover");

    /* Grab data from db */
    var data = await getRecipe();
    var num_cards = data.length;

    /* Grab nonDup array of tags */
    var tags = await getTags(data);

    res.render("discover", { name: 'Guest', num_cards: num_cards, data: data, tags: tags});

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