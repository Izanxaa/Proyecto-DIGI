document.addEventListener('DOMContentLoaded', () => {
    const botonesCompra = document.querySelectorAll('.btn-comprar');
  
    botonesCompra.forEach(boton => {
      boton.addEventListener('click', () => {
        alert('Gracias por tu interés. Contactanos por WhatsApp para concretar la compra.');
      });
    });
  
    const filtroInput = document.getElementById('filtro-productos');
    if (filtroInput) {
      filtroInput.addEventListener('input', () => {
        const filtro = filtroInput.value.toLowerCase();
        const productos = document.querySelectorAll('.producto');
  
        productos.forEach(p => {
          const nombre = p.querySelector('h3').textContent.toLowerCase();
          p.style.display = nombre.includes(filtro) ? 'block' : 'none';
        });
      });
    }
  });