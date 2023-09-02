/**
 * 26. 删除有序数组中的重复项 
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 不使用splice,使用双指针
 * 94.57% 72.98%
 */
let removeDuplicates = function(nums) {
  let len = nums.length,i = 1,j = 1;
  if(len < 2) return len;
  while(j < len){
    while(nums[j] === nums[j - 1]){
      j ++;
    }
    if(j === len) break;
    nums[i] = nums[j];
    i++;
    j++;
  }
  return i;
};