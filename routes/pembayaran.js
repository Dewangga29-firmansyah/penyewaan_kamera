const express = require('express');
const router = express.Router();
const { Pembayaran } = require('../models');

router.post('/', async (req, res) => {
  const { sewa_id, metode, total_bayar, status_bayar } = req.body;
  const created = await Pembayaran.create({ sewa_id, metode, total_bayar, status_bayar });
  res.status(201).json(created);
});

router.get('/sewa/:sewa_id', async (req, res) => {
  const rows = await Pembayaran.findAll({ where: { sewa_id: req.params.sewa_id } });
  res.json(rows);
});

module.exports = router;
