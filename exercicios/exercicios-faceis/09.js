/* 
Exercício 09 - Fácil: Divisível por 3
Desafio: Peça números até o usuário digitar 0, conte quantos são divisíveis por 3.
*/

// Solução:
let count = 0;
let num;
do {
  num = parseInt(prompt('Número (0 para parar):'));
  if (num % 3 === 0 && num !== 0) count++;
} while (num !== 0);
console.log('Divisíveis por 3:', count);

