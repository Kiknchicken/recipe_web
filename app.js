//Modules
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { createWorker } from 'tesseract.js';
import pg from 'pg';
import { spawn } from 'child_process';

//Connection to db
const { Pool, Client } = pg;

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  
await client.connect();

//Query
await client.query('SELECT NOW();', (err, res) => {
    if (err) throw err;
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
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

//Pytesseract
function callName(req, res, image) {
    //Create new child process to call python script and pass var values to script
    var python = spawn('python', ['python/script.py'], image);

    //Collect data from script
    python.stdout.on('data', function(data) {
        res.send(data.toString());
    })
}

const image = 'https://tesseract.projectnaptha.com/img/eng_bw.png';

console.log(callName());

//Setting up statics
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

//Setting up EJS (View Engine)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Default Page
app.get('/', (req, res) => {
    res.render('index');
});