const produk1 = { nama: "Hoodie Boxy Fleece", kelompok: "Kelompok 1" };
const produk2 = { nama: "Teko Listrik 1.8L", kelompok: "Kelompok 2" };

function cekKategori(item) {
  // Jika item.kelompok === "Kelompok 1" hasilkan "Fashion", selain itu "Home Living"
  return item.kelompok === "Kelompok 1" ? "Fashion" : "Home Living";
}

console.log(cekKategori(produk1)); // Hasil: Fashion
console.log(cekKategori(produk2)); // Hasil: Home Living
