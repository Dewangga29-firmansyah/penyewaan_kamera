module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: { // ✅ samakan dengan tabel
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    no_telp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'users',
    timestamps: false
  });

  return User;
};
