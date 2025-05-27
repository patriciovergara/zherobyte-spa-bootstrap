// script.js actualizado para Zherobyte SPA

document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('.btn-primary');

  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.closest('.card');
      const name = product.querySelector('.card-title')?.textContent.trim();
      const price = product.querySelector('.card-text')?.textContent.trim();

      alert(`Agregado al carrito:\n${name} - ${price}`);
    });
  });
});
