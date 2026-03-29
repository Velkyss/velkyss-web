let currentLang = 'en';

function applyLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-key]').forEach(function(el) {
        const key = el.getAttribute('data-key');
        const value = strings[lang][key];
        if (!value) return;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = value;
        } else {
            el.innerHTML = value;
        }
    });
    const label = lang === 'en' ? 'ES' : 'EN';
    document.getElementById('lang-toggle').textContent = label;
    document.getElementById('lang-toggle-mobile').textContent = label;
}

['lang-toggle', 'lang-toggle-mobile'].forEach(function(id) {
    document.getElementById(id).addEventListener('click', function() {
        applyLanguage(currentLang === 'en' ? 'es' : 'en');
    });
});