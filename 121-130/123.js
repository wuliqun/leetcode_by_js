/**
 * 123. 买卖股票的最佳时机 III
 *    最多完成两笔交易
 */

/**
 * @param {number[]} prices
 * @return {number}
 * 74.84% 60.00%
 */
let maxProfit = function (prices) {
  let len = prices.length,
    stack = [],
    i,
    hasStock = false,
    price;
  for (i = 0; i < len; i++) {
    if (hasStock) {
      if (i === len - 1 || prices[i] > prices[i + 1]) {
        hasStock = false;
        // stack 存储所有的上升阶段  形式: [ [ 1, 5 ], [ 0, 3 ], [ 1, 4 ] ]
        stack.push([price, prices[i]]);
      }
    } else {
      if (i < len - 1 && prices[i] < prices[i + 1]) {
        hasStock = true;
        price = prices[i];
      }
    }
  }
  let size = stack.length,
    res = 0;
  // 遍历所有分割情况 求出最大值  应该有更好的方法
  for (i = 0; i < size; i++) {
    res = Math.max(res, getMaxprofit(stack.slice(0, i)) + getMaxprofit(stack.slice(i)));
  }
  return res;
};

function getMaxprofit(arr) {
  let len = arr.length,
    i;
  if (len === 0) return 0;
  let min = arr[0][0],
    res = arr[0][1] - arr[0][0];
  for (i = 1; i < len; i++) {
    if (arr[i][0] < min) min = arr[i][0];
    if (arr[i][1] - min > res) res = arr[i][1] - min;
  }
  return res;
}

/**
 * 动态规划:
 *    dp[i][k][s]: 第i天,还能交易k次,的选择s  0不持有 , 1持有
 *  59.75% 20.00%
 */

maxProfit = function (prices, K = 2) {
  let len = prices.length,
    i, k;
  let dp = new Array(len + 1);
  // 初始化 DP
  for (i = 0; i <= len; i++) {
    dp[i] = new Array(K + 1);
    for (k = 0; k <= K; k++) {
      dp[i][k] = [0, 0];
    }
    dp[i][0][1] = -Infinity;
  }
  for(k = 0;k<=K;k++){
    dp[0][k][1] = -Infinity;
  }
  for (i = 1; i <= len; i++) {
    for (k = 1; k <= K; k++) {
      // 不持有 求前一天不持有 或者前一天持有今天卖的最大值
      dp[i][k][0] = Math.max(dp[i-1][k][0],dp[i-1][k][1] + prices[i-1]);
      // 持有
      dp[i][k][1] = Math.max(dp[i-1][k][1],dp[i-1][k-1][0] - prices[i-1]);
    }
  }
  return dp[len][K][0];
};


console.log(maxProfit([1, 3, 5, 0, 0, 3, 1, 4]))