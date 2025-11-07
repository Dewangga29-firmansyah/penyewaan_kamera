"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("detail_sewa", {
      detail_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sewa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "transaksi_sewa", key: "sewa_id" },
        onDelete: "CASCADE",
      },
      kamera_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "kamera", key: "kamera_id" },
        onDelete: "RESTRICT",
      },
      jumlah: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
      harga_sewa: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("detail_sewa");
  },
};
