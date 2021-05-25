var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) { //makes every image non visibe by changing the style of the display to none
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} //value of the idex resets to not exceed the number of slides that we have
  slides[slideIndex-1].style.display = "block";    //slides on the position of the index minus one are made visible by giving it the style display block
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}
