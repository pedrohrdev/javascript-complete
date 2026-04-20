/* 
Exercício 16 - Fácil: Encontrar Máximo em Array
Desafio: Array [3,7,2,9,1], encontre o maior.
Dica: Inicialize max = arr[0], loop comparando.
*/

// Solução:
const arr = [3,7,2,9,1];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
console.log('Máximo:', max);

