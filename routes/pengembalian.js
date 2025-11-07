const express = require('express');
const router = express.Router();
const { Pengembalian, TransaksiSewa } = require('../models');

router.post('/', async (req, res) => {
  const { sewa_id, tanggal_kembali_real, denda, kondisi_barang } = req.body;
  const created = await Pengembalian.create({ sewa_id, tanggal_kembali_real, denda, kondisi_barang });
  // update status transaksi
  await TransaksiSewa.update({ status_sewa: 'dikembalikan' }, { where: { sewa_id } });
  res.status(201).json(created);
});

router.get('/', async (req, res) => {
  const rows = await Pengembalian.findAll();
  res.json(rows);
});

module.exports = router;
