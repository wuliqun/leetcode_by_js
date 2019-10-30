/* 04. 寻找两个有序数组的中位数 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 98.84% 96.28%
 * 
 * 2019-10-28 并没有做到题目所要求的的O(log(m+n))的时间复杂度 
 */
let findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length,len2 = nums2.length;
  let mid = len1 + len2 >> 1; // 中位数位置, 取mid mid+1两个
  let i = 0,j = 0,cur;
  let n1,n2;
  while(i<len1 || j<len2){
    if(j === len2 || nums1[i] < nums2[j]){
      cur = nums1[i];
      i ++;
    }else{
      cur = nums2[j];
      j ++;
    }
    if(i + j === mid){
      n1 = cur
    }
    if(i + j === mid + 1) {
      n2 = cur;
      break;
    }
  }
  return (len1 + len2) % 2 === 0 ? (n1 + n2)/2 : n2;
};
/** 
 * 使用二分法,达到题目所要求的时间复杂度 TODO:
 * @param {*} nums1 
 * @param {*} nums2 
 */
let findMedianSortedArrays = function(nums1, nums2) {

}