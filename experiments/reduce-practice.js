const keranjang = [
  { nama: "Kemeja Koko Linen", qty: 2 },
  { nama: "Wajan Anti Lengket", qty: 1 },
  { nama: "Set Toples Kaca", qty: 3 }
];

// Hitung total seluruh qty barang di keranjang mulai dari 0
const totalBarang = keranjang.reduce((total, item) => {
  return total + item.qty;
}, 0);

console.log(totalBarang); // Hasil: 6
