/* 
Exercício 12 - Fácil: Contar A-Z
Desafio: Peça uma string, conte letras A-Z ignorando case.
*/

// Solução:
let str = prompt('String:').toUpperCase();
let letras = 0;
for (let char of str) {
  if (char >= 'A' && char <= 'Z') letras++;
}
console.log('Letras:', letras);

