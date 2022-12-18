import { LogOut } from "./logout.js";
const links = document.querySelector(".links");
export function checkLoggin() {
    if (localStorage.hasOwnProperty("user") === true) {
        links.innerHTML += `
        <li class="link-item" id="admin"><a href="/editpage.html">Admin</a></li>
        <li class="link-item" id="logout"><a href="">Logout</a></li>
        `;
    }
    const LogOutLink = document.querySelector("#logout");
    LogOutLink.addEventListener("click", () => {
        LogOut();
    });
}
