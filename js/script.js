// FUNCTION TOGGLE MENU
function toggleMenu() {
    const menuPopup = document.getElementById('menu-popup');

    if (menuPopup.style.display === "flex") {
        menuPopup.style.display = "none";
    } else {
        menuPopup.style.display = "flex";
    }
  }


  // Go To Top

  document.addEventListener("scroll", handleScroll);
  // get a reference to our predefined button
  var goToTop = document.getElementById("go-to-top");
  
  function handleScroll() {
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var GOLDEN_RATIO = 2.8;
  
    if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
      //show button
      if(!goToTop.classList.contains("showScrollBtn"))
      goToTop.classList.add("showScrollBtn")
    } else {
      //hide button
      if(goToTop.classList.contains("showScrollBtn"))
      goToTop.classList.remove("showScrollBtn")
    }
  }
  
  goToTop.addEventListener("click", scrollToTop);
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  // CAROUSEL
  const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  })
})