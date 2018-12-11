var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();

var routes = require("./routes/routes.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', routes);
app.get('/', (req, res) => res.send('Hello World with Express'));

mongoose.connect('mongodb://localhost');
var db = mongoose.connection;

var server = app.listen(3000,function(){
    console.log("Listening to 3000", server.address().port);
});