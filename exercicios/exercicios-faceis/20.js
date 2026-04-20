/* 
Exercício 20 - Fácil: Validador Idade
Desafio: Peça idade, se >=18 'Maior', <18 'Menor', inválida repita.
Use while.
*/

// Solução:
let idade;
while (true) {
  idade = parseInt(prompt('Idade:'));
  if (idade >= 0) break;
  console.log('Idade inválida!');
}
console.log(idade >= 18 ? 'Maior de idade' : 'Menor de idade');

