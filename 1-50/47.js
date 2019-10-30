/**
 * 47. 全排列
 */

/**
 * @param {number[]} nums  有重复
 * @return {number[][]}
 * 89.74% 69.49%
 */
let permuteUnique = function (nums) {
  let res = [],len = nums.length;
  nums.sort((a,b)=>a-b);
  backtrace(nums,res,0,len);
  return res;
};

function backtrace(nums, res,index,len) {
  if(index === len){
    res.push([...nums]);
  }else{
    let i;
    // 选一个数放在 index 位置
    // 用过的不选
    let used = {}
    for(i=index;i<len;i++){    
      if(!used[nums[i]]){
        swap(nums,i,index);
        backtrace(nums,res,index+1,len);
        swap(nums,i,index);
        used[nums[i]] = true;
      }      
    }
  }
}
function swap(nums,i,j){
  if(i === j) return;
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}