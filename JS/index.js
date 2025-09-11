document.addEventListener("DOMContentLoaded", () => {

  if (window.AOS) {
    AOS.init({ duration: 800, once: false, offset: 100 });
  }

  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.querySelector(".slides");
  let current = 0;

  function showSlide(index) {
    if(slidesContainer) slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if(nextBtn) {
    nextBtn.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  }

  if(prevBtn) {
    prevBtn.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });
  }



});
