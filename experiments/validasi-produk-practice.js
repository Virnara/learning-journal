const reqBody1 = { nama_produk: "Tote Bag Kanvas", harga: 65000 };
const reqBody2 = { nama_produk: "", harga: -5000 };

function validasiProduk(body) {
  // Jika nama_produk kosong (!body.nama_produk) ATAU harga <= 0, tolak datanya
  if (!body.nama_produk || body.harga <= 0) {
    return "Data tidak valid";
  }
  return "Produk siap disimpan";
}

console.log(validasiProduk(reqBody1)); // Hasil: Produk siap disimpan
console.log(validasiProduk(reqBody2)); // Hasil: Data tidak valid
