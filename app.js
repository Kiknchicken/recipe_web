const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, (error) =>{
    if(!error){
        console.log("Server is successfully running, and App is listening on port " + PORT)
    }
    else{
        console.log("Error occured, server can't start", error);
    }
}
);