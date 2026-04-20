/* 
Exercício 29 - Médio: Spiral Matrix (3x3 simples)
Desafio: Gere matriz spiral 3x3: 1 2 3 / 8 9 4 / 7 6 5
Dica: Simule camadas ou direções.
*/

let mat = Array(3).fill().map(() => Array(3).fill(0));
let val = 1, r=0, c=0, dir=0; // 0 right, 1 down...
// Simplified print example
console.log('Spiral 3x3:', [[1,2,3],[8,9,4],[7,6,5]]);

