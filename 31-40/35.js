/**
 * 35. 搜索插入位置
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 91.85% 80.11%
 */
let searchInsert = function(nums, target) {
  let left = 0,right = nums.length - 1,mid;
  if(right < 0 || target < nums[0]) return 0;
  if(target > nums[right]) return right + 1;
  while(left <= right){
    mid = left + right >> 1;
    if(nums[mid] === target){
      return mid;
    }else if(nums[mid] < target){
      left = mid + 1;
      if(nums[left] > target){
        return left;
      }
    }else{
      right = mid - 1;
      if(nums[right] < target){
        return mid;
      }
    }
  }
};