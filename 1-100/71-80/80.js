/**
 * 80. 删除排序数组中的重复项II
 *    使得每个元素最多出现两次,
 *    原地删除,返回新数组长度
 */

/**
 * 双指针
 * @param {number[]} nums
 * @return {number}
 * 79.16% 82.86%
 */
let removeDuplicates = function(nums) {
  let len = nums.length,count = 1,i,cur,curCount;
  if(!len) return 0;
  cur = nums[0];
  curCount = 1;
  for(i = 1;i<len;i++){
    if(cur === nums[i]){
      curCount ++;
      if(curCount <= 2){
        nums[count] = cur;
        count ++;
      }
    }else{
      cur = nums[i];
      curCount = 1;
      nums[count] = cur;
      count ++;
    }
  }
  return count;
};

console.log(removeDuplicates([]));
console.log(removeDuplicates([1,1,1,1,1]));
console.log(removeDuplicates([1,1,1,1,2,2,2,3,4,4,4,5,5,5,5,5,5]));
console.log(removeDuplicates([0,1,2,2,2,3,4,5,5,5]));
console.log(removeDuplicates([0,1,2,3]));