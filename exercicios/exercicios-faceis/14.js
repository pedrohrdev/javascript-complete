/* 
Exercício 14 - Fácil: Potência
Desafio: Calcule base^expoente (peça base e expoente, expoente ≤10).
Dica: Loop multiplicando.
*/

// Solução:
let base = parseInt(prompt('Base:'));
let exp = parseInt(prompt('Expoente (≤10):'));
let res = 1;
for (let i = 0; i < exp; i++) {
  res *= base;
}
console.log(`${base}^${exp} = ${res}`);

