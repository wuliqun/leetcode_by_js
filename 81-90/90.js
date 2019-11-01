/**
 * 90. 子集
 *    生成数组的所有子集,不能有重复,数组有重复元素
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 85.96% 34.78%
 */
let subsetsWithDup = function(nums) {
  let res = [];
  nums.sort((a,b)=>a-b);
  backtrack(res,[],0,nums);
  return res;
};

function backtrack(res,tmp,i,nums){
  if(i === nums.length){
    res.push([...tmp]);
  }else{
    tmp.push(nums[i]);
    backtrack(res,tmp,i+1,nums);
    tmp.pop();
    while(i < nums.length && nums[i] === nums[++i]){}
    backtrack(res,tmp,i,nums);
  }
}

console.log(subsetsWithDup([1,1,1,1]))