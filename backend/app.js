const express = require("express");
const bodyParser = require("body-parser");
const listsRoutes = require("./routes/listRoutes");
const tasksRoutes = require("./routes/tasksRoutes");
const app = express();
const { mongoose } = require("./db/mongoose");
//setup backend  midlwares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type, Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST,PATCH ,PUT,DELETE, OPTIONS"
  );
  next();
});

app.use("/api/", listsRoutes);
app.use("/api/", tasksRoutes);

module.exports = app;
