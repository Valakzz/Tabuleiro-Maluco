export default  class Chapeleiro{
  constructor(){
    this.chapeleiroAparecer = 0.3
  }

  deveAparecer(){
    return Math.random() < this.chapeleiroAparecer
  }

  sortearEvento(jogo){
console.log("🎩 O Chapeleiro Maluco apareceu no jogo do jogador:",jogo.jogadorEscolhido.simbolo);
this.executarTrocarDeSimbolos(jogo);

  }

  executarTrocarDeSimbolos(jogo){

    const tempSimbolo = jogo.primeiroJogador.simbolo

    jogo.primeiroJogador.simbolo = jogo.segundoJogador.simbolo
    jogo.segundoJogador.simbolo = tempSimbolo

    console.log("🎩 Os símbolos foram trocados")
  }
}