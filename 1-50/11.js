/**
 * 11. 盛最多水的容器
 */

/**
 * @param {number[]} height
 * @return {number}
 * 
 * 99.74% 69.61%
 */
let maxArea = function(height) {
  let start = 0,end = height.length - 1;
  let ma = 0;
  while(end > start){
    ma = Math.max(ma,Math.min(height[start],height[end])*(end-start));
    if(height[end] > height[start]){
      start ++;
    }else{
      end --;
    }
  }
  return ma;
};