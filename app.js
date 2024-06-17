//Modules
import express from 'express';
import path from 'path';
import { createWorker } from 'tesseract.js';
import pg from 'pg';

//Connection to db
const { Pool, Client } = pg;

const client = new Cool({
    user: 'ui0f2titjq0n1',
    password: 'p360093112ae0a670da87c352f8b4f99de20b446fa56db0c72ca6da4f692e1b98',
    host: 'ce0lkuo944ch99.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    port: 5432,
    database: 'ddns7o9t60mqoc',
})

await client.connect();

//Query
console.log(await client.query('SELECT NOW()'));

await client.end();

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