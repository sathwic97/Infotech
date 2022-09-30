const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(multer());
app.use(express.static());

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    },
});
const upload = multer({ storage: storage });

app.listen(9797, (err) => {
    if (!err) {
        console.log(`listening to port 9797`);
    } else {
        console.log(`unable to listen to port`);
    }
});
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "infotech",
});
connection.connect((err) => {
    if (!err) {
        console.log(`connected to database`);
    } else {
        console.log(`unable to connect to database`);
    }
});