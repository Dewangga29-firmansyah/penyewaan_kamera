const fs = require("fs");

const content = `
const path = require('path');

module.exports = {
    'config': path.resolve('config', 'config.json'),
    'models-path': path.resolve('models'),
    'seeders-path': path.resolve('seeders'),
    'migrations-path': path.resolve('migrations')
};
`;

fs.writeFileSync(".sequelizerc", content.trim());
console.log("✅ .sequelizerc berhasil dibuat!");
