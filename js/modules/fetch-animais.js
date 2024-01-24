import initNumeros from './numeros.js';

export default function initFetch() {
  function criaSection(json) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${json.specie}</h3><span data-numero>${json.numeros}</span>`;
    return div;
  }
  async function fetchAnimais() {
    try {
      const animaisResponse = await fetch('http://127.0.0.1:5501/data.json');
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numero-grid');
      animaisJSON.forEach((animal) => {
        const divAnimal = criaSection(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./data.json');
}
