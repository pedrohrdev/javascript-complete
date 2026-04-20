/* 
Exercício 08 - Médio: Números Perfeitos até N
Desafio: Número perfeito: soma divisores próprios = ele (ex: 6=1+2+3).
Liste até N.
*/

let n = parseInt(prompt('Limite N:'));
for (let i = 1; i <= n; i++) {
  let soma = 0;
  for (let j = 1; j < i; j++) {
    if (i % j === 0) soma += j;
  }
  if (soma === i) console.log(`${i} é perfeito`);
}

