/**
 * 53. 返回具有最大和的连续子数组
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 84.95% 79.85%
 */
let maxSubArray = function (nums) {
  let max = -Infinity;
  let  i, cur = 0,
    len = nums.length;
  for (i = 0; i < len; i++) {
    cur += nums[i];
    if(cur > max){
      max = cur;
    }
    if(cur < 0){
      cur = 0;
    }
  }
  return max;
};