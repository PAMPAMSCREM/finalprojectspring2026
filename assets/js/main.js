// main.js

console.log("Hello, World!");

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides[current].classList.remove("active");
  current = (index + slides.length) % slides.length;
  slides[current].classList.add("active");
}

document.querySelector(".prev").onclick = () => showSlide(current +1);
document.querySelector(".next").onclick = () => showSlide(current -1);
