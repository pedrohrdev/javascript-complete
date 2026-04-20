/* 
Exercício 11 - Fácil: Tabuada
Desafio: Peça um número e mostre a tabuada de 1 a 10.
*/

// Solução:
let num = parseInt(prompt('Número para tabuada:'));
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

