import { getToken } from "../../utilities/storage.js";
const baseUrl = "https://semesteroppgave.herokuapp.com/products/";
export function DeleteProduct() {
    const deleteBtn = document.querySelector("#delete");
    const productId = document.querySelector("#product-id");
    deleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const url = baseUrl + `${productId.value}`;
        async function deleteIt() {
            const token = getToken();
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const res = await fetch(url, options);
                const json = await res.json();
            } catch {}
        }
        deleteIt();
    });
}

const nameInput = document.querySelector("#name");
const imageInput = document.querySelector("#image");
const priceInput = document.querySelector("#price");
const descriptionInput = document.querySelector("#description");
