/* 01. 两数之和 */

/**
 * solution 1 : 暴力法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  let len = nums.length,i,j;
  for(i=0;i<len-1;i++){
    for(j = i+1;j<len;j++){
      if(nums[i] + nums[j] === target){
        return [i,j];
      }
    }
  }
  return [-1,-1]
};
/**
 * solution 2 : 
 * hash表,空间换时间 
 * 98.21% 83.88%
 */
twoSum = function(nums, target) {
  let map = {},len = nums.length,i,index;
  for(i=0;i<len;i++){
    index = map[target - nums[i]];
    if(index !== undefined){
      return [index,i];
    }
    map[nums[i]] = i;
  }
  return [-1,-1];
};
