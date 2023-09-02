/**
 * 59. 螺旋矩阵 II
 *    给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 */

/**
 * @param {number} n
 * @return {number[][]}
 * 83.33% 47.30%
 */
let generateMatrix = function(n) {
  let matrix = new Array(n);
  let i,j,len = n*n,count = 0,direction = 0;
  for(i = 0;i<n;i++){
    matrix[i] = new Array(n);
  }
  i = 0;
  j = 0;
  while(count < len){
    matrix[i][j] = ++count;
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
        if(i ===  j){
          direction ++;
        }
        break;
      // 左
      case 2:
        j --;
        if(j === n - i - 1){
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
  return matrix;
};
console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(3));
console.log(generateMatrix(4));
console.log(generateMatrix(5));