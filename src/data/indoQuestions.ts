import { Question } from '../types';

export const INDO_QUESTIONS_30: Question[] = [
  // ==========================================
  // 1. PEMAHAMAN TEKS: TEKSTUAL & INFERENSIAL (Soal 1-10)
  // ==========================================
  {
    id: 'bi_01',
    subject: 'Bahasa Indonesia',
    topic: 'Pemahaman Teks',
    subTopic: 'Pemahaman Tekstual dan Inferensial',
    title: 'Petualangan Kancil dan Pohon Ara Sahabat',
    type: 'single_choice',
    difficulty: 'Sedang',
    textGenre: 'Narasi',
    passageTitle: 'Kisah Sahabat di Tepi Sungai',
    passage:
      'Di sebuah hutan rimba yang asri, Si Kancil sedang beristirahat di bawah naungan pohon ara rindang. Tiba-tiba, ia mendengar suara rintihan lirih dari balik semak belukar berduri. Rupanya seekor anak berang-berang mungil bernama Boni terjerat jaring pemburu liar. Walaupun tubuh Kancil kecil dan kakinya bergetar melihat duri-duri tajam, ia tidak meninggalkan Boni. Kancil menggunakan ranting kayu kering yang kokoh untuk mengungkit simpul jaring secara perlahan hingga longgar. Kancil berkata, "Tenanglah Boni, kita tidak boleh panik saat menghadapi masalah rumit. Berpikir jernih selalu menghasilkan jalan keluar." Berkat kecerdikan dan kesabaran Kancil, Boni berhasil bebas sebelum sang pemburu kembali.',
    question:
      'Mengapa Kancil memilih menggunakan ranting kayu kering untuk membebaskan Boni daripada menggigit jaring secara langsung?',
    options: [
      'Karena Kancil takut tertusuk duri dan ingin mengungkit simpul tali secara aman dengan prinsip pengungkit.',
      'Karena Kancil diperintahkan oleh induk berang-berang untuk mencari ranting pohon.',
      'Karena jaring pemburu terbuat dari baja yang sangat panas terkena terik matahari.',
      'Karena Kancil ingin pamer kehebatan alat kepada hewan hutan lainnya.',
    ],
    correctAnswer: 0,
    hint: 'Perhatikan kalimat tentang semak berduri dan kehati-hatian Kancil mengungkit simpul jaring!',
    explanation: {
      summary: 'Kancil bertindak hati-hati menggunakan ranting agar tidak tertusuk duri dan simpul terbuka aman.',
      steps: [
        'Soal ini menanyakan alasan inferensial (motif logis tindakan tokoh).',
        'Teks menyatakan Kancil bergetar melihat duri tajam dan memilih mengungkit simpul secara perlahan dengan ranting.',
      ],
      concept: 'Pemahaman inferensial menggali motif tindakan tokoh berdasarkan konteks situasi dalam cerita.',
    },
  },
  {
    id: 'bi_02',
    subject: 'Bahasa Indonesia',
    topic: 'Pemahaman Teks',
    subTopic: 'Pemahaman Tekstual dan Inferensial',
    title: 'Amanat dan Pesan Moral Cerita Kancil',
    type: 'single_choice',
    difficulty: 'Mudah',
    textGenre: 'Narasi',
    passageTitle: 'Kisah Sahabat di Tepi Sungai',
    passage:
      'Kancil berkata kepada Boni yang terjerat jaring, "Tenanglah Boni, kita tidak boleh panik saat menghadapi masalah rumit. Berpikir jernih selalu menghasilkan jalan keluar." Berkat kecerdikan dan ketenangannya, Kancil berhasil membuka simpul jaring pemburu.',
    question:
      'Amanat atau pesan moral yang paling utama dari kutipan cerita di atas adalah...',
    options: [
      'Jangan bepergian sendirian ke dalam hutan rimba yang lebat.',
      'Tetaplah tenang dan berpikirlah jernih saat menghadapi kesulitan agar menemukan jalan keluar.',
      'Gunakan ranting kayu panjang saat berjalan di semak berduri.',
      'Hindari menolong teman yang terjerat perangkap pemburu liar.',
    ],
    correctAnswer: 1,
    hint: 'Amanat merupakan nasihat atau pesan kebaikan yang ingin disampaikan pengarang kepada pembaca!',
    explanation: {
      summary: 'Pesan moral utama adalah bersikap tenang dan berpikir jernih saat menghadapi masalah.',
      steps: [
        'Amanat tersurat dalam ucapan Kancil: "Berpikir jernih selalu menghasilkan jalan keluar."',
        'Opsi B secara tepat merangkum nilai budi pekerti yang terkandung dalam cerita.',
      ],
      concept: 'Menemukan amanat dan nilai moral dalam teks sastra narasi anak.',
    },
  },
  {
    id: 'bi_03',
    subject: 'Bahasa Indonesia',
    topic: 'Pemahaman Teks',
    subTopic: 'Pemahaman Tekstual dan Inferensial',
    title: 'Analisis Penokohan dan Watak Cerita Fabel',
    type: 'complex_statement',
    difficulty: 'Sedang',
    textGenre: 'Narasi',
    passageTitle: 'Kisah Semut Merah dan Burung Merpati',
    passage:
      'Seekor semut merah terpeleset ke sungai yang berarus deras dan hampir tenggelam. Melihat kejadian itu, burung merpati yang bertengger di dahan pohon segera memetik sehelai daun dan menjatuhkannya tepat di dekat semut. Semut pun naik ke atas daun dan selamat sampai ke tepian. Beberapa hari kemudian, seorang pemburu membidikkan senapannya ke arah burung merpati itu. Menyadari bahaya yang mengancam penolongnya, semut segera menggigit tumit pemburu sekuat tenaga. Pemburu terkejut dan tembakannya meleset, sehingga merpati dapat terbang menyelamatkan diri.',
    question:
      'Berdasarkan cerita di atas, tentukan apakah pernyataan analisis watak dan peristiwa berikut BENAR atau SALAH!',
    statements: [
      {
        id: 'bi3_stmt_1',
        text: 'Burung merpati memiliki watak peduli dan sigap menolong sesama makhluk hidup.',
        isCorrect: true,
        explanation: 'Merpati segera memetik daun untuk menyelamatkan semut yang tenggelam (BENAR).',
      },
      {
        id: 'bi3_stmt_2',
        text: 'Semut merah adalah tokoh yang tahu membalas budi kebaikan yang pernah diterimanya.',
        isCorrect: true,
        explanation: 'Semut menggigit kaki pemburu untuk menyelamatkan nyawa merpati (BENAR).',
      },
      {
        id: 'bi3_stmt_3',
        text: 'Tembakan pemburu berhasil mengenai sayap burung merpati hingga terluka parah.',
        isCorrect: false,
        explanation: 'Teks menyatakan tembakan meleset dan merpati berhasil terbang selamat (SALAH).',
      },
      {
        id: 'bi3_stmt_4',
        text: 'Latar tempat berlangsungnya awal cerita adalah di aliran sungai deras.',
        isCorrect: true,
        explanation: 'Peristiwa bermula saat semut terpeleset ke sungai berarus deras (BENAR).',
      },
    ],
    hint: 'Perhatikan watak tokoh dari tindakan nyata yang mereka lakukan dalam alur cerita!',
    explanation: {
      summary: 'Merpati berwatak suka menolong dan semut berwatak tahu membalas kebaikan.',
      steps: ['Merpati menolong semut dengan daun.', 'Semut membalas budi dengan menggigit pemburu.'],
      concept: 'Analisis unsur intrinsik teks narasi: tokoh, watak, latar, dan peristiwa.',
    },
  },
  {
    id: 'bi_04',
    subject: 'Bahasa Indonesia',
    topic: 'Pemahaman Teks',
    subTopic: 'Pemahaman Tekstual dan Inferensial',
    title: 'Makna Kata Kontekstual Bacaan Sains',
    type: 'single_choice',
    difficulty: 'Sedang',
    textGenre: 'Eksposisi',
    passageTitle: 'Fotosintesis Pabrik Energi Hijau',
    passage:
      'Klorofil merupakan zat hijau daun yang memegang peranan krusial dalam proses fotosintesis. Tanpa klorofil, tumbuhan hijau tidak akan mampu menyerap energi cahaya matahari untuk mengubah air dan karbon dioksida menjadi glukosa serta oksigen.',
    question:
      'Makna kata "krusial" pada kutipan teks di atas adalah...',
    options: ['Sangat penting / menentukan', 'Berbahaya dan rumit', 'Berwarna hijau pekat', 'Mudah sekali rusak'],
    correctAnswer: 0,
    hint: 'Perhatikan kalimat penjelas setelahnya: "Tanpa klorofil, tumbuhan tidak akan mampu...". Ini menandakan klorofil sangat penting!',
    explanation: {
      summary: 'Kata "krusial" bermakna genting, sangat penting, atau sangat menentukan.',
      steps: [
        'Kamus Besar Bahasa Indonesia (KBBI): krusial berarti gawat, genting, atau sangat menentukan.',
        'Konteks kalimat menegaskan klorofil adalah faktor utama penentu fotosintesis.',
      ],
      concept: 'Menentukan arti kata istilah teknis berdasarkan konteks kalimat bacaan.',
    },
  },
  {
    id: 'bi_05',
    subject: 'Bahasa Indonesia',
    topic: 'Pemahaman Teks',
    subTopic: 'Pemahaman Tekstual dan Inferensial',
    title: 'Informasi Tersurat Tokoh Penemu Indonesia',
    type: 'single_choice',
    difficulty: 'Mudah',
    textGenre: 'Narasi',
    passageTitle: 'Prof. B.J. Habibie dan Keretakan Sayap Pesawat',
    passage:
      'Profesor B.J. Habibie dikenal dunia sebagai penemu teori perambatan retak pada sayap pesawat terbang yang dikenal sebagai Teori Habibie. Teori ini mampu menghitung titik awal keretakan pada struktur baja pesawat hingga tingkat atom. Berkat penemuan brilian tersebut, industri penerbangan dunia menjadi jauh lebih aman dari ancaman kecelakaan akibat kelelahan logam pada pesawat.',
    question:
      'Berdasarkan teks di atas, apa manfaat utama dari Teori Habibie bagi industri penerbangan internasional?',
    options: [
      'Membuat pesawat terbang dapat bergerak secepat kecepatan suara.',
      'Menjadikan penerbangan dunia jauh lebih aman karena titik keretakan logam pesawat dapat dihitung sedini mungkin.',
      'Menghasilkan bahan bakar minyak pesawat yang paling murah di dunia.',
      'Menggantikan seluruh sayap pesawat baja dengan sayap berbahan serat karbon sintetis.',
    ],
    correctAnswer: 1,
    hint: 'Cari informasi tersurat di kalimat terakhir bacaan!',
    explanation: {
      summary: 'Manfaatnya adalah meningkatkan keselamatan penerbangan dengan menghitung keretakan logam.',
      steps: [
        'Teks menyebutkan: "Berkat penemuan brilian tersebut, industri penerbangan dunia menjadi jauh lebih aman dari ancaman kecelakaan...".',
        'Pilihan B adalah jawaban tersurat yang paling akurat.',
      ],
      concept: 'Menemukan informasi tersurat (literal comprehension) dalam teks profil tokoh.',
    },
  },
  {
    id: 'bi_06',
    subject: 'Bahasa Indonesia',
    topic: 'Pemahaman Teks',
    subTopic: 'Pemahaman Tekstual dan Inferensial',
    title: 'Inferensi Suasana dan Emosi Tokoh',
    type: 'single_choice',
    difficulty: 'HOTS',
    textGenre: 'Narasi',
    passageTitle: 'Malam Menjelang Pengumuman Juara',
    passage:
      'Raka terus membolak-balik tubuhnya di atas kasur tipis. Jam dinding kamarnya telah berdentang dua kali lewat tengah malam, namun kelopak matanya enggan terpejam. Di atas meja belajarnya, piala perak tahun lalu tampak berkilau tertimpa cahaya bulan. Jantungnya berdegup lebih kencang setiap kali mengingat juri olimpiade matematika yang menguji hasil penelitiannya tadi siang.',
    question:
      'Suasana hati atau emosi yang sedang dialami oleh tokoh Raka pada kutipan cerita di atas adalah...',
    options: [
      'Gelisah dan cemas bercampur harap menantikan pengumuman hasil perlombaan.',
      'Sangat marah karena juri olimpiade tidak adil saat memberi penilaian.',
      'Sedih dan berduka karena piala tahun lalunya telah berdebu.',
      'Kecewa dan putus asa karena merasa dirinya pasti gagal juara.',
    ],
    correctAnswer: 0,
    hint: 'Perhatikan detail fisik: tidak bisa tidur lewat tengah malam, membolak-balik badan, dan jantung berdegup kencang!',
    explanation: {
      summary: 'Raka merasa gelisah, cemas, dan berdebar-debar menanti hasil olimpiade.',
      steps: [
        'Petunjuk perilaku: sulit memejamkan mata lewat tengah malam, membolak-balik badan.',
        'Petunjuk fisiologis: jantung berdegup kencang membayangkan ujian para juri.',
        'Ini menunjukkan kondisi psikologis cemas dan penuh harap.',
      ],
      concept: 'Menganalisis emosi dan suasana batin tokoh melalui bahasa tubuh dan tindakan tersirat.',
    },
  },
  {
    id: 'bi_07',
    subject: 'Bahasa Indonesia',
    topic: 'Pemahaman Teks',
    subTopic: 'Pemahaman Tekstual dan Inferensial',
    title: 'Prediksi Kejadian Berdasarkan Alur Cerita',
    type: 'single_choice',
    difficulty: 'Sedang',
    textGenre: 'Narasi',
    passageTitle: 'Awan Gelap di Atas Pematang Sawah',
    passage:
      'Pak Tani melihat gumpalan awan hitam pekat mulai menutupi langit desa. Angin bertiup kencang menggoyangkan pepohonan kelapa, dan beberapa tetes air mulai jatuh membasahi tanah. Di pematang sawah, gabah padi hasil panen seharian masih terhampar luas di atas terpal plastik.',
    question:
      'Tindakan yang paling mungkin dan segera dilakukan oleh Pak Tani berdasarkan situasi di atas adalah...',
    options: [
      'Membakar sisa jerami di tengah sawah bersama anak-anaknya.',
      'Segera melipat dan menutupi terpal gabah padi agar tidak basah kehujanan.',
      'Membawa cangkul untuk membuat kolam penampungan air baru.',
      'Pergi ke warung desa untuk membeli pupuk tanaman padi.',
    ],
    correctAnswer: 1,
    hint: 'Awan hitam dan rintik air menandakan hujan lebat akan turun, gabah padi yang terhampar harus diselamatkan!',
    explanation: {
      summary: 'Pak Tani akan segera mengamankan gabah padi dari siraman hujan.',
      steps: [
        'Kondisi alam: langit hitam pekat, angin kencang, rintik air menandakan hujan lebat akan tiba.',
        'Kondisi padi: terhampar di terpal. Jika kehujanan, gabah akan rusak dan membusuk.',
        'Tindakan logis paling mendesak adalah melipat atau menutup terpal.',
      ],
      concept: 'Menyusun prediksi peristiwa logis berdasarkan hubungan sebab-akibat alur narasi.',
    },
  },
  {
    id: 'bi_08',
    subject: 'Bahasa Indonesia',
    topic: 'Pemahaman Teks',
    subTopic: 'Pemahaman Tekstual dan Inferensial',
    title: 'Hubungan Sebab-Akibat Peristiwa Cerita',
    type: 'multiple_choice',
    difficulty: 'HOTS',
    textGenre: 'Narasi',
    passageTitle: 'Belajar dari Burung Kolibri',
    passage:
      'Musim kemarau panjang membuat sumber mata air di kaki bukit mengering. Sebagian besar hewan hutan memutuskan bermigrasi meninggalkan sarang mereka. Namun, seekor burung kolibri kecil tetap giat membawa tetes-tetes embun pagi dengan paruh mungilnya untuk membasahi tanaman obat langka di dekat sarangnya. Berkat kegigihan burung kolibri, tanaman obat itu tetap bertahan hidup. Saat wabah penyakit menyerang hutan pada musim berikutnya, daun tanaman itulah yang menyelamatkan seluruh penghuni hutan dari kepunahan.',
    question:
      'Manakah DUA hubungan sebab-akibat yang BENAR berdasarkan bacaan di atas?',
    options: [
      'Tanaman obat langka tetap hidup karena burung kolibri setia menyiramnya dengan tetes embun pagi.',
      'Seluruh penghuni hutan terselamatkan dari wabah berkat khasiat daun tanaman obat yang dirawat kolibri.',
      'Mata air di kaki bukit mengering karena burung kolibri mengambil air terlalu banyak.',
      'Sebagian besar hewan hutan pergi meninggalkan bukit karena diserang wabah penyakit mematikan.',
    ],
    correctAnswers: [0, 1],
    hint: 'Perhatikan kalimat "Berkat kegigihan kolibri..." dan "Saat wabah penyakit menyerang... daun tanaman itulah yang menyelamatkan"!',
    explanation: {
      summary: 'Opsi A dan B menyajikan hubungan kausalitas yang sahih sesuai alur teks.',
      steps: [
        'Sebab 1: Kolibri menyiram tanaman -> Akibat 1: Tanaman obat tetap hidup (Opsi A BENAR).',
        'Sebab 2: Daun obat tersedia saat wabah -> Akibat 2: Penghuni hutan selamat (Opsi B BENAR).',
      ],
      concept: 'Menganalisis jalinan kausalitas (sebab-akibat) dalam teks cerita fabel.',
    },
  },
  {
    id: 'bi_09',
    subject: 'Bahasa Indonesia',
    topic: 'Pemahaman Teks',
    subTopic: 'Pemahaman Tekstual dan Inferensial',
    title: 'Latar Waktu dan Tempat Peristiwa',
    type: 'single_choice',
    difficulty: 'Mudah',
    textGenre: 'Narasi',
    passageTitle: 'Gemerlap Kunang-kunang di Kebun Nenek',
    passage:
      'Suara jangkrik bersahut-sahutan di bawah rumpun bambu. Di ufuk barat, semburat jingga perlahan berganti menjadi tirai malam bertabur bintang. Bintang dan adik-adiknya duduk di teras bambu rumah panggung Nenek sambil mengamati kerlip ratusan kunang-kunang yang menari di antara semak melati.',
    question:
      'Latar waktu berlangsungnya peristiwa pada penggalan cerita di atas adalah...',
    options: ['Tengah hari benderang', 'Pagi hari saat fajar menyingsing', 'Malam hari menjelang larut', 'Pukul dua belas siang tepat'],
    correctAnswer: 2,
    hint: 'Perhatikan penanda waktu: suara jangkrik, tirai malam bertabur bintang, dan kerlip kunang-kunang!',
    explanation: {
      summary: 'Peristiwa terjadi pada malam hari.',
      steps: [
        'Petunjuk waktu: "suara jangkrik", "tirai malam bertabur bintang", "kerlip kunang-kunang".',
        'Semua detail tersebut merupakan penanda suasana malam hari.',
      ],
      concept: 'Mengidentifikasi latar waktu (setting of time) melalui citraan suasana cerita.',
    },
  },
  {
    id: 'bi_10',
    subject: 'Bahasa Indonesia',
    topic: 'Pemahaman Teks',
    subTopic: 'Pemahaman Tekstual dan Inferensial',
    title: 'Konflik Cerita dan Penyelesaian Masalah',
    type: 'complex_statement',
    difficulty: 'Sedang',
    textGenre: 'Narasi',
    passageTitle: 'Kerja Sama Robot Penyelamat Bencana',
    passage:
      'Dua robot cilik bernama Beep dan Bop bertugas mencari korban gempa di reruntuhan gedung tua. Beep memiliki capit yang sangat kuat namun roda penggeraknya terlalu lebar untuk melewati lorong sempit. Sebaliknya, Bop berbadan ramping dan lincah namun capitnya lemah untuk mengangkat puing beton. Awalnya mereka saling berdebat ingin maju sendiri. Namun setelah menyadari waktu korban sangat terbatas, mereka bersepakat: Bop masuk menerobos lorong untuk menemukan lokasi korban dan mengaitkan tali penarik, lalu Beep menarik bongkahan puing beton dari luar dengan tenaga capitnya yang perkasa.',
    question:
      'Tentukan apakah analisis konflik cerita di atas BENAR atau SALAH!',
    statements: [
      {
        id: 'bi10_stmt_1',
        text: 'Konflik awal cerita muncul akibat kedua robot saling membanggakan kelebihan dan ingin maju sendiri.',
        isCorrect: true,
        explanation: 'Disebutkan mereka awalnya saling berdebat ingin maju sendiri (BENAR).',
      },
      {
        id: 'bi10_stmt_2',
        text: 'Penyelesaian masalah tercapai saat kedua robot menyadari pentingnya bekerja sama memadukan kelebihan masing-masing.',
        isCorrect: true,
        explanation: 'Bop yang ramping menerobos lorong dan Beep yang kuat mengangkat puing beton (BENAR).',
      },
      {
        id: 'bi10_stmt_3',
        text: 'Robot Bop memiliki capit yang lebih bertenaga daripada robot Beep.',
        isCorrect: false,
        explanation: 'Beep yang memiliki capit kuat, sedangkan capit Bop lemah (SALAH).',
      },
      {
        id: 'bi10_stmt_4',
        text: 'Amanat cerita adalah kerja sama dan saling melengkapi kekurangan jauh lebih bermanfaat daripada bersaing sendirian.',
        isCorrect: true,
        explanation: 'Pesan moral kerja sama tampak jelas dari keberhasilan kedua robot (BENAR).',
      },
    ],
    hint: 'Perhatikan bagaimana kelemahan salah satu robot ditutupi oleh kelebihan robot yang lain!',
    explanation: {
      summary: 'Konflik ego diselesaikan melalui kolaborasi cerdas dan pembagian peran.',
      steps: ['Konflik: ingin maju sendiri.', 'Solusi: berbagi peran sesuai spesialisasi.'],
      concept: 'Struktur alur teks narasi: orientasi, komplikasi (konflik), dan resolusi.',
    },
  },

  // ==========================================
  // 2. EVALUASI TEKS: FAKTA, OPINI & KESIMPULAN (Soal 11-18)
  // ==========================================
  {
    id: 'bi_11',
    subject: 'Bahasa Indonesia',
    topic: 'Evaluasi Teks',
    subTopic: 'Menilai Fakta, Opini, dan Kesimpulan Informasi',
    title: 'Ancaman Sampah Mikroplastik di Laut Indonesia',
    type: 'complex_statement',
    difficulty: 'HOTS',
    textGenre: 'Eksposisi',
    passageTitle: 'Menyelamatkan Laut dari Bahaya Plastik',
    passage:
      'Sampah plastik telah menjadi ancaman nyata bagi kelestarian laut dunia. Berdasarkan data Kementerian Kelautan dan Perikanan (KKP) tahun 2023, diperkirakan lebih dari 600.000 ton sampah plastik mencemari wilayah perairan Nusantara setiap tahunnya. Plastik yang terombang-ambing di laut akan terurai oleh sinar matahari dan gelombang menjadi butiran sangat kecil yang disebut mikroplastik. Mikroplastik ini sering tertelan oleh ikan-ikan kecil yang mengira itu adalah plankton. Kondisi ini sangat memprihatinkan dan para ilmuwan meyakini bahwa kampanye pengurangan plastik sekali pakai merupakan langkah paling efektif yang wajib didukung oleh seluruh generasi muda Indonesia.',
    question:
      'Berdasarkan evaluasi informasi teks di atas, tentukan apakah pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 'bi11_stmt_1',
        text: 'Kalimat yang memuat data KKP 2023 tentang 600.000 ton sampah plastik per tahun tergolong kalimat FAKTA.',
        isCorrect: true,
        explanation: 'Berisi data kuantitatif yang bersumber dari lembaga resmi pemerintah (BENAR).',
      },
      {
        id: 'bi11_stmt_2',
        text: 'Pernyataan bahwa pengurangan plastik adalah langkah "paling efektif" tergolong kalimat OPINI.',
        isCorrect: true,
        explanation: 'Memuat kata penilaian subjektif "paling efektif" (BENAR).',
      },
      {
        id: 'bi11_stmt_3',
        text: 'Mikroplastik adalah jenis ikan kecil pemakan plankton di perairan laut dalam.',
        isCorrect: false,
        explanation: 'Mikroplastik adalah partikel remahan plastik terurai, bukan jenis ikan (SALAH).',
      },
      {
        id: 'bi11_stmt_4',
        text: 'Kesimpulan teks adalah mikroplastik merusak rantai makanan laut sehingga membutuhkan aksi nyata pengurangan sampah plastik.',
        isCorrect: true,
        explanation: 'Merangkum gagasan utama bahaya mikroplastik dan solusi pengurangan plastik (BENAR).',
      },
    ],
    hint: 'Fakta dapat dibuktikan kebenarannya dengan data, sedangkan opini memuat penilaian subjektif!',
    explanation: {
      summary: 'Fakta memuat data objektif, opini memuat pandangan subjektif atau saran.',
      steps: ['Fakta: data 600.000 ton dari KKP.', 'Opini: anggapan langkah "paling efektif".'],
      concept: 'Membedakan fakta dan opini serta menarik simpulan logis teks eksposisi.',
    },
  },
  {
    id: 'bi_12',
    subject: 'Bahasa Indonesia',
    topic: 'Evaluasi Teks',
    subTopic: 'Menilai Fakta, Opini, dan Kesimpulan Informasi',
    title: 'Gagasan Pokok Paragraf Sarapan Sehat',
    type: 'single_choice',
    difficulty: 'Sedang',
    textGenre: 'Eksposisi',
    passageTitle: 'Sarapan Sehat Bahan Bakar Otak Siswa',
    passage:
      'Sarapan bergizi seimbang memiliki peran sangat vital bagi kesiapan belajar anak di sekolah. Ketika anak sarapan dengan asupan karbohidrat kompleks, protein, dan serat, kadar gula darah dalam tubuhnya akan stabil sepanjang pagi. Akibatnya, daya konsentrasi, daya ingat, dan fokus anak saat mendengarkan penjelasan guru di kelas menjadi jauh lebih optimal. Sebaliknya, anak yang sering melewatkan sarapan cenderung cepat lelah, mengantuk, dan mudah kehilangan konsentrasi sebelum jam istirahat pertama.',
    question:
      'Gagasan pokok atau ide utama dari paragraf eksposisi di atas adalah...',
    options: [
      'Anak-anak sekolah sangat menyukai menu sarapan manis.',
      'Pentingnya sarapan bergizi seimbang untuk mendukung konsentrasi dan kesiapan belajar anak.',
      'Jam istirahat pertama sekolah harus dimajukan karena siswa lapar.',
      'Menu sarapan pagi harus selalu mengandung karbohidrat dan lemak jenuh.',
    ],
    correctAnswer: 1,
    hint: 'Gagasan pokok terletak pada kalimat utama di awal paragraf tentang peran vital sarapan bagi kesiapan belajar!',
    explanation: {
      summary: 'Ide pokok paragraf adalah pentingnya sarapan bergizi bagi daya konsentrasi siswa.',
      steps: [
        'Kalimat utama berada di awal: "Sarapan bergizi seimbang memiliki peran sangat vital bagi kesiapan belajar anak..."',
        'Kalimat-kalimat berikutnya menjelaskan manfaat konsentrasi dan kerugian jika tidak sarapan.',
      ],
      concept: 'Menentukan ide pokok paragraf deduktif dalam teks eksposisi.',
    },
  },
  {
    id: 'bi_13',
    subject: 'Bahasa Indonesia',
    topic: 'Evaluasi Teks',
    subTopic: 'Menilai Fakta, Opini, dan Kesimpulan Informasi',
    title: 'Membedakan Kalimat Fakta dan Opini',
    type: 'single_choice',
    difficulty: 'Mudah',
    textGenre: 'Eksposisi',
    passageTitle: 'Hutan Mangrove Sang Benteng Pesisir',
    passage:
      'Perhatikan empat kalimat berikut:\n' +
      '(1) Indonesia memiliki hutan mangrove seluas kurang lebih 3,36 juta hektare.\n' +
      '(2) Akar napas pohon mangrove dapat memecah energi gelombang tsunami hingga 50 persen.\n' +
      '(3) Menikmati matahari terbenam di hutan mangrove adalah pengalaman yang paling indah di dunia.\n' +
      '(4) Tanaman bakau berfungsi menyerap logam berat dan menyaring sedimen lumpur dari daratan.',
    question:
      'Kalimat yang merupakan kalimat OPINI pada kutipan teks di atas adalah kalimat nomor...',
    options: ['(1)', '(2)', '(3)', '(4)'],
    correctAnswer: 2,
    hint: 'Cari kalimat yang mengandung kata sifat subjektif seperti "paling indah di dunia"!',
    explanation: {
      summary: 'Kalimat (3) adalah opini karena menggunakan penilaian subjektif "paling indah di dunia".',
      steps: [
        'Kalimat (1), (2), dan (4) menyajikan fakta ilmiah dan luas lahan terukur.',
        'Kalimat (3) adalah ungkapan perasaan atau selera pribadi seseorang.',
      ],
      concept: 'Ciri kalimat opini: mengandung kata sifat superlatif dan penilaian pribadi.',
    },
  },
  {
    id: 'bi_14',
    subject: 'Bahasa Indonesia',
    topic: 'Evaluasi Teks',
    subTopic: 'Menilai Fakta, Opini, dan Kesimpulan Informasi',
    title: 'Simpulan Teks Siklus Air dan Pelestarian Tanah',
    type: 'single_choice',
    difficulty: 'Sedang',
    textGenre: 'Eksposisi',
    passageTitle: 'Air Hujan dan Resapan Tanah',
    passage:
      'Air hujan yang jatuh ke permukaan bumi sebagian akan mengalir di atas tanah dan sebagian lagi meresap ke dalam pori-pori tanah menjadi air tanah cadangan. Keberadaan pepohonan dengan perakaran lebat sangat membantu memperbesar penyerapan air hujan ke dalam tanah. Namun, penebangan hutan dan maraknya penutupan tanah dengan aspal dan beton di perkotaan menyebabkan air hujan tidak dapat meresap. Akibatnya, debit aliran permukaan meningkat drastis hingga memicu bencana banjir saat musim hujan dan kekeringan sumur saat musim kemarau.',
    question:
      'Simpulan yang paling tepat dari isi teks di atas adalah...',
    options: [
      'Penebangan pohon dan penutupan permukaan tanah menghambat peresapan air hujan sehingga memicu bencana banjir dan kekeringan.',
      'Air tanah cadangan akan selalu melimpah walaupun seluruh hutan ditebang dan diganti aspal beton.',
      'Siklus air hujan hanya terjadi di daerah pedesaan yang memiliki pepohonan rindang.',
      'Masyarakat perkotaan sebaiknya menampung air hujan di dalam ember besar agar tidak terjadi banjir.',
    ],
    correctAnswer: 0,
    hint: 'Simpulan merangkum hubungan sebab (hilangnya resapan pohon) dan akibat (banjir dan kekeringan)!',
    explanation: {
      summary: 'Penebangan pohon dan permukaan beton menghambat resapan air serta memicu banjir/kekeringan.',
      steps: [
        'Teks memaparkan fungsi akar pohon menyerap air dan dampak penutupan aspal/beton.',
        'Opsi A berhasil menyimpulkan keseluruhan pesan teks secara objektif dan padat.',
      ],
      concept: 'Menarik kesimpulan inferensial teks eksplanasi dan eksposisi lingkungan.',
    },
  },
  {
    id: 'bi_15',
    subject: 'Bahasa Indonesia',
    topic: 'Evaluasi Teks',
    subTopic: 'Menilai Fakta, Opini, dan Kesimpulan Informasi',
    title: 'Evaluasi Validitas Argumen Penulis',
    type: 'single_choice',
    difficulty: 'HOTS',
    textGenre: 'Persuasi',
    passageTitle: 'Membiasakan Hidup Bersih di Kantin Sekolah',
    passage:
      'Banyak siswa terbiasa meninggalkan piring dan gelas kotor di atas meja kantin setelah selesai makan. Sikap acuh tak acuh ini bukan hanya membuat meja makan berikutnya menjadi jorok dan mengundang lalat, tetapi juga menambah beban kerja petugas kebersihan sekolah yang jumlahnya terbatas. Jika kita ingin menjadi generasi yang beradab dan bertanggung jawab, marilah kita budayakan membawa piring kotor ke tempat cuci yang telah disediakan!',
    question:
      'Berdasarkan evaluasi isi teks, apakah argumen penulis di atas logis dan beralasan kuat?',
    options: [
      'Ya, sangat logis karena piring kotor yang ditinggalkan terbukti mengundang lalat pembawa kuman penyakit dan memberatkan petugas.',
      'Tidak logis, karena siswa sudah membayar makanan sehingga berhak meninggalkan piring di mana saja.',
      'Tidak logis, karena piring kotor di atas meja tidak ada hubungannya dengan kebersihan kantin.',
      'Ragu-ragu, karena membawa piring kotor adalah tugas kepala sekolah.',
    ],
    correctAnswer: 0,
    hint: 'Evaluasi apakah alasan-alasan yang diajukan penulis masuk akal dan didukung fakta kebersihan!',
    explanation: {
      summary: 'Argumen penulis sangat logis karena mengedepankan sanitasi dan rasa tanggung jawab sosial.',
      steps: [
        'Penulis menyajikan premis sebab-akibat yang nyata: piring kotor mengundang lalat dan membebani petugas.',
        'Solusi ajakan yang ditawarkan praktis dan mendidik karakter mandiri.',
      ],
      concept: 'Mengevaluasi kelogisan penalaran dan kekuatan argumen teks persuasi.',
    },
  },
  {
    id: 'bi_16',
    subject: 'Bahasa Indonesia',
    topic: 'Evaluasi Teks',
    subTopic: 'Menilai Fakta, Opini, dan Kesimpulan Informasi',
    title: 'Menilai Tindakan Tokoh Berdasarkan Norma',
    type: 'single_choice',
    difficulty: 'Sedang',
    textGenre: 'Narasi',
    passageTitle: 'Dompet yang Tertinggal di Angkutan Kota',
    passage:
      'Saat menumpang angkutan kota pulang sekolah, Doni melihat sebuah dompet kulit tebal terjatuh di bawah kursi penumpang di depannya. Di dalam dompet tersebut tersimpan uang tunai yang cukup banyak dan sebuah kartu identitas bertuliskan alamat seorang kakek pedagang sayur. Teman sebangku Doni berbisik, "Ambil saja uangnya Don, kita bisa beli mainan baru!" Namun, Doni menolak dan meminta sopir angkot mengantarnya singgah ke alamat yang tertera untuk menyerahkan dompet itu kepada pemiliknya.',
    question:
      'Penilaian yang paling tepat terhadap tindakan tokoh Doni adalah...',
    options: [
      'Doni bertindak sangat terpuji dan jujur karena mengembalikan hak milik orang lain yang sedang tertimpa musibah.',
      'Doni bertindak bodoh karena melewatkan kesempatan mendapatkan uang jajan cuma-cuma.',
      'Doni bertindak berlebihan karena seharusnya ia membagikan uang dompet itu ke semua penumpang angkot.',
      'Doni bersikap sombong karena ingin dipuji oleh sopir angkutan kota.',
    ],
    correctAnswer: 0,
    hint: 'Gunakan norma kejujuran dan budi pekerti dalam menilai perbuatan tokoh!',
    explanation: {
      summary: 'Tindakan Doni mencerminkan nilai integritas dan kejujuran tinggi.',
      steps: [
        'Doni menolak ajakan mengambil uang yang bukan haknya.',
        'Ia berinisiatif mengembalikan dompet kepada sang kakek.',
        'Tindakan ini sangat patut dicontoh dan mencerminkan akhlak terpuji.',
      ],
      concept: 'Evaluasi nilai moral dan penilaian karakter tokoh narasi.',
    },
  },
  {
    id: 'bi_17',
    subject: 'Bahasa Indonesia',
    topic: 'Evaluasi Teks',
    subTopic: 'Menilai Fakta, Opini, dan Kesimpulan Informasi',
    title: 'Analisis Pernyataan Benar/Salah Teks Eksplanasi Energi',
    type: 'complex_statement',
    difficulty: 'HOTS',
    textGenre: 'Eksposisi',
    passageTitle: 'Energi Matahari Sumber Listrik Ramah Lingkungan',
    passage:
      'Panel surya atau sel fotovoltaik adalah perangkat teknologi yang mengubah energi radiasi sinar matahari langsung menjadi energi listrik arus searah (DC). Penggunaan energi surya tidak menghasilkan emisi gas rumah kaca saat beroperasi sehingga dinilai ramah lingkungan. Di Indonesia yang terletak di garis khatulistiwa, intensitas sinar matahari melimpah sepanjang tahun dengan rata-rata 4,8 kWh per meter persegi per hari. Namun, biaya pemasangan awal panel surya berkualitas tinggi saat ini masih relatif mahal bagi sebagian besar rumah tangga.',
    question:
      'Berdasarkan evaluasi informasi teks di atas, tentukan apakah setiap pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 'bi17_stmt_1',
        text: 'Indonesia memiliki potensi energi surya melimpah karena posisinya berada di wilayah khatulistiwa tropis.',
        isCorrect: true,
        explanation: 'Disebutkan intensitas sinar matahari melimpah 4,8 kWh/m²/hari karena di khatulistiwa (BENAR).',
      },
      {
        id: 'bi17_stmt_2',
        text: 'Panel surya menghasilkan asap pembakaran beracun yang tebal ketika mengubah sinar matahari menjadi listrik.',
        isCorrect: false,
        explanation: 'Teks menyatakan panel surya tidak menghasilkan emisi gas saat beroperasi (SALAH).',
      },
      {
        id: 'bi17_stmt_3',
        text: 'Salah satu kendala penerapan panel surya rumah tangga saat ini adalah biaya investasi pemasangan awal yang masih tinggi.',
        isCorrect: true,
        explanation: 'Sesuai dengan kalimat penutup teks tentang biaya pemasangan yang relatif mahal (BENAR).',
      },
      {
        id: 'bi17_stmt_4',
        text: 'Panel fotovoltaik langsung menghasilkan listrik arus bolak-balik (AC) tegangan tinggi tanpa konverter.',
        isCorrect: false,
        explanation: 'Panel surya menghasilkan listrik arus searah (DC), bukan AC (SALAH).',
      },
    ],
    hint: 'Periksa setiap detail teknis yang disebutkan dalam teks eksposisi secara cermat!',
    explanation: {
      summary: 'Panel surya menghasilkan energi ramah lingkungan dengan memanfaatkan lokasi tropis Indonesia.',
      steps: ['Kelebihan: tanpa emisi dan potensi melimpah.', 'Tantangan: biaya awal relatif tinggi.'],
      concept: 'Evaluasi teks informasional ilmu pengetahuan dan teknologi terbarukan.',
    },
  },
  {
    id: 'bi_18',
    subject: 'Bahasa Indonesia',
    topic: 'Evaluasi Teks',
    subTopic: 'Menilai Fakta, Opini, dan Kesimpulan Informasi',
    title: 'Pernyataan Sesuai Isi Bacaan Pertanian Hidroponik',
    type: 'multiple_choice',
    difficulty: 'HOTS',
    textGenre: 'Eksposisi',
    passageTitle: 'Bercocok Tanam Modern dengan Hidroponik',
    passage:
      'Hidroponik merupakan teknik budi daya tanaman dengan memanfaatkan air bernutrisi tanpa menggunakan media tanah. Metode ini menjadi solusi pertanian efisien di wilayah perkotaan yang minim lahan pekarangan. Tanaman hidroponik seperti selada dan bayam tumbuh 30 hingga 50 persen lebih cepat dibandingkan tanaman di media tanah karena akar langsung menyerap nutrisi terlarut. Selain itu, sistem hidroponik menghemat penggunaan air hingga 70 persen karena air resirkulasi terus dialirkan dalam pipa tertutup.',
    question:
      'Pilihlah DUA pernyataan yang SESUAI dengan isi teks eksposisi di atas!',
    options: [
      'Pertanian hidroponik dapat menghemat penggunaan air hingga 70 persen melalui sistem pipa tertutup.',
      'Tanaman hidroponik dapat tumbuh lebih cepat karena akar tanaman langsung menyerap larutan nutrisi.',
      'Sistem hidroponik membutuhkan lahan tanah yang sangat luas dan tanah lempung berlumpur.',
      'Tanaman yang dibudidayakan secara hidroponik membutuhkan waktu panen dua kali lebih lama.',
    ],
    correctAnswers: [0, 1],
    hint: 'Cari dua opsi yang secara eksplisit didukung oleh kalimat dalam teks bacaan!',
    explanation: {
      summary: 'Opsi A dan B merupakan fakta yang secara langsung dinyatakan di dalam teks bacaan.',
      steps: [
        'Opsi A BENAR: menghemat air 70% dengan resirkulasi pipa tertutup.',
        'Opsi B BENAR: tumbuh 30-50% lebih cepat karena nutrisi langsung diserap akar.',
      ],
      concept: 'Mengevaluasi kesesuaian pernyataan dengan fakta teks eksplanasi ilmiah.',
    },
  },

  // ==========================================
  // 3. JENIS TEKS: NARASI, DESKRIPSI, EKSPOSISI, PERSUASI, PROSEDUR (Soal 19-30)
  // ==========================================
  {
    id: 'bi_19',
    subject: 'Bahasa Indonesia',
    topic: 'Jenis Teks',
    subTopic: 'Teks Prosedur dan Urutan Langkah',
    title: 'Urutan Prosedur Membuat Pot Siram Otomatis',
    type: 'single_choice',
    difficulty: 'Sedang',
    textGenre: 'Prosedur',
    passageTitle: 'Membuat Pot Siram Otomatis Botol Bekas',
    passage:
      'Perhatikan petunjuk kerja acak berikut:\n' +
      '(1) Masukkan sumbu kain flanel melalui lubang tutup botol hingga menyentuh dasar botol bawah.\n' +
      '(2) Potong botol plastik bekas air mineral menjadi dua bagian menggunakan gunting yang aman.\n' +
      '(3) Masukkan tanah subur dan bibit tanaman hias ke potongan bagian atas botol yang sudah terpasang sumbu.\n' +
      '(4) Buatlah lubang kecil di tengah tutup botol menggunakan paku hangat dengan bantuan orang dewasa.\n' +
      '(5) Isi bagian bawah botol dengan air bersih, lalu letakkan bagian atas botol secara terbalik di atasnya.',
    question:
      'Urutan langkah yang tepat dan padu dalam membuat pot siram otomatis dari botol bekas adalah...',
    options: [
      '(2) - (4) - (1) - (5) - (3)',
      '(2) - (1) - (4) - (3) - (5)',
      '(4) - (2) - (1) - (5) - (3)',
      '(2) - (4) - (5) - (1) - (3)',
    ],
    correctAnswer: 0,
    hint: 'Mulai dari memotong botol, melubangi tutup, memasang sumbu, mengisi wadah air bawah, lalu menanam bibit!',
    explanation: {
      summary: 'Urutan langkah yang logis adalah (2) -> (4) -> (1) -> (5) -> (3).',
      steps: [
        '(2) Potong botol jadi 2 bagian.',
        '(4) Lubangi tutup botol.',
        '(1) Pasang sumbu kain flanel.',
        '(5) Isi air wadah bawah dan tumpuk bagian atas terbalik.',
        '(3) Tanam bibit dengan tanah subur.',
      ],
      concept: 'Menyusun urutan teks prosedur secara kronologis dan padu.',
    },
  },
  {
    id: 'bi_20',
    subject: 'Bahasa Indonesia',
    topic: 'Jenis Teks',
    subTopic: 'Teks Persuasi dan Ciri Kebahasaan',
    title: 'Kalimat Ajakan Utama Teks Persuasi',
    type: 'single_choice',
    difficulty: 'Mudah',
    textGenre: 'Persuasi',
    passageTitle: 'Gerakan Sahabat Hemat Listrik Sekolah',
    passage:
      'Pembangkit listrik masih banyak membakar batu bara yang melepaskan gas rumah kaca ke atmosfer. Membiarkan lampu kelas menyala di siang hari yang terik adalah bentuk pemborosan sumber daya bumi. Oleh karena itu, marilah kita mulai kebiasaan baik dengan selalu mematikan lampu dan kipas angin sebelum meninggalkan kelas! Satu tindakan kecil kita hari ini akan menjaga bumi tetap lestari untuk generasi masa depan.',
    question:
      'Kalimat yang berfungsi sebagai kalimat ajakan atau persuasif utama dalam kutipan di atas adalah...',
    options: [
      'Oleh karena itu, marilah kita mulai kebiasaan baik dengan selalu mematikan lampu dan kipas angin sebelum meninggalkan kelas!',
      'Pembangkit listrik masih banyak membakar batu bara yang melepaskan gas rumah kaca ke atmosfer.',
      'Membiarkan lampu kelas menyala di siang hari yang terik adalah bentuk pemborosan sumber daya bumi.',
      'Satu tindakan kecil kita hari ini akan menjaga bumi tetap lestari untuk generasi masa depan.',
    ],
    correctAnswer: 0,
    hint: 'Ciri utama kalimat persuasi adalah kata ajakan seperti "marilah", "ayo", atau "hendaklah"!',
    explanation: {
      summary: 'Kalimat ajakan ditandai oleh kata imperatif persuasif "marilah".',
      steps: ['Ciri kebahasaan teks persuasi adalah menggunakan kata ajakan (mari, ayo).'],
      concept: 'Mengidentifikasi kalimat imperatif ajakan pada teks persuasi.',
    },
  },
  {
    id: 'bi_21',
    subject: 'Bahasa Indonesia',
    topic: 'Jenis Teks',
    subTopic: 'Teks Deskripsi dan Pencerapan Panca Indra',
    title: 'Pencerapan Indra Penglihatan pada Teks Deskripsi',
    type: 'multiple_choice',
    difficulty: 'Sedang',
    textGenre: 'Deskripsi',
    passageTitle: 'Pesona Suasana Pagi di Danau Toba',
    passage:
      'Pagi hari di tepian Danau Toba menyuguhkan pemandangan yang memanjakan mata. Permukaan air danau yang berwarna biru kehijauan terbentang tenang bagai cermin raksasa. Angin pegunungan bertiup sepoi-sepoi membawa udara dingin yang segar menyentuh kulit. Dari kejauhan, pulau Samosir tampak anggun diselimuti kabut putih tipis yang perlahan terangkat oleh hangatnya mentari pagi. Gemercik air yang lembut memecah keheningan bersama kicau burung pipit di pucuk pohon pinus yang rimbun.',
    question:
      'Manakah DUA ungkapan yang melibatkan pencerapan indra PENGLIHATAN (visual) pada teks deskripsi di atas?',
    options: [
      'Permukaan air danau yang berwarna biru kehijauan terbentang tenang bagai cermin raksasa.',
      'Pulau Samosir tampak anggun diselimuti kabut putih tipis.',
      'Angin pegunungan membawa udara dingin yang segar menyentuh kulit.',
      'Gemercik air yang lembut memecah keheningan bersama kicau burung pipit.',
    ],
    correctAnswers: [0, 1],
    hint: 'Pilihlah kalimat yang menggambarkan warna, wujud panorama rupa yang ditangkap mata!',
    explanation: {
      summary: 'Opsi A dan B menggambarkan visual warna air dan kabut tipis di atas pulau.',
      steps: [
        'Opsi A: warna air biru kehijauan bagai cermin (penglihatan).',
        'Opsi B: tampak anggun diselimuti kabut putih (penglihatan).',
        'Opsi C: udara dingin di kulit (peraba/taktil).',
        'Opsi D: gemercik air dan kicau burung (pendengaran/auditori).',
      ],
      concept: 'Citraan panca indra (visual, taktil, auditori) dalam teks deskripsi.',
    },
  },
  {
    id: 'bi_22',
    subject: 'Bahasa Indonesia',
    topic: 'Jenis Teks',
    subTopic: 'Teks Prosedur dan Urutan Langkah',
    title: 'Petunjuk Membuat Pupuk Kompos Daun Kering',
    type: 'single_choice',
    difficulty: 'Sedang',
    textGenre: 'Prosedur',
    passageTitle: 'Langkah Membuat Kompos Organik',
    passage:
      'Setelah sampah daun kering dikumpulkan dan dicacah kecil-kecil, masukkan ke dalam wadah komposter. Siramkan larutan bioaktivator gula merah secukupnya hingga lembap merata. [...]. Terakhir, tutup wadah komposter dengan rapat dan biarkan terfermentasi selama 4 sampai 6 minggu dengan sesekali diaduk seminggu sekali.',
    question:
      'Kalimat petunjuk yang paling tepat untuk mengisi bagian rumpang [...] pada teks prosedur di atas adalah...',
    options: [
      'Campurkan lapisan tanah gembur atau pupuk kandang di atas tumpukan daun tersebut sebagai sumber mikroorganisme pengurai.',
      'Semprotkan cat minyak warna hijau agar kompos terlihat menarik dipandang mata.',
      'Jemur wadah komposter di atas genteng rumah agar daun menjadi kering kerontang.',
      'Rebus daun kering tersebut di dalam panci air mendidih selama 2 jam.',
    ],
    correctAnswer: 0,
    hint: 'Pembuatan kompos membutuhkan mikroorganisme pengurai yang ada pada tanah atau pupuk kandang!',
    explanation: {
      summary: 'Menambahkan tanah gembur diperlukan untuk menyuplai bakteri pengurai sampah organik.',
      steps: [
        'Proses pengomposan membutuhkan bahan organik, bioaktivator, dan mikroba pengurai.',
        'Opsi A menyajikan langkah ilmiah yang tepat dan koheren dengan kalimat sebelum dan sesudahnya.',
      ],
      concept: 'Melengkapi teks prosedur rumpang dengan kalimat yang padu dan koheren.',
    },
  },
  {
    id: 'bi_23',
    subject: 'Bahasa Indonesia',
    topic: 'Jenis Teks',
    subTopic: 'Teks Narasi dan Ciri Kebahasaan',
    title: 'Ciri-Ciri Teks Narasi',
    type: 'single_choice',
    difficulty: 'Mudah',
    textGenre: 'Narasi',
    passageTitle: 'Ciri Teks Naratif',
    passage:
      'Sebuah teks menceritakan seorang anak bernama Arya yang tersesat di hutan saat mencari kayu bakar. Teks tersebut menyajikan urutan waktu kejadian dari pagi hari, siang yang menegangkan ketika bertemu serigala, hingga petang hari saat ia berhasil diselamatkan ayahnya.',
    question:
      'Teks tersebut tergolong ke dalam jenis teks narasi karena...',
    options: [
      'Menyajikan rangkaian peristiwa kronologis yang dialami oleh tokoh dalam kurun waktu tertentu.',
      'Memuat petunjuk teknis langkah demi langkah untuk membuat suatu benda.',
      'Berisi bujukan atau ajakan untuk mematuhi peraturan kehutanan.',
      'Menggambarkan bentuk fisik serigala secara ilmiah dan mendalam.',
    ],
    correctAnswer: 0,
    hint: 'Ciri utama teks narasi adalah adanya tokoh, alur cerita, dan urutan kronologis peristiwa!',
    explanation: {
      summary: 'Teks narasi menyajikan kisah peristiwa yang dialami tokoh secara kronologis.',
      steps: ['Ciri narasi: tokoh, latar, alur, konflik, dan kronologi waktu.'],
      concept: 'Mengidentifikasi karakteristik pembeda teks narasi dibandingkan jenis teks lain.',
    },
  },
  {
    id: 'bi_24',
    subject: 'Bahasa Indonesia',
    topic: 'Jenis Teks',
    subTopic: 'Teks Deskripsi dan Pencerapan Panca Indra',
    title: 'Objek dan Sudut Pandang Teks Deskripsi',
    type: 'single_choice',
    difficulty: 'Sedang',
    textGenre: 'Deskripsi',
    passageTitle: 'Si Belang Kucing Kesayangan Rara',
    passage:
      'Belang adalah kucing kampung jantan peliharaan Rara yang sangat menggemaskan. Bulunya yang tebal memadukan tiga warna corak belang oranye, hitam, dan putih bersih di bagian dadanya. Ekornya panjang melengkung seperti tanda tanya dengan ujung berwarna putih salju. Matanya yang bulat bundar berkilau kuning amber saat terkena sinar lampu. Hidungnya kecil berwarna merah muda dan selalu basah sehat.',
    question:
      'Bagian tubuh Belang yang dideskripsikan menyerupai tanda tanya dengan ujung putih salju adalah...',
    options: ['Kedua daun telinganya', 'Ekornya yang panjang melengkung', 'Kaki depannya', 'Kumis putih di sekitar hidungnya'],
    correctAnswer: 1,
    hint: 'Perhatikan kalimat: "Ekornya panjang melengkung seperti tanda tanya..."!',
    explanation: {
      summary: 'Bagian tubuh yang menyerupai tanda tanya adalah ekornya yang panjang melengkung.',
      steps: ['Teks secara tersurat menyebutkan bentuk ekor seperti tanda tanya dengan ujung putih.'],
      concept: 'Menemukan informasi deskriptif detail fisik objek dalam teks deskripsi.',
    },
  },
  {
    id: 'bi_25',
    subject: 'Bahasa Indonesia',
    topic: 'Jenis Teks',
    subTopic: 'Teks Eksposisi dan Struktur Argumentasi',
    title: 'Struktur Tesis, Argumentasi, dan Penegasan Ulang',
    type: 'complex_statement',
    difficulty: 'HOTS',
    textGenre: 'Eksposisi',
    passageTitle: 'Manfaat Membiasakan Membaca Buku Setiap Hari',
    passage:
      '(1) Membaca buku secara rutin setiap hari merupakan salah satu investasi terbaik untuk mencerdaskan daya nalar generasi muda.\n' +
      '(2) Berbagai riset neurologi membuktikan bahwa membaca dapat merangsang koneksi sel-sel saraf otak dan memperkaya perbendaharaan kosakata anak hingga ribuan kata baru.\n' +
      '(3) Selain itu, anak yang gemar membaca terbukti memiliki daya empati yang lebih tinggi karena terbiasa memahami sudut pandang berbagai tokoh dalam buku cerita.\n' +
      '(4) Oleh karena itu, sudah sepatutnya orang tua dan pihak sekolah bersama-sama memfasilitasi pojok baca yang nyaman agar minat baca anak terus bertumbuh subur.',
    question:
      'Tentukan apakah analisis struktur teks eksposisi di atas BENAR atau SALAH!',
    statements: [
      {
        id: 'bi25_stmt_1',
        text: 'Kalimat (1) berfungsi sebagai bagian TESIS (pernyataan pendapat awal penulis).',
        isCorrect: true,
        explanation: 'Kalimat (1) memperkenalkan topik utama investasi mencerdaskan nalar (BENAR).',
      },
      {
        id: 'bi25_stmt_2',
        text: 'Kalimat (2) dan (3) berfungsi sebagai rangkaian ARGUMENTASI yang didukung riset dan bukti ilmiah.',
        isCorrect: true,
        explanation: 'Menyajikan bukti neurologi dan empati sebagai penjelas pendukung (BENAR).',
      },
      {
        id: 'bi25_stmt_3',
        text: 'Kalimat (4) berfungsi sebagai bagian PENEGASAN ULANG (rekomendasi kesimpulan).',
        isCorrect: true,
        explanation: 'Diawali konjungsi simpulan "Oleh karena itu" dan ajakan memfasilitasi pojok baca (BENAR).',
      },
      {
        id: 'bi25_stmt_4',
        text: 'Teks di atas merupakan contoh teks fabel fiksi tentang dunia binatang khayalan.',
        isCorrect: false,
        explanation: 'Teks di atas adalah teks eksposisi ilmiah, bukan fabel fiksi (SALAH).',
      },
    ],
    hint: 'Ingat struktur utama teks eksposisi: Tesis -> Rangkaian Argumen -> Penegasan Ulang Rekomendasi!',
    explanation: {
      summary: 'Struktur teks eksposisi terdiri atas tesis, rangkaian argumen pendukung, dan penegasan ulang.',
      steps: ['(1) Tesis, (2)-(3) Argumen, (4) Penegasan ulang.'],
      concept: 'Menganalisis struktur retorika teks eksposisi ilmiah.',
    },
  },
  {
    id: 'bi_26',
    subject: 'Bahasa Indonesia',
    topic: 'Jenis Teks',
    subTopic: 'Teks Persuasi dan Ciri Kebahasaan',
    title: 'Konjungsi Kausalitas pada Teks Persuasif',
    type: 'single_choice',
    difficulty: 'Sedang',
    textGenre: 'Persuasi',
    passageTitle: 'Pentingnya Sarapan Sehat',
    passage:
      'Kita harus sarapan pagi secara teratur [...] tubuh kita memerlukan energi yang cukup untuk beraktivitas dan berkonsentrasi di sekolah sepanjang hari.',
    question:
      'Konjungsi kausalitas (sebab) yang paling tepat untuk melengkapi bagian rumpang pada kalimat di atas adalah...',
    options: ['karena', 'walaupun', 'bahkan', 'seandainya'],
    correctAnswer: 0,
    hint: 'Hubungan antara sarapan dan kebutuhan energi adalah hubungan sebab-akibat (alasan)!',
    explanation: {
      summary: 'Kata hubung "karena" digunakan untuk menyatakan alasan atau penyebab.',
      steps: [
        'Klausa kedua menyatakan alasan mengapa kita harus sarapan pagi.',
        'Konjungsi yang tepat untuk menghubungkan akibat dan sebab adalah "karena" atau "sebab".',
      ],
      concept: 'Penggunaan konjungsi kausalitas antarklausa dalam teks persuasi.',
    },
  },
  {
    id: 'bi_27',
    subject: 'Bahasa Indonesia',
    topic: 'Jenis Teks',
    subTopic: 'Teks Deskripsi dan Pencerapan Panca Indra',
    title: 'Deskripsi Keindahan Candi Borobudur',
    type: 'single_choice',
    difficulty: 'Sedang',
    textGenre: 'Deskripsi',
    passageTitle: 'Kemegahan Relief Candi Borobudur',
    passage:
      'Candi Borobudur berdiri megah di atas bukit hijau yang dikelilingi perbukitan Menoreh. Dinding-dinding lorong candi dipenuhi pahatan relief batu andesit yang sangat halus dan kaya cerita. Relief-relief tersebut menggambarkan perahu bercadik yang kokoh mengarungi ombak samudra luas, deretan pohon teratai yang mekar anggun, serta sosok manusia berpakaian adat kuno dengan senyum kedamaian yang terpahat abadi.',
    question:
      'Informasi yang digambarkan pada dinding-dinding lorong Candi Borobudur menurut teks adalah...',
    options: [
      'Pahatan relief batu andesit yang melukiskan perahu bercadik, pohon teratai mekar, dan sosok manusia kuno.',
      'Lukisan cat minyak modern yang menggambarkan kehidupan kota megapolitan.',
      'Patung-patung perunggu berukuran raksasa yang dilapisi lembaran emas murni.',
      'Pilar-pilar marmer putih bergaya arsitektur Eropa klasik zaman pertengahan.',
    ],
    correctAnswer: 0,
    hint: 'Perhatikan kalimat kedua dan ketiga mengenai apa yang terpahat pada batu andesit!',
    explanation: {
      summary: 'Dinding lorong memuat relief pahatan batu andesit tentang perahu bercadik, teratai, dan manusia kuno.',
      steps: ['Teks secara jelas mendeskripsikan relief perahu bercadik, teratai mekar, dan sosok manusia kuno.'],
      concept: 'Memahami teks deskripsi cagar budaya nusantara.',
    },
  },
  {
    id: 'bi_28',
    subject: 'Bahasa Indonesia',
    topic: 'Jenis Teks',
    subTopic: 'Teks Prosedur dan Urutan Langkah',
    title: 'Ciri Bahasa Teks Prosedur: Kata Kerja Imperatif',
    type: 'multiple_choice',
    difficulty: 'Sedang',
    textGenre: 'Prosedur',
    passageTitle: 'Membuat Jamu Kunyit Asam Segar',
    passage:
      'Perhatikan kalimat-kalimat petunjuk berikut:\n' +
      '(1) Kupaslah rimpang kunyit segar hingga bersih lalu cuci dengan air mengalir.\n' +
      '(2) Parutlah kunyit yang telah bersih menggunakan parutan kelapa yang steril.\n' +
      '(3) Udara sore di dapur terasa sangat hangat dan menyenangkan.\n' +
      '(4) Rebuslah air perasan kunyit bersama gula aren dan asam jawa hingga mendidih.',
    question:
      'Manakah DUA kalimat di atas yang memuat kata kerja IMPERATIF (perintah) khas teks prosedur?',
    options: [
      'Kalimat (1) yang memuat kata kerja "Kupaslah".',
      'Kalimat (2) yang memuat kata kerja "Parutlah".',
      'Kalimat (3) yang memuat kata kerja "Terasa".',
      'Kalimat (3) yang memuat kata sifat "Menyenangkan".',
    ],
    correctAnswers: [0, 1],
    hint: 'Kata kerja imperatif sering menggunakan akhiran partikel "-lah" atau "-kan" (misal: kupaslah, parutlah)!',
    explanation: {
      summary: 'Kalimat (1) dan (2) memuat kata kerja imperatif perintah "Kupaslah" dan "Parutlah".',
      steps: [
        'Ciri teks prosedur adalah instruksi direktif menggunakan kata kerja bentuk imperatif (-lah, -kan).',
        'Opsi A dan B merupakan contoh tepat kata kerja perintah.',
      ],
      concept: 'Ciri kebahasaan teks prosedur: verba imperatif.',
    },
  },
  {
    id: 'bi_29',
    subject: 'Bahasa Indonesia',
    topic: 'Jenis Teks',
    subTopic: 'Teks Persuasi dan Ciri Kebahasaan',
    title: 'Ajakan Memilah Sampah dari Rumah',
    type: 'single_choice',
    difficulty: 'Mudah',
    textGenre: 'Persuasi',
    passageTitle: 'Aksi Nyata Pilah Sampah Mandiri',
    passage:
      'Timbunan sampah di Tempat Pembuangan Akhir (TPA) sudah mencapai taraf krisis yang membahayakan lingkungan. Sebagian besar sampah organik sebenarnya dapat diolah menjadi pupuk kompos, sedangkan sampah plastik dapat didaur ulang menjadi barang bernilai ekonomi. Oleh karena itu, ayo kita biasakan memilah sampah organik dan anorganik mulai dari rumah kita masing-masing!',
    question:
      'Tujuan utama dari penulisan teks di atas adalah...',
    options: [
      'Mengajak masyarakat untuk membiasakan memilah sampah organik dan anorganik sejak dari rumah tangga.',
      'Menggambarkan letak geografis Tempat Pembuangan Akhir (TPA) sampah di luar kota.',
      'Menceritakan pengalaman masa kecil penulis saat bermain di tempat pengolahan sampah.',
      'Menjelaskan rumus kimia proses pembusukan sampah organik di alam bebas.',
    ],
    correctAnswer: 0,
    hint: 'Perhatikan kalimat penutup yang diawali kata ajakan: "ayo kita biasakan memilah sampah..."!',
    explanation: {
      summary: 'Teks persuasi bertujuan membujuk pembaca agar memilah sampah organik dan anorganik.',
      steps: ['Tujuan teks persuasi selaras dengan isi kalimat ajakannya di bagian akhir.'],
      concept: 'Menentukan tujuan komunikatif teks persuasi lingkungan.',
    },
  },
  {
    id: 'bi_30',
    subject: 'Bahasa Indonesia',
    topic: 'Jenis Teks',
    subTopic: 'Teks Narasi, Deskripsi, Eksposisi, Persuasi, Prosedur',
    title: 'Klasifikasi Komprehensif Jenis-Jenis Teks SD',
    type: 'complex_statement',
    difficulty: 'HOTS',
    question:
      'Perhatikan karakteristik dari kelima jenis teks bahasa Indonesia. Tentukan apakah pernyataan klasifikasi berikut BENAR atau SALAH!',
    statements: [
      {
        id: 'bi30_stmt_1',
        text: 'Teks Narasi berfokus pada penceritaan peristiwa dengan alur, tokoh, dan latar waktu.',
        isCorrect: true,
        explanation: 'Narasi menyajikan kisah fiksi atau nonfiksi bertahap dengan tokoh dan konflik (BENAR).',
      },
      {
        id: 'bi30_stmt_2',
        text: 'Teks Deskripsi bertujuan merinci wujud objek secara visual dan melibatkan panca indra.',
        isCorrect: true,
        explanation: 'Deskripsi melukiskan objek sehingga pembaca seolah melihat atau merasakan langsung (BENAR).',
      },
      {
        id: 'bi30_stmt_3',
        text: 'Teks Prosedur bertujuan membujuk pembaca untuk membeli barang mewah dengan diskon besar.',
        isCorrect: false,
        explanation: 'Teks prosedur memuat petunjuk langkah-langkah membuat/melakukan sesuatu, bukan iklan komersial (SALAH).',
      },
      {
        id: 'bi30_stmt_4',
        text: 'Teks Eksposisi menyajikan penjelasan fakta ilmiah dan informasi berbasis data nyata.',
        isCorrect: true,
        explanation: 'Eksposisi memaparkan pengetahuan faktual yang dapat diuji kebenarannya (BENAR).',
      },
    ],
    hint: 'Ingat tujuan masing-masing teks: Narasi (cerita), Deskripsi (lukisan panca indra), Prosedur (langkah cara), Eksposisi (fakta ilmu)!',
    explanation: {
      summary: 'Kelima jenis teks memiliki ciri, fungsi komunikasi, dan struktur yang berbeda.',
      steps: [
        'Narasi: alur dan tokoh.',
        'Deskripsi: panca indra.',
        'Prosedur: tahapan cara.',
        'Eksposisi: ilmu dan fakta.',
      ],
      concept: 'Klasifikasi dan kompetensi literasi teks bahasa Indonesia SD.',
    },
  },
];
