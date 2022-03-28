
// Dropdown Menu 
const iconBurger = document.querySelector(".nav__burgerIcon")
const menu = document.querySelector(".nav__list")

iconBurger.addEventListener("click", function (event) {
    menu.classList.toggle("show")
    iconBurger.classList.toggle("activeBurger")
})

// Villes
let cities = document.querySelectorAll(".salon__city");

for (let i = 0; i < cities.length; i++) {
    cities[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}

const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});