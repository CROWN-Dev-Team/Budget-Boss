//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var env = require('dotenv').load()
var passport = require('passport')
var session = require('express-session')
var exphbs     = require('express-handlebars')
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

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
    res.send('Welcome to Budget Boss');
});

var models = require("./models");

var authRoute = require('./server/routes/auth.js')(app,passport);

require('./config/passport/passport.js')(passport,models.user);

models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine')

    }).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
    });

app.use('/', router);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/blooming-mesa-44461";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});

app.listen(PORT, function() {
    console.log('running at localhost: ' + PORT);
   });

module.exports = app;


