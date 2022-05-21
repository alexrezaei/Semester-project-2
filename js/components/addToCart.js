let id = null;
import { saveToStorage, getFromStorage } from "../utilities/storage.js";
export function addToCart() {
    const btn = document.querySelector(".product__btn");
    btn.addEventListener("click", () => {
        id = btn.dataset.id;
        let baseUrl = `https://semesteroppgave.herokuapp.com/products/${id}`;
        loadproduct(baseUrl);
    });
}

async function loadproduct(baseUrl) {
    try {
        const res = await fetch(baseUrl);
        const json = await res.json();
        let currentCart = getFromStorage("cart");
        currentCart.push(json);
        console.log(currentCart);
        saveToStorage("cart", currentCart);
    } catch {}
}
