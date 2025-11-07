module.exports = (sequelize, DataTypes) => {
    const TransaksiSewa = sequelize.define('TransaksiSewa', {
    id_transaksi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tanggal_sewa: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tanggal_kembali: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total_harga: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    }, {
    tableName: 'transaksi_sewa',
    timestamps: false
    });

    return TransaksiSewa;
};
