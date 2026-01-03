"use strict";

import {DataTypes, QueryInterface, Sequelize} from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.addColumn("hotels", "deleted_at", {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    });
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.removeColumn("hotels", "deleted_at");
  }
};
