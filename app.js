const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Code for parsing data from Postman to App
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on Home');
});

//Connect to the DB
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
);

//How do we start listening to the Server
app.listen(3000);