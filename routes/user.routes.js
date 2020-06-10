module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new propert
    router.post("/", user.create);
  
    // Retrieve all propert
    //router.get("/", user.findAll);
  
    // Retrieve all published propert
    //router.get("/published", user.findAllPublished);
  
    // Retrieve a single propert with phone_number
    router.get("/:phone_number", user.findOne);
  
    // Update a propert with id
    //router.put("/:id", user.update);
  
    // Delete a propert with id
    //router.delete("/:id", user.delete);
  
    // Create a new propert
    //router.delete("/", user.deleteAll);
  
    app.use('/api/register', router);
  };