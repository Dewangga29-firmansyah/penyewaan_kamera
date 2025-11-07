module.exports = (sequelize, DataTypes) => {
    const DetailSewa = sequelize.define('DetailSewa', {
    id_detail: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_transaksi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_kamera: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    }, {
    tableName: 'detail_sewa',
    timestamps: false
    });

    return DetailSewa;
};
