/* 
Exercício 28 - Médio: Números Armstrong
Desafio: Número = soma potências dígitos (ex: 153=1^3+5^3+3^3).
Liste até N.
*/

let n = parseInt(prompt('Limite N:'));
for (let i = 1; i <= n; i++) {
  let numStr = i.toString();
  let soma = 0;
  for (let d of numStr) {
    soma += Math.pow(parseInt(d), numStr.length);
  }
  if (soma === i) console.log(`${i} é Armstrong`);
}

