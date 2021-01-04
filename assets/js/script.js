const menu = document.querySelector(".menu");

const navbarRight = document.querySelector(".navbar--right");

let menuOpen = false;

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuOpen = !menuOpen;
  // if (!menuOpen) {
  //   menu.classList.add("open");
  //   menuOpen = true;
  // } else {
  //   menu.classList.remove("open");
  //   menuOpen = false;
  // }
});
