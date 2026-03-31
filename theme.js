let currentTheme = 'dark';

function applyTheme(theme) {
    currentTheme = theme;
    if (theme === 'light') {
        document.documentElement.classList.add('light');
    } else {
        document.documentElement.classList.remove('light');
    }
    const label = theme === 'dark' ? '○ Light' : '● Dark';
    document.getElementById('theme-toggle').textContent = label;
    document.getElementById('theme-toggle-mobile').textContent = label;
    localStorage.setItem('velkyss-theme', theme);
}

const savedTheme = localStorage.getItem('velkyss-theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
} else {
    applyTheme('dark'); // fallback explícito
}

['theme-toggle', 'theme-toggle-mobile'].forEach(function (id) {
    document.getElementById(id).addEventListener('click', function () {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
});