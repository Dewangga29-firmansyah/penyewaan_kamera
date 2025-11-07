module.exports = (sequelize, DataTypes) => {
  const Kamera = sequelize.define("Kamera", {
    kamera_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_kamera: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    harga_sewa_harian: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("available", "unavailable"),
      defaultValue: "available"
    }
  }, {
    tableName: "kamera",
    timestamps: false
  });

  return Kamera;
};
