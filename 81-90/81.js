/**
 * 81. 搜索旋转排序数组II
 *    排序数组在某个点做了旋转,要从其中查找是否存在某个数
 *    数组中含有重复元素
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 * 先二分找旋转点,
 * 再二分查找
 * 83.74% 55.56%
 */
let search = function(nums, target) {
  let len = nums.length,l = 0,h = len-1,mid;
  if(nums[h] > nums[l]){
    mid = 0;
  }else{
    while(l <= h){
      mid = l + h >> 1;
      // 等于左边或右边  注意不能越过了分隔界
      while(nums[l] === nums[mid] && nums[l+1] >= nums[l]){
        l ++;
      }
      while(nums[h] === nums[mid] && nums[h-1] <= nums[h]){
        h --;
      }
      if(nums[mid] > nums[l] || l === mid){
        // 比左边大,那么mid在旋转点的左边
        if(nums[mid] > nums[mid + 1]){
          mid ++;
          break;
        }else{
          l = mid + 1;
        }
      }else if(nums[mid] < nums[h] || h === mid){
        // 比右边小 mid 在旋转点的右边
        if(nums[mid] < nums[mid-1]){
          break;
        }else{
          h = mid - 1;
        }
      }
    }
  }
  if(target >= nums[0] && target <= nums[mid-1]){
    l = 0;
    h = mid - 1;    
  }else{
    l = mid;
    h = len-1;
  }
  return binarySearch(nums,l,h,target);
};
function binarySearch(nums,l,h,target){
  if(target < nums[l] || target > nums[h]) return false;
  let mid;
  while(l <= h){
    mid = l + h >> 1;
    if(nums[mid] > target){
      h = mid - 1;
    }else if(nums[mid] < target){
      l = mid + 1;
    }else{
      return true;
    }
  }
  return false;
}

console.log(search([1,1,3,1],3))