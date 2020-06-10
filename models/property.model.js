module.exports = (sequelize, Sequelize) => {
    const Property = sequelize.define("property", {
      title: {
        type: Sequelize.STRING,
        required: true
      },
      description: {
        type: Sequelize.STRING,
        required: true
      },
      published: {
        type: Sequelize.BOOLEAN,
        required: true
      },
      address: {
        type: Sequelize.STRING,
        required: true
      },
      area: {
        type: sequelize.STRING,
        required: true
      }
    });
  
    return Tutorial;
  };