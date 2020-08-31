class MobileMenu {
    constructor(){
        this.mobileMenuIcon = document.querySelector(".site-header__menu-icon");
        this.visibleContent = document.querySelector(".site-header__menu-content");
        this.siteHeader = document.querySelector(".site-header");
        this.eventHandler();
    }


    eventHandler(){
        this.mobileMenuIcon.addEventListener("click", this.toggleClass.bind(this));
    }

    toggleClass(){
        this.visibleContent.classList.toggle("site-header__menu-content--is-visible")
        this.siteHeader.classList.toggle("site-header--is-expanded")
        this.mobileMenuIcon.classList.toggle("site-header__menu-icon--close-x")
    }
}



export default MobileMenu;