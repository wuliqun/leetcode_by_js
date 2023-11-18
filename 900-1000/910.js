/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) {
  const len = nums.length;
  nums.sort((a, b)=>a - b);
  // 全增大 或 全减小
  let res = nums[len - 1] - nums[0];
  if(res > k){
    // <=i +k   
    // >i -k
    for(let i = 0;i < len - 1;i++){
      let min = Math.min(nums[0] + k, nums[i + 1] - k);
      let max = Math.max(nums[i] + k, nums[len - 1] - k);
      res = Math.min(res, max - min);
    }
  }  
  return res;
};

console.log(smallestRangeII([4, 8, 2, 7, 2], 5));
