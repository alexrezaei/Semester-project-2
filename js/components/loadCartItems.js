import { getFromStorage } from "../utilities/storage.js";
const cartListContainer = document.querySelector(".cart__list__container");
const priceContainer = document.querySelector("#total-price");
function loadCartItems() {
    const cartItems = getFromStorage("cart");
    console.log(cartItems);
    let priceTotal = 0;
    if (cartItems.length < 1) {
        cartListContainer.innerHTML = "<h2>Cart is empty<h2>";
    } else {
        cartItems.forEach((item) => {
            /* Adds together the various item prices */
            let priceValue = parseFloat(item.price);
            priceTotal += priceValue;

            cartListContainer.innerHTML += `
            <div class="cart__product">
                <div class="product__title">
                    <p>Product:</p>
                    <p>${item.title}</p>
                </div>
                <div class="product__price">
                    <p>Price:</p>
                    <p>$${item.price}</p>
                </div>
                <div class="product__image">
                    <img src="${item.image_url}" alt="">
                </div>
                <div class="product__link">
                    <a href="product.html?id=${item.id}">Check Product</a>
                </div>
            </div>
            `;
            priceContainer.innerHTML = `
            <h2>Total Price: ${priceTotal}</h2>
            `;
        });
    }
}

loadCartItems();
