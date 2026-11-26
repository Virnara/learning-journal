# Menggabungkan Method Array (*Method Chaining*: `.filter()` + `.reduce()`)

## Apa yang aku pelajari?
- *Method chaining* adalah teknik menyambungkan beberapa method array secara berurutan agar data diproses bertahap dalam satu alur.
- `.filter()` harus dijalankan lebih dulu karena keluarannya masih berupa array baru, sehingga bisa langsung disambung dengan `.reduce()` untuk menghitung total nilai dari item yang lolos saringan.
- Urutannya tidak boleh dibalik karena `.reduce()` menghasilkan satu nilai tunggal (bukan array), sehingga `.filter()` tidak bisa dijalankan setelahnya.

## Contoh Kode
```javascript
const transaksi = [
  { produk: "Kemeja Linen", kelompok: "Kelompok 1", total: 135000 },
  { produk: "Wajan Anti Lengket", kelompok: "Kelompok 2", total: 140000 },
  { produk: "Jaket Denim", kelompok: "Kelompok 1", total: 240000 }
];

const omzetKelompok1 = transaksi
  .filter((t) => t.kelompok === "Kelompok 1")
  .reduce((acc, t) => acc + t.total, 0);
```

## Pemahamanku & Prediksi
- .filter() menyisakan 2 transaksi "Kelompok 1", lalu .reduce() menjumlahkan t.total keduanya (135000 + 240000) sehingga menghasilkan 375000.
- Jika .reduce() ditaruh sebelum .filter(), program error karena mencoba menjalankan .filter() pada hasil akhir yang sudah berbentuk angka tunggal.
