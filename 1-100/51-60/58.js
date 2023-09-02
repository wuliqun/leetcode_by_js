/**
 * 58. 最后一个单词的长度
 */

/**
 * @param {string} s
 * @return {number}
 * 60.35% 29.72%
 */
let lengthOfLastWord = function(s) {
  return s.trim().match(/\S+$/)[0].length;
};