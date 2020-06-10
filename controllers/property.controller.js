const db = require("../models");
const Property = db.property;
const Op = db.Sequelize.Op;

// Create and Save a new Property
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Property
  const property = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
    address: req.body.address,
    area: req.body.area
  };

  // Save Property in the database
  Property.create(property)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Property."
      });
    });
};

// Retrieve all Property from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    Property.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single Property with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Property.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

// Update a Property by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Property.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Hose was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Property.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Property was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Property with id=${id}. Maybe Property was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Property with id=" + id
        });
      });
};

// Delete all Property from the database.
exports.deleteAll = (req, res) => {
    Property.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Property were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Property."
          });
        });
};

// Find all published Property
exports.findAllPublished = (req, res) => {
    Property.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Property."
      });
    });
};