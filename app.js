const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let date = new Date();

  let resultDate = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );

  response.send(
    `${resultDate.getDate()}/${
      resultDate.getMonth() + 1
    }/${resultDate.getFullYear()}`
  );
});

module.exports = app;
