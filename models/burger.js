module.exports = function(sequelize, DataType) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataType.TEXT,
    devoured: {
      type: DataType.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;

};
