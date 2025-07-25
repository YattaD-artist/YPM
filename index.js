document.querySelectorAll('.toggle-detail').forEach(btn => {
  btn.addEventListener('click', () => {
    const detail = btn.nextElementSibling;
    detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
  });
});
