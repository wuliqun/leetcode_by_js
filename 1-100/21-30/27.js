/**
 * 27. 移除元素
 *    给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 93.73% 11.80%
 */
let removeElement = function(nums, val) {
  let len = nums.length,i = 0;
  while(i < len){
    while(nums[len - 1] === val){
      len --;
    }
    if(len === i) break;
    if(nums[i] === val){
      nums[i] = nums[len - 1];
      len --
    }
    i ++;
  }
  return len;
};
