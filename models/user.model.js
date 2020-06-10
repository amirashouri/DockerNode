module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      first_name: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        required: true,
        allowNull: false
      },
      phone_number: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      age: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      token: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      }
    });
  
    return User;
  };