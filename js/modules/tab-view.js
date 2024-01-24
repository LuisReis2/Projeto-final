export default class TabNav {
  constructor(content, list) {
    this.tabcontent = document.querySelectorAll(content);
    this.list = document.querySelectorAll(list);
  }
  // const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  // const tabcontent = document.querySelectorAll('[data-tab="content"] section');

  ativTab(index) {
    this.tabcontent.forEach((content) => {
      content.classList.remove('ativo', content.dataset.anime);
    });
    this.tabcontent[index].classList.add('ativo', this.tabcontent[index].dataset.anime);
  }

  startEvent() {
    this.list.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.ativTab(index);
      });
    });
  }

  init() {
    if (this.tabcontent.length && this.list.length) {
      // ativa o primeiro elemento
      this.ativTab(0);
      this.startEvent();
    }
    return this;
  }
}
