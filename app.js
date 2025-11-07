const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// import routes
const kameraRoutes = require('./routes/kamera');
const userRoutes = require('./routes/userRoutes');
const pembayaranRoutes = require('./routes/pembayaran');
const pengembalianRoutes = require('./routes/pengembalian');
const sewaRoutes = require('./routes/sewa');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gunakan routes
app.use('/api/kamera', kameraRoutes);
app.use('/api/user', userRoutes);
app.use('/api/pembayaran', pembayaranRoutes);
app.use('/api/pengembalian', pengembalianRoutes);
app.use('/api/sewa', sewaRoutes);

module.exports = app;
