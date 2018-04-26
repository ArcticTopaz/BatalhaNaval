//Função que configura o jogo
function bn () {
// Estas 3 variáveis irão criar um navio com 3 partes sendo a 1 aleatória e as duas seguintes seguidas da primeira
    var parte1 =  1 + Math.floor(Math.random() *5);
    var parte2 = parte1+1;
    var parte3 = parte1 +2;


var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;

// Este ciclo while é o que configura o jogo, enquanto o navio não for afundado o jogo não acaba
while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 7:");
// Este ciclo if exclui jogadas fora do campo de jogo e adiciona
   if (jogada < 1 || jogada > 7) {

      alert("Jogada inválida. Tenta de novo!");

   } else {

      totalJogadas = totalJogadas + 1; //A cada jogada que o jogador faz 1 valor sobe

      if (jogada == parte1 || jogada == parte2 || jogada == parte3) { //if verifica se o jogador acerta a jogada

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas +1;

         if (atingidas == 3) { //Caso acerte 3 jogadas ganha o jogo

            foiAfundado = true; 

            alert("Navio totalmente afundado!");

         }

      } else {

         alert("Falhaste..."); // Alerta caso o jogador falhe o navio

      }

   }

}
// variável que calcula e apresenta a pontuação do jogador 
var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas);

alert(estatistica);
}