# Memahami HTTP Status Code (`200`, `400`, `500`) di Express.js

## Apa yang aku pelajari?
- Backend mengirimkan angka status HTTP bersama respons JSON agar frontend bisa membedakan antara proses yang berhasil, kesalahan input pengguna, atau gangguan teknis pada server.
- **`200` (OK):** Permintaan berhasil dijalankan tanpa kendala.
- **`400` (Bad Request):** Kesalahan berasal dari data yang dikirim klien/frontend (seperti nama produk kosong, harga minus, atau database toko tujuan tidak ditemukan).
- **`500` (Internal Server Error):** Kesalahan terjadi di sisi server atau database (misalnya koneksi MongoDB terputus sehingga masuk ke blok `catch`).

## Contoh Kode (`PusatMart` - `server.js`)
```javascript
app.post("/api/produk", async (req, res) => {
  try {
    const { nama_produk, harga } = req.body;

    // 1. Salah input dari pengguna/frontend
    if (!nama_produk?.trim() || harga <= 0) {
      return res.status(400).json({ sukses: false, pesan: "Input tidak valid" });
    }

    // 2. Simpan ke MongoDB berhasil
    await colKatalog.insertOne({ nama_produk: nama_produk.trim(), harga });
    return res.status(200).json({ sukses: true, pesan: "Produk tersimpan" });

  } catch (err) {
    // 3. Masalah teknis di server atau database mati
    return res.status(500).json({ sukses: false, pesan: "Gagal terhubung ke database" });
  }
});
```

## Pemahamanku & Prediksi
- Jika frontend mengirim harga: -10000, server langsung menghentikan proses dan mengembalikan kode status 400.
- Jika input sudah valid tetapi layanan MongoDB belum menyala, proses insertOne gagal dan melompat ke catch (err), sehingga frontend menerima kode status 500.
