/**
 * 48. 旋转图像
 *    矩阵顺时针旋转90度
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 74.96% 58.16%
 */
let rotate = function (matrix) {
  let n = matrix.length;
  // 要旋转多少层
  let level = n >> 1,
    i = 0,
    j, count, tmp;
  while (i < level) {
    // 当前层有多少个数字/4
    count = n - 2 * i - 1;
    for (j = 0; j < count; j++) {
      // 上
      tmp = matrix[i][j + i];
      // 左到上
      matrix[i][j + i] = matrix[n - j - i - 1][i];
      // 下到左
      matrix[n - j - i - 1][i] = matrix[n - i - 1][n - i - j - 1];
      // 右到下
      matrix[n - i - 1][n - i - j - 1] = matrix[i + j][n - i - 1];
      // 上到右
      matrix[i + j][n - i - 1] = tmp;
    }
    i++;
  }
};
let arr = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9],
];
rotate(arr);
console.log(arr);