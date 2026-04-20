/* 
Exercício 07 - Médio: Palíndromo
Desafio: Peça frase, ignore case/espaços/pontuação, verifique palíndromo.
Ex: 'A man a plan a canal Panama' → true.
Dica: Limpe string, compare com reverse.
*/

let frase = prompt('Frase:').toLowerCase().replace(/[^a-z0-9]/g, '');
let rev = frase.split('').reverse().join('');
console.log(frase === rev ? 'Palíndromo!' : 'Não é');

