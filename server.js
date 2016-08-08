//initializing express app
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');

//requiring request and geocoder
var request = require('request');


// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// static file support with public folder
app.use(express.static('public'));

// listen on port 3000
app.listen(3000, function() {
    console.log('App running on port 3000!');
});