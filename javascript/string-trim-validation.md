# Mencegah Input Spasi Kosong dengan `.trim()`

## Apa yang aku pelajari?
- Di JavaScript, string yang hanya berisi spasi (`"   "`) tetap dianggap sebagai nilai *truthy* (ada isinya), sehingga validasi biasa (`!nama_produk`) bisa ditembus input kosong.
- Method `.trim()` menghapus seluruh spasi berlebih di awal dan akhir string. Jika isinya hanya spasi, hasilnya berubah menjadi string kosong `""` yang otomatis ditolak validasi.
- Penambahan tanda tanya sebelum titik (`?.trim()`) berfungsi sebagai pengaman (*optional chaining*) agar program tidak *error* jika properti `nama_produk` sama sekali tidak dikirim (`undefined`).

## Contoh Kode
```javascript
const inputIseng = { nama_produk: "   ", harga: 50000 };

if (!inputIseng.nama_produk?.trim() || inputIseng.harga <= 0) {
  console.log("Ditolak!");
} else {
  console.log("Lolos masuk database!");
}
```

## Pemahamanku & Prediksi
- Tanpa .trim(), nama_produk: "   " tetap dianggap valid dan lolos masuk ke database.
- Setelah ditambahkan .trim(), string spasi tersebut berubah menjadi "" sehingga kondisi validasi langsung menolaknya.
