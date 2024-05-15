//Connects to server
const express = require('express');

const app = express();
const PORT = 3000;

//Pathing
const path = require('path');
let htmlPath = path.join(__dirname, 'public/html');
let cssPath = path.join(__dirname, 'public/css');

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
app.use(express.static(cssPath));

//Setting up EJS (View Engine)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Default Page
app.get('/', (req, res) => {
    res.render('index');
});

//Linked pages on navbar
app.get('/chinese.html', (req, res) => {
    res.sendFile(htmlPath + '/chinese.html');
});

//Create end point with html page
