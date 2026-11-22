# Schema Mapping dan Operator Cadangan (`||` & `??`)

## Apa yang aku pelajari?
Saat menggabungkan data dari beberapa database yang punya nama kolom berbeda (misalnya `harga` di Kelompok 1 dan `harga_satuan` di Kelompok 2), kita bisa memakai operator `||` atau `??` di JavaScript sebagai nilai cadangan (*fallback*) agar data tetap terbaca seragam.

## Contoh Kode (`PusatMart` - `server.js`)
```javascript
harga: Number(item.harga ?? item.harga_satuan ?? 0)
