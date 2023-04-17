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

const calculationHandler = (req, res) => {
  const { num1, num2 } = req.query;

  let result = 0;

  const operator = req.params.operator;

  if (operator === "add") {
    result = Number(num1) + Number(num2);
  } else if (operator === "subtract") {
    result = Number(num1) - Number(num2);
  } else if (operator === "multiply") {
    result = Number(num1) * Number(num2);
  } else if (operator === "divide") {
    result = Number(num1) / Number(num2);
  }

  res.send(`The result of ${num1} ${operator} ${num2} is ${result}`);
};

// ROUTES
app.get("/", rootHandler);
app.get("/rocks/:index", rocksHandler);
app.get("/rocks/:index/:name", multipleParametersHandler);
app.get("/calculator/:operator", calculationHandler);

// EXPORT
module.exports = app;
