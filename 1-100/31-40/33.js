/**
 * 33. 搜索旋转排序数组
 *      要求O(log(n))时间
 *   
 *  思路:
 *      先一遍二分找,找出旋转点
 *      再根据旋转点,选择左或者右部分进行二分查找
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 99.32% 21.52%
 */
let search = function(nums, target) {
  let len = nums.length,left = 0,right = len - 1,mid;
  while(left <= right){
    mid = (left + right) >> 1;
    if(nums[mid] > nums[mid + 1]){
      break;
    }else if(nums[mid] > nums[len - 1]){
      left = mid + 1;
    }else{
      right = mid - 1;
    }
  }
  if(mid === 0 && nums[0] < nums[1]){
    left = 0;
    right = len - 1;
  }else if(target >= nums[0]){
    left = 0;
    right = mid;
  }else{
    left = mid + 1;
    right = len - 1;
  }
  return binarySearch(target,nums,left,right);
};
function binarySearch(target,nums,start,end){
  if(target < nums[start] || target > nums[end]) return -1;
  let mid,diff;
  while(start <= end){
    mid = start + end >> 1;
    diff = nums[mid] - target;
    if(diff === 0){
      return mid;
    }else if(diff > 0){
      end = mid - 1;
    }else{
      start = mid + 1;
    }
  }
  return -1;
}