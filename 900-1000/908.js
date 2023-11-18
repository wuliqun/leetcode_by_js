/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
  let min = nums[0];
  let max = nums[0];
  nums.forEach(num=>{
    if(num < min){
      min = num;
    }
    if(num > max){
      max = num;
    }
  });
  return Math.max(0, max - min - k * 2);
};

console.log(smallestRangeI([1, 3, 6], 3));