let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });
}

function goToPrevious() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function goToNext() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Initialize the carousel
showImage(currentIndex);
setInterval(goToNext, 3000);
