 export default class Tabuleiro{
  constructor(){
     this.meuTabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  }

  fazerJogada(linha, coluna, valor) {
    if (this.meuTabuleiro[linha][coluna] == "") {
      this.meuTabuleiro[linha][coluna] = valor
      return true
    }else{
      console.log(`Ja existe o um valor nessa ${linha} e coluna ${coluna}`)
      return false
    }
  }

  printarText(){
    for( let i of this.meuTabuleiro){
      console.log(i)
    }
  }



}
