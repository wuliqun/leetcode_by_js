/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 95.32% 37.40%
 */
let searchRange = function(nums, target) {
  let res = [-1,-1],left = 0,right = nums.length - 1,mid,diff;
  if(target < nums[0] || target > nums[right]) return res;
  while(left <= right){
    mid = left + right >> 1;
    diff = nums[mid] - target;
    if(diff === 0){
      // bingo
      let tmp = mid;
      while(nums[tmp] === nums[--tmp]){}
      res[0] = tmp + 1;
      while(nums[mid] === nums[++mid]){}
      res[1] = mid - 1;
      break;
    }else if(diff > 0){
      while(nums[mid] === nums[--mid]){}
      right = mid;
    }else{
      while(nums[mid] === nums[++mid]){}
      left = mid;
    }
  }
  return res;
};