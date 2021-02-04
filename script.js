window.onload = function () {

  // Scroll appear

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
    if (navbarMenu.classList.contains("open")) {
      navbarToggler.click();
    }
  }

  // Typin effect

  const texts = ["apprendre", "comprendre", "pratiquer"];
  let count = 0; //Words
  let index = 0; //individuals letters
  let currentText = '';
  let letter = '';

  (function type() {
    if (count === texts.length) {
      count = 0;
    };
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
    setTimeout(type, 400);

  }());

};