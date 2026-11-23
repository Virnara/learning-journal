# Schema Mapping dan Operator Cadangan (`||` & `??`)

## Apa yang aku pelajari?
Saat menggabungkan data dari beberapa database yang punya nama kolom berbeda (misalnya `harga` di Kelompok 1 dan `harga_satuan` di Kelompok 2), kita bisa memakai operator `||` atau `??` di JavaScript sebagai nilai cadangan (*fallback*) agar data tetap terbaca seragam.

## Contoh Kode (`PusatMart` - `server.js`)
```javascript
harga: Number(item.harga ?? item.harga_satuan ?? 0)
```
## Pemahamanku & Prediksi
Program akan mengecek nilai dari kiri ke kanan: cek item.harga dulu, jika kosong cek item.harga_satuan, dan jika keduanya tidak ada maka diisi angka 0 supaya perhitungan tidak error.

Jika ada kelompok baru masuk dengan nama kolom harga_jual, tanpa mengubah kode di atas harganya akan otomatis terbaca 0. Untuk memperbaikinya, tinggal menyelipkan ?? item.harga_jual sebelum ?? 0.
