# Mengubah Bentuk Data Array dengan `.map()`

## Apa yang aku pelajari?
- Method `.map()` digunakan untuk mengubah (*transform*) setiap elemen di dalam array menjadi format baru dan mengembalikannya sebagai array baru.
- Panjang array hasil `.map()` selalu sama persis dengan array aslinya (1-ke-1), dan data aslinya tidak ikut berubah.
- Sangat berguna di pengembangan web untuk merapikan data mentah dari database sebelum ditampilkan ke kartu produk atau struk belanja.

## Contoh Kode
```javascript
const produkMentah = [
  { nama: "Kemeja Linen", harga: 135000, stok: 12 },
  { nama: "Wajan Anti Lengket", harga: 140000, stok: 8 },
  { nama: "Set Toples Kaca", harga: 95000, stok: 15 }
];

const daftarLabel = produkMentah.map((p) => `${p.nama} - Rp${p.harga}`);
```

## Pemahamanku & Prediksi
- Array daftarLabel tetap berisi 3 item, sama dengan jumlah objek di dalam produkMentah.
- Elemen pertama (daftarLabel[0]) menghasilkan string "Kemeja Linen - Rp135000".
