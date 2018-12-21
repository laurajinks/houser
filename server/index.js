require('dotenv').config();
const {json} = require('body-parser');
const express = require('express');
const massive = require('massive');
const cors = require('cors');
const { getHouses, addHouse } = require('./controllers/controller')
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

app.get('/api/houses', getHouses)
app.post('/api/houses', addHouse)

app.listen(port, console.log(`Listening on ${port}...`));