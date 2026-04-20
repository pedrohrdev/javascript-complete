/* 
Exercício 15 - Fácil: Array Soma
Desafio: Crie array [1,2,3,4,5], some todos elementos.
Dica: Use reduce ou loop.
*/

// Solução:
const arr = [1,2,3,4,5];
let soma = 0;
for (let num of arr) {
  soma += num;
}
console.log('Soma:', soma);

