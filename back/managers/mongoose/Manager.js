const mongoose = require("mongoose");

module.exports = class Manager {
  static clientParams = {
    host: process.env.DBHOST,
    name: process.env.DBNAME,
    port: process.env.DBPORT,
  };

  static querys = {
    insert: "create",
    update: "updateOne",
    findAll: "find",
    delete: "deleteOne",
    find: "findOne",
  };

  static async connect() {
    const { host, port, name } = this.clientParams;
    await mongoose.connect(`mongodb://${host}:${port}/${name}`);
  }

  static async executeQuery(schema, query, params) {
    await this.connect();
    try {
      const result = await schema[query](...params);
      return [result];
    } catch (error) {
      console.log("QUERY ERROR: ", query, error);
    } finally {
      mongoose.disconnect();
    }
  }
};
