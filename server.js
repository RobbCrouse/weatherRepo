//express
var express = require('express');
var app = express();

//path
var path = require('path');

//body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Angular
app.use(express.static( __dirname + '/WeatherAPIAngular/dist' ));

//Routes
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./WeatherAPIAngular/dist/index.html"))
});

///Port
app.listen(8000, function() {
    console.log('Weather listening on port 8000');
})