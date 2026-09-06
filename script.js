document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const year = document.getElementById('year');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      nav.classList.toggle('open');

      menuBtn.textContent = nav.classList.contains('open')
        ? '✕'
        : '☰';
    });

    document.querySelectorAll('#mainNav a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        menuBtn.textContent = '☰';
      });
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});