export default function initBit() {
  console.log('url')
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((json) => {
      const real = json.BRL.sell;
      const span = document.querySelector('.bit');
      span.innerText = (1000 / real).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
