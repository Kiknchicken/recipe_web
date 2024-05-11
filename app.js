//Connects to server
const express = require('express');

const app = express();
const PORT = 3000;

const path = require('path');
let htmlPath = path.join(__dirname, 'html');

app.listen(PORT, (error) =>{
    if(!error){
        console.log("Server is successfully running, and App is listening on port " + PORT);
    }
    else{
        console.log("Error occured, server can't start", error);
    }
}
);

//Default Page
app.get('/', (req, res) => {
    res.sendFile(htmlPath + '/index.html');
});

//Linked pages on navbar
app.get('/chinese.html', (req, res) => {
    res.sendFile(htmlPath + '/chinese.html');
});

//Create end point with html page
