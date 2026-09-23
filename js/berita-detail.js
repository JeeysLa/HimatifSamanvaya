const newsData = {
  makrab: {
    category: 'Kegiatan',
    date: '10-11 Oktober',
    title: 'Makrab HIMATIF',
    summary: 'Dua hari untuk saling mengenal, membangun kekompakan, dan membuat cerita baru bersama keluarga HIMATIF.',
    noteLabel: 'Yang perlu dicatat',
    note: 'Malam Keakraban HIMATIF berlangsung pada 10–11 Oktober. Siapkan energi dan jangan sampai ketinggalan.',
    body: [
      'Malam Keakraban HIMATIF akan dilaksanakan pada 10 – 11 Oktober. Kegiatan ini menjadi salah satu momen untuk mempererat hubungan dan membangun kebersamaan antar mahasiswa HIMATIF.',
      'Melalui kegiatan Makrab, mahasiswa diharapkan dapat saling mengenal lebih dekat, membangun kekompakan, serta menciptakan pengalaman dan kebersamaan yang berkesan.',
      'Jangan sampai ketinggalan, dan sampai ketemu di Makrab HIMATIF!'
    ]
  },
  rekrutmen: {
    category: 'Pengumuman',
    date: '23 September',
    title: 'Open Recruitment HIMATIF',
    summary: 'Saatnya ikut tumbuh, belajar, dan ambil bagian dalam keluarga besar HIMATIF.',
    noteLabel: 'Langkah berikutnya',
    note: 'Pantau sosial media HIMATIF untuk informasi pendaftaran dan kesempatan bergabung selanjutnya.',
    body: [
      'Punya semangat buat berkembang, belajar hal baru?  Saatnya kamu gabung di HIMATIF!',
      'Sekarang waktunya kamu jadi bagian dari keluarga besar HIMATIF Di sini kamu nggak cuma bisa nambah pengalaman, tapi juga ketemu banyak orang baru, belajar bersama, dan ikut terlibat dalam berbagai kegiatan seru.',
      'Jangan sampai kelewatan. See you di HIMATIF'
    ]
  }
};

const detailKey = new URLSearchParams(window.location.search).get('berita');
const detail = newsData[detailKey] || newsData.rekrutmen;

document.querySelector('[data-detail-category]').textContent = detail.category;
document.querySelector('[data-detail-date]').textContent = detail.date;
document.querySelector('[data-detail-title]').textContent = detail.title;
document.querySelector('[data-detail-label]').textContent = detail.category;
document.querySelector('[data-detail-heading]').textContent = detail.title;
document.querySelector('[data-detail-summary]').textContent = detail.summary;
document.querySelector('[data-detail-date-inline]').textContent = detail.date;
document.querySelector('[data-detail-note-label]').textContent = detail.noteLabel;
document.querySelector('[data-detail-note]').textContent = detail.note;
document.querySelector('[data-detail-body]').innerHTML = detail.body
  .map((paragraph) => `<p>${paragraph}</p>`)
  .join('');
document.title = `${detail.title} | HIMATIF Samanvaya`;
