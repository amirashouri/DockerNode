module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn('user', 'phone_number', {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
            primaryKey: true,
            unique: true
          });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn('user', 'phone_number', {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
          });
    }
}
