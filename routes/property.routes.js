module.exports = app => {
    const propert = require("../controllers/propert.controller.js");
  
    var router = require("express").Router();
  
    // Create a new propert
    router.post("/", propert.create);
  
    // Retrieve all propert
    router.get("/", propert.findAll);
  
    // Retrieve all published propert
    router.get("/published", propert.findAllPublished);
  
    // Retrieve a single propert with id
    router.get("/:id", propert.findOne);
  
    // Update a propert with id
    router.put("/:id", propert.update);
  
    // Delete a propert with id
    router.delete("/:id", propert.delete);
  
    // Create a new propert
    router.delete("/", propert.deleteAll);
  
    app.use('/api/propert', router);
  };