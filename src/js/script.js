/* Mobile Menu */

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})
function closeHamburger() {
  let checkItem = document.getElementById('menu');
  checkItem.checked = false;
}  

/* Slider */

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
swiper.slideTo(4, 0);


/* Modal Window */
const cards = document.querySelectorAll('.services__container_card');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close-btn');

cards.forEach(services__container_card => {
  services__container_card.addEventListener('click', () => {
    const service = services__container_card.dataset.service;
    const serviceDescription = services__container_card.querySelector('p').textContent;

    modalContent.querySelector('h4').textContent = service;
    modalContent.querySelector('p').textContent = serviceDescription;

    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});


/* Scroll button 'Мої послуги' */

function scrollToSection() {
  let section = document.getElementById("services");
  section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

/* Scroll button 'Забронювати' */

function scrollToSection() {
  let section = document.getElementById("services");
  section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}




