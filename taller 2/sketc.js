document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('#formFiltros input[type="checkbox"]');
  const tarjetas = document.querySelectorAll('.tarjeta');
  const toggleBtn = document.getElementById('toggleFiltros');
  const formFiltros = document.getElementById('formFiltros');

  // Mostrar/ocultar menú de filtros
  toggleBtn.addEventListener('click', () => {
    formFiltros.classList.toggle('oculto');
  });

  // Aplicar filtros al seleccionar checkboxes
  function aplicarFiltros() {
    const filtrosSeleccionados = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    tarjetas.forEach(tarjeta => {
      const filtrosTarjeta = tarjeta.dataset.filtros.split(',');
      const coincide = filtrosSeleccionados.length === 0 ||
        filtrosSeleccionados.some(filtro => filtrosTarjeta.includes(filtro));

      tarjeta.classList.toggle('oculto', !coincide);
    });
  }

  checkboxes.forEach(cb => cb.addEventListener('change', aplicarFiltros));
});

