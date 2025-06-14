const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const connectToDb = require('./db/db');
connectToDb();


const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app; 