/* 
Exercício 24 - Médio: Converter Binário para Decimal
Desafio: String '1011' → 11
Dica: Loop right to left *2^i
*/

let bin = prompt('Binário:');
let dec = 0;
for (let i = 0; i < bin.length; i++) {
  dec = dec * 2 + parseInt(bin[i]);
}
console.log('Decimal:', dec);

