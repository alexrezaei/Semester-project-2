const productsContainer = document.querySelector(".product__container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
import { addToCart } from "./addToCart.js";
let baseUrl = `https://semesteroppgave.herokuapp.com/products/${productId}`;
export async function loadProduct() {
    try {
        const res = await fetch(baseUrl);
        const json = await res.json();
        productsContainer.innerHTML = `
        <div class="product__header">
            <h1>${json.title}</h1>
            <div class="product__img-container">
                <img src="${json.image_url}" alt="">
            </div>
        </div>
        <p class="product__description">${json.description} </p>
        <p class="product__price">$${json.price}</p>
        <a href="#" class="product__btn" data-id="${json.id}">Buy now</a>
        `;
        addToCart();
    } catch {}
}
