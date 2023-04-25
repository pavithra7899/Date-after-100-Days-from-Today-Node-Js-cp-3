const express = require("express");
const app = express();

const dateTimeFNS = require("./node_modules/date-fns/addDays");

app.get("/", (request, response) => {
  const myDate = dateTimeFNS(new Date(), 100);
  response.send(
    `${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;