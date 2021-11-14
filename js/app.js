const menuBars = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

function toggleNav() {
  menuBars.classList.toggle("change");

  navLinks.classList.toggle("open");
}

menuBars.addEventListener("click", toggleNav);
