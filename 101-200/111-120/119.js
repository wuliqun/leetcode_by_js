/**
 * 119. 杨辉三角II
 *    返回杨辉三角的第K 行
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 * 94.74% 65.36%
 */
let getRow = function (rowIndex) {
  let res = new Array(rowIndex+1).fill(0);
  let i;
  for (i = rowIndex; i >= 0; i--) {
    res[i] = 1;
    for (j = i + 1; j < rowIndex; j++) {
      res[j] += res[j + 1];
    }
  }
  return res;
};
console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));
console.log(getRow(6));
console.log(getRow(7));
console.log(getRow(8));
console.log(getRow(9));