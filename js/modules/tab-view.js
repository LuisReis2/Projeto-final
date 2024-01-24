export default function initTabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabcontent = document.querySelectorAll('[data-tab="content"] section');

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add('ativo', tabcontent[0].dataset.anime);
    function ativTab(index) {
      const show = tabcontent[index].dataset.anime;
      tabcontent.forEach((section) => {
        section.classList.remove('ativo', show);
      });
      tabcontent[index].classList.add('ativo', show);
    }

    tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        ativTab(index);
      });
    });
  }
}
