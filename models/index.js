'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const configPath = path.resolve(__dirname, '..', 'config', 'config.json');

// load config
let config;
try {
  config = require(configPath)[env];
} catch (err) {
  console.error(`Gagal membaca konfigurasi dari ${configPath} (env=${env}):`, err.message);
  process.exit(1);
}

const db = {};

// buat koneksi ke database
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// baca semua file model .js, KECUALI index.js
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const modelDef = require(path.join(__dirname, file));

    // pastikan modelDef benar-benar fungsi
    if (typeof modelDef === 'function') {
      const model = modelDef(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    } else {
      console.warn(`⚠️  File model '${file}' tidak mengekspor fungsi!`);
    }
  });

// asosiasi antar model
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
