const express = require("express");
const app = express();
const port = 3000;

// import route
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// daftarkan route
app.use("/user", userRoutes);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
const kameraRoutes = require("./routes/kameraRoutes");
app.use("/kamera", kameraRoutes);
