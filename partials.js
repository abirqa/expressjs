const express = require("express");
const path = require("path");
const requests = require("requests");
const app = express();
const port = 5000;

//get the file path for templates directory//
const templatePath = path.join(__dirname, "/templates");

//set view engine//
app.set("view engine", "hbs");
app.set("views", `${templatePath}`);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  requests(
    `https://api.weatherapi.com/v1/current.json?key=c24daef1bbe3441aa26121252232302&q=${req.query.name}&aqi=no%22`
  )
    .on("data", (chunk) => {
      const jsonData = JSON.parse(chunk);
      //convert json data to js array of an object//
      const objData = [jsonData];
      const realCityData = objData[0].location.name;
      const realTempData = objData[0].current.temp_c;
      res.send(
        `City Is ${realCityData} and current Temperature is ${realTempData}`
      );
    })
    .on("end", (err) => {
      if (err) return console.log("connection closed due to errors", err);

      console.log("end");
    });
});

app.listen(port, (req, res) => {
  console.log(`Listening to Port ${port}`);
});
