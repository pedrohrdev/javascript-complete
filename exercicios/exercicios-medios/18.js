/* 
Exercício 18 - Médio: Encontrar Par Comum
Desafio: Dois arrays, encontre primeiro par que soma = target.
Ex: [1,2], [3,4], target=5 → 1+4=5
Dica: Nested loop O(n^2).
*/

let a = [1,2], b = [3,4];
let target = 5;
for (let x of a) {
  for (let y of b) {
    if (x + y === target) {
      console.log(`${x} + ${y} = ${target}`);
      // Pare no primeiro
    }
  }
}

