/**
 * 14. 最长公共前缀
 */

/**
 * @param {string[]} strs
 * @return {string}
 * 98.66% 29.14%
 */
let longestCommonPrefix = function(strs) {
  let len = strs.length,i,prefixLen = 0;
  if(!len) return '';
  if(len === 1) return strs[0];
  w: while(true){
    for(i=0;i<len-1;i++){
      if(strs[i][prefixLen] !== strs[i+1][prefixLen] || !strs[i][prefixLen]) break w;
    }
    prefixLen ++;
  }
  return strs[0].slice(0,prefixLen);
};