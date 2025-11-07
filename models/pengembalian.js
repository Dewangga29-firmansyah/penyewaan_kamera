module.exports = (sequelize, DataTypes) => {
    const Pengembalian = sequelize.define('Pengembalian', {
    id_pengembalian: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_transaksi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tanggal_pengembalian: {
        type: DataTypes.DATE,
        allowNull: false
    },
    kondisi_kamera: {
        type: DataTypes.STRING,
        allowNull: true
    }
    }, {
    tableName: 'pengembalian',
    timestamps: false
    });

    return Pengembalian;
};
