import AnimaNumeros from './numeros.js';

export default function fetchAnimais(url, target) {
  function criaSection(json) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${json.specie}</h3><span data-numero>${json.numeros}</span>`;
    return div;
  }
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal){
    const divAnimal = criaSection(animal);
        numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros(){
    const animanumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animanumeros.init();

  }
  //Cria a div contendo informações através de um JSON 
  //e cria um animal através do create animal
  async function criarAnimais() {
    try {
      //fetch e espera resposta
      const animaisResponse = await fetch(url);
      //pega esponse e cria json
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros()
     
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais()
}
