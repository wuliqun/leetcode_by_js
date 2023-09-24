/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // 目标index
  const index = nums.length - k;
  let l = 0, r = nums.length - 1;
  
};


function swap(nums, i, j){
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}