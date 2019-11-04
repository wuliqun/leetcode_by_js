/**
 * 120. 三角形最小路径和
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 * 99.38% 74.07%
 */
let minimumTotal = function (triangle) {
  let len = triangle.length, i, j;
  let minPath = triangle[len - 1].slice();
  for (i = len - 2; i >= 0; i--) {
    for (j = 0; j <= i; j++) {
      minPath[j] = triangle[i][j] + Math.min(minPath[j],minPath[j+1]);
    }
  }
  return minPath[0];
};

console.log(minimumTotal([
  [2],
 [3,4],
[6,5,7],
[4,1,8,3]
]))