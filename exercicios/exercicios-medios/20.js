/* 
Exercício 20 - Médio: Validar Parênteses
Desafio: String '()[]{}', verifique balanceados.
Dica: Stack (array).
*/

let s = '()[]{}';
let stack = [];
let balanceados = true;
for (let char of s) {
  if ('([{'.includes(char)) {
    stack.push(char);
  } else {
    let top = stack.pop();
    if ((char === ')' && top !== '(') ||
        (char === ']' && top !== '[') ||
        (char === '}' && top !== '{')) {
      balanceados = false;
      break;
    }
  }
}
console.log(stack.length === 0 && balanceados ? 'Válido' : 'Inválido');

