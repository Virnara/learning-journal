# Perbedaan HTTP `GET`, `POST`, dan Objek `req.body` di Express.js

## Apa yang aku pelajari?
- `app.get()` digunakan saat frontend hanya meminta atau membaca data dari server tanpa mengubah isi database.
- `app.post()` digunakan saat frontend mengirimkan data baru ke server untuk disimpan atau diproses (seperti checkout atau tambah produk).
- `req.body` adalah objek tempat Express.js menyimpan paket data yang dikirimkan melalui metode `POST`.

## Contoh Kode (`PusatMart` - `server.js`)
```javascript
// Mengambil data untuk ditampilkan
app.get("/api/center-data", async (req, res) => {
  const katalog = await colKatalog.find().toArray();
  res.json({ sukses: true, katalog });
});

// Menerima data belanjaan baru dari frontend
app.post("/api/checkout", async (req, res) => {
  const { nama_pembeli, items } = req.body;
});
```

## Pemahamanku & Prediksi
- Data belanjaan yang dikirim saat pembeli checkout tersimpan di dalam objek req.body.
- Jika URL http://localhost:3000/api/checkout dibuka langsung lewat kolom alamat browser, Express menolaknya (Cannot GET /api/checkout) meskipun server sudah menyala, karena browser mengirim metode GET sementara rutenya terdaftar sebagai POST.
