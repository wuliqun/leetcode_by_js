/**
 * 122. 买卖股票的最佳时机 II
 *     可以无限买卖
 */

/**
 * @param {number[]} prices
 * @return {number}
 * 78.50% 93.29%
 */
let maxProfit = function (prices) {
  let len = prices.length,
    res = 0,
    i,
    hasStock = false,
    price;
  for (i = 0; i < len; i++) {
    if(hasStock){
      if(i === len - 1 || prices[i] > prices[i + 1]){
        hasStock = false;
        res += prices[i] - price;
      }
    }else{
      if(i < len - 1 && prices[i] < prices[i+1]){
        hasStock = true;
        price = prices[i];
      }
    }
  }
  return res;
};