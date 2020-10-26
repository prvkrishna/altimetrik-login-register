var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
// const multer = require("multer");
var User = require('./db/user');

const API_PORT = 8080;
const app = express();
app.use(cors());
const router = express.Router();
const dbRoute = 'mongodb://localhost:27017/altimetrik';
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false
}));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(logger('dev'));
app.use(express.static('../build'));
app.use(function (req, res, next) {
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
        if (req.method === 'OPTIONS') return res.send(200);
    }
    next();
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'), null, function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).end();
        }
    });
});
var authAPI = require('./authService')(router, User);
app.use('/authAPI', authAPI);
app.listen(API_PORT, function (err) {
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('Connected to port', API_PORT);
    }
});