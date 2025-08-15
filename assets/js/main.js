let btnMobileMenu = document.getElementById("menu-hamburguer-mobile");

btnMobileMenu.addEventListener("click", (event) =>{
    event.stopImmediatePropagation();
    let mobileMenuList = document.getElementById("nav__mobile-wrapper");
    mobileMenuList.classList.toggle("hideMobile");
    mobileMenuList.classList.toggle("showMobile");
    console.log("click")
});


//Function for scroll section
function scrollSmoothly(targetElement, duration) {
  const startPosition = window.pageYOffset;
  const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easeProgress = easeInOutQuad(progress);

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (elapsedTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(animateScroll);
}

//Action for start tour
document.getElementById("banner__buttom").onclick = () =>{
    scrollSmoothly(document.getElementById("content__articles-list"), 2500);
    setTimeout(() => {
        document.getElementById("content__banner-top").classList.add("transition-block");
        
    }, 10);
    setTimeout(() => {
        document.getElementById("content__banner-top").classList.remove("transition-block");
        document.body.style.overflow = "auto";
    }, 2500);
};

document.getElementById("Articles").onclick = () =>{
    scrollSmoothly(document.getElementById("content__articles-list"), 2500);
    setTimeout(() => {
        document.getElementById("content__banner-top").classList.add("transition-block");
        
    }, 10);
    setTimeout(() => {
        document.getElementById("content__banner-top").classList.remove("transition-block");
        document.body.style.overflow = "auto";
    }, 2500);
};

document.getElementById("ArticlesM").onclick = () =>{
    scrollSmoothly(document.getElementById("content__articles-list"), 2500);
    setTimeout(() => {
        document.getElementById("content__banner-top").classList.add("transition-block");
        
    }, 10);
    setTimeout(() => {
        document.getElementById("content__banner-top").classList.remove("transition-block");
        document.body.style.overflow = "auto";
    }, 2500);
};