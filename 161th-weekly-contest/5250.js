/**
 * 5250. 检查好数组
 *    子数组可以拼凑出1
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 * 数组的最大公约数为1 即可满足条件 
 * 100% 100%
 */
let isGoodArray = function(nums) {
  let c = nums[0],len = nums.length,i;
  for(i=1;i<len;i++){
    c = dcd(c,nums[i]);
  }
  return c === 1;
};

function dcd(m,n){
  let tmp;
  if(m < n){
    tmp = m;
    m = n;
    n = tmp;
  }
  while(n){
    tmp = m % n;
    m = n;
    n = tmp;
  }
  return m;
}

console.log(isGoodArray([2,12,6]))