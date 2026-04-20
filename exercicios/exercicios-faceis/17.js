/* 
Exercício 17 - Fácil: Pares em Array
Desafio: Array [1,2,3,4,5,6], liste só os pares.
Dica: Filter com loop.
*/

// Solução:
const arr = [1,2,3,4,5,6];
let pares = [];
for (let num of arr) {
  if (num % 2 === 0) pares.push(num);
}
console.log('Pares:', pares);

