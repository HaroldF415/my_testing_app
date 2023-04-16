require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const rootHandler = (req, res) => {
  res.send("Hello World");
};

app.get("/", rootHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
