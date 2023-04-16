const express = require("express");
const app = express();

const rootHandler = (req, res) => {
  res.send("Hello World");
};

app.get("/", rootHandler);

module.exports = app;
