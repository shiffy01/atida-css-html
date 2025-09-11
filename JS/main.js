  AOS.init({ duration: 800, once: false, offset: 100 });

  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.querySelector(".slides");
  let current = 0;

  function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  document.querySelector(".next").addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  const burger = document.getElementById("burger");
  const sidePanel = document.getElementById("sidePanel");
  const closeBtn = document.getElementById("closeBtn");

  burger.addEventListener("click", () => {
    sidePanel.style.width = "220px";
  });

  closeBtn.addEventListener("click", () => {
    sidePanel.style.width = "0";
  });
