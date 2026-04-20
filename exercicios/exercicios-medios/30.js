/* 
Exercício 30 - Médio: Substring Mais Comum
Desafio: Strings 'abcd', 'abc', encontre 'abc'
Simplificado: Longest common substring básica.
Dica: Nested loops.
*/

let s1 = 'abcd', s2 = 'abc';
let maxLen = 0, maxStr = '';
for (let i = 0; i < s1.length; i++) {
  for (let j = 0; j < s2.length; j++) {
    let k = 0;
    while (i+k < s1.length && j+k < s2.length && s1[i+k] === s2[j+k]) k++;
    if (k > maxLen) {
      maxLen = k;
      maxStr = s1.slice(i, i+k);
    }
  }
}
console.log('Substring comum mais longa:', maxStr);

