/**
 * 5256. 重构 2 行二进制矩阵
 *    给你一个 2 行 n 列的二进制数组：
 *    矩阵是一个二进制矩阵，这意味着矩阵中的每个元素不是 0 就是 1。
 *    第 0 行的元素之和为 upper。
 *    第 1 行的元素之和为 lower。
 *    第 i 列（从 0 开始编号）的元素之和为 colsum[i]，colsum 是一个长度为 n 的整数数组。
 *    你需要利用 upper，lower 和 colsum 来重构这个矩阵，并以二维整数数组的形式返回它。
 *    如果有多个不同的答案，那么任意一个都可以通过本题。
 *    如果不存在符合要求的答案，就请返回一个空的二维数组。
 */

/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
let reconstructMatrix = function (upper, lower, colsum) {
  let len = colsum.length;
  let res = [new Array(len).fill(0), new Array(len).fill(0)];
  let i;
  for (i = 0; i < len; i++) {
    if (colsum[i] === 2) {
      res[0][i] = 1;
      res[1][i] = 1;
      upper--;
      lower--;
    } else if (colsum[i] === 1) {
      if (upper >= lower) {
        res[0][i] = 1;
        upper--;
      } else {
        res[1][i] = 1;
        lower--;
      }
    }
    // 不能构造
    if (upper !== 0 || lower !== 0) {
      return [];
    }
    return res;
  };
  console.log(reconstructMatrix(5, 6, [2, 1, 2, 0, 1, 0, 1, 2, 0, 1]))