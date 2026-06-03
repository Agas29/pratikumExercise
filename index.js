const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Endpoint utama (Halaman depan)
app.get('/', (req, res) => {
    res.send('Backend App Service Berhasil Berjalan! Coba akses /waktu di URL.');
});

// EXERCISE: Endpoint /waktu mengembalikan waktu server dalam format JSON
app.get('/waktu', (req, res) => {
    const waktuSekarang = new Date();
    res.json({
        waktuServer: waktuSekarang.toISOString()
    });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
