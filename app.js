document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  document.querySelectorAll('[data-type]').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.type !== button.dataset.filter; });
}));
document.querySelector('#consult-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = `Halo Pak Ivan, saya ${data.get('nama').trim()}.\nSaya tertarik: ${data.get('model')}.\nKebutuhan: ${data.get('kebutuhan')}.\n${data.get('pesan').trim()}`;
  window.location.assign('https://wa.me/6285727262518?text=' + encodeURIComponent(message));
});
