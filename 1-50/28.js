/**
 * 28. 实现strStr()
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 99.96% 47.83%
 */
let strStr = function(haystack, needle) {
  if(!needle) return 0;
  let len = haystack.length,len2 = needle.length,i=0;
  while(i <= len - len2){
    if(haystack[i] === needle[0] && needle === haystack.substr(i,len2)){
      return i;
    }
    i ++;
  }
  return -1;
};