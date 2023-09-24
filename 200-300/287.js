/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const len = nums.length;
  let res, num;
  for(let i = 0;i < len;i++){
    num = Math.abs(nums[i]);
    if(nums[num - 1] < 0){
      res = num;
      while(i > 0){
        i--;
        num = Math.abs(nums[i]);
        nums[num - 1] = -nums[num - 1];
      }
      break;
    }else{
      nums[num - 1] = -nums[num - 1];
    }
  }
  return res;
};


var findDuplicate = function(nums) {
  let slow = 0, fast = 0;
  do{
    slow = nums[slow];
    fast = nums[nums[fast]];
  }while(slow !== fast);

  fast = 0;
  while(slow !== fast){
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));