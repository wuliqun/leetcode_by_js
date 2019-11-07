/**
 * 136. 只出现一次的数字
 *      一个数字只出现1次, 其他都出现了2次
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 94.57% 51.67%
 */
let singleNumber = function(nums) {
  let len = nums.length,i,res = nums[0];
  for(i = 1;i<len;i++){
    res = res ^ nums[i];
  }
  return res;
};