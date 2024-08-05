/* inserer class "carousel-image" aux photos*/

let currentIndex = 0;
const images = document.querySelectorAll('.intro-image');

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


//navbar scroll
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navdivv');
  if (window.scrollY > 150) { // Ajustez cette valeur selon vos besoins
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});
