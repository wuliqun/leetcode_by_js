/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function(nums1, nums2) {
  return singleNumTriplets(nums1, nums2) + singleNumTriplets(nums2, nums1);
};

function singleNumTriplets(targets, nums){
  const targetsMap = {};
  targets.forEach(num=>{
    const key = num * num;
    targetsMap[key] = (targetsMap[key] || 0) + 1;
  });

  const len = nums.length;
  let res = 0;

  for(let i = 0;i < len;i++){
    for(let j = i + 1;j < len;j++){
      res += (targetsMap[nums[i] * nums[j]] || 0);
    }
  }

  return res;
}