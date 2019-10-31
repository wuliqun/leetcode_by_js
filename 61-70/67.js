/**
 * 67. 二进制求和
 *    对两个字符串表示的二进制求和
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 96.90% 81.01%
 */
let addBinary = function (a, b) {
  let len = Math.max(a.length, b.length),
    i,
    res = '',
    flag = 0,
    cur;
  // 填充为同样长度
  a = a.padStart(len, '0');
  b = b.padStart(len, '0');
  // 从后向前遍历,每一位相加,flag记录进位
  for (i = len - 1; i >= 0; i--){
    cur = Number(a[i]) + Number(b[i]) + flag;
    flag = cur >= 2 ? 1 : 0;
    res = String(cur % 2) + res;
  }
  // 还有进位,填充1到首位
  if(flag) res = '1' + res;
  return res;
};