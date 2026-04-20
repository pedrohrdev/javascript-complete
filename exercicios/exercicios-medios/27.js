/* 
Exercício 27 - Médio: Longest Common Prefix
Desafio: ['flower','flow','flight'] → 'fl'
Dica: Compare char por char.
*/

let strs = ['flower','flow','flight'];
let prefix = strs[0];
for (let str of strs) {
  while (str.indexOf(prefix) !== 0) {
    prefix = prefix.slice(0, -1);
  }
}
console.log('Prefixo comum:', prefix);

