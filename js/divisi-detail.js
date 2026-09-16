const divisions = {
  'riset-keilmuan': {
    number: '01',
    name: 'Riset dan Keilmuan',
    chair: 'Irfan Fathurrohman',
    function: 'Forum kajian, diskusi keilmuan, dan pendampingan kompetisi akademik.',
    description: 'Divisi ini menjadi ruang untuk mengembangkan budaya belajar, bertukar gagasan, dan mendampingi anggota dalam perjalanan akademiknya.',
    programs: ['Forum kajian dan diskusi keilmuan', 'Pendampingan kompetisi akademik', 'Berbagi materi dan referensi belajar'],
    members: ['Rommy Aprian', 'Basthiar Rofil Ahdistyo', 'M. Ridwan Saputra', 'Kaisha Kamila Puspito', 'Muhammad Abdurahman Mewar', 'Muhammad Sofyan Tsaori', 'Stefanus Krisna Agustian Wibisono', 'Umar Harun Alrasyid', 'Napoleon Sembada Putra', 'Finand Kanahaya Zaldi']
  },
  'riset-teknologi': {
    number: '02',
    name: 'Riset dan Teknologi',
    chair: 'Aan Ripandi',
    function: 'Workshop teknologi, laboratorium mini, dan proyek pengembangan berbasis kebutuhan mahasiswa.',
    description: 'Divisi ini mengajak anggota mengeksplorasi teknologi melalui eksperimen, proyek kecil, dan kegiatan belajar yang dekat dengan kebutuhan mahasiswa.',
    programs: ['Workshop teknologi', 'Laboratorium mini', 'Proyek pengembangan berbasis kebutuhan mahasiswa'],
    members: ['Indah Rahmawati', 'Ahmad Hafizh', 'Suci Nur Saffrilia Dewi', 'Tegar Maulana Akbar', 'Djaki Adhi Putra', 'Muhammad Rifqy Hamzah', 'Sahrul Gunawan', 'Hendra Kurnia', 'Tasya Dwi Cahyani', 'Mohamad Nizam Triaji']
  },
  'publikasi-dekorasi-dokumentasi': {
    number: '03',
    name: 'Publikasi, Dekorasi, dan Dokumentasi',
    chair: 'Ai Rahmawati',
    function: 'Produksi konten, dokumentasi kegiatan, pengelolaan identitas visual, dan publikasi media.',
    description: 'Divisi ini menerjemahkan cerita dan kegiatan HIMATIF menjadi konten visual yang informatif, konsisten, dan mudah dikenali.',
    programs: ['Produksi konten organisasi', 'Dokumentasi kegiatan', 'Pengelolaan identitas visual dan publikasi media'],
    members: ['Narislah Mauludina', 'Yuliani Yahya Rahhayyu', 'Nayla Farras Nafizah', 'Dea Nurlaela', 'Hilfa Raisya Eksa Putra', 'Delia Rahmasari', 'Ferdiansyah Putra', 'Aeidil Irwansyah', 'Ari Budi Wibowo', 'O. Rayya Sevareno']
  },
  'hubungan-masyarakat-relasi-industri': {
    number: '04',
    name: 'Hubungan Masyarakat dan Relasi Industri',
    chair: 'Haikal Aji Prabowo',
    function: 'Pengelolaan relasi, kunjungan industri, kolaborasi komunitas, dan jejaring alumni.',
    description: 'Divisi ini membuka dan merawat hubungan HIMATIF dengan mitra, komunitas, industri, serta alumni.',
    programs: ['Pengelolaan relasi dan komunikasi', 'Kunjungan industri', 'Kolaborasi komunitas dan jejaring alumni'],
    members: ['Muhammad Rizky Alviansyah', 'Alif Cahyaramadhan', 'Dannys Panji Kurniawan', 'Sandy', 'Reihan Andika Putra', 'Muhammad Iqbal Dzaky', 'Rivan Wahyu Risalah', 'Greypha Ander Sakel', 'Nabil Haidar', 'Jonatan Saputra Simbolon']
  },
  kewirausahaan: {
    number: '05',
    name: 'Kewirausahaan',
    chair: "Mutmaina Az'zahra",
    function: 'Pengembangan usaha mahasiswa, bazar kreatif, dan pelatihan dasar kewirausahaan.',
    description: 'Divisi ini menjadi tempat anggota belajar mengolah ide menjadi peluang usaha yang kreatif dan relevan.',
    programs: ['Pengembangan usaha mahasiswa', 'Bazar kreatif', 'Pelatihan dasar kewirausahaan'],
    members: ['Uswah Aulia Nurohmah', 'Vince Margareta Sihotang', 'Maylani', 'Zeira Nurul Yusyroh', 'Dimas Fajri Maulana', 'Gilang Ramadhan', 'Cynthia Juniartien', 'Fahry Rasyidinanta Putra', 'Ahmad Farid Ilham Fauzi', 'Dwi Arya Daffansyah']
  },
  'minat-dan-bakat': {
    number: '06',
    name: 'Minat dan Bakat',
    chair: 'Syahlevi Fazli Nugraha',
    function: 'Eksplorasi minat anggota melalui komunitas olahraga, seni, dan kegiatan kreatif.',
    description: 'Divisi ini merawat ruang tumbuh non-akademik agar anggota dapat menemukan, mengasah, dan merayakan bakatnya.',
    programs: ['Komunitas olahraga', 'Kegiatan seni', 'Kegiatan kreatif anggota'],
    members: ['Muhammad Wildan Firdaus', 'Arif Kurniawan', 'Septian Eka Putra', 'Lucky Arya Bagaskara', 'Muhammad Abimanyu Ardha Nugroho', "Muhamad Rif'at", 'Muhammad Akmal Al Ghifari', 'Hana Salsabilla', 'Reza Tri Kusuma', 'Setyo Dwinugroho']
  },
  'kaderisasi-pengembangan-sdm': {
    number: '07',
    name: 'Kaderisasi dan Pengembangan SDM',
    chair: 'Muhammad Fadhil Alhakim',
    function: 'Open recruitment, upgrading pengurus, mentoring, dan penguatan kapasitas anggota.',
    description: 'Divisi ini menyiapkan proses kaderisasi dan pembelajaran agar setiap anggota punya ruang untuk berkembang dan mengambil peran.',
    programs: ['Open recruitment', 'Upgrading pengurus', 'Mentoring dan penguatan kapasitas anggota'],
    members: ["Dimaz Wahyudy", "Intan Ni'matul Lailyqadar", 'Ahmad Arifin', 'Hafiz Bahaudin Akmal', 'Daffa Andhika Pratama', 'Miftahul Nurul Aini', 'Ghea Ramadhani Putri', 'Haidar Ali Abidin', 'Moreno Alvare', 'Nauval Rafi Arrahman']
  },
  'data-sistem-informasi': {
    number: '08',
    name: 'Data dan Sistem Informasi',
    chair: 'Jesen Louis Agustian',
    function: 'Pengelolaan data organisasi, digitalisasi administrasi, dan pengembangan sistem informasi.',
    description: 'Divisi ini membantu organisasi menjaga data tetap rapi, mudah diakses, dan bisa dipakai untuk mendukung kerja pengurus.',
    programs: ['Pengelolaan data organisasi', 'Digitalisasi administrasi', 'Pengembangan sistem informasi'],
    members: ['Muhamad Bagas Nur Al Farid', 'Habiburrohman Azzami', 'Nirmala Fitria', 'Zainurrahman Nanda Prasetyanta', 'Muhamad Ridho Arrobie Putra Maharandi', 'Nur Mukhlisin', 'Bayu Abi Bayhaqi', 'Rezha Gunawan', 'Riski Ahmad Fauzan']
  }
};

const key = new URLSearchParams(window.location.search).get('divisi') || 'data-sistem-informasi';
const division = divisions[key] || divisions['data-sistem-informasi'];
const setText = (selector, value) => document.querySelector(selector).textContent = value;

setText('[data-division-number]', division.number);
setText('[data-division-name]', division.name);
setText('[data-division-function]', division.function);
setText('[data-division-heading]', `${division.name} untuk gerak bersama.`);
setText('[data-division-description]', division.description);
setText('[data-division-chair]', division.chair);
setText('[data-division-member-count]', `${division.members.length} anggota yang bergerak bersama.`);
document.title = `${division.name} | HIMATIF Samanvaya`;

document.querySelector('[data-division-programs]').innerHTML = division.programs
  .map((program) => `<li>${program}</li>`)
  .join('');
document.querySelector('[data-division-members]').innerHTML = division.members
  .map((member, index) => `<span><b>${String(index + 1).padStart(2, '0')}</b>${member}</span>`)
  .join('');
