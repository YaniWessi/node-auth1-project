const bc = require("bcryptjs");

const Users = require("./userModel");

function restricted(req, res, next) {
  const { username, password } = req.headers;

  if (username && password) {
    Users.access(username)
      .then(user => {
        if (user && bc.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ message: "invalid Credentials" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: "Unexpeted error" });
      });
  } else {
    res.status(400).json({ message: "No credential" });
  }
}

module.exports = restricted;
