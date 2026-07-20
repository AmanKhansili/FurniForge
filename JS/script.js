const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav-links");
const overlay = document.querySelector(".menu-overlay");

function openMenu() {
  navMenu.classList.add("active");

  overlay.classList.add("active");

  document.body.classList.add("no-scroll");
}

function closeMenu() {
  navMenu.classList.remove("active");

  overlay.classList.remove("active");

  document.body.classList.remove("no-scroll");
}

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
