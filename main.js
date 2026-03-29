const form = document.getElementById('contact-form');
const success = document.getElementById('form-success');
const hamburger = document.getElementById('nav-hamburger');
const navMobile = document.getElementById('nav-mobile');

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  });
  if (response.ok) {
    form.style.display = 'none';
    success.style.display = 'flex';
  }
});

hamburger.addEventListener('click', function() {
    navMobile.classList.toggle('open');
});

navMobile.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        navMobile.classList.remove('open');
    });
});