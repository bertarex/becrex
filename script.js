const languageToggle = document.getElementById("languageToggle");

let currentLanguage = "en";

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "es" : "en";

  document.querySelectorAll("[data-en]").forEach((element) => {
    const translation = element.getAttribute(`data-${currentLanguage}`);

    if (translation) {
      element.textContent = translation;
    }
  });

  languageToggle.textContent = currentLanguage === "en" ? "ES" : "EN";
});

const revealElements = document.querySelectorAll(
  ".section, .card, .team-profile, .world-map, .contact-section"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
