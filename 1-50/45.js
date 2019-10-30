/**
 * 45. 跳跃游戏II
 *      给定一个非负整数数组，你最初位于数组的第一个位置。
 *      数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *      你的目标是使用最少的跳跃次数到达数组的最后一个位置。     
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 84.79% 57.45%
 */
let jump = function(nums) {
  let len = nums.length;
  if(len === 1) return 0;
  // 每一步贪心
  let i,j,res = 0;
  let max,maxIndex;
  for(i=0;i<len;){
    if(len - i - nums[i] - 1 <= 0) {
      // 最后一次
      res ++;
      break;
    }else{
      maxIndex = 1;
      max = nums[i+1] + 1;
      for(j = 2;j <= nums[i];j++){
        if(nums[i+j] + j > max){
          max = nums[i+j] + j;
          maxIndex = j;
        }
      }
      i += maxIndex;
      res ++;
    }
  }
  return res;
};