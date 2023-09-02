/**
 * 64. 最小路径和
 *    找出一条从左上角到右下角的最短路径
 */

/**
 * 动态规划,找出每一步的最短路径
 * @param {number[][]} grid
 * @return {number}
 * 99.82% 89.39% 
 */
let minPathSum = function (grid) {
  let m = grid.length;
  if (!m) return 0;
  let n = grid[0].length;
  if (!n) return 0;
  let i, j;
  for (i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  for (j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
  }
  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[m - 1][n - 1];
};
