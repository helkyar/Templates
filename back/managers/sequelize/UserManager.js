const Manager = require("./Manager");
const model = require("./model/userModel");

module.exports = class UserManager extends Manager {
  static async create(params) {
    return await this.executeQuery(model, params, this.querys.save);
  }
  static async find({ username }) {
    return await this.executeQuery(model, username, this.querys.find);
  }
};
