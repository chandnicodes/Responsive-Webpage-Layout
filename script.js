// fixed header background color change on scrollY ----
const navbar = document.querySelector('.main-header');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('fixed-header');
    } else {
        navbar.classList.remove('fixed-header');
    }
};
// navlist active items 
let navLinks = document.getElementsByClassName("nav-link");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    let currentItem = document.getElementsByClassName("active");
    currentItem[0].className = currentItem[0].className.replace(" active", "");
    this.className += " active";
  });
};
// toggle menu on small screens
function toglemenu() {
    let togglemenu = document.querySelector(".navbar-collapse");
    if (togglemenu.style.display === "block") {
        togglemenu.style.display = "none";
    } else {
        togglemenu.style.display = "block";
    }
};
// owl carousel 
// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });