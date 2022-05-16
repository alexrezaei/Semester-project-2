const links = document.querySelector(".links");
export function checkLoggin() {
    if (localStorage.length > 0) {
        links.innerHTML += `
        <li class="link-item"><a href="/editpage.html">Admin</a></li>
        <li class="link-item" id="logout"><a href="">Logout</a></li>
        `;
    }
}
