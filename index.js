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
app.post("/infotech/signup", upload.single(), (req, res) => {
    let path = req.file.path;
    path = path.replace("\\", "/");
    let sqlQuery = ` INSERT INTO user_data (first_name,last_name,gender,city,state,country,marital_status,email,user_name,password,profile_pic) VALUES('${req.body.firstName}','${req.body.lastName}','${req.body.gender}','${req.body.city}','${req.body.state}','${req.body.country}','${req.body.maritalStatus}','${req.body.email}','${req.body.userName}','${req.body.password}','${path}')`;
    connection.query(sqlQuery, (error, results, fields) => {
        console.log(error);
        res.json({ status: `created new account successfully` });
    });
});
app.post("/infotech/login", upload.none(), (req, res) => {
    let sqlQuery = `select * from user_data where user_name ='${req.body.userName}'`;

    connection.query(sqlQuery, (error, results, fields) => {
        console.log(error);

        if (results && results.length !== 0) {
            if (results[0].password === req.body.password) {
                res.json({
                    firstName: results[0].first_name,
                    lastName: results[0].last_name,
                    gender: results[0].gender,
                    city: results[0].city,
                    state: results[0].state,
                    country: results[0].country,
                    maritalStatus: results[0].marital_status,
                    email: results[0].email,
                    userName: results[0].user_name,
                    profilePic: results[0].profile_pic,
                    isLoggedIn: true,
                });
            } else {
                res.json({ status: `Password Invalid`, isLoggedIn: false });
            }
        } else {
            res.json({ status: `Invalid Username`, isLoggedIn: false });
        }
    });
});