/* 
Exercício 15 - Médio: Maior Palavra Frase
Desafio: Encontre a palavra mais longa na frase.
*/

let frase = prompt('Frase:');
let palavras = frase.split(' ');
let maior = '';
for (let p of palavras) {
  if (p.length > maior.length) maior = p;
}
console.log('Maior palavra:', maior, `(${maior.length} letras)`);

