/**
 * 46. 全排列
 */

/**
 * @param {number[]} nums  无重复
 * @return {number[][]}
 * 83.94% 72.49%
 */
let permute = function (nums) {
  let res = [],len = nums.length;
  backtrace(nums,res,0,len);
  return res;
};

function backtrace(nums, res,index,len) {
  if(index === len){
    res.push([...nums]);
  }else{
    let i;
    for(i=index;i<len;i++){
      swap(nums,i,index);
      backtrace(nums,res,index+1,len);
      swap(nums,i,index);
    }
  }
}
function swap(nums,i,j){
  if(i === j) return;
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}
let arr = new Array(3).fill('').map((item,index)=>index);

console.log(permute(arr));