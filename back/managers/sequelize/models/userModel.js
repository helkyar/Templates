const Manager = require("../Manager");
const Sequelize = require("sequelize");
const sequelize = Manager.connect();

const User = sequelize.define("users", {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE,
});

module.exports = User;
