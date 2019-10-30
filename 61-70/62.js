/**
 * 62. 不同路径
 *    从左上角走到右下角有多少种不同路径
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 65.33% 66.67%
 */
let uniquePaths = function(m, n) {
  let dp = new Array(m),i,j;
  dp[0] = new Array(n).fill(1);
  for(i = 1;i<m;i++){
    dp[i] = new Array(n);
    dp[i][0] = 1;
  }
  for(i=1;i<m;i++){
    for(j=1;j<n;j++){
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }
  return dp[m-1][n-1];
};

console.log(uniquePaths(7,3));