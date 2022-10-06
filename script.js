/*
const titreSpans = document.querySelectorAll('h1 span');
const appName = document.querySelectorAll('.app-name');
const logo = document.querySelectorAll('.logo');

window.addEventListener('load', () => {

  const TL = gsap.timeline({paused: true});

  TL
  .staggerFrom(titreSpans, 4, {opacity: 0, ease: "power2.out"}, 0.8)
  .staggerFrom(appName, 1, {opacity: 0, ease: "power2.out"}, 0.5, '-=1')
  .staggerFrom(logo, 1, {transform: "scale(0)", ease: "power2.out"}, 0.5, '-=2')

  TL.play();

})
*/


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-84px";
  }
  prevScrollpos = currentScrollPos;
}

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.navbar_burger');
  burger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  })
}
toggleMenu();