const baseUrl = "http://localhost:1337/";
const featuredContainer = document.querySelector("#featured");

export async function loadFeatured() {
    const url = baseUrl + "products";
    try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        json.forEach((product) => {
            if (product.featured === true && product.title !== "Premium") {
                featuredContainer.innerHTML += `
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
                <a href="" class="product-btn light">Learn More</a>
                </div>
                `;
            }
            if (product.featured === true && product.title === "Premium") {
                featuredContainer.innerHTML += `
                <div class="product">
                  <h3 class="premium">${product.title}</h3>
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
                  <a href="product.html?=${product.id}" class="product-btn premium">Learn More</a>
                </div>
                `;
            }
        });
    } catch {}
}
