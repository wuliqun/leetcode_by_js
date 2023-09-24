/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
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