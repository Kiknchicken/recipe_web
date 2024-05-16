//Modules
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

//Pathing
let staticPath = path.join(__dirname, 'public');

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
app.use(express.static(staticPath));

//Setting up EJS (View Engine)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Default Page
app.get('/', (req, res) => {
    res.render('index');
});


