/**
 * 137. 只出现一次的数字 II
 *      一个数字只出现1次, 其他都出现了3次
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 82.63% 72.50%
 */
let singleNumber = function(nums) {
  let len = nums.length,i,j,k,bit = new Array(32).fill(0);
  for(i = 0;i<len;i++){
    for(j = 0;j<32;j++){
      k = nums[i] >> j;
      bit[j] += k & 1;
    }
  }
  let res = 0;
  for(j = 31;j>=0;j--){
    res <<= 1;
    res += bit[j]%3;
  }
  return res;
};



console.log(singleNumber([-2,-2,1,1,-3,1,-3,-3,-4,-2]));