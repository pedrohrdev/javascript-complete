/* 
Exercício 13 - Fácil: Positivo, Negativo ou Zero
Desafio: Peça um número e classifique: positivo, negativo ou zero.
Dica: if/else simples.
*/

// Solução:
let num = parseInt(prompt('Número:'));
if (num > 0) {
  console.log('POSITIVO');
} else if (num < 0) {
  console.log('NEGATIVO');
} else {
  console.log('ZERO');
}

