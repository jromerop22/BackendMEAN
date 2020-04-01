const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Geo = new Schema({
  lat: String,
  lng: String
});

var Address = new Schema({
  street: String,
  suite: { type: String, uppercase: true, trim: true },
  city: { type: String, uppercase: true, trim: true },
  zipcode: { type: String, uppercase: true, trim: true },
  geo: [Geo]
});

var Company = new Schema({
  name: String,
  catchPhrase: String,
  bs: String
});

var User = new Schema({
  id: String,
  name: { type: String, uppercase: true, trim: true },
  username: { type: String, uppercase: true, trim: true },
  email: { type: String, lowercase: true, trim: true },
  address: [Address],
  phone: String,
  website: String,
  company: [Company]
});

module.exports = mongoose.model("Users", User);
