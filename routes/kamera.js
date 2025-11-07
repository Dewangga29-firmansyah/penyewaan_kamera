const express = require("express");
const router = express.Router();
const { Kamera } = require("../models");

// Tambah kamera baru
router.post("/", async (req, res) => {
  try {
    const { nama_kamera, harga_sewa_harian, status } = req.body;

    if (!nama_kamera || !harga_sewa_harian) {
      return res.status(400).json({ error: "Semua field wajib diisi" });
    }

    const kameraBaru = await Kamera.create({
      nama_kamera,
      harga_sewa_harian,
      status: status || "available"
    });

    res.json({
      message: "Kamera berhasil ditambahkan",
      kamera: kameraBaru
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
