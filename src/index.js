//import
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//import router
const routerUser = require("./router/user.router");
const routerReport = require("./router/report.router");

//constantes
const app = express();
const port = process.env.PORT || 3001;
const db = require("../src/database/connection");
db();

//Configuration
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Headers and CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Lisening
app.listen(port, () => {
  console.log("API REST Run : " + port);
});

//Middlewares
app.use("/user", routerUser);
app.use("/report", routerReport);
