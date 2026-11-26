const keranjang = [
  { nama: "Kemeja Linen", harga: 135000, qty: 2 },
  { nama: "Wajan Anti Lengket", harga: 140000, qty: 1 },
  { nama: "Set Toples Kaca", harga: 95000, qty: 3 }
];

// Mengubah setiap item menjadi object baru berisi nama dan subtotal (harga * qty)
const ringkasanBelanja = keranjang.map((item) => ({
  nama: item.nama,
  subtotal: item.harga * item.qty
}));

console.log(ringkasanBelanja);
// Hasil: subtotal 270000, 140000, dan 285000
