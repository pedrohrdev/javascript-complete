/* 
Exercício 21 - Médio: Intersecção Arrays
Desafio: [1,2,3,4] ∩ [3,4,5,6] = [3,4]
Dica: Set ou nested loop.
*/

let a = [1,2,3,4], b = [3,4,5,6];
let setA = new Set(a);
let inter = [];
for (let x of b) {
  if (setA.has(x)) inter.push(x);
}
console.log('Intersecção:', inter);

