# Percabangan Singkat dengan Ternary Operator (`? :`)

## Apa yang aku pelajari?
Ternary operator (`kondisi ? benar : salah`) adalah cara menulis logika `if...else` sederhana dalam satu baris kode. Jika kondisi di sebelah kiri tanda `?` bernilai `true`, nilai setelah `?` yang dipilih; jika `false`, nilai setelah `:` yang dipilih.

## Contoh Kode (`PusatMart`)
```javascript
// server.js: menentukan nama kolom kode produk berdasarkan kelompok
const fieldKode = item.asal_kelompok === "Kelompok 1" ? "kode_barang" : "sku";

// index.html: menentukan tulisan tombol berdasarkan status stok
const teksTombol = habis ? "Stok Habis" : "Tambah ke Keranjang";
```
## Pemahamanku & Prediksi
- Saat barang yang dibeli berasal dari "Kelompok 2", kondisi === "Kelompok 1" bernilai false, sehingga variabel fieldKode otomatis berisi "sku".
- Saat variabel habis bernilai false (stok masih tersedia), tombol produk menampilkan tulisan "Tambah ke Keranjang".
