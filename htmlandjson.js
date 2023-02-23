const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.write("<h1>Hello this h1</h1>");
  res.write("<h1>Hello this h2</h1>");
  res.end();
});

app.get("/json", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Abir",
      age: 24,
      gender: "male",
    },
    {
      id: 2,
      name: "Rick",
      age: 28,
      gender: "male",
    },
    {
      id: 3,
      name: "Elina",
      age: 22,
      gender: "female",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
