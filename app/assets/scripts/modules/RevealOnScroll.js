import throttle from "lodash/throttle";
import debounce from "lodash/debounce";


class RevealOnScroll {
    constructor(els, threshholdPercent){
        this.threshholdPercent = threshholdPercent;
        this.itemsToReveal = els;
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.eventsHandler();

    }

    eventsHandler(){
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() =>{            
            this.browserHeight = window.innerHeight;
        }, 333));
    }

    calcCaller(){        
        this.itemsToReveal.forEach(el => {
            if(el.isRevealed === false){
                this.calculatedIfScrollTo(el);
            }
        })
    }

    calculatedIfScrollTo(el){
        if(window.scrollY + this.browserHeight > el.offsetTop){            
            let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;
            if(scrollPercent < this.threshholdPercent){
                el.classList.add("reveal-item--is-visible");
                el.isRevealed = true;
                if(el.isLastItem === true){
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
            }
        }
        
    }

    hideInitially(){
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item");
            el.isRevealed = false;

        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }

}

export default RevealOnScroll;