//Modules
const express = require('express');
const path = require('path');
const mysql = require('mysql2');

//Connection to db
const connection = mysql.createConnection({
    host: 'db.luddy.indiana.edu',
    user: 'i308s23_calxu',
    password: 'my+sql=i308s23_calxu',
    database: 'i308s23_calxu'
});

//Query
connection.execute(
    'SELECT * FROM Recipes',
    function (err, results, fields) {
        console.log(results);
        console.log(fields);
        console.log(err);
    }
)

const app = express();
const PORT = 3000;

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


