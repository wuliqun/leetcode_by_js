/**
 * 54. 螺旋矩阵
 *    将矩阵螺旋扁平化
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 96.73% 73.50%
 */
let spiralOrder = function (matrix) {
  let m = matrix.length,
    res = [];
  let n = matrix[0] && matrix[0].length;
  let i = 0,
    j = 0,
    count = 0,
    len = m * n,
    direction = 0;
  if (!len) return res;
  if(m === 1) return matrix[0];
  if(n === 1) return matrix.map(item=>item[0]);
  while (count < len) {
    res[count++] = matrix[i][j];
    switch (direction) {
      // 右
      case 0:
        j ++;
        if(j === n - i - 1){
          direction ++;
        }
        break;
      // 下
      case 1:
        i ++;
        if(i === m - n + j){
          direction ++;
        }
        break;
      // 左
      case 2:
        j --;
        if(j === m - i - 1){
          direction ++;
        }
        break;
      // 上
      case 3:
        i --;
        if(i === j + 1){
          direction = 0;
        }
        break;
    }
  }
  return res;
};

console.log(spiralOrder(
  [
    [1,2],
    [3,4]
  ]
))