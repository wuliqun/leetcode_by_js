/**
 * 115.不同的子序列
*     给定一个字符串 S 和一个字符串 T，计算在 S 的子序列中 T 出现的个数。
*     一个字符串的一个子序列是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。
*     （例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * 61.29% 36.36%
 */
let numDistinct = function (s, t) {
  let len1 = s.length, len2 = t.length, i;
  let dp = new Array(len1 + 1);
  for (i = 0; i <= len1; i++) {
    dp[i] = new Array(len2 + 1).fill(0);
    dp[i][0] = 1;
  }
  for (i = 1; i <= len1; i++) {
    for (j = 1; j <= len2; j++) {
      if(s[i-1] === t[j-1]){
        dp[i][j] = dp[i-1][j] + dp[i-1][j-1];
      }else{
        dp[i][j] = dp[i-1][j];
      }
    }
  }
  return dp[len1][len2];
};

console.log(numDistinct('rabbbit','rabbit'))