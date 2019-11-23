/**
 * 154. 寻找旋转排序数组的最小值 II
 *    有重复
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 93.75% 57.14%
 */
let findMin = function(nums) {
  let l = 0,r = nums.length - 1,mid;  
  while(l < r){
    if(nums[l] < nums[r]) return nums[l];
    mid = l + r >> 1;
    if(nums[mid] >= nums[l] && nums[mid] > nums[r]){
      l = mid + 1;
    }else if((nums[mid] < nums[l] && nums[mid] <= nums[r]) || mid === l){
      if(nums[mid] < nums[mid-1]) return nums[mid];
      r = mid - 1;
    }else{
      l ++;
      r --;
    }
  }
  return nums[l];
};
