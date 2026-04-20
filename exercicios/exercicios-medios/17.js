/* 
Exercício 17 - Médio: Torre de Hanoi (3 discos)
Desafio: Imprima movimentos para 3 discos de A para C (via B).
Dica: Recursão.
*/

function hanoi(n, from, to, via) {
  if (n === 1) {
    console.log(`Mova disco 1 de ${from} para ${to}`);
    return;
  }
  hanoi(n-1, from, via, to);
  console.log(`Mova disco ${n} de ${from} para ${to}`);
  hanoi(n-1, via, to, from);
}
hanoi(3, 'A', 'C', 'B');

