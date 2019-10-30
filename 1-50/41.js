/**
 * 41. 数组中缺失的第一个正数
 *      O(n)时间复杂度 & 使用常数级别的空间
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 97.33% 54.54%
 */
let firstMissingPositive = function(nums) {
  let len = nums.length,i;
  count = 0;
  // 把负数和0 全部替换成1
  // 同时记录是否出现过1
  for(i=0;i<len;i++){
    if(nums[i] === 1) count ++;
    else if(nums[i] <= 0) nums[i] = 1;
  }
  if(count === 0) return 1;
  let n;
  // 
  for(i=0;i<len;i++){
    n = Math.abs(nums[i]);
    if(n <= len){
      nums[n - 1] = - Math.abs(nums[n-1]);
    }
  }
  for(i=0;i<len;i++){
    if(nums[i] > 0) return i + 1;
  }
  return len + 1;
};