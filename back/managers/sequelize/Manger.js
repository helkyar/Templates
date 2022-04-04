const Sequelize = require("sequelize");

module.exports = class Manager {
  static clientParams = {
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    name: process.env.DBNAME,
    pswd: process.env.DBPSWD,
    port: process.env.DBPORT,
  };

  static querys = {
    save: "create",
  };

  static async connect() {
    const { name, user, pswd } = this.clientParams;
    return new Sequelize(name, user, pswd);
  }

  static async executeQuery(model, params, query) {
    console.log("Fuking here baby");
    const sequelize = await this.connect();
    sequelize
      .sync()
      .then(() => model[query](params))
      .then((res) => console.log(res.get({ plain: true })))
      .catch((error) => {
        console.log("Query Error: ", query, error);
        return null;
      });
  }
};
