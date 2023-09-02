/**
 * 84. 柱状图中的最大矩形面积
 * 
 *    给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 *    求在该柱状图中，能够勾勒出来的矩形的最大面积。
 */

/**
 * @param {number[]} heights
 * @return {number}
 *  递归解决,先求整个数组的最大矩形,
 *  如果存在更大的矩形,一定在数组最小值的左边或右边(不包括最小值)
 *  递归的求左边 右边的最大矩形 与整个数组矩形相比较
 * 51.06% 5.55%
 */
let largestRectangleArea = function(heights) {
  return largestArea(heights,0,heights.length - 1);
};

function largestArea(nums,start,end){
  if(end < start) return 0;
  if(end === start) return nums[start];
  let min = nums[start],minIndex = start,i;
  for(i = start + 1;i<= end;i++){
    if(nums[i] < min){
      min = nums[i];
      minIndex = i;
    }
  }
  return Math.max((end-start+1)*min,largestArea(nums,start,minIndex-1),largestArea(nums,minIndex + 1,end));
}
/**
 *  非递归,用栈维护需要计算的范围
 */
largestRectangleArea = function(heights) {
  let stack = [[0,heights.length - 1]];
  let maxArea = 0;
  let start,end,min,minIndex,i;
  while(stack.length){
    [start,end] = stack.pop();
    if(end < start) continue;
    if(end === start) {
      maxArea = Math.max(maxArea,heights[start]);
      continue;
    }
    min = heights[start];
    minIndex = start;
    for(i = start + 1;i<=end;i++){
      if(heights[i] < min){
        min = heights[i];
        minIndex = i;
      }
    }
    maxArea = Math.max(maxArea,min * (end-start+1));
    stack.push([start,minIndex-1]);
    stack.push([minIndex+1,end]);
  }
  return maxArea;
};

/**
 * 栈解决方法
 * 不断计算以某个元素为最低高度的最大面积
 * 100% 30.56%
 */
largestRectangleArea = function(heights) {
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

console.log(largestRectangleArea([2,1,5,6,2,3]));

