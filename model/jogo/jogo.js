import Tabuleiro from "../Tabuleiro/tabuleiro";

class jogo {
  constructor(primeiroJogador, segundoJogador, jogadorEscolhido) {
    this.primeiroJogador = primeiroJogador;
    this.segundoJogador = segundoJogador;
    this.jogadorEscolhido = jogadorEscolhido;
    this.tabuleiro = new Tabuleiro()

  }
}
