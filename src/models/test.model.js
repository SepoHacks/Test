const sequelize = require("../config/database.config.js");
const { DataTypes } = require("sequelize");

const Testz = sequelize.define("Testz", {
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Testz;
