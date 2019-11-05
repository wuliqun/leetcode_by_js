/**
 * 121. 买卖股票的最佳时机
 *    只能买入一次,卖出一次
 */

/**
 * @param {number[]} prices
 * @return {number}
 * 38.69% 94.25%
 */
let maxProfit = function (prices) {
  let len = prices.length,
    res = 0,
    i,
    min = prices[0];
  for (i = 1; i < len; i++) {
    if(prices[i] < min){
      min = prices[i];
    }else if(prices[i] - min > res){
      res = prices[i] - min;
    }
  }
  return res;
};