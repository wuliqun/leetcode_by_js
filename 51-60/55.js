/**
 * 55. 跳跃游戏
 *    非负数组,能否跳跃
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 * 94.12% 66.67%
 */
let canJump = function (nums) {
  let len = nums.length,
    i, j;
  // 从倒数第二位开始,寻找为0的位置,看能否跳过
  for (i = len - 2; i >= 0; i--) {
    // 找到0,向前搜索,看能否把0 跳过
    if (nums[i] === 0) {
      flag = false;
      for (j = i - 1; j >= 0; j--) {
        if(nums[j] > i - j){
          flag = true;
          i = j;
          break;
        }
      }
      if(!flag){
        return false;
      }
    }
  }
  return true;
};

console.log(canJump([0]));// true
console.log(canJump([2,3,1,1,0]));//true
console.log(canJump( [3,2,1,0,4]));//false
