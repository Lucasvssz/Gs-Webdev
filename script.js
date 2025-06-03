let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let timer;

function showDivsAuto() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";
  timer = setTimeout(showDivsAuto, 4000); // troca a cada 4 segundos
}

function plusDivs(n) {
  clearTimeout(timer); // para o auto temporariamente
  slideIndex += n - 1;
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  showDivsAuto(); // reinicia a partir do novo índice
}

window.onload = showDivsAuto;
