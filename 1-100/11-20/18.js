/**
 * 18. 四数之和
 */

/**
 * 类似三数之和的解法
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 93.03% 69.77%
 */
let fourSum = function(nums, target) {
  nums.sort((a,b)=>a-b);
  let len = nums.length,res = [],i = 0,j,l,r,tmp;
  if((nums[0] >=0 && target < 0) || (nums[len - 1] <= 0 && target > 0)){
    return res;
  }
  while(i < len - 3){
    j = i + 1;
    while(j < len - 2){
      if(nums[i] + nums[j] > 0 && target <= 0) break;
      l = j + 1;
      r = len - 1;
      while(l < r){
        tmp = nums[i] + nums[j] + nums[l] + nums[r] - target;
        if(tmp === 0){
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while(nums[l] === nums[++l]){}
          while(nums[r] === nums[--r]){}
        }else if(tmp < 0){
          l ++;
        }else{
          r --;
        }
      }
      while(nums[j] === nums[++j]){}
    }
    while(nums[i] === nums[++i]){}
  }
  return res;
};