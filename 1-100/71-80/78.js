/**
 * 78. 子集
 *    给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *    说明：解集不能包含重复的子集。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 回溯
 * 97.92% 11.35%
 */
let subsets = function(nums) {
  let res = [];
  backtrack(res,[],nums,0);
  return res;
};
function backtrack(res,tmp,nums,index){
  if(index === nums.length){
    res.push([...tmp]);
  }else{
    tmp.push(nums[index]);
    backtrack(res,tmp,nums,index + 1);
    tmp.pop();
    backtrack(res,tmp,nums,index + 1);
  }
}
console.log(subsets([]))
console.log(subsets([1,2,3]))
console.log(subsets([1,2,3,4]))