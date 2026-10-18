const newsData = {
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
document.title = `${detail.title} | HIMATIF Samanvaya`;
