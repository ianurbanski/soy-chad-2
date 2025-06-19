const scriptURL = 'https://script.google.com/macros/s/AKfycbyBQ-alTvTuYylkh5KZQE0WCDpCTog2P-V-7E3mO0abKI1LPvVAmXhQGhy4A38qZB3zEw/exec';
const form = document.getElementById('formulario');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert('✅ Formulario enviado con éxito'))
    .catch(error => alert('❌ Error al enviar el formulario'));
  form.reset();
});
