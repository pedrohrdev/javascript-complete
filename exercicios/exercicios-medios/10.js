/* 
Exercício 10 - Médio: Recursão Fatorial
Desafio: Fatorial com função recursiva (N≤15).
*/

function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n-1);
}
let n = parseInt(prompt('N para fatorial:'));
console.log(`Fatorial(${n}):`, fatorial(n));

