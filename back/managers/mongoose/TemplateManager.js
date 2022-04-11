const Manager = require("./Manager");
const schema = require("./schemas/templateSchema");

module.exports = class TemplateManager extends Manager {
  static async create(template) {
    return await this.executeQuery(schema, this.querys.insert, [template]);
  }
  static async find({ id }) {
    return await this.executeQuery(schema, this.querys.find, [{ _id: id }]);
  }
  static async findAll() {
    return await this.executeQuery(schema, this.querys.findAll);
  }
  static async update(template, { id }) {
    const params = [{ _id: id }, template];
    return await this.executeQuery(schema, this.querys.update, params);
  }
  static async delete({ id }) {
    return await this.executeQuery(schema, this.querys.delete, [{ _id: id }]);
  }
};
