/* 
Exercício 25 - Médio: Encontrar Missing Number
Desafio: [0,1,3,4] missing 2 (soma esperada N*(N+1)/2)
*/

let arr = [0,1,3,4];
let n = arr.length;
let somaEsperada = n * (n + 1) / 2;
let somaReal = 0;
for (let num of arr) somaReal += num;
let missing = somaEsperada - somaReal;
console.log('Missing:', missing);

