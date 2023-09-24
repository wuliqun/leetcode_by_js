/**
 * 85. 最大矩形
 *    给定一个只包含 0  1 的二维矩阵
 *    找出其中只包含1的最大矩形,返回其面积
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const m = matrix.length;
  if(!m) return 0;
  const heights = matrix[0].map(Number);
  let res = largestRectangleArea(heights);
  const n = matrix[0].length;
  for(let i = 1;i < m;i++){
    for(let j = 0;j < n;j++){
      if(matrix[i][j] === '1'){
        heights[j] += 1;
      }else{
        heights[j] = 0;
      }
    }
    res = Math.max(res, largestRectangleArea(heights));
  }

  return res;
};

/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  const stack = [-1],
    len = heights.length;
  let res = 0,
    index;
  for(let i = 0;i < len;i++){
    while(stack.length > 1 && heights[i] < heights[stack.at(-1)]){
      index = stack.pop();
      res = Math.max(res, (i - stack.at(-1) - 1) * heights[index]);
    }
    stack.push(i);
  }

  while(stack.length > 1){
    index = stack.pop();
    res = Math.max(res, (len - stack.at(-1) - 1) * heights[index]);
  }

  return res;
};

console.log(maximalRectangle(
  [["0", "1"], ["1", "0"]]
));