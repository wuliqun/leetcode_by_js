/**
 * 16. 最接近的三数之和
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 89.93% 28.51%
 */
let threeSumClosest = function(nums, target) {
  nums.sort((a,b)=>a-b);
  let len = nums.length,i = 0,l,r,res,diff = Infinity,tmp,tmpDiff;
  // 数组与target 异号
  if(nums[0] >= 0 && target <= 0){
    return nums[0] + nums[1] + nums[2];
  }
  if(nums[len - 1] <= 0 && target >= 0){
    return nums[len-1] + nums[len-2] + nums[len-3];
  }

  while(i < len - 2){
    // 后续只会差距更大
    if(nums[i] > 0 && target <= 0) break;
    l = i+1;
    r = len - 1;    
    while(l < r){
      tmp = nums[i] + nums[l] + nums[r];
      tmpDiff = tmp - target;
      if(tmpDiff > 0){
        while(nums[r] === nums[--r]){}
      }else if(tmpDiff < 0){
        while(nums[l] === nums[++l]){}
      }else{
        return target;
      }
      tmpDiff = Math.abs(tmpDiff);
      if(tmpDiff < diff){
        res = tmp;
        diff = tmpDiff;
      }      
    }
    while(nums[i] === nums[++i]){}
  }
  return res;
};