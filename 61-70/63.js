/**
 * 63. 不同路径 II
 *    从左上角走到右下角有多少种不同路径,有障碍物
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 96.01% 77.97%
 */
let uniquePathsWithObstacles = function (obstacleGrid) {
  let dp = obstacleGrid,
    m = dp.length,
    n = dp[0].length;
  let i, j;
  dp[0][0] = dp[0][0] === 1 ? 0 : 1;
  for(i=1;i<m;i++){
    dp[i][0] = dp[i][0] === 1 ? 0 : dp[i-1][0];
  }
  for(j = 1;j<n;j++){
    dp[0][j] = dp[0][j] === 1 ? 0 : dp[0][j-1];
  }
  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      dp[i][j] = dp[i][j] === 1 ? 0 : dp[i-1][j] + dp[i][j-1];
    }
  }
  return dp[m-1][n-1];
};