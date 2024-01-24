export default function initHour() {
  const date = new Date();
  const horaAgora = date.getHours();
  const diaAgora = date.getDay();
  const icon = document.querySelector('[data-funcionamento]');
  const dias = icon.dataset.dias.split(',').map(Number);
  const hora = icon.dataset.horario.split(',').map(Number);

  const hasDia = dias.indexOf(diaAgora) !== -1;
  const hasHour = horaAgora >= hora[0] && horaAgora < hora[1];

  if (hasDia && hasHour) {
    icon.classList.add('aberto');
  } else {
    icon.classList.remove('aberto');
  }
}
