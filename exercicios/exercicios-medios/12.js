/* 
Exercício 12 - Médio: Objeto Contagem Palavras
Desafio: Frase, conte frequência de cada palavra.
Ex: 'eu amo js js' → {eu:1, amo:1, js:2}
Dica: split(), objeto.
*/

let frase = prompt('Frase:');
let palavras = frase.toLowerCase().split(/\s+/);
let count = {};
for (let p of palavras) {
  if (p) count[p] = (count[p] || 0) + 1;
}
console.log('Contagem:', count);

