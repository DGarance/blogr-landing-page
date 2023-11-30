document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const navbarDropdown = document.getElementById("navbar-dropdown");

  menuButton.addEventListener("click", function () {
    navbarDropdown.style.display = navbarDropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (!navbarDropdown.contains(event.target) && event.target !== menuButton) {
      navbarDropdown.style.display = "none";
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navbarDropdown.style.display = "none";
    }
  });
});
