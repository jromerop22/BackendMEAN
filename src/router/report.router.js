const Router = require('express');
const controllerReport = require('../controller/report.controller');
const routerReport = Router();

routerReport.post('/',controllerReport.createOne);
routerReport.get('/',controllerReport.findAll);

module.exports = routerReport;