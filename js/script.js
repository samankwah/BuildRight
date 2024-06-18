document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector(".mobile_menu");
  const mainMenu = document.querySelector(".main-menu");

  mobileMenuIcon.addEventListener("click", function () {
    mainMenu.classList.toggle("active");
  });
});
