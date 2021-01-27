// $(window).on('scroll', function(){
//     if ($(window).scrollTop()) {
//         $('nav').addClass ('black');
//     }
//     else{
//         $('nav').removeClass ('black');
//     }
// });

// $(document).ready(function(){
//     $('.menu h4').click(function(){
//         $('nav ul').toggleClass('active')
//     })
// });
window.onload = function (){

const textAppear = document.querySelectorAll(".hidden");
const triggerMultiplier = 1.2;
const windowHeight = window.innerHeight / triggerMultiplier;

scrollAppear = () => {
    textAppear.forEach(textAppear => {

    let positionFromTop = textAppear.getBoundingClientRect().top;

    if (positionFromTop < windowHeight) {
        textAppear.classList.replace("hidden", "appear");
    }

  });
};

window.addEventListener("scroll", scrollAppear);

// sticky navbar

// let navBlack = document.querySelector ("nav");
// window.addEventListener("scroll", function(){
// navBlack.classList.toggle("black", window.scrollY > 0);
// });

//  Click navbar
// let clickMenu = document.querySelector (".menu h4");
// let navigation = document.querySelector ("nav ul");
// window.addEventListener("click", function () {
// clickMenu.classList.toggle (navigation);
// });

// const navbarToggler = document.querySelector(".menu h4");
// const navbarMenu = document.querySelector("nav ul");
// const navbarLinks = document.querySelectorAll("nav ul li a");

// navbarToggler.addEventListener("click", navbarTogglerClick);

// function navbarTogglerClick() {
//   navbarToggler.classList.toggle(".responsive_nav");
//   navbarMenu.classList.toggle("active");
// }

// navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

// function navbarLinkClick() {
//   if(navbarMenu.classList.contains("active")) {
//     navbarToggler.click();
//   }
// }


const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if(navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }
}
  
};

/*** Smooth scrolling to page anchor on click**/
// $(function() {
//     $("a[href*='#section1']:not([href='#'])").click(function() {
//         if (
//             location.hostname == this.hostname
//             && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
//         ) {
//             var anchor = $(this.hash);
//             anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
//             if ( anchor.length ) {
//                 $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
//             }
//         }
//     });

//     $("a[href*='#section2']:not([href='#'])").click(function() {
//         if (
//             location.hostname == this.hostname
//             && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
//         ) {
//             var anchor = $(this.hash);
//             anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
//             if ( anchor.length ) {
//                 $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
//             }
//         }
//     });

//     $("a[href*='#section3']:not([href='#'])").click(function() {
//         if (
//             location.hostname == this.hostname
//             && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
//         ) {
//             var anchor = $(this.hash);
//             anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
//             if ( anchor.length ) {
//                 $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
//             }
//         }
//     });

//     $("a[href*='#section4']:not([href='#'])").click(function() {
//         if (
//             location.hostname == this.hostname
//             && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
//         ) {
//             var anchor = $(this.hash);
//             anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
//             if ( anchor.length ) {
//                 $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
//             }
//         }
//     });
// });