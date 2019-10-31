/**
 * 65. 有效数字 
 *    验证字符串是否可以被解析为十进制有效数字
 *      数字 0-9
 *      指数 - "e"
 *      正/负号 - "+"/"-"
 *      小数点 - "."
 */

/**
 * @param {string} s
 * @return {boolean}
 * 97.62% 80.56%
 */
let isNumber = function(s) {
  if(!/\d/.test(s)) return false;
  s = s.trim();
  let reg = /^(\+|-)?(\d+\.?|\d*\.\d+)(e(\+|-)?\d+)?$/;
  return reg.test(s);
};
