//Toggle class active
const Navbarnav = document.querySelector(".Navbar-nav");
//ketika menu di klik
document.querySelector("#Menu").onclick = () => {
  Navbarnav.classList.toggle("active");
};

//Click di luar side bar muntuk menghilangkan nav

const Menu = document.querySelector("#Menu");

document.addEventListener("click", function (e) {
  if (!Menu.contains(e.target) && !Navbarnav.contains(e.target)) {
    Navbarnav.classList.remove("active");
  }
});
