/* 
Exercício 26 - Médio: Two Sum
Desafio: Array [2,7,11,15], target=9 → índices [0,1]
Dica: Map valor -> índice.
*/

let nums = [2,7,11,15];
let target = 9;
let map = new Map();
let res = [];
for (let i = 0; i < nums.length; i++) {
  let comp = target - nums[i];
  if (map.has(comp)) {
    res = [map.get(comp), i];
    break;
  }
  map.set(nums[i], i);
}
console.log('Índices:', res);

