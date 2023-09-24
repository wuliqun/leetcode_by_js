/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let res = 0, pre = 0;
  const map = new Map();
  
  map.set(0, 1);
  for(const num of nums){
    pre += num;
    if(map.has(pre - k)){
      res += map.get(pre - k);
    }

    map.set(pre, (map.get(pre) || 0 ) + 1);
  }

  return res;
};


console.log(subarraySum([1, 1, 1], 2));