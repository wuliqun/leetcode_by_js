/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const count = {};
  for(const num of nums){
    count[num] = (count[num] || 0) + 1;
  }
  let res = [];
  for(const key in count){
    res.push([count[key], Number(key)]);
  }
  return res.sort((a, b)=>b[0] - a[0]).slice(0, k).map(a=>a[1]);
};