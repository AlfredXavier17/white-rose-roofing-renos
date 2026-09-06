document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const year = document.getElementById('year');
  const quoteForm = document.getElementById('quoteForm');
  const formMsg = document.getElementById('formMsg');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      nav.classList.toggle('open');
      menuBtn.textContent = nav.classList.contains('open') ? '✕' : '☰';
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

  if (quoteForm && formMsg) {
    quoteForm.addEventListener('submit', function (event) {
      event.preventDefault();

      formMsg.textContent =
        'Form is working. This demo does not email anyone yet — we still need to connect it to Formspree, Netlify Forms, or a backend.';
    });
  }
});


// corousel code

const carouselImages = [
  {
    src: "assets/roofing.jpeg",
    title: "ROOFING",
    alt: "Roofing service example"
  },
  {
    src: "assets/pressure-washing.jpeg",
    title: "PRESSURE WASHING",
    alt: "Pressure washing service example"
  },
  {
    src: "assets/eavestrough.jpeg",
    title: "EAVESTROUGH CLEANING",
    alt: "Eavestrough cleaning service example"
  },
  {
    src: "assets/exterior-cleaning.jpeg",
    title: "EXTERIOR CLEANING",
    alt: "Exterior home cleaning service example"
  },
  {
    src: "assets/landscaping.jpeg",
    title: "LANDSCAPING",
    alt: "Landscaping service example"
  },
  {
    src: "assets/christmas-lights.jpeg",
    title: "CHRISTMAS LIGHTS",
    alt: "Christmas light installation example"
  },  
  {
    src: "assets/decks-fences.jpeg",
    title: "DECKS & FENCES",
    alt: "Deck and fence service example"
  },
  {
    src: "assets/flooring.jpeg",
    title: "FLOORING",
    alt: "Flooring service example"
  },
  {
    src: "assets/interior-renovations.jpeg",
    title: "INTERIOR RENOVATIONS",
    alt: "Interior renovation service example"
  },
  {
    src: "assets/drywall.jpeg",
    title: "DRYWALL",
    alt: "Drywall service example"
  },
  {
    src: "assets/bathroom-renovation.jpeg",
    title: "BATHROOM & TILE",
    alt: "Bathroom renovation example"
  }
];


const carouselImage =
  document.getElementById("carouselImage");

const carouselTitle =
  document.getElementById("carouselTitle");

const carouselPrev =
  document.getElementById("carouselPrev");

const carouselNext =
  document.getElementById("carouselNext");

const carouselDots =
  document.getElementById("carouselDots");


let currentSlide = 0;

let carouselTimer;


function showSlide(index) {

  if (index < 0) {
    index = carouselImages.length - 1;
  }

  if (index >= carouselImages.length) {
    index = 0;
  }

  currentSlide = index;

  const slide = carouselImages[currentSlide];

  carouselImage.style.opacity = "0";


  setTimeout(() => {

    carouselImage.src = slide.src;
    carouselImage.alt = slide.alt;
    carouselTitle.textContent = slide.title;

    carouselImage.style.opacity = "1";

  }, 150);


  document
    .querySelectorAll(".carousel-dot")
    .forEach((dot, dotIndex) => {

      dot.classList.toggle(
        "active",
        dotIndex === currentSlide
      );

    });

}


function nextSlide() {

  showSlide(currentSlide + 1);

}


function previousSlide() {

  showSlide(currentSlide - 1);

}


function startCarousel() {

  clearInterval(carouselTimer);

  carouselTimer = setInterval(() => {

    nextSlide();

  }, 5000);

}


carouselImages.forEach((slide, index) => {

  const dot =
    document.createElement("button");

  dot.className =
    "carousel-dot";

  dot.setAttribute(
    "aria-label",
    `Go to image ${index + 1}`
  );


  dot.addEventListener("click", () => {

    showSlide(index);

    startCarousel();

  });


  carouselDots.appendChild(dot);

});


carouselNext.addEventListener("click", () => {

  nextSlide();

  startCarousel();

});


carouselPrev.addEventListener("click", () => {

  previousSlide();

  startCarousel();

});


/* Swipe support for phones */

let touchStartX = 0;

let touchEndX = 0;


carouselImage.addEventListener(
  "touchstart",
  event => {

    touchStartX =
      event.changedTouches[0].screenX;

  }
);


carouselImage.addEventListener(
  "touchend",
  event => {

    touchEndX =
      event.changedTouches[0].screenX;


    const difference =
      touchStartX - touchEndX;


    if (Math.abs(difference) > 50) {

      if (difference > 0) {
        nextSlide();
      } else {
        previousSlide();
      }

      startCarousel();

    }

  }
);


showSlide(0);

startCarousel();