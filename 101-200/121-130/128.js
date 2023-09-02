/**
 * 128. 最长连续序列
 *    给定一个为排序数组,求出其最长连续序列长度
 *     [100, 4, 200, 1, 3, 2] -> [1,2,3,4]  -> 4 
 *    要求时间复杂度为 O(n) 
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 空间换时间, 极端情况 数组超出长度
 */
let longestConsecutive = function(nums) {
  let len = nums.length,i,min,max;
  if(len <= 1) return len;
  min = max = nums[0];
  for(i=1;i<len;i++){
    if(nums[i] > max) max = nums[i];
    if(nums[i] < min) min = nums[i];
  }
  let len2 = max - min + 1;
  let arr = new Array(len2).fill(0);
  for(i= 0;i<len;i++){
    arr[nums[i] - min] = 1;
  }
  let count = 0,maxSeq = 0;
  for(i = 0;i<len2;i++){
    if(arr[i] === 1){
      count ++;
    }else{
      if(count > maxSeq){
        maxSeq = count;
      }
      count = 0;
    }
  }
  return maxSeq;
};

/**
 * 排序
 * nlog(n)
 * 48.98% 73.44%
 */
longestConsecutive = function(nums) {
  nums.sort((a,b)=>a-b);
  let len = nums.length,i,count = 1,max = 1;
  if(len <= 1) return len;
  for(i = 0;i<len;i++){
    if(nums[i] - nums[i-1] > 1){      
      count = 1;
    }else if(nums[i] - nums[i-1] === 1){
      count ++;
      if(count > max) max = count;
    }
  }
  return max;
};

/**
 * 利用hash读取
 * 94.39% 84.38%
 */
longestConsecutive = function(nums) {
  let len = nums.length,i,map = {},count,num,max = 0;
  if(len <= 1) return len;
  for(i = 0;i<len;i++){
    map[nums[i]] = 1;
  }
  for(i in map){
    if(!map[i-1]){
      count = 1;
      num = Number(i);
      while(num+1 in map){
        count ++;
        num ++;
      }
      if(count > max) max = count;
    }
  }
  return max;
};
console.log(longestConsecutive([0,2,3,3,3,3,3,3,3,4,-5]));