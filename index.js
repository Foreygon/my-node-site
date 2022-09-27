"use strict";

const express = require('express');
const app = express();
const port = 4242;

app.get('/', function (req, res) {
  res.send('Hello there !!! ');
})



//routage
// ==========

// route 1 
// --

// def de la route pour la page d'acceuil
const home_route = "/";

// def du controller de la page d'acceuil
const home_controller = function(req, res) {
  res.sent("hello world")
}

// Ajout de la route dans le registre de l'application
app.get(home_route, home_controller);

// route 2

const page2_route = "/page-2";

const page2_controller = function(req, res) {
  res.send("c'est la page 2")
}
app.get(page2_route, page2_controller);

//route 3 

// const page3_route = "/page-3";

// const page3_controller = function(req, res) {
//   res.send("c'est la page 3")
// }
// app.get(page3_route, page3_controller);

app.get("/page-3", (req, res) => {
  res.send("c'est la page 3")
})

app.listen(port);