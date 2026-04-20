/* 
Exercício 13 - Médio: Remover Duplicados Array
Desafio: [1,2,2,3,4,4] → [1,2,3,4]
Dica: Set ou objeto visto.
*/

let arr = [1,2,2,3,4,4];
let unique = [];
let seen = {};
for (let num of arr) {
  if (!seen[num]) {
    seen[num] = true;
    unique.push(num);
  }
}
console.log('Únicos:', unique);

