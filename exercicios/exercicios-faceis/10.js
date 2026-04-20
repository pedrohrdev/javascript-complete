/* 
Exercício 10 - Fácil: Média de Notas
Desafio: Peça 5 notas (0-10), calcule e mostre a média. Ignore inválidas.
Dica: Loop 5x, soma/5.
*/

// Solução:
let soma = 0, validas = 0;
for (let i = 1; i <= 5; i++) {
  let nota = parseFloat(prompt(`Nota ${i}:`));
  if (nota >= 0 && nota <= 10) {
    soma += nota;
    validas++;
  }
}
console.log('Média:', validas ? (soma/validas).toFixed(2) : 'Sem notas válidas');

