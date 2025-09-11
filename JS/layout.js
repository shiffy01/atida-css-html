document.addEventListener("DOMContentLoaded", () => {

  const burger = document.getElementById("burger");
  const sidePanel = document.getElementById("sidePanel");
  const closeBtn = document.getElementById("closeBtn");

  if (burger && sidePanel) {
    burger.addEventListener("click", () => {
      sidePanel.classList.toggle("open");
    });
  }

  if (closeBtn && sidePanel) {
    closeBtn.addEventListener("click", () => {
      sidePanel.classList.remove("open");
    });
  }

});
