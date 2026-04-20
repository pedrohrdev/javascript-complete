/* 
Exercício 01 - Médio: Primo?
Desafio: Peça número >1, diga se é primo.
Dica: Loop até sqrt(N), nenhum divisor.
*/

// Solução:
let n = parseInt(prompt('Número (>1):'));
if (n <= 1) {
  console.log('Não primo');
} else {
  let primo = true;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      primo = false;
      break;
    }
  }
  console.log(primo ? 'É primo!' : 'Não é primo');
}

