/**
 * 31. 下一个排列
 *  
 * 思路:
 *    从右往左遍历,找到第一个比后一个小的数,得到位置j
 *    再往右,找到最小但大于nums[j]的数,得到位置[i]
 *    交换i,j
 *    翻转j 之后的数字,使其最小
 * 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 90.76% 14.29%
 */
let nextPermutation = function(nums) {
  let len = nums.length,i = len - 1,j;
  if(len){
    while(i >= 0){
      if(nums[i-1] < nums[i]){
        j = i - 1;
        break;
      }
      i --;
    }
    if(i < 0){
      reverse(nums,0,len-1);
    }else{
      i = j + 1;
      while(i < len){
        if(i === len -1 || (nums[i] > nums[j] && nums[i + 1] <= nums[j])){
          break;
        }
        i ++;
      }
      swap(nums,i,j);
      reverse(nums,j + 1,len - 1);
    }    
  }
};
// 翻转i - j
function reverse(nums,i,j){
  while(i < j){
    swap(nums,i,j);
    i ++;
    j --;
  }
}
function swap(nums,i,j){
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

console.log(nextPermutation([1,2,3,4,5,6,6,5,4,3,2,1]));