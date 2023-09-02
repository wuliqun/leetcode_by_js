/**
 * 151. 翻转字符串里的单词
 */

/**
 * @param {string} s
 * @return {string}
 * 95.03% 47.69%
 */
let reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
};