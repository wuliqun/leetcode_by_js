/* 03. 无重复最长子串 */

/**
 * @param {string} s
 * @return {number}
 * 99.65% 97.97%
 */
let lengthOfLongestSubstring = function(s) {
  if(!s) return 0;
  let len = s.length,max = 1,start=0,i,index;
  for(i=1;i<len;i++){
    index = s.indexOf(s[i],start);
    // 出现重复,start右移至消除重复,并记录当前最长
    if(index !== i){
      max = Math.max(max,i-start);
      start = index + 1;
    }
  }
  max = Math.max(max,i - start);
  return max;
};