// TODO: Webpack, SCSS -> CSS en minified JS

// For now only desktop styles
// TODO CSS fix transition arrow on hover/focus-within, add padding-block
// TODO CSS search icon not showing yet

const headerScroll = document.querySelector('.header')
const dropdownListScroll = document.querySelector('.dropdown-list')
const linkArrowScroll = document.querySelector('.link-arrow')

window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    headerScroll.classList.add("bg-white");
    dropdownListScroll.classList.add("bg-white");
    linkArrowScroll.classList.add("btn-yellow");
  } else {
    headerScroll.classList.remove("bg-white");
    dropdownListScroll.classList.remove("bg-white");
    linkArrowScroll.classList.remove("btn-yellow");
  }
});

// Parallax effect


