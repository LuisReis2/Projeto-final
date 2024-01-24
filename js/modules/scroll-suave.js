export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-tab="menunav"] a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    // const altura = section.offsetTop;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa
    /*
  window.scrollTo({
    top: altura,
    behavior: "smooth",
  }); */
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
