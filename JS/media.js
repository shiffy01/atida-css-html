  const images = document.querySelectorAll('.gallery img');
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const closeBtn = document.querySelector('.close');

  images.forEach(img => {
    img.addEventListener('click', () => {
      popup.style.display = 'flex';
      popupImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
