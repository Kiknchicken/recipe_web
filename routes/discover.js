//Modules
const express = require('express');
const path = require("path");
const router = express.Router();
const { Client } = require('pg');

//Setting up statics
router.use(express.static(path.join(__dirname, '..', 'public')));

//Recipes
let fried_rice = [
    "1",
    "Fried Rice",
    "images/fried_rice.jpg",
    "https://www.youtube.com/embed/Dk0axPbD2pc?si=jLvz_0OgrrVDpCxZ",
    "30",
    "2",
    "Delicious and easy recipe for a chill family dinner",
    "2 Eggs, 2 Boneless Chicken Thighs, 1 Cup Chopped Ham, 1/2 Cup Shitake Mushrooms Chopped, 2 Cloves of Garlic Crushed, 1/2 Pound of Frozen Peas, 3 Tbsp Soy Sauce, 3 Tbsp Oyster Sauce, Sesame Seeds, 4 1/2 Cups of Cooked Rice (Prefered Cold), Salt, Vegtable Oil, 1 Tbsp Butter",
    "Pre heat pan to medium heat and add vegtable oil, Beat eggs and while pan is heating and add them when pan reaches temprature, Once eggs are semi cooked, remove them from heat and add the rest of the butter, Remove eggs, add more oil to pan and add protien of choice, Once protien is semi cooked, remove from pan, clean it and add more oil, Throw in Shiitake mushrooms to let them brown a little and then throw in peas and chopped ham, Saute the ingredients until the choppped ham is a little brown, add your left over rice and then the soy and oyster sauces, Turn to high heat and mix ingredients in pan until well mix, Incorporate your protien and eggs to the stir fry, While mixing, add in some vegtable oil, scallions and some sesame seeds, Turn to low heat and add butter to add richness to stir fry"
];

//Functions
function recipe() {
    //Connection to db
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
        rejectUnauthorized: false
        }
    });

    client.connect();

    //Query
    data = [];

    client.query('SELECT * FROM recipes', (err, res) => {
        if (err) throw err;
            for (let row of res.rows) {
                data.push(row);
            }
        client.end();
    });

    console.log(data);
    return data;
}

//Routes
router.get("/", (req, res) => {
    console.log("discover");

    let data = recipe();
    let num_cards = data.length;
    res.render("discover", { name: 'Guest', num_cards: num_cards, data: data});

    console.log(path.join(__dirname, '..', 'public'));
    console.log(data[0]);
    console.log(data[1]);
    console.log(num_cards);
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