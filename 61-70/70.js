/**
 * 70. 爬楼梯
 *    每次可以爬1-2步,有多少种方法爬完
 */

/**
 * @param {number} n
 * @return {number}
 * 99.56% 72.43%
 */
let climbStairs = function(n) {
  if(n <= 2) return n;
  let prev1 = 1,prev2 = 2,i,tmp;
  for(i=3;i<=n;i++){
    tmp = prev1 + prev2;
    prev1 = prev2;
    prev2 = tmp;
  }
  return tmp;
};