/**
 * 85. 最大矩形
 *    给定一个只包含 0  1 的二维矩阵
 *    找出其中只包含1的最大矩形,返回其面积
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 * 使用上一题求最大矩形的函数,
 * 将矩阵前1行,前2行...分别看成柱状图
 * 76.99% 95.00%
 */
let maximalRectangle = function(matrix) {
  let maxArea = 0;
  let m = matrix.length;
  let n = matrix[0] && matrix[0].length;
  if(!m || !n) return maxArea;
  let i,j,heights = [],k,tmp;
  for(i = m - 1;i >= 0;i--){
    // 上面的i行看成柱状图
    for(j = 0;j<n;j++){
      k = i;
      tmp = 0;
      while(k >= 0){
        if(matrix[k][j] === '0') break;
        tmp ++;
        k --;
      }
      heights[j] = tmp;
    }
    maxArea = Math.max(maxArea,largestRectangleArea(heights));
    // 不可能再比当前大
    if(maxArea >= n*i) break;
  }
  return maxArea;
};

function largestRectangleArea(heights) {
  let stack = [-1];
  let res = 0,len = heights.length,i;
  for(i=0;i<len;i++){
    while(stack.length > 1 && heights[stack[stack.length-1]] >= heights[i]){
      res = Math.max(res,heights[stack.pop()]*(i - stack[stack.length - 1] - 1));
    }
    stack.push(i);
  }
  while(stack.length > 1){
    res = Math.max(res,heights[stack.pop()]*(len - stack[stack.length - 1] - 1));
  }
  return res;
}

console.log(maximalRectangle(
  [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","1","1","1"],
    ["1","0","0","1","0"]
  ]
))