const express = require("express");

const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();

  let a = date.getDate();
  let b = date.getMonth();
  let c = date.getFullYear();

  let newDate = addDays(new Date(c, b, a), 100);
  // console.log(newDate);

  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  );
});

module.exports = app;

app.listen(3000);
