const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Express APP");
});

app.get("/about", (req, res) => {
  res.send("Hello This About Page");
});

app.listen(8000, () => {
  console.log("Listening to Port 8000");
});
