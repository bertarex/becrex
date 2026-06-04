const toggleButton = document.getElementById('languageToggle');

let currentLanguage = localStorage.getItem('becrex-language') || 'en';

function updateLanguage(lang){

const elements = document.querySelectorAll('[data-en]');

elements.forEach(element => {

const translation = element.getAttribute(`data-${lang}`);

if(translation){
element.textContent = translation;
}

});

toggleButton.textContent = lang === 'en' ? 'ES' : 'EN';

document.documentElement.lang = lang;

localStorage.setItem('becrex-language', lang);

}

updateLanguage(currentLanguage);

toggleButton.addEventListener('click', () => {

currentLanguage = currentLanguage === 'en'
? 'es'
: 'en';

updateLanguage(currentLanguage);

});


window.addEventListener('scroll', () => {

const header = document.querySelector('.header');

if(window.scrollY > 20){

header.style.boxShadow =
'0 8px 30px rgba(0,0,0,.05)';

}else{

header.style.boxShadow = 'none';

}

});


const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add('visible');

}

});

},

{
threshold:0.15
}

);

document.querySelectorAll(
'.section, .hero, .contact-section'
).forEach(section => {

observer.observe(section);

});
