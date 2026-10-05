# Tremvia · Prototipe UI/UX (Lomba 2026)

Prototipe statis semua layar utama Tremvia, sistem skrining gangguan saraf berbasis kamera. Repo ini **hanya berisi desain antarmuka**: HTML + CSS + sedikit JavaScript, tanpa backend, tanpa build. Semua data di dalamnya adalah contoh.

**Demo online:** http://myst-tech.com/lomba2026-07/
**Kanvas semua layar:** http://myst-tech.com/lomba2026-07/layar.html
**Design system:** http://myst-tech.com/lomba2026-07/design-system.html

## Daftar layar

| No | Layar | Berkas | Isi |
|---|---|---|---|
| 00 | Design System | `design-system.html` | Warna, tipografi, tombol, status, kartu, jarak, ilustrasi, ikon |
| 01 | Landing | `index.html` | Hero, tiga kartu jaminan, 6 tes, cara kerja, bukti, ajakan |
| 02 | Masuk | `masuk.html` | Pilih peran pasien / tenaga medis, akun demo |
| 03 | Daftar | `daftar.html` | Form pasien + manfaat |
| 04 | Dashboard pasien | `dashboard.html` | Langkah berikutnya, skor, 6 biomarker dengan tren mini |
| 05 | Skrining | `skrining.html` | Persiapan → instruksi per tes → rekam (simulasi) → selesai |
| 06 | Hasil | `hasil.html` | Skor gabungan, arti hasil, rincian per biomarker vs rentang normal |
| 07 | Riwayat | `riwayat.html` | Grafik tren per biomarker, tabel semua sesi |
| 08 | Portal Nakes | `dokter.html` | Ringkasan, daftar pasien, jadwal, kode undangan |
| 09 | Detail pasien | `dokter-pasien.html` | Profil, peringatan, peta perubahan 8 minggu, catatan klinis |

Alur utama pasien: **Landing → Daftar/Masuk → Dashboard → Skrining → Hasil → Riwayat**.

Semua layar responsif (desktop, tablet, HP 390 px) dan punya mode gelap (tombol bulan di kanan atas).

## Menjalankan di komputer sendiri

Tidak perlu instalasi. Buka `index.html` langsung di browser, atau jalankan server lokal supaya halaman `layar.html` tampil sempurna:

```bash
python -m http.server 8090
# buka http://localhost:8090
```

## Membawa ke Figma

Pilihan paling cepat adalah plugin **html.to.design** (gratis untuk beberapa impor):

1. Buka Figma, buat file baru.
2. Menu **Plugins → html.to.design**.
3. Tempel URL layar dari demo online, misalnya `http://myst-tech.com/lomba2026-07/dashboard.html`.
4. Pilih ukuran viewport: **1440** untuk desktop, **390** untuk HP. Centang mode terang atau gelap.
5. Ulangi untuk setiap layar di tabel di atas. Hasilnya berupa frame Figma yang bisa diedit (teks, warna, auto layout).

Supaya rapi di Figma:

- Buat **Local Variables** dari token warna di `design-system.html` (atau langsung dari `:root` di `assets/css/style.css`), lalu ganti warna hasil impor dengan variabel tersebut.
- Pasang font **Gabarito** (judul), **Hanken Grotesk** (isi), dan **JetBrains Mono** (angka). Ketiganya gratis di Google Fonts.
- Jadikan komponen: tombol, tag, status, kartu biomarker, baris pasien, kop aplikasi, tab bar HP.
- Halaman `layar.html` bisa dipakai sebagai acuan susunan artboard di kanvas Figma.

## Struktur

```
index.html, masuk.html, ...    satu berkas per layar
assets/css/style.css           token desain + semua komponen
assets/css/*.woff2             font (lisensi SIL Open Font License)
assets/js/app.js               tema, ikon, piktogram pose, animasi kecil
assets/img/                    logo dan foto
```

## Prinsip desain

- **Klinis tenang**: hijau sage untuk kerja, lime untuk aksen, netral hangat untuk bidang.
- **Tidak ada angka karangan di halaman publik**: angka akurasi selalu disertai asal-usulnya.
- **Ramah tremor**: tombol minimal 46 px, satu aksi utama per layar.
- **Status tidak hanya warna**: setiap status punya titik dan label teks.
- **Skrining, bukan diagnosis**: setiap hasil mengarahkan ke tenaga medis.

## Kredit

- Foto `hero-doctor.jpg` dan `consult.jpg`: StockSnap.io, lisensi CC0.
- Foto `hero-doctor-hijab.jpg`: mohamad azaam di Unsplash ([OQ0ssxkKtR0](https://unsplash.com/photos/OQ0ssxkKtR0)), Lisensi Unsplash.
- Font Gabarito, Hanken Grotesk, JetBrains Mono: SIL Open Font License.
- Gaya ikon mengikuti Lucide (ISC).

Nama pasien, dokter, rumah sakit, dan semua angka di layar aplikasi adalah fiktif.
