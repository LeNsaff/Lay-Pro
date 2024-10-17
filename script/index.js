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
  if (window.scrollY > 220) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});


function mail() {
  let parms = {
      nom: document.getElementById('nom').value,
      prenom: document.getElementById('prenom').value,
      email: document.getElementById('email').value,
      tel: document.getElementById('tel').value,
      pays: document.getElementById('ville').value,
      eta: document.getElementById('pres').value,
      pres: document.getElementById('expl').value,
  };
  if (parms.nom == "") {
      alert("Inscription incomplete");
  }
  if(parms.prenom == ""){
      alert("Inscription incomplete");
  }
  if(parms.email==""){
      alert("Inscription incomplete");
  }
  if(parms.tel==""){
      alert("Inscription incomplete");
  }
  if(parms.ville==""){
      alert("Inscription incomplete");
  }
  if(parms.pres==""){
      alert("Inscription incomplete");
  }
  if(parms.expl==""){
      alert("Inscription incomplete");
  }
  else {
      emailjs.send("service_lebiwhy", "template_nxqphdw", parms)
      .then(function() {
          alert("Inscription envoyée");
      })
  } 
}