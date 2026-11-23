const barangToko1 = { nama_produk: "Kemeja Linen", harga: 135000 };
const barangToko2 = { nama_item: "Wajan Anti Lengket", harga_satuan: 140000 };
const barangToko3 = { nama_produk: "Lampu Belajar" };

function rapikanBarang(item) {
  return {
    nama: item.nama_produk || item.nama_item,
    harga: item.harga ?? item.harga_satuan ?? 0
  };
}

console.log(rapikanBarang(barangToko1)); // { nama: 'Kemeja Linen', harga: 135000 }
console.log(rapikanBarang(barangToko2)); // { nama: 'Wajan Anti Lengket', harga_satuan: 140000 }
console.log(rapikanBarang(barangToko3)); // { nama: 'Lampu Belajar', harga: 0 }
