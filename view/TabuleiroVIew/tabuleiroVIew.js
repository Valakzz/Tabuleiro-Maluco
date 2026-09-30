
export default class tabuleiroView{



  constructor(){
    this.elementoTabuleiro = document.getElementById('tabuleiro')
    this.casas = document.querySelectorAll('.casa')
  }


    redenrizarJOgada(linha,coluna, simbolo){

      const casa = document.querySelector(`[data-linha="${linha}"][data-coluna="${coluna}"]`)
      if(casa){
        casa.innerHTML = simbolo
      }
    }

    limparJogadas(){
      for(const casa of this.casas){
        casa.innerHTML = ''
      }
    }
}