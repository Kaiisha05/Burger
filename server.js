// requring the NPM packages

var exphbs = require ("express-handlebars");
var express = require ("express");
var mysql = require ("mysql");

var app = express();

// setting up th port for the application
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

