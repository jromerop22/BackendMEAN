const Users = require("../model/user.model");

var controllerUser = {
  createOne: async function(req, res) {
    var params = req.body;
    console.log(params);
    let user = new Users();
    user.id = params.id;
    user.name = params.name;
    user.username = params.username;
    user.email = params.email;
    user.phone = params.phone;
    user.website = params.website;

    await user.save((error, data) => {
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
  createAll: async function(req, res) {        
    for (let key of req.body) {             
        let user = new Users();
        user.id = key.id;
        user.name = key.name;
        user.username = key.username;
        user.email = key.email;
        user.phone = key.phone;
        user.website = key.website;
      await user.save((error, data) => {
        if (error) {
          res.status(400).send({
            warning: "error"
          });
        }
      });
    }
    res.status(200).send({
      success: "insertados All",      
    });
  },
  findAll: async function(req, res) {
    await Users.find((error, data) => {
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

module.exports = controllerUser;
