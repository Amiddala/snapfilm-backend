const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Snapfilm backend running uwu");
});

module.exports = app;
