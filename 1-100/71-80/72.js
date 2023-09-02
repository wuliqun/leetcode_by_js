/**
 * 72.编辑距离
 *      从一个字符串到另一个字符串的最短编辑距离
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 
 * 动态规划:
 *    dp[i][j]  代表word1的前i个到Word2的前j个的编辑距离
 *    初始状态:
 *        dp[0][j] = j;
 *        dp[i][0] = i;
 *    状态转移:
 *        word1[i] === word2[j]  --->   dp[i][j] = dp[i-1][j-1]
 *        // 不相等可以分为删除当前j,替换当前j,当前再添加1位,三种情况取最小
 *        word1[i] !== word2[j]  --->   dp[i][j] = min(dp[i-1][j-1],dp[i][j-1],dp[i-1][j]) + 1;
 * 
 * 70.16% 100%
 */
let minDistance = function (word1, word2) {
  let len1 = word1.length,
    len2 = word2.length,
    i, j;
  let dp = new Array(len1 + 1);
  // 初始化dp
  for (i = 0; i <= len1; i++) {
    dp[i] = new Array(len2 + 1).fill(0);
  }
  for (i = 1; i <= len1; i++) {
    dp[i][0] = i;
  }
  for (j = 1; j <= len2; j++) {
    dp[0][j] = j;
  }
  for (i = 1; i <= len1; i++) {
    for (j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[len1][len2];
};