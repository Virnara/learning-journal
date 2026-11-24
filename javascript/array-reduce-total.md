# Menjumlahkan Data Array dengan `.reduce()`

## Apa yang aku pelajari?
Method `.reduce()` digunakan untuk menggabungkan seluruh isi array menjadi satu nilai akhir (misalnya menghitung total stok atau total belanja) menggunakan variabel penampung sementara (*accumulator*).

## Contoh Kode (`PusatMart` - `index.html`)
```javascript
const totalStok = katalogData.reduce((acc, p) => acc + Number(p.stok), 0);
```

## Pemahamanku & Prediksi
- acc berperan seperti wadah penampung yang nilai awalnya ditentukan oleh angka di paling kanan (0).
- Program mengunjungi setiap item p satu per satu dan menambahkan nilai p.stok ke dalam acc.
- Jika ada 3 produk dengan stok 10, 5, dan 15, lalu nilai awal 0 diubah menjadi 100, hasil akhirnya menjadi 130 (100 + 10 + 5 + 15), bukan perkalian.
