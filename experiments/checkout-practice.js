const produk = { nama: "Set Toples Kaca", harga: 95000, stok: 30 };

function prosesBeli(item, qty) {
  const totalBayar = item.harga * qty;
  const sisaStok = item.stok - qty;
  return {
    produk: item.nama,
    totalBayar: totalBayar,
    sisaStok: sisaStok
  };
}

console.log(prosesBeli(produk, 3)); // { produk: 'Set Toples Kaca', totalBayar: 285000, sisaStok: 27 }
