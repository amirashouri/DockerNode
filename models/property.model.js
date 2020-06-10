module.exports = (sequelize, Sequelize) => {
    const Property = sequelize.define("property", {
      title: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      published: {
        type: Sequelize.BOOLEAN,
        required: true,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      area: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      }
    });
  
    return Property;
  };