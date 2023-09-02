/**
 * 50. pow(x,n)
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 86.64% 47.15%
 */
let myPow = function(x, n) {
  if(n === 0) return 1;
  if(n === 1) return x;
  if(n < 0) return myPow(1/x,-n);
  let tmp = myPow(x,Math.floor(n/2));
  return n % 2 === 0 ? tmp * tmp : tmp * tmp * x;
};