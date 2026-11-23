# Mengambil Data Server dengan `fetch`, `async/await`, dan `try...catch`

## Apa yang aku pelajari?
- `fetch()` bertugas meminta data dari backend (`server.js`) ke frontend (`index.html`).
- `await` menyuruh program menunggu sampai data dari server benar-benar datang sebelum lanjut ke baris kode berikutnya.
- `try...catch` menjadi jaring pengaman agar halaman web tidak macet total ketika server mati atau koneksi terputus.

## Contoh Kode (`PusatMart` - `index.html`)
```javascript
async function muatDataCenter() {
  try {
    const res = await fetch("/api/center-data");
    const json = await res.json();
    if (json.sukses) {
      katalogData = json.katalog;
    }
  } catch (err) {
    document.getElementById("liveStatusText").textContent = "Koneksi Terputus";
  }
}
```
## Pemahamanku & Prediksi
- Jika server belum dijalankan, blok catch akan menangkap error jaringan dan mengubah status di layar menjadi "Koneksi Terputus".
- Jika kata await di depan fetch dihapus, baris res.json() akan error karena mencoba membaca data yang belum selesai dikirim oleh server.
