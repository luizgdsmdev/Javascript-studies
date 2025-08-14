let btnMobileMenu = document.getElementById("menu-hamburguer-mobile");

btnMobileMenu.addEventListener("click", (event) =>{
    event.stopImmediatePropagation();
    let mobileMenuList = document.getElementById("nav__mobile-wrapper");
    mobileMenuList.classList.toggle("hideMobile");
    mobileMenuList.classList.toggle("showMobile");
    console.log("click")
});