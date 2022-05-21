const baseUrl = "https://semesteroppgave.herokuapp.com/products/";
const productsContainer = document.querySelector(".products__container");

export async function loadProducts() {
    try {
        const res = await fetch(baseUrl);
        const json = await res.json();
        json.forEach((product) => {
            productsContainer.innerHTML += `
            <div class="flex-row">
                <div class="product">
                <h3>${product.title}</h3>
                <div class="featured__text">
                    <i class="fa-solid fa-check"></i>
                    <p>24/7 support</p>
                </div>
                <div class="featured__text">
                    <i class="fa-solid fa-check"></i>
                    <p>Access to our primary software</p>
                </div>
                <div class="featured__text">
                    <i class="fa-solid fa-check"></i>
                    <p>Guaranteed 96% uptime</p>
                </div>
                <p class="price">$${product.price}<p>
                <a href="product.html?id=${product.id}" class="product-btn light">Learn More</a>
            </div>
            </div>
        `;
        });
    } catch {}
}
