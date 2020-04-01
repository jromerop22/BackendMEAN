const Reports = require("../model/report.model");

var controllerReport = {
  createOne: async function(req, res) {
    var params = req.body;
    
    let report = new Reports();
    report.documento  = params.documento;                 
    report.nombre = params.nombre;                 
    report.apellido = params.apellido;                 
    report.fechaInicio = params.fechaInicio;                 
    report.fechaFin = params.fechaFin;                 
    report.turnoInicio = params.turnoInicio;                 
    report.turnoFin = params.turnoFin;                 
    report.horaExtraInicio = params.horaExtraInicio;                 
    report.horaExtraFin = params.horaExtraFin;                 
    report.horaExtraMotivo = params.horaExtraMotivo;                 

    await report.save((error, data) => {
      if (error) {
        res.status(400).send({
          warning: "error"
        });
      } else {
        res.status(200).send({
          success: "insert ok",
          data: data
        });
      }
    });
  },  
  findAll: async function(req, res) {
    await Reports.find((error, data) => {
      if (error) {
        res.status(400).send({
          warning: "error"
        });
      } else {
        res.status(200).send({
          success: "exitoso",
          data: data
        });
      }
    });
  }
};

module.exports = controllerReport;
