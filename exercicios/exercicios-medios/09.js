/* 
Exercício 09 - Médio: Merge Duas Arrays Ordenadas
Desafio: [1,3,5] + [2,4,6] → [1,2,3,4,5,6] ordenado.
Dica: While pointers.
*/

let a = [1,3,5], b = [2,4,6];
let i=0, j=0, merged = [];
while (i < a.length && j < b.length) {
  if (a[i] <= b[j]) {
    merged.push(a[i++]);
  } else {
    merged.push(b[j++]);
  }
}
while (i < a.length) merged.push(a[i++]);
while (j < b.length) merged.push(b[j++]);
console.log('Merged:', merged);

