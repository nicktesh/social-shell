let hamburger = document.getElementById("hamburger");
let menuIcon = document.getElementById("menu-icon");
let mobileMenu = document.getElementById("navmenu-mobile");

hamburger.addEventListener("click", function (e) {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("show");
    menuIcon.src = "./assets/img/close-icon.svg";
  } else {
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hidden");
    menuIcon.src = "./assets/img/bars-solid.svg";
  }
});
