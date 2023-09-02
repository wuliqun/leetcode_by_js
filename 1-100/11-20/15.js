/**
 * 15. 三数之和
 */

/**
 * @param {*} nums
 * 
 * 99.51% 89.12% 
 */
let threeSum = function(nums){
  let res = [],len = nums.length,l,r,i = 0,tmp;
  nums.sort((a,b)=>a - b);
  // 整个数组同号,无结果
  if(nums[0] > 0 || nums[len - 1] < 0) return res;
  while(i < len - 2){
    if(nums[i] > 0) break; // 最左侧已经大于0了,后面无结果
    l = i + 1;
    r = len - 1;
    while(l < r){
      tmp = nums[i] + nums[l] + nums[r];
      if(tmp === 0){
        res.push([nums[i], nums[l], nums[r]]);
        // 跳过重复
        while(nums[l] === nums[++l]){}
        while(nums[r] === nums[--r]){}
      }else if(tmp > 0){
        r --;
      }else{
        l ++;
      }
    }
    // 跳过重复
    while(nums[i] === nums[++i]){}
  }
  return res;
}