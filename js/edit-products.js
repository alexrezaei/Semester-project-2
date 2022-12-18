import { DeleteProduct } from "./components/editproducts/DeleteProduct.js";
import { submitProduct } from "./components/editproducts/addProduct.js";
import { editProduct } from "./components/editproducts/editProduct.js";
import { checkLoggin } from "./components/checkLoggin.js";
const productId = document.querySelector("#product-id");
const nameInput = document.querySelector("#name");
const imageInput = document.querySelector("#image");
const priceInput = document.querySelector("#price");
const descriptionInput = document.querySelector("#description");

const baseUrl = "https://semesteroppgave.herokuapp.com/products/";
editProduct();
submitProduct();
DeleteProduct();
checkLoggin();
