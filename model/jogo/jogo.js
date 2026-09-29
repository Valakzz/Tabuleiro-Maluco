import Tabuleiro from "../Tabuleiro/tabuleiro.js";
import Chapeleiro from '../chapeleiro/chapeleiro.js';

 export default class Jogo {
  constructor(primeiroJogador, segundoJogador, jogadorEscolhido) {
    this.primeiroJogador = primeiroJogador;
    this.segundoJogador = segundoJogador;
    this.jogadorEscolhido = jogadorEscolhido;
    this.tabuleiro = new Tabuleiro()
    this.chapeleiro = new Chapeleiro()

  }

  executarJogada(linha, coluna){
    const jogadaValdia = this.tabuleiro.fazerJogada(linha, coluna, this.jogadorEscolhido.simbolo)
    if(jogadaValdia){
      
       if(this.chapeleiro.deveAparecer()){
        this.chapeleiro.sortearEvento(this)
       }



      if(this.jogadorEscolhido == this.primeiroJogador){
        this.jogadorEscolhido = this.segundoJogador
      }else{
        this.jogadorEscolhido = this.primeiroJogador
      }
    }
  }
}
