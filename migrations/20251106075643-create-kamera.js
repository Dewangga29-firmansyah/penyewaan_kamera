"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("kamera", {
      kamera_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_kamera: { type: Sequelize.STRING(100), allowNull: false },
      harga_sewa_harian: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
      status: {
        type: Sequelize.ENUM("available", "unavailable"),
        defaultValue: "available",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("kamera");
  },
};
