function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.navbar_burger');
  burger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  })
}
toggleMenu();