var db = require("../models");

module.exports = function(app) {


  app.get("/", function(req, res) {

    db.Burger.findAll({}).then(function(data) {

      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/", function(req, res) {
    console.log(req.body);

    db.Burger.create({
      burger_name: req.body.name
    }).then(function(result) {
      res.redirect("/");
    });
  });

  app.put("/:id", function(req, res) {

    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.redirect("/");
    });
  });
};
