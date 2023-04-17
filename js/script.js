// awal navbar
// toogle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan navbar

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    //ketika hamburger menu dan navbarnav di klik tetap berjalan
    navbarNav.classList.remove("active");
    //ketika hamburger menu dan navbarnav tidak di klik sesuai target tetap tertutup hamburger menunya
  }
});
// akhir navbar
