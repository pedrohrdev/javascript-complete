/* 
Exercício 11 - Médio: Busca Binária
Desafio: Array ordenado [1,3,5,7,9], busque número.
Dica: low/high/mid.
*/

let arr = [1,3,5,7,9];
let target = parseInt(prompt('Número a buscar:'));
let low = 0, high = arr.length - 1;
let found = -1;
while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    found = mid;
    break;
  } else if (arr[mid] < target) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}
console.log(found !== -1 ? `Encontrado no índice ${found}` : 'Não encontrado');

