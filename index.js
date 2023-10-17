var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 35,
  loop: Infinity,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});