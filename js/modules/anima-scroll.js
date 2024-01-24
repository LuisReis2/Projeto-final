export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectiontop = sectionTop - window.innerHeight * 0.6 < 0;
        if (isSectiontop) section.classList.add('ativo');
        else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
