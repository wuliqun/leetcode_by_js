/**
 * 91. 解码方法
 *    给定一个仅包含数字的非空字符串,判断有多少种解码方法
 */

/**
 * @param {string} s
 * @return {number}
 * 98.60% 17.86%
 * 动态规划
 *    dp[0] = 1; s[0] === '0' ? return 0 : dp[1] = 1;
 *    针对第i个数
 *      === 0, 看能否和前一位组合有效:
 *          无效: return 0;
 *          有效: dp[i+1] = dp[i-1]  因为当前只有和前一位组合一种方法
 *      !== 0, 看能否和前一位组合有效:
 *          无效: dp[i+1] = dp[i]  当前只能自己单独有效
 *          有效: dp[i+1] = dp[i] + dp[i-1]  当前包含自己单独有效和与前一位组合有效两种选择
 */
let numDecodings = function(s) {
  let len = s.length;
  let dp = new Array(len+1);
  dp[0] = 1;
  if(s[0] === '0') return 0;
  dp[1] = 1;
  for(i=1;i<len;i++){
    if(s[i] === '0'){
      if(s[i-1] > '0' && s[i-1] < '3'){
        dp[i+1] = dp[i-1];
      }else{
        return 0;
      }
    }else{
      dp[i+1] = dp[i];
      if(s.slice(i-1,i+1) >= '10' && s.slice(i-1,i+1) <= '26'){
        dp[i+1] += dp[i-1];
      }
    }
  }
  return dp[len];
};

console.log(numDecodings('2273412'));