# Menyaring Data dengan `.filter()`, `.includes()`, dan Operator `&&`

## Apa yang aku pelajari?
- Method `.filter()` memeriksa setiap item dalam array satu per satu dan hanya menampilkan item yang menghasilkan nilai `true`.
- `.toLowerCase()` menyamakan semua huruf menjadi huruf kecil agar pencarian kata dengan `.includes()` tidak sensitif terhadap huruf kapital.
- Operator `&&` (DAN) menggabungkan dua syarat filter sekaligus (kategori dan kata kunci), sehingga item hanya muncul jika kedua syaratnya terpenuhi.

## Contoh Kode (`PusatMart` - `index.html`)
```javascript
let filtered = katalogData.filter((p) => {
  const cocokKel = filterAktif === "Semua" || p.asal_kelompok === filterAktif;
  const cocokCari =
    p.nama_produk.toLowerCase().includes(q) ||
    p.nama_toko.toLowerCase().includes(q) ||
    p.kode_produk.toLowerCase().includes(q);
  return cocokKel && cocokCari;
});
```

## Pemahamanku & Prediksi
- Jika pengguna mengetik "WAJAN" dengan huruf kapital pada filter "Semua", produk "Wajan Anti Lengket 28cm" tetap muncul karena .toLowerCase() menormalkan hurufnya sebelum dicek.
- Jika filter kategori diubah ke "Kelompok 1" (Fashion), produk wajan akan hilang meskipun kata kuncinya cocok karena syarat kategori di sisi kiri && bernilai salah.
