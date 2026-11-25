# Mencari Satu Data Spesifik dengan `.find()`

## Apa yang aku pelajari?
- Berbeda dengan `.filter()` yang mengumpulkan semua hasil ke dalam array, `.find()` langsung berhenti begitu menemukan satu item pertama yang cocok dan mengembalikan objeknya saja.
- Jika tidak ada data yang cocok, `.find()` menghasilkan `undefined`, yang bisa langsung dicek dengan tanda seru (`if (!toko)`) sebagai pengaman sebelum proses berlanjut.

## Contoh Kode (`PusatMart`)
```javascript
// server.js: mencari konfigurasi database toko tujuan
const toko = KONFIGURASI_16_TOKO.find((t) => t.nama_database === nama_database);
if (!toko) return res.status(400).json({ sukses: false, pesan: "Database toko tidak ditemukan." });

// index.html: mencari produk unik berdasarkan kode sekaligus database tokonya
const p = katalogData.find((item) => item.kode_produk === kode && item.sumber_db === sumberDb);
```

## Pemahamanku & Prediksi
- Jika dicari database "db_k3_budi" yang tidak terdaftar, variabel toko bernilai undefined dan server langsung mengembalikan pesan "Database toko tidak ditemukan.".
- Pencarian produk memakai dua syarat (kode_produk dan sumber_db) agar pembeli tidak salah membeli barang jika dua toko berbeda kebetulan memakai kode produk sama.
