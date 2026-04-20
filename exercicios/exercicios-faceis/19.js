/* 
Exercício 19 - Fácil: Contagem Até N
Desafio: Peça N, imprima números de 1 a N pulando ímpares (só pares +1).
Não, simples: 1 a N.
Melhor: Multiplos de 5 até N.
*/

// Solução:
let n = parseInt(prompt('N:'));
for (let i = 5; i <= n; i += 5) {
  console.log(i);
}

