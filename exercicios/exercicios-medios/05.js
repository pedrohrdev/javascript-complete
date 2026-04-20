/* 
Exercício 05 - Médio: Máximo Subarray Sum (Kadane simplificado)
Desafio: Array [-2,1,-3,4,-1,2,1,-5,4], maior soma contígua = 6 (4-1+2+1).
Dica: Corrente max_ending_here, max_so_far.
*/

let arr = [-2,1,-3,4,-1,2,1,-5,4];
let maxCurrent = arr[0], maxGlobal = arr[0];
for (let i = 1; i < arr.length; i++) {
  maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
  if (maxCurrent > maxGlobal) maxGlobal = maxCurrent;
}
console.log('Maior soma subarray:', maxGlobal);

