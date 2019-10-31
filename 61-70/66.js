/**
 * 66. 加一
 *    一个数组表示的非负整数,给他加一
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 * 94.99% 55.79%
 */
let plusOne = function(digits) {
  let len = digits.length,i,tmp;
  let flag = 1;
  for(i = len-1;i>=0;i--){
    tmp = digits[i] + flag;
    flag = tmp > 10 ? 1 : 0;
    digits[i] = tmp % 10;
    if(!flag) break;
  }
  if(flag) digits.unshift(1);
  return digits;
};
