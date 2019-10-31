/**
 * 69. 平方根
 */

/**
 * @param {number} x
 * @return {number}
 * 86.61% 72.37%
 */
let mySqrt = function(x) {
  if(x <= 1) return x;
  if(x <= 3) return 1;
  let start = 2,end = x >> 1,mid,tmp;
  while(start <= end){
    mid = start + end >> 1;
    tmp = mid * mid;
    if(tmp < x){
      start = mid + 1;
    }else if(tmp > x){
      end = mid - 1;
    }else{
      return mid;
    }
  }
  return mid*mid > x ? mid - 1 : mid;
};

console.log(mySqrt(7))
console.log(mySqrt(8))
console.log(mySqrt(9))
console.log(mySqrt(10))
console.log(mySqrt(11))
console.log(mySqrt(12))
console.log(mySqrt(13))
console.log(mySqrt(14))
console.log(mySqrt(125))
console.log(mySqrt(16))