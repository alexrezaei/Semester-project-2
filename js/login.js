import { saveToken, saveUser } from "./utilities/storage.js";

const form = document.querySelector("#loginForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const errorContainer = document.querySelector(".error-message");
const baseUrl = "http://localhost:1337/";
form.addEventListener("submit", submitLogin);

function submitLogin(event) {
    event.preventDefault();
    errorContainer.innerHTML = "";
    const usernameTrimmed = username.value.trim();
    const passwordTrimmed = password.value.trim();
    if (usernameTrimmed.length === 0 || passwordTrimmed === 0) {
        errorContainer.innerHTML = "<p>One or more fields are empty<p>";
    }
    login(usernameTrimmed, passwordTrimmed);
}

async function login(username, password) {
    const url = baseUrl + "auth/local";
    console.log(url);
    const data = JSON.stringify({
        identifier: username,
        password: password,
    });
    const headers = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await fetch(url, headers);
        const json = await res.json();
        if (json.user) {
            saveToken(json.jwt);
            saveUser(json.user);
            location.href = "/";
        }
        if (json.error) {
            errorContainer.innerHTML = "<p>Wrong email or password<p>";
        }
    } catch (error) {}
}
