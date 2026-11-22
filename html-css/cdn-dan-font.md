# Cara Kerja CDN dan CSS Selector Dasar

## Apa yang aku pelajari?
Baris `<script src="https://cdn.tailwindcss.com"></script>` mengambil paket desain Tailwind langsung dari internet (CDN). Sementara tanda `*` di CSS berfungsi memilih seluruh elemen di halaman agar memakai aturan gaya yang sama.

## Pemahamanku & Pengalaman
- Ketika dicoba tanpa koneksi internet, tampilan `PusatMart` berubah menjadi tulisan polos tanpa warna dan tidak terstruktur karena file Tailwind dari internet gagal dimuat.
- Pada kode awal terdapat tanda `-` sebelum `{ font-family: ... }` yang tidak dikenali oleh CSS, sehingga font *Plus Jakarta Sans* sebenarnya belum aktif.

## Eksperimen
Aku mengganti tanda `-` menjadi `*` pada bagian `font-family`, lalu me-refresh browser. Hasilnya, huruf di seluruh halaman langsung berubah dari yang tadinya terlihat agak tebal/gendut (font bawaan browser) menjadi lebih ramping dan rapi sesuai karakter *Plus Jakarta Sans*.
