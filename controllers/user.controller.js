const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const fs = require("fs");
const jwt = require("jsonwebtoken");

// Create and Save a new Property
exports.create = (req, res) => {
  // Validate request
  if (!req.body.first_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  let privateKey = fs.readFileSync("./private.pem", "utf8");
  let token = jwt.sign({ body: "stuff" }, privateKey, { algorithm: "HS256" });

  // Create a Property
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    is_active: req.body.is_active ? req.body.is_active : true,
    token: token,
    phone_number: req.body.phone_number,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password
  };

  // Save User in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

exports.findOne = (req, res) => {
    const phoneNumber = req.params.phone_number;

    User.findAll({ where: { phone_number: phoneNumber } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with phobe number: " + phoneNumber,
          error: err.toString()
        });
      });
}

exports.findAll = (req, res) => {
    const userName = req.query.user_name;
    var condition = userName ? { user_name: { [Op.iLike]: `%${userName}%` } } : null;
  
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving User."
        });
      });
};