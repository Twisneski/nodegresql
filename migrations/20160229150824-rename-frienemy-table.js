'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameTable('frienemies', 'Frienemies');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameTable('Frienemies', 'frienemies');
  }
};
