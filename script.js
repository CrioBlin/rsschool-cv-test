const burgerMenu = document.querySelector("nav.burger-menu");
const burgerActivator = document.querySelector("div.header-style-block");
const burgerLink = document.querySelectorAll("a.burger__link");
const windowWidth = document.body.clientWidth;


function burgerShow() {
  burgerMenu.style.display = "block";
  burgerActivator.style.backgroundColor = "var(--important-fade)";
  document.body.style.overflowY = 'hidden';
}

function burgerExit() {
  burgerMenu.style.display = "none";
  burgerActivator.style.backgroundColor = "var(--important-color)";
  document.body.style.overflowY = 'scroll';
}


let active = false;

burgerActivator.addEventListener('click', () => {
  if (active && windowWidth <= 768) {
    burgerExit();
  } else {
    burgerShow();
  }
  active = !active;
})

burgerLink.forEach((element) => {
  element.addEventListener('click', () => {
    if (windowWidth <= 768) {
      burgerExit();
      active = !active;
    }
  })
})