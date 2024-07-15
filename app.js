//Modules
const express = require("express");
const path = require("path");

//Init
const app = express();
const PORT = 3000;

/* process.env.PORT || 80; */

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

//Routes
const userRoute = require('routes/userLanding');

app.use("/home", userRoute);

//Setting up statics
app.use(express.static('public'));

//Setting up EJS (View Engine)
app.set('view engine', 'ejs');
app.set('views', path.join('views'));

//Default page
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    const { parcel } = req.body;
});

