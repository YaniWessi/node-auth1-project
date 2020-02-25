const db = require("../../../../data/dbconfig");

module.exports = {
  find,
  addUser,
  access
};

function find() {
  return db("users");
}

function addUser(user) {
  return db("users").insert(user, "id");
}

function access(username) {
  return db("users")
    .where("users.username", username)
    .first();
}
