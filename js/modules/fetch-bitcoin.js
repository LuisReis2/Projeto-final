export default function fetchBitCoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const real = json.BRL.sell;
      const span = document.querySelector(target);
      span.innerText = (1000 / real).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
