export default class Modal {
  constructor(botaoAbrir, modal, botaoFechar) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.modal = document.querySelector(modal);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.cliqueForaDoModal = this.cliqueForaDoModal.bind(this);
    this.eventToggleModal = this.eventToggleModal.bind(this);
  }

  togggleModal() {
    this.modal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.togggleModal();
  }

  cliqueForaDoModal(event) {
    if (event.target.dataset.modal === 'container') {
      this.togggleModal(event);
    }
  }

  startEvents() {
    this.modal.addEventListener('click', this.cliqueForaDoModal);
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
  }

  init() {
    if (this.botaoAbrir && this.modal && this.botaoFechar) {
      this.startEvents();
    }
  }
}
