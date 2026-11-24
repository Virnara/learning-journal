const daftarProduk = [
  { nama: "Jaket Denim Washed", kelompok: "Kelompok 1", stok: 15 },
  { nama: "Wajan Anti Lengket", kelompok: "Kelompok 2", stok: 0 },
  { nama: "Kemeja Koko Linen", kelompok: "Kelompok 1", stok: 20 }
];

// Saring produk yang masuk "Kelompok 1" DAN stoknya lebih dari 0
const produkTersedia = daftarProduk.filter((p) => {
  return p.kelompok === "Kelompok 1" && p.stok > 0;
});

console.log(produkTersedia);
// Hasil: Jaket Denim Washed & Kemeja Koko Linen (Wajan tersaring keluar)
