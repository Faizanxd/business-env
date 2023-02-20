const navbarButton = document.getElementById("navbar-button");
const navbar = document.getElementById("navbar-solid-bg");

navbarButton.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
