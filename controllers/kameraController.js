const { kamera } = require("../models");

module.exports = {
    async getAll(req, res) {
    const data = await kamera.findAll();
    res.json(data);
    },

    async getById(req, res) {
    const data = await kamera.findByPk(req.params.id);
    res.json(data);
    },

    async create(req, res) {
    const data = await kamera.create(req.body);
    res.json({ message: "Kamera berhasil ditambahkan", data });
    },

    async update(req, res) {
    await kamera.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Kamera berhasil diupdate" });
    },

    async delete(req, res) {
    await kamera.destroy({ where: { id: req.params.id } });
    res.json({ message: "Kamera berhasil dihapus" });
    },
};
