'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'frienemies',
      'friend',
      Sequelize.BOOLEAN
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'frienemies',
      'friend'
    );
  }
};
