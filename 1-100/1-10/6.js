/* 06. Z字形变换 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 98.41% 75.46%
 */
let convert = function (s, numRows) {
  if (numRows <= 1) return s;
  let loop = numRows * 2 - 2; // 多少个一循环
  let res = '',
    len = s.length,
    i, j;
  for (i = 0; i < numRows; i++) {
    for (j = 0; i + j < len; j += loop) {
      res += s[i + j];
      if (i !== 0 && i !== numRows - 1 && j + loop - i < len) {
        res += s[j + loop - i];
      }
    }
  }
  return res;
};

