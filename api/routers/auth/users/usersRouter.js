const express = require("express");

const User = require("./userModel");

const router = express.Router();

router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ error: "Was not able to retrieve" });
    });
});

module.exports = router;
