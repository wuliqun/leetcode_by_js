/**
 * 153. 寻找旋转排序数组的最小值
 *    无重复
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 98.50% 19.44%
 */
let findMin = function(nums) {
  let l = 0,r = nums.length - 1,mid;
  // if(nums[l] < nums[r]) return nums[l];
  while(l < r){
    mid = l + r >> 1;
    if(nums[mid] >= nums[l] && nums[mid] > nums[r]){
      l = mid + 1;
    }else{
      if(nums[mid] < nums[mid-1]) return nums[mid];
      r = mid - 1;
    }
  }
  return nums[l];
};
console.log(findMin([0,2]))
console.log(findMin([2,0]))
console.log(findMin([0]))
