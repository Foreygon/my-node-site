"use strict";

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello there !!! ')
})

app.listen(3000)