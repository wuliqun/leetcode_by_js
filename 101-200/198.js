/**
 * 
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  if(len <= 1) return nums[0] || 0;
  let pre1 = nums[0], pre2 = Math.max(pre1, nums[1]), tmp;

  for(let i = 2;i < len;i++){
    tmp = Math.max(pre2, pre1 + nums[i]);
    pre1 = pre2;
    pre2 = tmp;
  }

  return pre2;
};