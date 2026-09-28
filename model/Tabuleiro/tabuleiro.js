 export default class Tabuleiro{
  meuTabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  fazerJogada(linha, coluna, valor) {
    if (this.meuTabuleiro[linha][coluna] == "") {
      this.meuTabuleiro[linha][coluna] = valor
    }else{
      console.log(`Ja existe o um valor nessa ${linha} e coluna ${coluna}`)
    }
  }

  printarText(){
    for( let i of this.meuTabuleiro){
      console.log(i)
    }
  }



}
