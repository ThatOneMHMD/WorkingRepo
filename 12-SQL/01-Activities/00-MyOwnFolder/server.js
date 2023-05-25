// npm install --save express mysql2
const express = require('express');
const mysql = require('mysql2');
const PORT = 3001;

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// CONNECT TO THE LOCAL DATABASE
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'TYPE-PASSWORD-HERE',
        database: 'librarydb'
    },
    console.log('Connected to database!')
);


app.get('/', (req, res) => {
    db.query(`SELECT * FROM libraries;`, (err, results) => {
        res.json(results);
    })
});

app.post('/', (req, res) => {
    db.query(`INSERT INTO libraries (name, address) VALUES ("Vancouver", "99 Robinson St);`, (err, results) => {
        res.json({message: 'success', results});
    })
});


app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT: ${PORT}`)
});

