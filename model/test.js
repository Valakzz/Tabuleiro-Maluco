import Tabuleiro  from "./tabuleiro.js"


const tabuleiro =  new Tabuleiro()

tabuleiro.fazerJogada("1","1","X")
tabuleiro.printarText()

tabuleiro.fazerJogada("0","0","O")
tabuleiro.printarText()

tabuleiro.fazerJogada("1","1","O")
