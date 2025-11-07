"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pembayaran", {
      pembayaran_id: {
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
      metode: {
        type: Sequelize.ENUM("transfer", "cash", "e-wallet"),
        defaultValue: "transfer",
      },
      total_bayar: { type: Sequelize.DECIMAL(12, 2), allowNull: false },
      status_bayar: {
        type: Sequelize.ENUM("menunggu", "lunas", "gagal"),
        defaultValue: "menunggu",
      },
      tanggal_bayar: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pembayaran");
  },
};
