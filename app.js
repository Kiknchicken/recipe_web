//Modules
const express = require('express');
const path = require('path');
const mysql = require('mysql');

//Connection to db
const connection = mysql.createConnection({
    host: 'ce0lkuo944ch99.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    user: 'ui0f2titjq0n1',
    password: 'p360093112ae0a670da87c352f8b4f99de20b446fa56db0c72ca6da4f692e1b98',
    database: 'ddns7o9t60mqoc'
});

//Query
connection.connect();

connection.query('SELECT * FROM Recipes', (err, rows, fields) => {
    if (err) throw err

    console.log('ello');
})

connection.end()

const app = express();
const PORT = 5000;

//Error catching
app.listen(PORT, (error) =>{
    if(!error){
        console.log("Server is successfully running, and App is listening on port " + PORT);
    }
    else{
        console.log("Error occured, server can't start", error);
    }
}
);

//Setting up statics
app.use(express.static(path.join(__dirname, 'public')));

//Setting up EJS (View Engine)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Default Page
app.get('/', (req, res) => {
    res.render('index');
});