const express = require("express");
const path = require("path");
const app = express();

const port = 5000;

const staticPath = path.join(__dirname, "/public");

const templatePath = path.join(__dirname, "/templates");

// To set View Engine //
app.set("view engine", "hbs");
app.set("views", `${templatePath}`);

//app.use(express.static(staticPath));

//template engine route
app.get("/", (req, res) => {
  res.render("index", {
    firstName: "Abir",
    lastName: "Bose",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/", (req, res) => {
  res.send("Hello from Express Server");
});

app.listen(port, () => {
  console.log(`Server Listening at Port ${port}`);
});
