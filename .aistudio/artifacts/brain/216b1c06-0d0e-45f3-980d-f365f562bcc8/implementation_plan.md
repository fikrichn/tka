# Modul Mandiri 30 Soal Matematika & 30 Soal Bahasa Indonesia TKA SD

Ekspansi bank soal resmi TKA SD menjadi 60 butir soal lengkap berkualitas tinggi yang terbagi ke dalam dua menu mandiri: **30 Soal Matematika SD** dan **30 Soal Bahasa Indonesia SD**, dengan format 20 Soal Pilihan Ganda Biasa (A, B, C, D) dan 10 Soal Pilihan Ganda Kompleks (tabel Benar/Salah & multi-jawaban), durasi simulasi ujian 60 menit, serta integrasi meme lucu edukatif.

## User Review & Critical Decisions

> [!IMPORTANT]
> Berdasarkan konfirmasi pengguna pada sesi tanya jawab:
> - **Struktur Menu**: Menu terpisah dan mandiri untuk **Matematika SD (30 Soal)** dan **Bahasa Indonesia SD (30 Soal)** dengan opsi berganti modul secara mulus.
> - **Komposisi Format**: Masing-masing subjek memiliki **20 Pilihan Ganda Biasa** dan **10 Pilihan Ganda Kompleks** sesuai kisi-kisi resmi TKA SD Kemendikbud.
> - **Durasi Ujian**: Timer simulasi ujian disesuaikan menjadi **60 menit (3.600 detik)** untuk setiap paket 30 soal.

## 1. Overview & Core Concept

- **Apa yang Dibangun**: Aplikasi interaktif persiapan TKA SD yang menyediakan dua ruang belajar terdedikasi:
  1. **Menu Matematika SD (30 Soal)**: Mencakup materi Bilangan (Cacah, Pecahan senilai/desimal/persen, Operasi pecahan campuran & asli, KPK & FPB), Geometri & Pengukuran (Bangun datar, sudut segitiga, luas & keliling gabungan), dan Pengolahan Data (Diagram batang, garis, tabel frekuensi).
  2. **Menu Bahasa Indonesia SD (30 Soal)**: Mencakup Pemahaman Teks tekstual & inferensial, Evaluasi Teks fakta vs opini & simpulan, serta penguasaan Jenis Teks (Narasi, Deskripsi, Eksposisi, Persuasi, Prosedur).
- **Target Pengguna**: Siswa SD kelas 4, 5, dan 6 di Indonesia yang mempersiapkan Asesmen Nasional dan Tes Kemampuan Akademik (TKA) masuk jenjang SMP.
- **Nilai Tambah**: Suasana belajar yang menggembirakan bebas stres dengan sistem *gamification*, meme lucu anak sekolah, Web Audio synthesizers, serta analisis rapor performa standar resmi.

## 2. User Experience & Visual Design

- **Alur Pengguna**:
  1. *Pilihan Menu Utama*: Siswa memilih menu pelajaran di bilah navigasi atas: **📐 Matematika SD (30 Soal)** atau **📚 Bahasa Indonesia SD (30 Soal)**.
  2. *Pemilihan Mode Belajar*:
     - **Mode Latihan Santai**: Pembahasan instan, petunjuk (*hint*), pop-up meme penyemangat langsung keluar setelah menjawab, dan tombol interaktif *Tanya Miko AI*.
     - **Mode Simulasi Ujian TKA SD**: Timer hitung mundur 60 menit, kisi navigator 1-30, tombol ragu-ragu, dan rekapitulasi rapor di akhir.
  3. *Tampilan Soal & Stimulus Visual*:
     - Balok pecahan & lingkaran persen SVG interaktif.
     - Diagram batang data perpustakaan/ekstrakurikuler dengan sumbu koordinat presisi.
     - Diagram geometri sudut segitiga dan denah pekarangan.
     - Kartu teks bacaan dengan fitur pembesar font dan stabilo kuning (*highlighter*).
  4. *Evaluasi & Rapor Bintang Juara*:
     - Skor 0–100 dengan kategori resmi Kemendikbud (*Mahir*, *Cakap*, *Dasar*, *Bibit Juara*).
     - Breakdown akurasi per kisi-kisi topik dan format soal.
     - Kartu cetak hasil belajar (*print-friendly* certificate).

- **Identitas Visual & Tipografi**:
  - *Display Font*: `Fredoka` untuk judul, skor, dan punchline meme yang ramah anak.
  - *Body Font*: `Plus Jakarta Sans` dengan ukuran teks dan jarak baris yang nyaman dibaca anak SD.
  - *Color Discipline (60-30-10)*: 60% kanvas netral lembut (`#f8fafc`), 30% panel struktur putih & hairline borders, 10% aksen fungsional emas amber (`#f59e0b`), ungu edukasi (`#7c3aed`), dan hijau prestasi (`#059669`).
  - *Anti-Slop Restraint*: Tanpa pill badges bertumpuk, tanpa kode status buatan, murni antarmuka edukasi yang ramah dan interaktif.

## 3. Key Product Decisions & Trade-Offs

- **Pemisahan Modul Subjek (Dua Paket 30 Soal)**:
  - *Pendekatan*: Menu terpisah di header dengan tab aktif yang jelas. Setiap modul memiliki set 30 soal independen, navigasi 1-30 terpisah, dan rapor performa spesifik.
  - *Alasan*: Menghindari kelelahan kognitif anak saat belajar, memungkinkan fokus mendalam per bidang studi sesuai permintaan pengguna.
- **Rasio 20 Soal Pilihan Ganda Biasa & 10 Soal Kompleks**:
  - *Pendekatan*: 20 soal bertipe `single_choice` (opsi A, B, C, D) dan 10 soal bertipe `complex_statement` (tabel pernyataan Benar/Salah) serta `multiple_choice` (pilih lebih dari 1 jawaban benar).
  - *Alasan*: Merefleksikan standar asesmen terkini di mana penalaran majemuk sangat diuji.
- **Penyusunan Bank Soal Lokal + Generator AI Cadangan**:
  - *Pendekatan*: 60 butir soal lengkap ditulis secara terstruktur dalam kode dengan pembahasan step-by-step, ilustrasi visual, dan trik cepat. Server AI Gemini 3.8 Flash bertindak sebagai tutor pendamping (*Ask Mascot*) dan pembuat soal tantangan dinamis (*Bonus AI Challenge*).
  - *Alasan*: Menjamin aplikasi tetap 100% instan dan tidak mengalami lag saat anak mengerjakan 30 soal, sekaligus memberikan fitur AI modern ketika dibutuhkan.

## 4. Technical Architecture & Data Strategy

```
┌───────────────────────────────────────────────────────────────┐
│                    Top Navigation Header                      │
│   [Juara TKA SD] · [Matematika 30] · [B. Indonesia 30] · [60m]│
└──────────────┬────────────────────────────────┬───────────────┘
               │                                │
      ┌────────▼────────┐              ┌────────▼────────┐
      │ Matematika SD   │              │ B. Indonesia SD │
      │ 30 Butir Soal   │              │ 30 Butir Soal   │
      │ 20 PG + 10 PGK  │              │ 20 PG + 10 PGK  │
      └────────┬────────┘              └────────┬────────┘
               │                                │
    ┌──────────▼────────────────────────────────▼──────────┐
    │                Interactive Quiz Engine                │
    │  - Question Navigator (1 - 30 Grid)                   │
    │  - Timer Countdown (60 menit)                         │
    │  - Visualizer: Fraction Bars / Bar Charts / Geometry │
    │  - Text Reader: Stabilo Highlighter & Font Scaler     │
    │  - Single Choice & Complex Statement Table (B/S)      │
    └──────────┬────────────────────────────────┬──────────┘
               │                                │
    ┌──────────▼────────────┐        ┌──────────▼────────────┐
    │ Meme & Sound Engine   │        │ Performance Analytics │
    │ - Web Audio FX        │        │ - Skor Kemendikbud    │
    │ - Meme Popups         │        │ - Radar Kisi-kisi     │
    │ - Album Stiker (Dex)  │        │ - Cetak Kartu Rapor   │
    └───────────────────────┘        └───────────────────────┘
```

### Struktur Data Bank Soal (60 Butir Soal)
- `src/data/mathQuestions.ts`: 30 soal Matematika SD (Bilangan 12 soal, Geometri & Pengukuran 10 soal, Pengolahan Data 8 soal).
- `src/data/indoQuestions.ts`: 30 soal Bahasa Indonesia SD (Pemahaman Teks 10 soal, Evaluasi Teks 8 soal, Jenis Teks 12 soal).
- `src/data/questions.ts`: Indeks agregator dan pembagi modul.
- `src/App.tsx`: Pembaruan logika navigasi modul aktif (`activeModule: 'math' | 'indo'`), timer 60 menit per modul, dan pelacakan jawaban 1-30.
