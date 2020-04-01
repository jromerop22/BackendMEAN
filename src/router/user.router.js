const Router = require('express');
const controllerUser = require('../controller/user.controller');
const routerUser = Router();

routerUser.post('/one',controllerUser.createOne);
routerUser.post('/',controllerUser.createAll);
routerUser.get('/',controllerUser.findAll);

module.exports = routerUser;