/**
 * 96. 不同的二叉搜索树
 *    根据n,求可以生成多少种二叉搜索树
 */

/**
 * @param {number} n
 * @return {number}
 * 5.49% 5.72%
 * 递归很慢,可以缓存优化一下
 * 而且根本没有必要使用start end
 */
let numTrees = function(n) {
  if(n < 2) return n;
  return generateTrees(1,n);    
};
function generateTrees(start,end){
  if(start >= end) return 1;
  else{
    let res = 0,i;
    for(i = start;i<=end;i++){
      res += generateTrees(start,i-1)*generateTrees(i+1,end);
    }
    return res;
  }
}

/**
 * 动态规划
 * 95.60% 22.86%
 */

numTrees = function(n){
  let dp = new Array(n + 1).fill(0),i,j;
  dp[0] = dp[1] = 1;
  for(i = 2;i<=n;i++){
    for(j = 1;j<=i;j++){
      dp[i] += dp[j-1]*dp[i-j]
    }
  }
  console.log(dp);
  return dp[n];
}
console.log(numTrees(8))