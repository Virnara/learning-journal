# Operator `$inc` MongoDB dan Sinkronisasi Stok Dua Arah

## Apa yang aku pelajari?
Di MongoDB, operator `$inc` (*increment*) digunakan untuk menambah atau mengurangi nilai angka secara langsung di database tanpa perlu mengambil data lamanya terlebih dahulu.

## Contoh Kode (`PusatMart` - `server.js`)
```javascript
// Potong stok di database pusat
await colKatalog.updateOne(
  { kode_produk: item.kode_produk, sumber_db: item.sumber_db },
  { $inc: { stok: -item.qty } }
);

// Potong stok di database toko anggota asal
await dbSumber.collection(item.sumber_collection).updateOne(
  { [fieldKode]: item.kode_produk },
  { $inc: { stok: -item.qty } }
);
```
## Pemahamanku & Prediksi
Saat pembeli checkout, pemotongan stok dilakukan dua kali (di db_database_center dan di database toko asal seperti db_k2_anisa) agar data pusat dan toko tidak selisih.

Jika stok awal 30 dan dibeli 3 (-item.qty), sisa stok di kedua database menjadi 27.

Jika tanda minus - di depan item.qty terhapus, stok bukan berkurang melainkan justru bertambah menjadi 33 karena fungsi dasar $inc adalah penjumlahan.
