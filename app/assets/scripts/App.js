import "../styles/style.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import ClientSecretArea from "./modules/ClientSecretArea";

// react related code here
import React from "react";
import ReactDOM from "react-dom";

// import react component
import MyAmazingComponent from "./modules/myAmazingComponent";

ReactDOM.render(<MyAmazingComponent/>, document.querySelector("#my-react-example"));

new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
new StickyHeader();
new ClientSecretArea();
let modal;

document.querySelectorAll(".open-modal").forEach(el => el.addEventListener("click", e => {
    e.preventDefault();
    if(typeof modal === "undefined") {
        import(/* webpackChunkName: "modal" */ "./modules/Modal").then( x => {
            modal = new x.default();
            setTimeout(() => modal.openTheModal(), 20);
        }).catch(() => console.log("There Was A Problem") )
    } else {
        modal.openTheModal();
    }
}));

if(module.hot) {
    module.hot.accept();
}

