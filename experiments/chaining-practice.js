const gudang = [
  { nama: "Kemeja Linen", kelompok: "Kelompok 1", stok: 12 },
  { nama: "Wajan Anti Lengket", kelompok: "Kelompok 2", stok: 8 },
  { nama: "Set Toples Kaca", kelompok: "Kelompok 2", stok: 15 }
];

// Saring "Kelompok 2" lalu jumlahkan seluruh stoknya mulai dari 0
const totalStokKelompok2 = gudang
  .filter((item) => item.kelompok === "Kelompok 2")
  .reduce((total, item) => total + item.stok, 0);

console.log(totalStokKelompok2); // Hasil: 23
