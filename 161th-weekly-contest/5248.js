/**
 * 5248. 统计「优美子数组」
 *    给你一个整数数组 nums 和一个整数 k。
 *    如果某个子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。
 *    请返回这个数组中「优美子数组」的数目。
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let numberOfSubarrays = function(nums, k) {
  let len = nums.length;
  if(!len) return k === 0 ? 1 : 0;
  let stack = [-1],i,res = 0;
  let left,right;
  for(i=0;i<len;i++){
    if(nums[i] % 2 === 1){
      if(stack.length > k){
        right = i - stack[stack.length-1];
        left = stack[stack.length - k] - stack[stack.length - k - 1];
        res += left * right;
      }
      stack.push(i);
    }
    // 最后一个
    if(i === len - 1 && stack.length > k){
      if(nums[i] % 2 === 1){
        res += stack[stack.length - k] - stack[stack.length - k - 1];
      }else{
        right = i - stack[stack.length-1] + 1;
        left = stack[stack.length - k] - stack[stack.length - k - 1];
        res += left * right;
      }
    }
  }  
  return res;
};

console.log(numberOfSubarrays([1,1,2,1,1],3)) //2
console.log(numberOfSubarrays([2,4,6],1)) //0
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2],2)) //16