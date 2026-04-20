/* 
Exercício 14 - Médio: Matriz Transposta 2x2
Desafio: [[1,2],[3,4]] → [[1,3],[2,4]]
Dica: newMat[j][i] = mat[i][j]
*/

let mat = [[1,2],[3,4]];
let trans = [[0,0],[0,0]];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    trans[j][i] = mat[i][j];
  }
}
console.log('Transposta:', trans);

