// DEPENDENCIES
const express = require("express");
const rocks = require("./models/rocks");

// CONFIGURATION
const app = express();

// ROUTE HANDLERS
const rootHandler = (req, res) => {
  res.send("Hello World");
};

const rocksHandler = (req, res) => {
  res.send(rocks[req.params.index]);
};

const multipleParametersHandler = (req, res) => {
  res.send(req.params);
};

// ROUTES
app.get("/", rootHandler);
app.get("/rocks/:index", rocksHandler);
app.get("/rocks/:index/:name", multipleParametersHandler);

// EXPORT
module.exports = app;
