/* 
Exercício 22 - Médio: Recursão Somar 1 a N
Desafio: Some 1+2+...+N recursivamente.
*/

function soma(n) {
  if (n <= 1) return n;
  return n + soma(n-1);
}
let n = parseInt(prompt('N:'));
console.log(`Soma 1 a ${n}:`, soma(n));

