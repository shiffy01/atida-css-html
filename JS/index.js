document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "slide",
  });

  if (window.AOS) {
    AOS.init({ duration: 800, once: false, offset: 100 });
  }
});
