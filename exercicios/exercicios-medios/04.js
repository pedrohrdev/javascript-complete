/* 
Exercício 04 - Médio: Inverter Array
Desafio: Array [1,2,3,4], inverta para [4,3,2,1] sem reverse().
Dica: New array preenchendo do fim.
*/

// Solução:
let arr = [1,2,3,4];
let inv = [];
for (let i = arr.length - 1; i >= 0; i--) {
  inv.push(arr[i]);
}
console.log('Invertido:', inv);

