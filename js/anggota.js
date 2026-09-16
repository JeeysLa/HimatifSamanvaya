const memberFilter = document.querySelector('[data-member-filter]');
const memberCards = document.querySelectorAll('[data-role]');

memberFilter?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  memberFilter.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const selectedRole = button.dataset.filter;
  memberCards.forEach((card) => {
    card.hidden = selectedRole !== 'all' && card.dataset.role !== selectedRole;
  });
});
