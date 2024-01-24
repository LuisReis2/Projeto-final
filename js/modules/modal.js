export default function initModal() {
  const login = document.querySelector('[data-modal="abrir"]');
  const modal = document.querySelector('[data-modal="container"]');
  const close = document.querySelector('[data-modal="fechar"]');

  if (login && modal && close) {
    function togggleModal(event) {
      event.preventDefault();
      modal.classList.toggle('ativo');
    }

    function cliqueForaDoModal(event) {
      if (event.target.dataset.modal === 'container') {
        togggleModal(event);
      }
    }
    modal.addEventListener('click', cliqueForaDoModal);
    login.addEventListener('click', togggleModal);
    close.addEventListener('click', togggleModal);
  }
}
