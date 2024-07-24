//Modules
const express = require('express');
const path = require("path");
const router = express.Router();
const { Client } = require('pg');

//Setting up statics
router.use(express.static(path.join(__dirname, '..', 'public')));

//Functions
async function getRecipe(id) {
    //Connection to db
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
        rejectUnauthorized: false
        }
    });

    client.connect();

    const query = {
        text: "SELECT * FROM recipes WHERE id=$1::text",
        values: [id],
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

router.get("/", (req, res) => {
    console.log("recipes");
    res.render("recipe");
    console.log(path.join(__dirname, '..', 'public'));
});

router.post("/", async (req, res) => {
    var id = req.body.id.toString();
    console.log(id);

    //Grab recipe from db
    var data = await getRecipe(id);

    res.render("recipe", { id: id, data: data });
});

module.exports = router;