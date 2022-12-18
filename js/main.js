import { checkLoggin } from "./components/checkLoggin.js";
import { loadFeatured } from "./components/loadFeatured.js";
async function loadHero() {
    const baseUrl = "https://semesteroppgave.herokuapp.com/";
    const heroContainer = document.querySelector(".hero");
    const url = baseUrl + "home";
    try {
        const res = await fetch(url);
        const json = await res.json();
        heroContainer.innerHTML = `
        <h1><span>Unlock</span> your finances with zipniss</h1>
        <div class="img-container">
            <img src="${json.hero_banner_alt_text}" alt="">
        </div>
        `;
    } catch {}
}
loadFeatured();
loadHero();
checkLoggin();
