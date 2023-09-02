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
 * 使用二分法,达到题目所要求的时间复杂度 O(log(m+n))
 * @param {*} nums1 
 * @param {*} nums2 
 * 假设两个数组分别在 i,j 处分成两半
 * 则有 i+j = n-i + m - j  => j = (m+n)/2 - i
 * 所以,只要二分查找i,是的maxLeft <= minRight 即可
 * 
 * 95.54% 96.59%
 */
findMedianSortedArrays = function(nums1, nums2) {
  let n = nums1.length,m = nums2.length;
  if(n > m){
    return findMedianSortedArrays(nums2,nums1);
  }
  let LMax1, LMax2, RMin1, RMin2, c1, c2, lo = 0, hi = 2 * n;
  while(lo <= hi){
    c1 = lo + hi >> 1;
    c2 = m + n - c1;
    LMax1 = c1 === 0 ? -Infinity : nums1[c1 - 1 >> 1];
    RMin1 = c1 === 2*n ? Infinity : nums1[c1 >> 1];
    LMax2 = (c2 == 0) ? -Infinity : nums2[c2 - 1 >> 1];
    RMin2 = (c2 == 2 * m) ? Infinity : nums2[c2 >> 1];
    if(LMax1 > RMin2){
      hi = c1 - 1;
    }else if(LMax2 > RMin1){
      lo = c1 + 1;
    }else{
      break;
    }
  }
  return (Math.max(LMax1,LMax2) + Math.min(RMin1,RMin2)) / 2;
}