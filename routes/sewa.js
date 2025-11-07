const express = require('express');
const router = express.Router();
const { TransaksiSewa, DetailSewa, Kamera, User, sequelize } = require('../models');

// create sewa (transactional)
router.post('/', async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { user_id, tanggal_sewa, tanggal_kembali, items } = req.body;
    if (!Array.isArray(items) || items.length === 0) throw new Error('items harus array tidak kosong');

    // hitung lama hari
    const d1 = new Date(tanggal_sewa), d2 = new Date(tanggal_kembali);
    const diffMs = d2 - d1;
    const hari = Math.max(1, Math.ceil(diffMs / (1000*60*60*24)));
    let total = 0;
    for (const it of items) {
      total += parseFloat(it.harga_sewa) * Number(it.jumlah) * hari;
    }

    const sewa = await TransaksiSewa.create({ user_id, tanggal_sewa, tanggal_kembali, total_harga: total, status_sewa: 'pending' }, { transaction: t });

    for (const it of items) {
      await DetailSewa.create({ sewa_id: sewa.sewa_id, kamera_id: it.kamera_id, jumlah: it.jumlah, harga_sewa: it.harga_sewa }, { transaction: t });
    }

    await t.commit();
    const created = await TransaksiSewa.findByPk(sewa.sewa_id, { include: [{ model: DetailSewa, as: 'details' }] });
    res.status(201).json(created);
  } catch (err) {
    await t.rollback();
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const rows = await TransaksiSewa.findAll({ include: [{ model: User, as: 'user' }] });
  res.json(rows);
});

router.get('/:id', async (req, res) => {
  const row = await TransaksiSewa.findByPk(req.params.id, { include: [{ model: DetailSewa, as: 'details', include: [{ model: Kamera, as: 'kamera' }] }, { model: User, as: 'user' }] });
  if (!row) return res.status(404).json({ message: 'not found' });
  res.json(row);
});

router.put('/:id/status', async (req, res) => {
  const { status_sewa } = req.body;
  await TransaksiSewa.update({ status_sewa }, { where: { sewa_id: req.params.id } });
  const updated = await TransaksiSewa.findByPk(req.params.id);
  res.json(updated);
});

module.exports = router;
