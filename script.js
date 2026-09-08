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

document.addEventListener('DOMContentLoaded', function () {

  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const year = document.getElementById('year');


  // MOBILE MENU
  if (menuBtn && nav) {

    menuBtn.addEventListener('click', function () {

      nav.classList.toggle('open');

      menuBtn.textContent =
        nav.classList.contains('open')
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


  // FOOTER YEAR
  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // SERVICE IMAGE SLIDERS
  const serviceSliders =
    document.querySelectorAll('.service-slider');


  serviceSliders.forEach(function (image, sliderIndex) {

    const imageList =
      image.dataset.images
        .split(',')
        .map(function (src) {
          return src.trim();
        })
        .filter(Boolean);


    if (imageList.length <= 1) {
      return;
    }


    let currentImage = 0;


    function showNextImage() {

      currentImage++;

      if (currentImage >= imageList.length) {
        currentImage = 0;
      }


      image.classList.add('image-changing');


      setTimeout(function () {

        image.src = imageList[currentImage];

        image.classList.remove('image-changing');

      }, 300);

    }


    // Start each card at a slightly different time
    setTimeout(function () {

      showNextImage();

      setInterval(function () {
        showNextImage();
      }, 4500);

    }, sliderIndex * 500);

  });

});