module.exports = (sequelize, DataTypes) => {
    const Pembayaran = sequelize.define('Pembayaran', {
    id_pembayaran: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_transaksi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tanggal_pembayaran: {
        type: DataTypes.DATE,
        allowNull: false
    },
    jumlah_bayar: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    metode: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
    tableName: 'pembayaran',
    timestamps: false
    });

    return Pembayaran;
};
