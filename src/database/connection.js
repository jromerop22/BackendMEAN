const mongoose = require("mongoose");

//enviroment
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

//options
const options = {
  useNewUrlParser: true  ,
  useUnifiedTopology: true
};

//URI
const url =
  "mongodb://" +
  process.env.MONGO_USERNAME +
  ":" +
  process.env.MONGO_PASSWORD +
  "@" +
  process.env.MONGO_HOSTNAME +
  ":" +
  process.env.MONGO_PORT +
  "/" +
  process.env.MONGO_DB+
  "?authSource=admin";

function go(){
  mongoose.connect(url, options)
  .then(() => {console.log("Mongoose connectado");})
  .catch(error => console.log(error));
}

module.exports = go;
