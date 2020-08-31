class MobileMenu {
    constructor(){
        this.mobileMenuIcon = document.querySelector(".site-header__menu-icon");
        this.visibleContent = document.querySelector(".site-header__menu-content");
        this.eventHandler();
    }


    eventHandler(){
        this.mobileMenuIcon.addEventListener("click", this.toggleClass.bind(this));
    }

    toggleClass(){
        this.visibleContent.classList.toggle("site-header__menu-content--is-visible")
    }
}



export default MobileMenu;