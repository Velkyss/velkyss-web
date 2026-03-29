const form = document.getElementById('contact-form');
const success = document.getElementById('form-success');

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