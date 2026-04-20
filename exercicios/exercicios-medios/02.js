/* 
Exercício 02 - Médio: Fibonacci até N
Desafio: Mostre números Fibonacci ≤ N.
Ex: N=20 → 0 1 1 2 3 5 8 13
Dica: Loop gerando next = a+b.
*/

// Solução:
let n = parseInt(prompt('Limite N:'));
let a = 0, b = 1;
console.log(a);
while (b <= n) {
  console.log(b);
  let next = a + b;
  a = b;
  b = next;
}

