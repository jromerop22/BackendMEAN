const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Report = new Schema({
    documento : String,
    nombre : String,
    apellido : String,
    fechaInicio : Date,
    fechaFin : Date,
    turnoInicio : String,
    turnoFin : String,
    horaExtraInicio : String,
    horaExtraFin : String,
    horaExtraMotivo : String
});

module.exports = mongoose.model("Reports", Report);
