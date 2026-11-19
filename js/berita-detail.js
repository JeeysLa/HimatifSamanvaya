const newsData = {
  'seminar-ai-native': {
    category: 'Pengumuman',
    status: 'Akan datang',
    title: 'Seminar Nasional: AI Native Generation',
    summary: 'Mempersiapkan generasi mahasiswa menghadapi masa depan teknologi cerdas.',
    body: [
      'Seminar Nasional AI Native Generation akan diselenggarakan pada 4 Desember 2026, pukul 07.00–11.30 WIB, di Aula 1 Gedung Rektorat Universitas Buana Perjuangan Karawang.',
      'Acara menghadirkan Eko Kurniawan Khannedy, Technical Architect di Blibli.com, dan Dr. Ir. Achmad Solichin, S.Kom., M.T.I., Dekan Fakultas Teknologi Informasi Universitas Budi Luhur.',
      'Pindai kode QR pada poster untuk melakukan pendaftaran.'
    ],
    poster: '../assets/images/SeminarNasionalAINative2026.png'
  },
  rekrutmen: {
    category: 'Pengumuman',
    status: 'Soon',
    title: 'Open Recruitment & Minat Bakat HIMATIF Muda 2027',
    summary: 'Open Recruitment Next Generation HIMATIF 2027 direncanakan hadir di akhir Oktober.',
    body: [
      'Informasi pendaftaran dan rangkaian minat bakat akan diumumkan melalui Instagram resmi HIMATIF.'
    ]
  },
  'pdh-batch-2': {
    category: 'Pengumuman',
    status: 'Soon',
    title: 'PDH HIMATIF Batch 2',
    summary: 'Detail produk dan pemesanan segera diumumkan.',
    body: [
      'Pantau Instagram resmi HIMATIF untuk pengumuman berikutnya.'
    ]
  }
};

const detailKey = new URLSearchParams(window.location.search).get('berita');
const detail = newsData[detailKey] || newsData.rekrutmen;

document.querySelector('[data-detail-category]').textContent = detail.category;
document.querySelector('[data-detail-title]').textContent = detail.title;
document.querySelector('[data-detail-label]').textContent = detail.category;
document.querySelector('[data-detail-heading]').textContent = detail.title;
document.querySelector('[data-detail-summary]').textContent = detail.summary;
document.querySelector('[data-detail-status]').textContent = detail.status;
document.querySelector('[data-detail-body]').innerHTML = detail.body
  .map((paragraph) => `<p>${paragraph}</p>`)
  .join('');
const poster = document.querySelector('[data-detail-poster]');
if (detail.poster) {
  const posterImage = document.querySelector('[data-detail-poster-image]');
  posterImage.src = detail.poster;
  posterImage.alt = `Poster ${detail.title}`;
  poster.hidden = false;
}
document.title = `${detail.title} | HIMATIF Samanvaya`;
