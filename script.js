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

function copy(copyId){
  let inputElement = document.createElement("input");
  inputElement.type = "text";
  let copyText = document.getElementById(copyId).innerHTML;
  inputElement.value = copyText;
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  document.body.removeChild(inputElement);
  
  document.getElementById("alert").style.display = "block";
  setTimeout(function(){
      document.getElementById("alert").style.display = "none";
  }, 2000);
}

AOS.init();

gsap.from("#ballgsap", {
  scrollTrigger : {
    scrub : true
  },
  rotation:360*4,
})  
gsap.timeline({
  scrollTrigger:{
    trigger: "#ballgsap",
    pin: true,
    scrub:0.2,
    start: 'top top',
    end:'+=150',
  }
 })  
 gsap.from("#ballgsapLeft", {
  scrollTrigger : {
    scrub : true
  },
  rotation: -360*4,
})  
gsap.timeline({
  scrollTrigger:{
    trigger: "#ballgsapLeft",
    pin: true,
    scrub:0.2,
    start: 'top top',
    end:'+=150',
  }
 })  
