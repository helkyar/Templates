module.exports = class User {
  static name = "users";
  static columns = ["username", "password"];

  #id;
  #username;
  #password;

  constructor({ id, username, password }) {
    this.#id = id;
    this.#username = username;
    this.#password = password;
  }

  getObject() {
    return {
      id: this.#id,
      username: this.#username,
      password: this.#password,
    };
  }
};
