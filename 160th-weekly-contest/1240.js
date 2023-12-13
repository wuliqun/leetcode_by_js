/**
 * 1240. 铺瓷砖
 *    m*n 的地板,最少要用多少块正方形的瓷砖
 *    1<= m,n <= 13
 *  
 */

/**
  * 动态规划
  *     dp[i][j] 表示 i*j 最少需要多少块
  * @param {*} m 
  * @param {*} n 
  * 71.43% 100%
  */
let tilingRectangle = function (m, n) {
  let dp = new Array(m + 1), i, j, k, x, y, r;
  for (i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  for (i = 1; i <= m; i++) {
    for (j = 1; j <= n; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = i * j;
        // 将当前分成左右两块,找出最小的组合
        for (k = 1; k < i; k++) {
          dp[i][j] = Math.min(dp[i][j], dp[k][j] + dp[i - k][j]);
        }
        // 将当前分成上下两块,找出最小的组合
        for (k = 1; k < j; k++) {
          dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[i][j - k]);
        }
        // 在(x,y)处掏出一个正方形
        // 遍历x,y, 遍历正方形可能的边长r, 找出最小组合
        for (x = 2; x < i; x++) {
          for (y = 2; y < j; y++) {
            for (r = 1; r < Math.min(x, y); r++) {
              dp[i][j] = Math.min(dp[i][j], dp[x - r][y] + dp[i - x + r][y - r] + dp[x][j - y] + dp[i - x][j - y + r] + 1);
            }
          }
        }
      }
    }
  }
  return dp[m][n];
};

console.log(tilingRectangle(13, 11));