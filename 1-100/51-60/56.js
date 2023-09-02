/**
 * 56. 合并重叠区间
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 82.32% 72.17%
 */
let merge = function(intervals) {
  intervals.sort((a,b)=>a[0]-b[0]);
  let i = 1;
  while(true){
    if(!intervals[i]) break;
    if(intervals[i-1][1] >= intervals[i][0]){
      intervals[i-1][1] = Math.max(intervals[i-1][1],intervals[i][1]);
      intervals.splice(i,1);
    }else{
      i ++;
    }
  }
  return intervals;
};