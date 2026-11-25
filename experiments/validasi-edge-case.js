const data1 = { nama_produk: "   ", harga: 45000 };
const data2 = { harga: 45000 }; // nama_produk tidak dikirim (undefined)
const data3 = { nama_produk: "  Kemeja Flanel  ", harga: 120000 };

function cekInputAman(body) {
  // Tolak jika nama_produk kosong/spasi saja/undefined ATAU harga <= 0
  if (!body.nama_produk?.trim() || body.harga <= 0) {
    return "Ditolak";
  }
  return "Diterima: " + body.nama_produk.trim();
}

console.log(cekInputAman(data1)); // Hasil: Ditolak
console.log(cekInputAman(data2)); // Hasil: Ditolak
console.log(cekInputAman(data3)); // Hasil: Diterima: Kemeja Flanel
