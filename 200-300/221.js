/**
 * dp[i][j]  以(i,j)为顶点的正方形最大边长
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const m = matrix.length;
  if(!m) return 0;
  const n = matrix[0].length;
  if(!n) return 0;
  const dp = new Array(m).fill(0).map(()=>new Array(n).fill(0));
  let i, j;
  let max = 0;
  for(i = 0;i < m;i++){
    if(matrix[i][0] === '1'){
      dp[i][0] = 1;
      max = 1;
    }
  }
  for(j = 0;j < n;j++){
    if(matrix[0][j] === '1'){
      dp[0][j] = 1;
      max = 1;
    }
  }
  for(i = 1;i < m;i++){
    for(j = 1;j < n;j++){
      if(matrix[i][j] === '1'){
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        if(dp[i][j] > max){
          max = dp[i][j];
        }
      }
    }
  }

  return max * max;
};