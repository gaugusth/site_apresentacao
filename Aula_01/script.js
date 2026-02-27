// Animar barras ao carregar
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.skill-fill').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 400);
});

// Toggle tema
const btn = document.getElementById('toggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  btn.textContent = document.body.classList.contains('light') ? '🌙' : '☀';
});