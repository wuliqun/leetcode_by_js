/**
 * 73. 矩阵置零
 *    将0所在的行列都置为0
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 67.26% 46.67%
 */
let setZeroes = function (matrix) {
  let m = matrix.length;
  if (!m) return;
  let n = matrix[0].length;
  if (!n) return;
  let i, j,k;
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if(matrix[i][j] === 0){
        for(k = 0;k<m;k++){
          if(matrix[k][j] !== 0){
            matrix[k][j] = NaN;
          }
        }
        for(k = 0;k<n;k++){
          if(matrix[i][k] !== 0){
            matrix[i][k] = NaN;
          }
        }
      }
    }
  }
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      // isNaN
      if(matrix[i][j] !== matrix[i][j]){
        matrix[i][j] = 0;
      }
    }
  }
};