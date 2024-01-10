const express = require('express');
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require('path');
const hbs = require('hbs');
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config({
    path: './.env'
});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL connection success");
    }
});

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set('view engine', "hbs");
const partialsPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialsPath);


app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.use('/reservations', require('./routes/res'));
app.use('/search', require('./routes/search'));


app.listen(5005, () => {
    console.log("Server started on port 5005");
});
