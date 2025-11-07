"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("transaksi_sewa", {
      sewa_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "user_id" },
        onDelete: "CASCADE",
      },
      tanggal_sewa: { type: Sequelize.DATEONLY, allowNull: false },
      tanggal_kembali: { type: Sequelize.DATEONLY, allowNull: false },
      total_harga: { type: Sequelize.DECIMAL(12, 2), defaultValue: 0.0 },

      status_sewa: {
        type: Sequelize.ENUM(
          "pending",
          "dipinjam",
          "dikembalikan",
          "dibatalkan"
        ),
        defaultValue: "pending",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("transaksi_sewa");
  },
};
