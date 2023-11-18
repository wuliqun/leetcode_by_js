/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let stack = [];
  const len = nums.length;
  let i, left = 0, right = len - 1;
  // 逆序遍历 stack存储当前最小值
  for(i = len - 1;i >= 0;i--){
    if(!stack.length || stack.at(-1) >= nums[i]){
      stack.push(nums[i]);
    }
  }
  while(left < len && nums[left] === stack.at(-1)){
    left ++;
    stack.pop();
  }
  if(left === len) return 0;
  stack = [];

  // 顺序遍历 stack存储当前最大值
  for(i = 0;i < len;i++){
    if(!stack.length || stack.at(-1) <= nums[i]){
      stack.push(nums[i]);
    }
  }

  while(nums[right] === stack.at(-1)){
    left ++;
    right --;
    stack.pop();
  }

  return len - left;
};

console.log(findUnsortedSubarray([1, 2, 3, 4]));