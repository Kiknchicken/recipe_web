//Modules
const express = require('express');
const path = require('path');
const { Client } = require('pg');
const { createWorker } = require('tesseract.js');

import express from 'express';
import path from path;
import { createWorker } from 'tesseract.js';
import { Client } from 'pg';

//Connection to db
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

//Query 
client.query('SELECT * FROM Recipes', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    var result = JSON.stringify(row);
  }
  client.end();
});

const app = express();
const PORT = process.env.PORT || 80;

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

//Tesseract js
(async () => {
    const worker = await createWorker('eng');
    const ret = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    console.log(ret.data.text);
    await worker.terminate();
})();

//Setting up statics
app.use(express.static(path.join(__dirname, 'public')));

//Setting up EJS (View Engine)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Default Page
app.get('/', (req, res) => {
    res.render('index');
});