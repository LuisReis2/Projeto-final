export default function initNumeros() {
  function contar() {
    const numeros = document.querySelectorAll('[data-numero]');
    let contador = 0;
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      const contagem = setInterval(() => {
        contador += incremento;
        numero.innerText = contador;
        if (contador > total) {
          numero.innerText = total;
          clearInterval(contagem);
        }
      }, 25);
    });
  }
  let observer;
  function handleMutation() {
    observer.disconnect();
    contar();
  }
  const observerTarget = document.querySelector('.numeros');
  observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
