require('dotenv').config();
const {json} = require('body-parser');
const express = require('express');
const massive = require('massive');
const cors = require('cors');
//require controllers
const port = 4000;
const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('Database Connected');
})
.catch(err => console.log(err));

app.listen(port, console.log(`Listening on ${port}...`));