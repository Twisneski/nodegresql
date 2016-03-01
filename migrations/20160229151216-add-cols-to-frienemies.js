'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'Frienemies', 'id', {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        }
      )
      .addColumn(
        'Frienemies', 'createdAt', {
          allowNull: false,
          type: Sequelize.DATE
        }
      )
      .addColumn(
        'Frienemies', 'updatedAt', {
          allowNull: false,
          type: Sequelize.DATE
        }
      );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface
      .removeColumn('Frienemies', 'id')
      .removeColumn('Frienemies', 'createdAt')
      .removeColumn('Frienemies', 'updatedAt');
  }
};
