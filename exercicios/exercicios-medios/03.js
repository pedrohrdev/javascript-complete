/* 
Exercício 03 - Médio: Anagrama?
Desafio: Duas palavras, verifique se são anagramas (mesmas letras).
Ignorar case, espaços.
Dica: Sort strings.
*/

// Solução:
let p1 = prompt('Palavra 1:').toLowerCase().replace(/\s/g,'');
let p2 = prompt('Palavra 2:').toLowerCase().replace(/\s/g,'');
let s1 = p1.split('').sort().join('');
let s2 = p2.split('').sort().join('');
console.log(s1 === s2 ? 'Anagramas!' : 'Não são');

