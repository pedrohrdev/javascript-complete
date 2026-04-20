/* 
Exercício 06 - Médio: Contar Duplicados em Array
Desafio: Array [1,2,2,3,4,4,5], mostre contagens: 2:2, 4:2.
Dica: Objeto contador.
*/

let arr = [1,2,2,3,4,4,5];
let count = {};
for (let num of arr) {
  count[num] = (count[num] || 0) + 1;
}
console.log('Contagens:', count);

