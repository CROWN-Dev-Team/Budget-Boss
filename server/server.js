//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

app.use('/', router);

var db = process.env.MONGODB_URI || 'mongodb://admin:admin123@ds255308.mlab.com:55308/heroku_1tgc4d2n';
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

mongoose.connect(db, function(eror) {
    if (error) {
        console.log(error);
    } else {
        console.log("mongoose connection successful");
    }
});

app.listen(PORT, function() {
    console.log('running at localhost: ' + PORT);
   });

module.exports = app;
