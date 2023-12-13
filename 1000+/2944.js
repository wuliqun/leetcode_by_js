/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function(prices) {
  const len = prices.length;
  const dp = new Array(len).fill(0);
  dp[0] = prices[0];
  dp[1] = prices[0];
  for(let i = 2;i < len;i++){
    let min = dp[i - 1] + prices[i];
    
    for(j = i >> 1;j < i;j++){
      min = Math.min(min, dp[j - 1] + prices[j]);
    }
    
    dp[i] = min;
  }
  return dp[len - 1];
};


console.log(minimumCoins([3, 1, 2]));