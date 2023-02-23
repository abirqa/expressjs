const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("This is Homepage");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

app.get("/services", (req, res) => {
  res.send("This is Services Page");
});

app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
