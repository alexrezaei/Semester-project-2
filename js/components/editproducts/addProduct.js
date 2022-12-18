import { getToken } from "../../utilities/storage.js";
const baseUrl = "https://semesteroppgave.herokuapp.com/products/";

export function submitProduct() {
    const productId = document.querySelector("#product-id");
    const productName = document.querySelector("#name");
    const productImage = document.querySelector("#image");
    const productPrice = document.querySelector("#price");
    const productDescription = document.querySelector("#description");
    const productFeatured = document.querySelector("#featured").checked;
    const addBtn = document.querySelector("#add-product");
    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const idValue = productId.value.trim();
        const nameValue = productName.value.trim();
        const imageValue = productImage.value.trim();
        const priceValue = parseFloat(productPrice.value);
        const descriptionValue = productDescription.value;
        let featuredValue = productFeatured.value;
        if (productFeatured == true) {
            featuredValue = true;
        } else {
            featuredValue = false;
        }
        async function addProduct() {
            const data = JSON.stringify({
                title: nameValue,
                image_url: imageValue,
                price: priceValue,
                description: descriptionValue,
                featured: featuredValue,
            });
            const token = getToken();
            const headers = {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const res = await fetch(baseUrl, headers);
                const json = await res.json();
            } catch {}
        }
        addProduct();
    });
}
