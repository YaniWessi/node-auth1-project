const express = require("express");

const bcrypt = require("bcryptjs");

const users = require("./users/userModel");

const router = express.Router();

router.post("/register", (req, res) => {
  const gitIn = req.body;

  const hash = bcrypt.hashSync(gitIn.password, 8);

  gitIn.password = hash;
  users
    .addUser(gitIn)
    .then(id => {
      res.status(201).json({ message: "succesfully created a new account" });
    })
    .catch(error => {
      res.status(400).json({ error: "was not able to create an account" });
    });
});

router.post("/login", (req, res) => {
  users
    .access(req.body.username)
    .then(user => {
      //   console.log(user);
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        res.status(200).json({ message: "sucessful login" });
      } else {
        res.status(400).json({ message: "username does not exist" });
      }
    })

    .catch(error => {
      res.status(500).json({ message: " was not able to access this account" });
    });
});
// outer.post();

module.exports = router;
