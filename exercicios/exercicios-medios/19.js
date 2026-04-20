/* 
Exercício 19 - Médio: Rotacionar Array k posições
Desafio: [1,2,3,4,5] k=2 → [4,5,1,2,3]
Dica: Slice ou reverse tricks.
*/

let arr = [1,2,3,4,5];
let k = 2 % arr.length;
let rot = arr.slice(-k).concat(arr.slice(0, -k));
console.log('Rotacionado:', rot);

