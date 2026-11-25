const katalog = [
  { kode: "FSH-01", toko: "Abdurrahman Menswear", harga: 135000 },
  { kode: "FSH-01", toko: "Maulana Denim Co.", harga: 240000 },
  { kode: "RT-01", toko: "Anisa Home Living", harga: 95000 }
];

function cariProduk(kodeDicari, tokoDicari) {
  // Mencocokkan kode produk sekaligus nama tokonya menggunakan parameter
  return katalog.find((item) => item.kode === kodeDicari && item.toko === tokoDicari);
}

console.log(cariProduk("FSH-01", "Maulana Denim Co."));
// Hasil: { kode: 'FSH-01', toko: 'Maulana Denim Co.', harga: 240000 }
