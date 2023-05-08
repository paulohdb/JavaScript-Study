//function upperName(name) {
//    return name.toUpperCase();
//}

// Another way to do the same thing 

//const upperName = function(name) {
//    return name.toUpperCase()
//}

//const upperName = name => {
//    return name.toUpperCase()
//}

// const upperName = name => name.toUpperCase();
// const countLetters = word => word.lenght;

// console.log(countLetters("Paulo"));

class Menu {
    constructor(menu){
        this.menuElement = document.querySelector(menu);
        this.activeClass = "active";

    }
    addActiveEvent() {
        this.menuElement.addEventListener("click", event => {
            console.log(this);
            event.target.classList.add(this.activeClass);
        })
    }
}

const menu = new Menu(".principal");
menu.addActiveEvent();
