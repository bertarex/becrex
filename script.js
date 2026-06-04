const toggle = document.getElementById("langToggle");

let currentLanguage = localStorage.getItem("language") || "en";

function setLanguage(lang) {

const elements = document.querySelectorAll("[data-en]");

elements.forEach(element => {
element.textContent = element.getAttribute(`data-${lang}`);
});

toggle.textContent = lang === "en" ? "ES" : "EN";

localStorage.setItem("language", lang);

}

setLanguage(currentLanguage);

toggle.addEventListener("click", () => {

currentLanguage = currentLanguage === "en" ? "es" : "en";

setLanguage(currentLanguage);

});
