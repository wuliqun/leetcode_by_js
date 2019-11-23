/**
 * 152. 乘积最大的子序列
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 以0分割,不含0的看有多少个负数,再做打算
 * 73.75% 61.29%
 */
let maxProduct = function(nums) {
  let len = nums.length;
  if(len === 0) return 0;
  if(len === 1) return nums[0];
  let index = nums.indexOf(0);
  if(index !== -1){
    return Math.max(0,maxProduct(nums.slice(0,index)),maxProduct(nums.slice(index+1)));
  }else{
    let negCount = 0,startIndex = null,endIndex = null,i;
    for(i = 0;i<len;i++){
      if(nums[i] < 0){
        negCount ++;
        if(startIndex === null) startIndex = i;
        endIndex = i;
      }
    }
    if(negCount % 2 === 0){
      return arrProduct(nums);
    }else{
      let head = -arrProduct(nums.slice(0,startIndex + 1));
      let tail = -arrProduct(nums.slice(endIndex));
      if(head > tail){
        return arrProduct(nums.slice(0,endIndex));
      }else{
        return arrProduct(nums.slice(startIndex + 1));
      }
    }
  }
};
function arrProduct(nums){
  let len = nums.length,i,res = 1;
  for(i = 0;i<len;i++){
    res *= nums[i];
  }
  return res;
}

/**
 * 动态规划
 * 86.38% 67.74%
 */
maxProduct = function(nums) {
  let len = nums.length,i,res = -Infinity,max = 1,min = 1;
  for(i = 0;i<len;i++){
    if(nums[i] < 0){
      let tmp = min;
      min = max;
      max = tmp;
    }
    max = Math.max(max * nums[i],nums[i]);
    min = Math.min(min * nums[i],nums[i]);
    if(max > res) res = max;
  }
  return res;
}

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,-1,4]));