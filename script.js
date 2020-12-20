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


window.onload = function () {
    let navbar = document.querySelectorAll("nav");
    let black = document.querySelector(".black");
    var scroll = 0;

    window.addEventListener('scroll', function() {
        scroll = window.scrollY;
        navbar.toggle (black);
    });
      

};
// window.onload = function(){
// let navbar = document.querySelector("nav");
// let black = document.querySelector(".black");

// document.querySelector(window).on('scroll', function(){
//     if (window.scrollTop()) {
//         document.querySelector('navbar').addClass ('black');
//     }
//     else{
//         document.querySelector('navbar').removeClass ('black');
//     }
// });
// };

/*** Smooth scrolling to page anchor on click**/
$(function() {
    $("a[href*='#section1']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });

    $("a[href*='#section2']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });

    $("a[href*='#section3']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });

    $("a[href*='#section4']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});