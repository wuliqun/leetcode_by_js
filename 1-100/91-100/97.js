/**
 * 97. 交错字符串
 *     验证s3是否由 s1 s2 交错而成
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 * 递归 接近超时 28.79% 8.33%
 */
let isInterleave = function (s1, s2, s3) {
  let len1 = s1.length,
    len2 = s2.length,
    i = 0,
    j = 0;
  if (len1 + len2 !== s3.length) return false;
  while (i < len1 && j < len2) {
    if (s1[i] === s3[i + j] && s2[j] === s3[i + j]) {
      return isInterleave(s1.slice(i + 1), s2.slice(j), s3.slice(i + j + 1)) || isInterleave(s1.slice(i), s2.slice(j + 1), s3.slice(i + j + 1));
    } else if (s1[i] === s3[i + j]) {
      i++;
    } else if (s2[j] === s3[i + j]) {
      j++;
    } else {
      return false;
    }
  }
  while (i < len1) {
    if (s1[i] !== s3[i + j]) return false;
    i++;
  }
  while (j < len2) {
    if (s2[j] !== s3[i + j]) return false;
    j++;
  }
  return true;
};
/**
 * 89.39% 25.00%
 */
isInterleave = function (s1, s2, s3) {
  let len1 = s1.length,
    len2 = s2.length,
    i = 0,
    j = 0;
  if (len1 + len2 !== s3.length) return false;
  let dp = new Array(len1 + 1);
  for (i = 0; i <= len1; i++) {
    dp[i] = new Array(len2 + 1).fill(false);
  }
  dp[0][0] = true;
  for (i = 1; i <= len1; i++) {
    dp[i][0] = dp[i-1][0] && s1[i - 1] === s3[i - 1];
  }
  for (j = 1; j <= len2; j++) {
    dp[0][j] = dp[0][j-1] && s2[j - 1] === s3[j - 1];
  }
  for (i = 1; i <= len1; i++) {
    for (j = 1; j <= len2; j++) {
      dp[i][j] = (dp[i][j-1] && (s2[j-1] === s3[i+j-1])) || (dp[i-1][j] && s1[i-1] === s3[i+j-1]); 
    }
  }
  return dp[len1][len2];
}

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));