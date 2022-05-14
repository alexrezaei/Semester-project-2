const burger = document.querySelector("#burger-menu");
const menu = document.querySelector("#menu");

let timesClicked = 1;

burger.addEventListener("click", () => {
    timesClicked++;
    if (timesClicked % 2 == 0) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1039) {
        menu.classList.remove("hide");
    }
});

function HideNav() {
    if (window.innerWidth <= 1039) {
        menu.classList.add("hide");
        console.log(window.innerWidth);
    }
}

HideNav();
