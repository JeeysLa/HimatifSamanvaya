const newsFilter = document.querySelector('[data-news-filter]');
const articles = document.querySelectorAll('[data-category]');

newsFilter?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  newsFilter.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const selectedCategory = button.dataset.filter;
  articles.forEach((article) => {
    article.hidden = selectedCategory !== 'all' && article.dataset.category !== selectedCategory;
  });
});
