export default class Hour {
  constructor(funcionamento, activeClass){
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }


  dadosFuncionamento(){
    this.dias = this.funcionamento.dataset.dias.split(',').map(Number);
    this.hora = this.funcionamento.dataset.horario.split(',').map(Number);
  }
  
dadosAgora(){
  this.date = new Date();
  this.horaAgora = this.date.getUTCHours() - 3;
  this.diaAgora = this.date.getDay();
}
  isOpen(){
    const hasDia = this.dias.indexOf(this.diaAgora) !== -1;
    const hasHour = this.horaAgora >= this.hora[0] && this.horaAgora < this.hora[1];
    return hasHour && hasDia;
  }

  ativaAberto(){
    if(this.isOpen()){
     this.funcionamento.classList.add( this.activeClass);
    } 
  }
  init(){
    if(this.funcionamento){
      this.dadosAgora();
      this.dadosFuncionamento()
      this.ativaAberto()
    }
    return this;
  }
 
}
