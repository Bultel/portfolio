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

// navbar
var navAppear = document.querySelector ("nav");
var navBlack = document.querySelector (".black");


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