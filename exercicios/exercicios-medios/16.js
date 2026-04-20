/* 
Exercício 16 - Médio: Soma Digitos Número
Desafio: 12345 → 1+2+3+4+5=15
Dica: String ou %10.
*/

let num = prompt('Número:');
let soma = 0;
for (let char of num) {
  soma += parseInt(char);
}
console.log('Soma dígitos:', soma);

