/* 10. 正则表达式匹配 */

/**
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 
 * 效率低
 */
let isMatch = function (s, p) {
  let len1 = s.length,
    len2 = p.length,
    i = 0,
    j = 0;
  while (i < len1 && j < len2) {
    if (p[j + 1] !== '*') {
      // 下一个不是*,只能当前匹配
      if (p[j] === '.' || s[i] === p[j]) {
        i++;
        j++;
      } else {
        return false;
      }
    } else {
      // 下一个是* 并且当前能匹配
      if (p[j] === '.' || s[i] === p[j]) {
        // 分为s匹配掉一个 和 p前进2格的情况下,递归
        return isMatch(s.slice(i + 1), p.slice(j)) || isMatch(s.slice(i), p.slice(j + 2));
      } else {
        // 当前不能匹配,用*跳两格
        j += 2;
      }
    }
  }
  while (j < len2 && p[j + 1] === '*') {
    j += 2;
  }
  return i === len1 && j === len2;
};

/**
 * 动态规划
 *    dp[i][j] 代表 s的前i个能否同p的前j个匹配
 * 
 * 97.76% 31.46%
 */

isMatch = function (s, p) {
  let len1 = s.length,
    len2 = p.length,
    i, j;
  let dp = new Array(len1 + 1);
  for (i = 0; i <= len1; i++) {
    dp[i] = new Array(len2 + 1).fill(false);
  }
  dp[0][0] = true;
  for (i = 2; i <= len2; i += 2) {
    dp[0][i] = dp[0][i - 2] && (p[i - 2] !== '*' && p[i - 1] === '*');
  }
  for (i = 1; i <= len1; i++) {
    for (j = 1; j <= len2; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*' && j > 1) {
        // * 无用 或者 x* 无用
        dp[i][j] = dp[i][j - 2] || dp[i][j - 1];
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          // 与前一个匹配
          dp[i][j] = dp[i - 1][j] || dp[i][j] || dp[i - 1][j - 1] /* ?? */ ;
        }
      }
    }
  }
  return dp[len1][len2];
};