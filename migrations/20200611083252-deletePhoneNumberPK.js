'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('user', 'phone_number', {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
      unique: true
    });
    
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('user', 'phone_number', {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
      unique: true,
      primaryKey: true
    })
  }
};
