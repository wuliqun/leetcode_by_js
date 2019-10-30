/* 08. 字符串转换整数 (atoi) */

/**
 * @param {string} str
 * @return {number}
 * 99.02% 51.59%
 */
let myAtoi = function(s) {
  s = s.replace(/^\s+/,'');
  let m = s.match(/^[+-]?\d+/);
  let res = 0;
  if(m){
    res = Number(m[0]);
    res = res > 2147483647 ? 2147483647 : res < -2147483648 ? -2147483648 : res;
  }
  return res;
};