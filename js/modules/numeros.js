export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass){
    this.numero = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);
    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(numero) {
    let contador = 0;
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    const contagem = setInterval(() => {
      contador += incremento;
      numero.innerText = contador;
      if (contador > total) {
        numero.innerText = total;
        clearInterval(contagem);
      }
    }, 25 * Math.random());
  }

   contar() {
    this.numero.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

   handleMutation(mutation) {
    if(mutation[0].target.classList.contains(this.observerClass)){
      this.observer.disconnect();
    this.contar();
    }
  }
  // adiciona ao mutation objerver quando a classe ativo é atribuida ao target
  addMutationObserver(){
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init(){
    if(this.numero.length && this.observerTarget){
      this.addMutationObserver()
    }
return this;
  }

}
