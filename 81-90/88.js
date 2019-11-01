/**
 * 88. 合并有序数组
 *      nums1 足够长,合并结果保存在nums1上
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 83.62% 77.59%
 */
let merge = function (nums1, m, nums2, n) {
  let r1 = m - 1, r2 = n - 1, r3 = m + n - 1;
  while(r2 >= 0 && r1 >= 0){
    if(nums1[r1] <= nums2[r2]){
      nums1[r3] = nums2[r2];
      r2 --;
    }else{
      nums1[r3] = nums1[r1];
      r1 --;
    }
    r3 --;
  }
  while(r2 >= 0){
    nums1[r2] = nums2[r2];
    r2 --;
  }
};