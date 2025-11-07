const express = require('express');
const router = express.Router();
const { User } = require('../models'); // pastikan ini sesuai path kamu

// ✅ REGISTER USER BARU
router.post('/register', async (req, res) => {
  try {
    const { nama, email, password, alamat, no_telp } = req.body;

    if (!nama || !email || !password) {
      return res.status(400).json({ error: 'Nama, email, dan password wajib diisi' });
    }

    const userBaru = await User.create({
      nama,
      email,
      password,
      alamat,
      no_telp
    });

    res.status(201).json({
      message: 'User berhasil dibuat',
      user: userBaru
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
