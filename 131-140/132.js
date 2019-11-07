/**
 * 132. 分割回文串II 
 *    给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
 *    返回符合要求的最少分割次数。
 */

/**
 * @param {string} s
 * @return {number}
 * 沿用131的方法超时
 * 
 * 动态规划
 *    palidome[i] 表示以i为终点,所有可以组成回文的起点,不包括自身
 *    dp[i]  表示i 最少要多少次切割
 * 31.25% 57.14% 
 * TODO: 优化
 */
let minCut = function (s) {
  let len = s.length,i,j;
  if (len <= 1) return 0;
  let palidomes = new Array(len);
  for(i = 0;i<len;i++){
    palidomes[i] = [];
  }
  for(i = 0;i<len;i++){
    for(j = 0;j<=i;j++){
      if(s[i] === s[j]){
        if(i-j <= 2 || palidomes[i-1].indexOf(j+1) !== -1){
          palidomes[i].push(j);
        }
      }
    }
  }
  let dp = new Array(len + 1).fill(Infinity);
  dp[0] = 0;
  for(i = 0;i<len;i++){
    for(j = 0;j < palidomes[i].length;j++){
      dp[i+1] = Math.min(dp[i + 1],dp[palidomes[i][j]] + 1);
    }
  }
  return dp[len] - 1;
};
console.log(minCut('a'));
console.log(minCut('ab'));
console.log(minCut(''));
console.log(minCut('asa'));